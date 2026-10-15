import { useState, type FormEvent } from "react";
import Icon from "../components/Icon";

export default function Demo({ standalone = false }: { standalone?: boolean }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const Heading = standalone ? "h1" : "h2";

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    window.setTimeout(() => setStatus("success"), 700);
  }

  return (
    <section className="section demo" id="demo" aria-labelledby="demo-title">
      <span className="anchor-target" id="contact" />
      <div className="wrap demo-grid">
        <div className="demo-copy">
          <span className="eyebrow"><span className="eyebrow-icon"><Icon name="spark" size={14} /></span>See AccyBooks in action</span>
          <Heading id="demo-title">Bring your whole practice into clearer view.</Heading>
          <p>Explore how connected workflows can help your team spend less time navigating tools—and more time moving client work forward.</p>
          <ul className="check-list check-list-strong">
            {["A walkthrough tailored to your practice", "Clear answers to your workflow questions", "No commitment required"].map((x) => (
              <li key={x}><span className="check-badge"><Icon name="check" size={12} /></span>{x}</li>
            ))}
          </ul>
        </div>
        <form className="demo-form" onSubmit={submit} aria-busy={status === "loading"} aria-labelledby="demo-form-title">
          <div className="form-head">
            <span className="eyebrow-text">Book a personalized demo</span>
            <h3 id="demo-form-title">Tell us about your practice.</h3>
          </div>
          {status === "success" ? (
            <div className="form-success" role="status">
              <span><Icon name="check" size={24} /></span>
              <h3>Frontend success state</h3>
              <p>Your request was validated for this preview. No information was sent or stored.</p>
              <button type="button" className="btn btn-secondary" onClick={() => setStatus("idle")}><span>Return to form</span></button>
            </div>
          ) : (
            <>
              <div className="field-row">
                <label>First name<input required name="firstName" autoComplete="given-name" placeholder="First name" /></label>
                <label>Last name<input required name="lastName" autoComplete="family-name" placeholder="Last name" /></label>
              </div>
              <label>Work email<input required type="email" name="email" autoComplete="email" placeholder="you@company.com" /></label>
              <label>Company<input required name="company" autoComplete="organization" placeholder="Practice or company name" /></label>
              <label>Role
                <select required name="role" defaultValue="">
                  <option value="" disabled>Select your role</option>
                  <option>Firm owner or partner</option>
                  <option>Accountant</option>
                  <option>Bookkeeper</option>
                  <option>Finance team</option>
                  <option>Other</option>
                </select>
              </label>
              <label>What would you like to improve?<textarea required name="message" rows={3} placeholder="Tell us a little about your current workflow" /></label>
              {status === "error" && <p className="form-error" role="alert">Please review the highlighted information and try again.</p>}
              <button type="submit" className="btn btn-primary btn-block" disabled={status === "loading"}>
                <span>{status === "loading" ? "Validating preview…" : "Request your demo"}</span>
                <Icon name="arrow" size={17} />
              </button>
              <button type="button" className="text-btn" onClick={() => setStatus("error")}>Preview error state</button>
              <p className="fine-print">Frontend demonstration only. This form does not send or store your information.</p>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
