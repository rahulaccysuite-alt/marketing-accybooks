import SectionHeading from "../components/SectionHeading";

const steps = [
  ["Connect", "Bring your workspace and client records together."],
  ["Organize", "Structure transactions and bookkeeping activity."],
  ["Review", "Resolve reconciliations and exceptions."],
  ["Complete", "Manage compliance and financial reporting."],
  ["Monitor", "See work clearly from your central dashboard."],
];

export default function Workflow() {
  return (
    <section className="section workflow" id="workflow" aria-labelledby="workflow-title">
      <div className="wrap">
        <SectionHeading kicker="One connected workflow" title={<>From client records to confident reporting.</>} id="workflow-title">
          <p>A deliberate flow keeps the right work visible at every stage—without introducing another layer of complexity.</p>
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
