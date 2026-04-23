import Link from "next/link";
import { PageShell } from "../../components/page-shell";

const faqs = [
  {
    question: "How does a Walltap import start?",
    answer:
      "Most buyers begin with a call or contact form submission so Walltap can confirm budget, target models, and timeline before sourcing begins.",
  },
  {
    question: "Do you only sell inventory already in Texas?",
    answer:
      "No. Walltap supports both in-stock inventory and customer-specific sourcing for Japanese and European vehicles.",
  },
  {
    question: "Can you help with transport after purchase?",
    answer:
      "Yes. Transport coordination is part of the process so buyers have a clearer path from purchase to final delivery.",
  },
];

export default function FaqPage() {
  return (
    <PageShell>
      <main>
        <section className="section page-intro">
          <div className="section-head split-head">
            <div>
              <p className="eyebrow">FAQ</p>
              <h1 className="page-title">Common questions from import buyers.</h1>
            </div>
            <p className="section-note">
              Straight answers on how Walltap handles sourcing, inventory, transport,
              and first contact.
            </p>
          </div>

          <div className="feature-grid feature-grid-full">
            {faqs.map((item, index) => (
              <article className="feature-card" key={item.question}>
                <p className="card-index">0{index + 1}</p>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>

          <div className="info-panel">
            <h3>Need a direct answer?</h3>
            <p>
              Reach out with the chassis, budget, or import timeline you have in mind
              and Walltap can point you in the right direction.
            </p>
            <Link className="button button-primary" href="/contact">
              Contact Us
            </Link>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
