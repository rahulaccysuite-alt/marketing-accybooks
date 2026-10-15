import { useEffect, useId, useRef, useState, type FocusEvent, type KeyboardEvent as ReactKeyboardEvent } from "react";
import Button from "./Button";
import Icon, { type IconName } from "./Icon";
import Logo from "./Logo";

const nav: [string, string][] = [
  ["Platform", "/platform"],
  ["Features", "/features"],
  ["Solutions", "/solutions/accounting-firms"],
  ["Integrations", "/integrations"],
  ["Pricing", "/pricing"],
  ["Resources", "/resources"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

const megaMenus: Record<string, { icon: IconName; title: string; copy: string; links: [string, string][] }> = {
  Platform: { icon: "grid", title: "One connected workspace", copy: "Bring client work, financial operations, and reporting into clear view.", links: [["Platform overview", "/platform"], ["Firm dashboard", "/#platform"], ["Connected workflows", "/#workflow"]] },
  Features: { icon: "spark", title: "Focused accounting workflows", copy: "Explore practical tools for client, reconciliation, and reporting work.", links: [["Bank reconciliation", "/features/bank-reconciliation"], ["Client management", "/features/client-management"], ["Financial reporting", "/features/financial-reporting"]] },
  Solutions: { icon: "briefcase", title: "Built around your practice", copy: "Purposeful workflows for accounting professionals.", links: [["Accounting firms", "/solutions/accounting-firms"], ["Bookkeepers", "/solutions/bookkeepers"], ["Finance teams", "/solutions/finance-teams"]] },
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const ready = useRef(false);
  const ignoreFocus = useRef(false);
  const focusPanel = useRef(false);
  const panelId = useId();

  useEffect(() => {
    ready.current = true;
    setMega(null);
    setOpen(false);

    const closeMega = () => setMega(null);
    const closeAll = () => {
      setMega(null);
      setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1080) setOpen(false);
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) closeAll();
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      const header = headerRef.current;
      const desktopTrigger = header?.querySelector<HTMLElement>(".nav-link.is-open");
      const mobileTrigger = header?.querySelector<HTMLElement>(".menu-toggle");
      const mobileOpen = mobileTrigger?.getAttribute("aria-expanded") === "true";
      closeAll();
      ignoreFocus.current = true;
      if (desktopTrigger) desktopTrigger.focus();
      else if (mobileOpen) mobileTrigger?.focus();
    };
    const onLeaveWindow = () => closeMega();

    window.addEventListener("resize", onResize);
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    document.documentElement.addEventListener("mouseleave", onLeaveWindow);
    return () => {
      window.removeEventListener("resize", onResize);
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
      document.documentElement.removeEventListener("mouseleave", onLeaveWindow);
    };
  }, []);

  function handleBlur(event: FocusEvent<HTMLElement>) {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setMega(null);
  }

  useEffect(() => {
    if (!focusPanel.current || !mega) return;
    focusPanel.current = false;
    headerRef.current?.querySelector<HTMLElement>(".mega-links a")?.focus();
  }, [mega]);

  function handleTriggerKey(event: ReactKeyboardEvent<HTMLAnchorElement>, item: string) {
    if (event.key !== "ArrowDown") return;
    event.preventDefault();
    if (mega === item) {
      headerRef.current?.querySelector<HTMLElement>(".mega-links a")?.focus();
      return;
    }
    focusPanel.current = true;
    setMega(item);
  }

  const menu = mega ? megaMenus[mega] : null;

  return (
    <header
      ref={headerRef}
      className="site-header"
      onMouseLeave={() => setMega(null)}
      onBlur={handleBlur}
    >
      <div className="wrap nav-bar">
        <Logo />
        <nav className="nav-desktop" aria-label="Primary navigation">
          {nav.map(([item, href]) => {
            const hasMenu = item in megaMenus;
            const isCurrent = (window.location.pathname.replace(/\/$/, "") || "/") === href;
            const isOpen = mega === item;
            return (
              <a
                key={item}
                href={href}
                className={`nav-link ${isOpen ? "is-open" : ""}`}
                aria-current={isCurrent ? "page" : undefined}
                aria-expanded={hasMenu ? isOpen : undefined}
                aria-haspopup={hasMenu ? "true" : undefined}
                aria-controls={hasMenu && isOpen ? panelId : undefined}
                onMouseEnter={() => {
                  if (!ready.current) return;
                  setMega(hasMenu ? item : null);
                }}
                onFocus={(event) => {
                  if (ignoreFocus.current) {
                    ignoreFocus.current = false;
                    return;
                  }
                  if (!ready.current || !event.currentTarget.matches(":focus-visible")) return;
                  setMega(hasMenu ? item : null);
                }}
                onKeyDown={hasMenu ? (event) => handleTriggerKey(event, item) : undefined}
                onClick={() => setMega(null)}
              >
                {item}
                {hasMenu && <svg className="nav-caret" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10"><path d="M2 3.5 5 6.5 8 3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>}
              </a>
            );
          })}
        </nav>
        <div className="nav-actions" onMouseEnter={() => setMega(null)} onFocus={() => setMega(null)}>
          <a className="nav-signin" href="/sign-in" onClick={() => setMega(null)}>Sign in</a>
          <Button href="/book-a-demo" size="sm">Book a demo</Button>
        </div>
        <button type="button" className="menu-toggle" onClick={() => setOpen((value) => !value)} aria-controls="mobile-menu" aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>
          <Icon name={open ? "close" : "menu"} size={22} />
        </button>
      </div>

      {menu && (
        <div className="mega-panel" id={panelId} role="region" aria-label={`${mega} menu`} onMouseEnter={() => setMega(mega)}>
          <div className="wrap mega-inner">
            <div className="mega-intro">
              <span className="icon-tile"><Icon name={menu.icon} /></span>
              <div>
                <span className="eyebrow-text">Explore {mega}</span>
                <b>{menu.title}</b>
                <p>{menu.copy}</p>
              </div>
            </div>
            <div className="mega-links">
              {menu.links.map(([label, href]) => (
                <a href={href} key={label} onClick={() => setMega(null)}>{label}<Icon name="chevron" size={16} /></a>
              ))}
            </div>
          </div>
        </div>
      )}

      <nav id="mobile-menu" className={`mobile-menu ${open ? "is-open" : ""}`} aria-label="Mobile navigation" hidden={!open}>
        <div className="wrap">
          {nav.map(([item, href]) => (
            <a key={item} href={href} onClick={() => setOpen(false)}>{item}<Icon name="chevron" size={16} /></a>
          ))}
          <div className="mobile-menu-actions">
            <Button href="/sign-in" variant="secondary">Sign in</Button>
            <Button href="/book-a-demo">Book a demo</Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
