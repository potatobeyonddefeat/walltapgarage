import Link from "next/link";
import { PageShell } from "../../components/page-shell";

export default function AboutPage() {
  return (
    <PageShell>
      <main>
        <section className="section page-intro">
          <div className="section-head split-head">
            <div>
              <p className="eyebrow">About</p>
              <h1 className="page-title">What is Walltap Garage?</h1>
            </div>
            <p className="section-note">
              A Houston-based automotive company focused on sourcing, importing, and
              reselling premium Japanese and European vehicles.
            </p>
          </div>

          <div className="founder-card founder-card-wide">
            <p>
              Walltap Garage LLC is built for enthusiasts who want high-quality
              vehicles and a more transparent path to ownership. Founded and owned by
              Andre Iancu, the business is centered on helping customers source rare
              and premium vehicles that stand out for quality, style, and heritage.
            </p>
            <p>
              Beyond simply listing cars, Walltap supports customers through vehicle
              selection, import coordination, and practical guidance so the process
              stays clear from first contact through delivery.
            </p>
            <div className="inventory-actions">
              <Link className="button button-secondary" href="/inventory">
                View Inventory
              </Link>
              <Link className="button button-primary" href="/contact">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
