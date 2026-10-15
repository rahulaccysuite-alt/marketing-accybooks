import type { ReactNode } from "react";
import Icon, { type IconName } from "../components/Icon";

export function DirectoryHeader({ icon, eyebrow, title, copy, crumb }: { icon: IconName; eyebrow: string; title: string; copy: string; crumb: string }) {
  return (
    <>
      <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">›</span><span aria-current="page">{crumb}</span></nav>
      <header className="directory-header">
        <span className="eyebrow"><span className="eyebrow-icon"><Icon name={icon} size={14} /></span>{eyebrow}</span>
        <h1>{title}</h1>
        <p className="hero-lead">{copy}</p>
      </header>
    </>
  );
}

export function DirectoryTools({ query, setQuery, placeholder, categories, category, setCategory }: { query: string; setQuery: (v: string) => void; placeholder: string; categories: string[]; category: string; setCategory: (v: string) => void }) {
  return (
    <div className="directory-tools">
      <label className="search-field">
        <Icon name="search" size={17} />
        <span className="sr-only">{placeholder}</span>
        <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder={placeholder} />
      </label>
      <div className="chip-row" role="group" aria-label="Filter by category">
        {categories.map((x) => <button type="button" className={category === x ? "is-active" : ""} aria-pressed={category === x} onClick={() => setCategory(x)} key={x}>{x}</button>)}
      </div>
    </div>
  );
}

export function EmptyState({ children }: { children: ReactNode }) {
  return <p className="empty-state">{children}</p>;
}

