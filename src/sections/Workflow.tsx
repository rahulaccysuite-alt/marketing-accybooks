import SectionHeading from "../components/SectionHeading";

const steps = [
  ["Connect", "Set up your firm workspace and bring client records together."],
  ["Organize", "Import bank activity and categorize transactions."],
  ["Review", "Reconcile accounts and resolve exceptions."],
  ["Complete", "Prepare financial statements and track compliance work."],
  ["Monitor", "Track progress across every client from one dashboard."],
];

export default function Workflow() {
  return (
    <section className="section workflow" id="workflow" aria-labelledby="workflow-title">
      <div className="wrap">
        <SectionHeading kicker="How it works" title="From bank statements to financial statements in five steps." id="workflow-title">
          <p>A clear, repeatable process keeps every engagement moving and every review point visible, without adding another layer of complexity.</p>
        </SectionHeading>
        <ol className="timeline">
          {steps.map(([title, copy], i) => (
            <li key={title}>
              <span className="step-num">{i + 1}</span>
              <span className="eyebrow-text">Step 0{i + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
