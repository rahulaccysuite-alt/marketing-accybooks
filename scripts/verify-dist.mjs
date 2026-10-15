import fs from "node:fs";
import path from "node:path";

const dist = path.resolve(import.meta.dirname, "../dist");
const siteUrl = "https://accybooks.com";
const requiredRoutes = ["/", "/solutions/bookkeepers", "/solutions/accounting-firms", "/solutions/finance-teams", "/pricing", "/resources", "/features/practice-dashboard"];
const noindexAllowed = new Set(["404.html", "sign-in/index.html"]);
const errors = [];

const read = (file) => fs.readFileSync(path.join(dist, file), "utf8");
const exists = (file) => fs.existsSync(path.join(dist, file));
const routeFile = (route) => (route === "/" ? "index.html" : `${route.slice(1)}/index.html`);

function htmlFiles(dir = dist) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return htmlFiles(full);
    return entry.name.endsWith(".html") ? [path.relative(dist, full)] : [];
  });
}

for (const file of ["index.html", "404.html", "robots.txt", "sitemap.xml"]) {
  if (!exists(file)) errors.push(`Missing dist/${file}`);
}
if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

if (/^Disallow:\s*\/\s*$/m.test(read("robots.txt"))) errors.push("robots.txt blocks the whole site");
if (!read("robots.txt").includes(`Sitemap: ${siteUrl}/sitemap.xml`)) errors.push("robots.txt does not reference the sitemap");

const sitemapRoutes = [...read("sitemap.xml").matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, url]) => {
  if (!url.startsWith(`${siteUrl}/`)) errors.push(`Sitemap URL on unexpected host: ${url}`);
  return url.slice(siteUrl.length) || "/";
});
for (const route of requiredRoutes) {
  if (!sitemapRoutes.includes(route)) errors.push(`Sitemap is missing ${route}`);
}

const titles = new Map();
for (const route of sitemapRoutes) {
  const file = routeFile(route);
  if (!exists(file)) {
    errors.push(`Sitemap route ${route} has no ${file}`);
    continue;
  }
  const html = read(file);
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  if (canonical !== `${siteUrl}${route}`) errors.push(`${file}: canonical is ${canonical ?? "missing"}`);
  if (!/<meta name="description" content="[^"]+"/.test(html)) errors.push(`${file}: missing meta description`);
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  if (!title) errors.push(`${file}: missing title`);
  else if (titles.has(title)) errors.push(`${file}: duplicate title "${title}" (also ${titles.get(title)})`);
  else titles.set(title, file);
}

for (const file of htmlFiles()) {
  const html = read(file);
  if (/<meta name="robots"[^>]*noindex/.test(html) !== noindexAllowed.has(file)) {
    errors.push(`${file}: unexpected robots directive state`);
  }
  for (const [, ref] of html.matchAll(/(?:src|href)="(\/(?!\/)[^"]*)"/g)) {
    const assetPath = decodeURIComponent(ref.split(/[?#]/)[0]);
    if (assetPath === "/" || !path.extname(assetPath)) continue;
    if (!exists(assetPath.slice(1))) errors.push(`${file}: referenced asset ${assetPath} is missing`);
  }
}

if (errors.length) {
  console.error(`dist verification failed:\n- ${errors.join("\n- ")}`);
  process.exit(1);
}
console.log(`dist verification passed: ${htmlFiles().length} HTML files, ${sitemapRoutes.length} sitemap URLs.`);
