import Logo from "./Logo";

const columns: [string, [string, string][]][] = [
  ["Platform", [["Firm dashboard", "/platform"], ["Client management", "/features/client-management"], ["Bank reconciliation", "/features/bank-reconciliation"], ["Financial reporting", "/features/financial-reporting"]]],
  ["Solutions", [["Accounting firms", "/solutions/accounting-firms"], ["Bookkeepers", "/solutions/bookkeepers"], ["Finance teams", "/solutions/finance-teams"], ["Pricing", "/pricing"]]],
  ["Resources", [["Resource centre", "/resources"], ["Workflow guides", "/resources/improve-accounting-workflows"], ["Help centre", "/contact"], ["FAQs", "/pricing#pricing-faq"]]],
  ["Company", [["About AccyBooks", "/about"], ["Contact us", "/contact"], ["Book a demo", "/book-a-demo"], ["Sign in", "/sign-in"]]],
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-main">
        <div className="footer-brand">
          <Logo inverse />
          <p>A connected workspace for clearer accounting practice management.</p>
          <a href="mailto:hello@accybooks.com">hello@accybooks.com</a>
        </div>
        {columns.map(([title, links]) => (
          <nav className="footer-col" key={title} aria-label={`${title} links`}>
            <h2>{title}</h2>
            <ul>
              {links.map(([label, href]) => <li key={label}><a href={href}>{label}</a></li>)}
            </ul>
          </nav>
        ))}
      </div>
      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} AccyBooks. All rights reserved.</span>
        <div><a href="/contact">Privacy enquiries</a><a href="/contact">Terms enquiries</a></div>
        <span>Built for clarity.</span>
      </div>
    </footer>
  );
}
