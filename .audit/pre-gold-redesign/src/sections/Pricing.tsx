import { useState } from "react";
import Button from "../components/Button";
import Icon from "../components/Icon";
import SectionHeading from "../components/SectionHeading";
import TiltCard from "../components/TiltCard";

const plans: [string, string, string[]][] = [
  [
    "Starter",
    "For independent professionals building a connected workflow.",
    [
      "Connected client workspace",
      "Core bookkeeping workflows",
      "Bank reconciliation tools",
      "Standard financial reporting",
    ],
  ],
  [
    "Professional",
    "For growing practices coordinating work across a team.",
    [
      "Everything in Starter",
      "Team workflow controls",
      "Expanded bookkeeping workflows",
      "Advanced financial reporting",
    ],
  ],
  [
    "Firm",
    "For established firms that need control at scale.",
    [
      "Everything in Professional",
      "Firm-wide practice controls",
      "Priority guidance & onboarding",
      "Multi-user role permissions",
    ],
  ],
];

const comparison = [
  ["Connected client workspace", "Included", "Included", "Included"],
  ["Bookkeeping workflows", "Core", "Expanded", "Firm-wide"],
  ["Reconciliation tools", "Included", "Included", "Included"],
  ["Financial reporting", "Core", "Advanced", "Advanced"],
  ["Team workflow controls", "—", "Included", "Firm-wide"],
  ["Plan limits", "Editable", "Editable", "Editable"],
  ["Optional add-ons", "To confirm", "To confirm", "To confirm"],
];

const faqs = [
  ["When will official pricing be available?", "Official prices will be added once plan structure and billing terms are finalized. The current plan cards are intentionally editable placeholders."],
  ["Can we change plans as our practice grows?", "The plan structure is designed to support progression from an independent workflow to broader team and firm-wide needs. Final upgrade terms will accompany official pricing."],
  ["Are integrations included in every plan?", "Integration availability will be documented by plan before launch. AccyBooks will clearly distinguish available, planned, and request-based connections."],
  ["Can I see AccyBooks before choosing a plan?", "Yes. Request a personalized demo to discuss your current workflow and explore the areas of the platform most relevant to your practice."],
];

export default function Pricing({ standalone = false }: { standalone?: boolean }) {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const [faq, setFaq] = useState(0);

  return (
    <section className="section section-cool pricing" id="pricing" aria-labelledby="pricing-title">
      <div className="wrap">
        {standalone && (
          <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">›</span><span aria-current="page">Pricing</span></nav>
        )}
        <SectionHeading kicker="Pricing that can grow with you" title="A plan for every stage of practice." id="pricing-title" as={standalone ? "h1" : "h2"}>
          <p>Choose the right foundation today. Official pricing and plan limits will be published as they are confirmed.</p>
          <div className="billing-toggle" role="group" aria-label="Billing period">
            {(["monthly", "yearly"] as const).map((period) => (
              <button type="button" key={period} className={billing === period ? "is-active" : ""} aria-pressed={billing === period} onClick={() => setBilling(period)}>
                {period === "monthly" ? "Monthly" : "Yearly"}
              </button>
            ))}
          </div>
        </SectionHeading>

        <div className="plans">
          {plans.map(([name, copy, list], i) => (
            <TiltCard className={`plan-card ${i === 1 ? "is-recommended" : ""}`} intensity={4} key={name}>
              {i === 1 && <span className="plan-badge">Recommended</span>}
              <span className="eyebrow-text">0{i + 1} · {billing} billing</span>
              <h3>{name}</h3>
              <p className="plan-copy">{copy}</p>
              <div className="plan-price">
                <b>Price placeholder</b>
                <span>Official pricing will be supplied before launch</span>
              </div>
              <Button href="/book-a-demo" variant={i === 1 ? "primary" : "secondary"} className="btn-block">Talk to our team</Button>
              <ul className="check-list">
                {list.map((x) => <li key={x}><span className="check-badge"><Icon name="check" size={12} /></span>{x}</li>)}
              </ul>
            </TiltCard>
          ))}
        </div>

        <div className="comparison">
          <div className="comparison-head">
            <div><span className="eyebrow-text">Detailed comparison</span><h3>Compare plan foundations</h3></div>
            <p>Exact limits and add-ons remain editable until official plan details are confirmed.</p>
          </div>
          <div className="comparison-scroll" tabIndex={0} role="region" aria-label="Plan comparison table, scrolls horizontally on small screens">
            <table>
              <thead><tr><th scope="col">Capability</th><th scope="col">Starter</th><th scope="col">Professional</th><th scope="col">Firm</th></tr></thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, i) => i === 0
                      ? <th scope="row" key={cell}>{cell}</th>
                      : <td key={`${cell}-${i}`}>{cell === "Included" && <Icon name="check" size={15} />}{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="pricing-faq" id="pricing-faq">
          <div>
            <span className="eyebrow-text">Pricing FAQ</span>
            <h3>Questions, answered clearly.</h3>
            <p>Need help deciding where your practice fits? Our team can walk through the platform without assuming a plan.</p>
            <Button href="/book-a-demo">Book a demo</Button>
          </div>
          <div className="accordion">
            {faqs.map(([question, answer], i) => (
              <div className={`accordion-item ${faq === i ? "is-open" : ""}`} key={question}>
                <h4>
                  <button type="button" id={`faq-button-${i}`} aria-controls={`faq-answer-${i}`} aria-expanded={faq === i} onClick={() => setFaq(faq === i ? -1 : i)}>
                    <span>{question}</span>
                    <i aria-hidden="true" />
                  </button>
                </h4>
                <div className="accordion-panel" id={`faq-answer-${i}`} role="region" aria-labelledby={`faq-button-${i}`} hidden={faq !== i}>
                  <p>{answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
