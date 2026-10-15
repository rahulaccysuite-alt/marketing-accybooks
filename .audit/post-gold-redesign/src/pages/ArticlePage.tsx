import Button from "../components/Button";
import { articleAliases, articlesMap } from "../data/articles";
import PageShell from "./PageShell";

const slug = (x: string) => x.toLowerCase().replace(/ /g, "-");

export default function ArticlePage({ path }: { path: string }) {
  const article = articlesMap[articleAliases[path] ?? path];

  return (
    <PageShell title={article.title} description={article.description} className="article-page">
      <div className="wrap">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span aria-hidden="true">›</span>
          <a href="/resources">Resources</a><span aria-hidden="true">›</span>
          <span aria-current="page">{article.title}</span>
        </nav>
        <header className="article-header">
          <span className="eyebrow-text">{article.eyebrow}</span>
          <h1>{article.title}</h1>
          <p className="hero-lead">{article.description}</p>
          <div className="article-meta">AccyBooks Editorial · Practice Guidance · Updated for current workflows</div>
        </header>
        <div className="article-layout">
          <aside aria-label="On this page">
            <b>On this page</b>
            {article.toc.map((x) => <a href={`#${slug(x)}`} key={x}>{x}</a>)}
          </aside>
          <article className="article-body">
            {article.sections.map((sec, idx) => (
              <div key={sec.id}>
                <h2 id={sec.id}>{sec.heading}</h2>
                {sec.content.map((p, pIdx) => <p key={pIdx}>{p}</p>)}
                {idx === 1 && <blockquote>{article.quote}</blockquote>}
              </div>
            ))}
            <div className="article-cta">
              <h3>See how AccyBooks connects the workflow.</h3>
              <Button href="/book-a-demo">Book a demo</Button>
            </div>
          </article>
        </div>
      </div>
    </PageShell>
  );
}
