import { useState, type KeyboardEvent, type ReactNode } from "react";
import Icon, { type IconName } from "../components/Icon";
import TiltCard from "../components/TiltCard";

type Billing = "monthly" | "yearly";

type Price = { amount: string; unit: ReactNode; flag?: string };

type Plan = {
  name: string;
  badge?: string;
  variant: "essentials" | "plus" | "bundle";
  copy: string;
  /** Annual-only plans omit `monthly`. */
  prices: { monthly?: Price; yearly: Price };
  features: ReactNode[];
};

type AddOn = {
  name: string;
  icon: IconName;
  copy: string;
  prices: Price[];
  note?: string;
  features: ReactNode[];
};

const plans: Plan[] = [
  {
    name: "Essentials",
    variant: "essentials",
    copy: "For low-volume clients: holdcos, rental properties, small sole-props.",
    prices: {
      monthly: { amount: "$9.99", unit: "per client / month" },
      yearly: { amount: "$99", unit: "per client / year" },
    },
    features: [
      <>Up to <b>50 transactions</b> / month</>,
      <>Up to <b>10 AI-extracted pages</b> / month</>,
      <><b>GST/HST return</b> preparation and working papers</>,
      "GIFI-based chart of accounts with sub-accounts",
      "Bank and credit card statement import and reconciliation",
      "AI categorization with preparer review queue",
      "Rules and recurring transactions",
      "GL, Balance Sheet, Income Statement",
      "CSV / Excel import and export",
    ],
  },
  {
    name: "Plus",
    badge: "Most popular",
    variant: "plus",
    copy: "For operating businesses: trucking, clinics, retail, contractors.",
    prices: {
      monthly: { amount: "$24.99", unit: "per client / month" },
      yearly: { amount: "$249", unit: "per client / year" },
    },
    features: [
      <><b>Everything in Essentials</b>, plus:</>,
      <><b>Unlimited</b> transactions</>,
      <>Up to <b>50 AI-extracted pages</b> / month</>,
      "Invoice and receipt matching to bank lines",
      "Multi-currency (USD/CAD) accounts",
      "Client portal for document requests",
      "Monthly / quarterly management reports",
    ],
  },
  {
    name: "Practice Bundle",
    badge: "Best value",
    variant: "bundle",
    copy: "Bookkeeping Plus and a full year-end with T2 GIFI export, in one annual price.",
    prices: { yearly: { amount: "$399", unit: <>per client / year · <b>save $49</b> vs. separate</> } },
    features: [
      <><b>Bookkeeping Plus</b> for 12 months</>,
      <><b>One year-end file:</b> CSRS 4200 compilation FS and Compilation Engagement Report</>,
      <><b>T2 GIFI export:</b> Schedule 100 (Balance Sheet), Schedule 125 (Income Statement) and Schedule 141, ready to import into ProFile or TaxPrep</>,
      "Rolls straight from monthly books into year-end",
      "Priority support and onboarding",
      "Payroll add-on available at standard rates",
    ],
  },
];

const addOns: AddOn[] = [
  {
    name: "Payroll",
    icon: "people",
    copy: "Canadian payroll with CPP, EI, T4 and ROE.",
    prices: [
      { amount: "$9.99", unit: "per client / month" },
      { amount: "$99", unit: "per client / year" },
    ],
    note: "+ $3.99 per employee / month, on either plan",
    features: [
      "Employee records, pay runs and pay stubs",
      "CPP, CPP2, EI and income tax deductions",
      "T4 / T4 Summary and ROE preparation",
      "Remittance schedules and PD7A tracking",
      "Payroll journal posted to the GL automatically",
    ],
  },
  {
    name: "Year-End & Compilation",
    icon: "document",
    copy: "Priced per file, the way firms bill year-end.",
    prices: [
      { amount: "$149", unit: "per file · Year-end only" },
      { amount: "$199", unit: "per file · Year-end + T2" },
    ],
    features: [
      <><b>CSRS 4200 compilation</b> financial statements and Compilation Engagement Report</>,
      "Year-end adjusting entries, working papers and lead sheets",
      "CCA continuity, shareholder loan and accrual schedules",
      <><b>Year-end + T2:</b> GIFI Schedules 100, 125 and 141 exported for import into <b>ProFile</b> or <b>TaxPrep</b></>,
      "Preparer / reviewer sign-off and engagement checklists",
      "Roll-forward to next year with prior-year comparatives",
    ],
  },
];

function PriceBox({ prices }: { prices: Price[] }) {
  return (
    <div className={`price-box ${prices.length > 1 ? "is-split" : ""}`}>
      {prices.map((price) => (
        <div key={price.amount}>
          {price.flag && <em className="price-flag">{price.flag}</em>}
          <b>{price.amount}</b>
          <span>{price.unit}</span>
        </div>
      ))}
    </div>
  );
}

