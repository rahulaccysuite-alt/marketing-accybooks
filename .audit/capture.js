async (page) => {
  const out = {};
  const dir = '/Users/accysuite/Desktop/Design AccyBooks Marketing Website/.audit/';
  const widths = (globalThis.__widths || [1440]);
  for (const w of widths) {
    await page.setViewportSize({ width: w, height: 900 });
    await page.goto('http://localhost:8443/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(500);
    const sections = ['.site-header', '.hero', '.integration-strip', '#features', '#platform', '#workflow', '#solutions', '#integrations', '#pricing', '#resources', '#demo', '.site-footer'];
    for (const [i, sel] of sections.entries()) {
      const el = page.locator(sel).first();
      await el.scrollIntoViewIfNeeded();
      await page.waitForTimeout(250);
      await el.screenshot({ path: `${dir}w${w}-${String(i).padStart(2, '0')}.jpg`, type: 'jpeg', quality: 80 });
    }
    out[w] = await page.evaluate(() => {
      const vw = document.documentElement.clientWidth;
      const scrollers = '.carousel-track, .comparison-scroll, .tabs, .chip-row';
      const over = [...document.querySelectorAll('body *')].filter((e) => {
        const r = e.getBoundingClientRect();
        return r.width > 0 && (r.right > vw + 1 || r.left < -1) && !e.closest(scrollers) && getComputedStyle(e).position !== 'fixed';
      }).slice(0, 10).map((e) => `${e.tagName}.${e.className} [${Math.round(e.getBoundingClientRect().left)}, ${Math.round(e.getBoundingClientRect().right)}]`);
      const tiny = [...document.querySelectorAll('body *')].filter((e) => [...e.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim()) && parseFloat(getComputedStyle(e).fontSize) < 11 && e.getBoundingClientRect().width > 0).map((e) => e.className || e.tagName);
      return { scrollOverflow: document.documentElement.scrollWidth - vw, pageHeight: document.documentElement.scrollHeight, offenders: over, tinyText: tiny.slice(0, 10) };
    });
  }
  return out;
}
