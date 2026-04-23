import Link from "next/link";
import { PageShell } from "../../components/page-shell";
import { inventoryVehicles } from "../../lib/site-content";

export default function InventoryPage() {
  return (
    <PageShell>
      <main>
        <section className="section page-intro">
          <div className="section-head split-head">
            <div>
              <p className="eyebrow">Inventory</p>
              <h1 className="page-title">Premium vehicles ready to own.</h1>
            </div>
            <p className="section-note">
              Browse current inventory and review key details at a glance before
              reaching out to schedule a viewing.
            </p>
          </div>

          <div className="inventory-grid inventory-grid-full">
            {inventoryVehicles.map((vehicle) => (
              <article className="inventory-card" key={vehicle.model}>
                <div className={`inventory-card-image ${vehicle.imageClass}`} />
                <div className="inventory-card-body">
                  <div className="inventory-row">
                    <span className="inventory-spec-label">Year</span>
                    <span className="inventory-spec-value">{vehicle.year}</span>
                  </div>
                  <div className="inventory-row">
                    <span className="inventory-spec-label">Model</span>
                    <h3>{vehicle.model}</h3>
                  </div>
                  <div className="inventory-row">
                    <span className="inventory-spec-label">Body</span>
                    <span className="inventory-spec-value">{vehicle.body}</span>
                  </div>
                  <div className="inventory-row">
                    <span className="inventory-spec-label">Source</span>
                    <span className="inventory-spec-value">{vehicle.source}</span>
                  </div>
                  <div className="inventory-row inventory-row-strong">
                    <span className="inventory-spec-label">Price</span>
                    <span className="inventory-price">{vehicle.price}</span>
                  </div>
                  <div className="inventory-row">
                    <span className="inventory-status">{vehicle.status}</span>
                    <Link className="button button-secondary card-button" href="/contact">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </PageShell>
  );
}
