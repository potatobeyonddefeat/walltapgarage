import Link from "next/link";
import { Reveal } from "./reveal";
import { importProcessSteps, importProcessTrustPoints } from "../lib/site-content";

type ImportProcessSectionProps = {
  eyebrow?: string;
  title?: string;
  note?: string;
};

export function ImportProcessSection({
  eyebrow = "Import Process",
  title = "How sourcing and importing works, step by step.",
  note = "The process is built to keep buyers informed at the moments that matter most: vehicle selection, approval, transit, arrival, and final handoff.",
}: ImportProcessSectionProps) {
  return (
    <section className="section process-section">
      <div className="section-head split-head">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
        </div>
        <p className="section-note">{note}</p>
      </div>

      <div className="process-grid">
        <div className="process-steps">
          {importProcessSteps.map((item, index) => (
            <Reveal className="process-step" delay={index * 80} key={item.step}>
              <article>
                <div className="process-step-head">
                  <p className="card-index">{item.step}</p>
                  <h3>{item.title}</h3>
                </div>
                <p className="process-step-description">{item.description}</p>

                <div className="process-meta">
                  <div>
                    <p className="process-label">Milestones</p>
                    <ul className="process-list">
                      {item.milestones.map((milestone) => (
                        <li key={milestone}>{milestone}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="process-label">Documents and checkpoints</p>
                    <ul className="process-list">
                      {item.documents.map((document) => (
                        <li key={document}>{document}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p className="process-assurance">{item.assurance}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="info-panel process-panel" delay={120}>
          <div>
            <p className="process-panel-kicker">Why buyers trust the process</p>
            <h3>Clear checkpoints reduce avoidable surprises.</h3>
            <ul className="process-list">
              {importProcessTrustPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p>
              If a vehicle does not match the brief, the right move is to keep looking.
              That discipline matters more than forcing a deal through.
            </p>
            <Link className="button button-primary" href="/contact">
              Start Your Search
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