function planPrice(plan: Plan, billing: Billing): Price {
  if (billing === "yearly") return plan.prices.yearly;
  return plan.prices.monthly ?? { ...plan.prices.yearly, flag: "Annual billing only" };
}

const billingOptions: [Billing, string][] = [["monthly", "Monthly"], ["yearly", "Yearly"]];

function BillingToggle({ value, onChange }: { value: Billing; onChange: (value: Billing) => void }) {
  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const index = billingOptions.findIndex(([option]) => option === value);
    const next = event.key === "Home" ? 0
      : event.key === "End" ? billingOptions.length - 1
      : (index + (event.key === "ArrowLeft" || event.key === "ArrowUp" ? -1 : 1) + billingOptions.length) % billingOptions.length;
    onChange(billingOptions[next][0]);
    event.currentTarget.querySelectorAll<HTMLButtonElement>("button")[next]?.focus();
  }

  return (
    <div className="billing-toggle" role="radiogroup" aria-label="Billing period" onKeyDown={handleKeyDown}>
      {billingOptions.map(([option, label]) => (
        <button
          type="button"
          role="radio"
          key={option}
          aria-checked={value === option}
          tabIndex={value === option ? 0 : -1}
          className={value === option ? "is-active" : ""}
          onClick={() => onChange(option)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

function FeatureList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="check-list price-features">
      {items.map((item, i) => (
        <li key={i}><span className="check-badge"><Icon name="check" size={12} /></span><span>{item}</span></li>
      ))}
    </ul>
  );
}

export default function Pricing({ standalone = false }: { standalone?: boolean }) {
  const Title = standalone ? "h1" : "h2";
  const [billing, setBilling] = useState<Billing>("monthly");

  return (
    <section className="section pricing" id="pricing" aria-labelledby="pricing-title">
      <div className="wrap">
        {standalone && (
          <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">›</span><span aria-current="page">Pricing</span></nav>
        )}

        <header className="pricing-header">
          <div className="pricing-brand">
            <b>Accy<span>Books</span></b>
            <small>by AccySuite AI Inc.</small>
          </div>
          <div className="pricing-title">
            <Title id="pricing-title">Pricing built for Canadian accounting firms</Title>
            <p>Bookkeeping by the month. Year-end by the file. Payroll when you need it.</p>
          </div>
          <div className="pricing-meta">
            <b>AI Workplace for Accountants</b>
            <span>All prices in CAD, per client file, plus GST</span>
          </div>
        </header>

        <div className="pricing-group-head">
          <h3>1 · Core bookkeeping</h3>
          <p>Pick a tier per client. Annual billing saves ~17% (two months free).</p>
          <BillingToggle value={billing} onChange={setBilling} />
        </div>
        <div className="plans" aria-live="polite">
          {plans.map((plan) => (
            <TiltCard className={`plan-card plan-${plan.variant}`} intensity={3} key={plan.name}>
              {plan.badge && <span className="plan-badge">{plan.badge}</span>}
              <h4>{plan.name}</h4>
              <p className="plan-copy">{plan.copy}</p>
              <PriceBox prices={[planPrice(plan, billing)]} />
              <FeatureList items={plan.features} />
            </TiltCard>
          ))}
        </div>

        <div className="pricing-group-head">
          <h3>2 · Add-ons</h3>
          <p>Add to any bookkeeping tier.</p>
        </div>
        <div className="addon-grid">
          {addOns.map((addOn) => (
            <article className="addon-card" key={addOn.name}>
              <div className="addon-head">
                <span className="icon-tile"><Icon name={addOn.icon} size={22} /></span>
                <div>
                  <h4>{addOn.name}</h4>
                  <p>{addOn.copy}</p>
                </div>
              </div>
              <PriceBox prices={addOn.prices} />
              {addOn.note && <p className="addon-note">{addOn.note}</p>}
              <FeatureList items={addOn.features} />
            </article>
          ))}
        </div>

        <div className="pricing-info">
          <div>
            <h4>Volume pricing</h4>
            <p>Managing a large client base? Contact our office for a custom firm plan.</p>
            <p className="pricing-contact">[OFFICE EMAIL] · [OFFICE PHONE]</p>
          </div>
          <div>
            <h4>Try it free</h4>
            <p>30-day free trial for up to 5 client files. No credit card required. Free data migration from QuickBooks and Excel.</p>
          </div>
          <div>
            <h4>Fair-use notes</h4>
            <p>Extra AI pages $5 per 100. Unlimited team members on every plan. Year-End files never expire mid-engagement.</p>
          </div>
        </div>

        <footer className="pricing-footnotes">
          <span>AccyBooks by AccySuite AI Inc. · Built in Calgary for CPA firms</span>
          <span>Prices in CAD, exclusive of GST/HST. Subject to change.</span>
        </footer>
      </div>
    </section>
  );
}
