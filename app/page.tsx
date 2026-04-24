import Link from "next/link";
import { PageShell } from "../components/page-shell";
import { Reveal } from "../components/reveal";
import { inventoryVehicles, services } from "../lib/site-content";

export default function Home() {
  const featured = inventoryVehicles.slice(0, 3);

  return (
    <PageShell>
      <main>
        <section className="hero">
          <div className="hero-grid">
            <Reveal className="hero-copy" direction="up">
              <div>
                <p className="eyebrow">Houston, Texas · Premium JDM and Euro Imports</p>
                <h1>Premium vehicles, direct pricing, and a cleaner import process.</h1>
                <p className="lede">
                  Browse curated inventory, schedule a viewing, or start a sourcing
                  request for the exact car you want.
                </p>
                <div className="hero-actions">
                  <Link className="button button-primary" href="/inventory">
                    View Inventory
                  </Link>
                  <Link className="button button-secondary" href="/contact?inquiry=source">
                    Start Your Import
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal className="hero-media" direction="left" delay={120}>
              <div className="hero-media-frame">
                <div className="hero-media-copy">
                  <p className="panel-label">Buyer Focus</p>
                  <p className="hero-media-quote">
                    Inventory you can buy now, plus sourcing support when you want
                    something specific.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="metrics-strip">
            <div>
              <p className="metric-number">Inventory</p>
              <p className="metric-copy">Curated JDM and Euro vehicles ready to review.</p>
            </div>
            <div>
              <p className="metric-number">Import</p>
              <p className="metric-copy">Auction sourcing, shipping, and arrival coordination.</p>
            </div>
            <div>
              <p className="metric-number">Contact</p>
              <p className="metric-copy">Clear next steps for viewings, pricing, and sourcing.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-head split-head">
            <div>
              <p className="eyebrow">Marketplace</p>
              <h2>Vehicles built for buyers who know what they want.</h2>
            </div>
            <p className="section-note">
              Walltap Garage focuses on premium Japanese and European vehicles with
              clear purchase paths and straightforward communication.
            </p>
          </div>

          <div className="inventory-grid">
            {featured.map((vehicle) => (
              <article className="inventory-card" key={vehicle.id}>
                <div className={`inventory-card-image ${vehicle.imageClass}`} />
                <div className="inventory-card-body">
                  <p className="inventory-spec-label">Year</p>
                  <p className="inventory-spec-value">{vehicle.year}</p>
                  <p className="inventory-spec-label">Model</p>
                  <h3>
                    {vehicle.make} {vehicle.model}
                  </h3>
                  <p className="inventory-spec-label">Price</p>
                  <p className="inventory-price">{vehicle.price}</p>
                  <p className="inventory-spec-value">{vehicle.highlights[0] ?? vehicle.location}</p>
                  <p className="inventory-status">{vehicle.status}</p>
                  <div className="inventory-card-actions">
                    <Link className="button button-primary card-button" href="/inventory">
                      View Listing
                    </Link>
                    <Link
                      className="button button-secondary card-button"
                      href={`/contact?inquiry=inventory&vehicle=${encodeURIComponent(
                        `${vehicle.year} ${vehicle.make} ${vehicle.model}`,
                      )}`}
                    >
                      Ask About This Car
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="inventory-actions">
            <Link className="button button-primary" href="/inventory">
              View Inventory
            </Link>
            <Link className="button button-secondary" href="/contact?inquiry=inventory">
              Schedule a Viewing
            </Link>
          </div>
        </section>

        <section className="section">
          <div className="section-head split-head">
            <div>
              <p className="eyebrow">Services</p>
              <h2>Support built around sourcing, importing, and delivery.</h2>
            </div>
            <p className="section-note">
              Every step is mapped for buyers who want more clarity than a typical
              dealer or importer experience provides.
            </p>
          </div>

          <div className="feature-grid">
            {services.map((service, index) => (
              <Reveal className="feature-card" delay={index * 90} key={service.title}>
                <article>
                  <p className="card-index">0{index + 1}</p>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="inventory-actions">
            <Link className="button button-secondary" href="/services">
              View Services
            </Link>
          </div>
        </section>

        <section className="section">
          <div className="section-head split-head">
            <div>
              <p className="eyebrow">About Walltap</p>
              <h2>Curated imports for serious enthusiasts.</h2>
            </div>
            <p className="section-note">
              Based in Houston, Walltap Garage sources, imports, and resells premium
              vehicles for customers across the United States.
            </p>
          </div>
          <div className="founder-card">
            <p>
              The business is built around trust, vehicle quality, and making the
              buying process easier to understand. That means fewer abstract promises
              and more clarity on what is available, what can be sourced, and how the
              import path works.
            </p>
          </div>
          <div className="inventory-actions">
            <Link className="button button-secondary" href="/about">
              Learn More
            </Link>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
