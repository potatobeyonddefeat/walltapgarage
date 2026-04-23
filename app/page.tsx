import { Reveal } from "../components/reveal";
import { SectionNav } from "../components/section-nav";

const metrics = [
  {
    number: "01",
    copy: "Auction sourcing with condition and provenance in mind",
  },
  {
    number: "02",
    copy: "Import coordination from Japan and Europe to the U.S.",
  },
  {
    number: "03",
    copy: "Hand-picked inventory that feels curated rather than listed",
  },
];

const features = [
  {
    index: "01",
    title: "Vehicle Sourcing",
    copy:
      "Find the right chassis, spec, condition, and provenance instead of settling for whatever is already stateside.",
  },
  {
    index: "02",
    title: "Import Management",
    copy:
      "Navigate auction, shipping, and entry logistics with a process that stays transparent instead of opaque.",
  },
  {
    index: "03",
    title: "Curated Inventory",
    copy:
      "Access selected in-stock vehicles that match the Walltap standard for presence, rarity, and condition.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Define the target",
    copy:
      "Start with the model, trim, budget, and non-negotiables so the search has a clear standard.",
  },
  {
    number: "02",
    title: "Source with judgment",
    copy:
      "Review options with an enthusiast eye, not a volume-sales mindset.",
  },
  {
    number: "03",
    title: "Handle the import path",
    copy:
      "Manage the movement from purchase through shipping and U.S. logistics with clear communication.",
  },
  {
    number: "04",
    title: "Deliver the car",
    copy:
      "Finish with a car that feels worth waiting for, not just one that made it through the system.",
  },
];

const inventoryGallery = [
  {
    name: "Mark II",
    className: "gallery-markii",
  },
  {
    name: "Chaser",
    className: "gallery-chaser",
  },
  {
    name: "Supra",
    className: "gallery-supra",
  },
];

const featuredSpecs = [
  {
    label: "Vehicle Types",
    value: "Silvias, Chasers, Supras, Skylines, NSXs",
  },
  {
    label: "Markets",
    value: "Japan auction sourcing and select Euro inventory",
  },
  {
    label: "Support",
    value: "Sourcing, shipping, import coordination, handoff",
  },
];

export default function Home() {
  return (
    <div className="page-shell">
      <header className="hero" id="top">
        <nav className="topbar">
          <a className="brand" href="#top">
            <img
              className="brand-logo"
              src="https://rjdavx8ozyznxeyh.public.blob.vercel-storage.com/production/websites/generated-logos/db4f8c75-a766-4859-8999-e5f0037992ee-Gd0J9YdMy09ohXlu8fxlAE9hKgCjpn.png"
              alt="Walltap Garage logo"
            />
            <span>Walltap Garage</span>
          </a>
          <SectionNav />
        </nav>

        <div className="hero-grid">
          <Reveal className="hero-copy" direction="up">
            <section>
              <p className="eyebrow">Houston, Texas · Premium JDM and Euro Imports</p>
              <h1>Rare imports with real presence, not generic dealer inventory.</h1>
              <p className="lede">
                Walltap Garage helps enthusiasts secure premium JDM and European
                vehicles through a cleaner process: sourcing, shipping, import
                coordination, and final delivery handled with clarity from start to
                finish.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#inventory">
                  Browse Inventory
                </a>
                <a className="button button-secondary" href="#contact">
                  Start Your Import
                </a>
              </div>
            </section>
          </Reveal>

          <Reveal className="hero-media" direction="left" delay={120}>
            <aside>
          <div className="hero-media-frame">
            <div className="hero-media-copy">
              <p className="panel-label">Current Focus</p>
              <p className="hero-media-quote">
                Premium vehicles ready to own or source.
              </p>
            </div>
          </div>
              <div className="hero-panel-footer">
                <span>Premium sourcing</span>
                <span>Import logistics</span>
                <span>Curated inventory</span>
              </div>
            </aside>
          </Reveal>
        </div>

        <Reveal className="metrics-strip" direction="up" delay={180}>
          {metrics.map((metric) => (
            <div key={metric.number}>
              <p className="metric-number">{metric.number}</p>
              <p className="metric-copy">{metric.copy}</p>
            </div>
          ))}
        </Reveal>
      </header>

      <main>
        <section className="section" id="services">
          <Reveal className="section-head" direction="up">
            <div>
              <p className="eyebrow">What Walltap Does</p>
              <h2>A cleaner way to buy premium JDM and Euro vehicles.</h2>
            </div>
          </Reveal>
          <div className="feature-grid">
            <Reveal className="feature-intro" direction="right">
              <div>
                <p className="feature-intro-copy">
                  Walltap is for buyers who know the difference between rare and
                  merely expensive. The story is not volume. It is selection,
                  sourcing judgment, and delivery without dealership drag.
                </p>
                <p className="feature-intro-note">
                  From Japanese auction sourcing to final U.S. handoff, the work
                  stays narrow, intentional, and enthusiast-led.
                </p>
              </div>
            </Reveal>
            {features.map((feature, index) => (
              <Reveal
                className="feature-card"
                key={feature.index}
                direction="up"
                delay={index * 110}
              >
                <article>
                  <p className="card-index">{feature.index}</p>
                  <h3>{feature.title}</h3>
                  <p>{feature.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section section-band" id="inventory">
          <Reveal className="section-head split-head" direction="up">
            <div>
              <p className="eyebrow">Inventory Direction</p>
              <h2>Premium vehicles ready to own.</h2>
            </div>
            <p className="section-note">
              Browse curated imports or contact Walltap to source something
              specific. The process is built for buyers who want clarity on
              vehicle condition, provenance, and next steps.
            </p>
          </Reveal>
          <div className="inventory-editorial">
            <Reveal className="inventory-copy" direction="left" delay={120}>
              <article>
                <p className="inventory-tag">Featured Types</p>
                <h3>Silvias, Chasers, Supras, Skylines, and standout Euros.</h3>
                <p>
                  Walltap focuses on enthusiast cars with identity, backed by a
                  process that makes sourcing and buying easier to understand.
                </p>
                <div className="spec-grid">
                  {featuredSpecs.map((spec) => (
                    <div className="spec-item" key={spec.label}>
                      <p className="spec-label">{spec.label}</p>
                      <p className="spec-value">{spec.value}</p>
                    </div>
                  ))}
                </div>
                <div className="inventory-actions">
                  <a className="button button-primary" href="https://walltapgarage.com/">
                    View Inventory
                  </a>
                  <a className="button button-secondary" href="#contact">
                    Schedule a Viewing
                  </a>
                </div>
              </article>
            </Reveal>
            <Reveal className="inventory-gallery" direction="up">
              <div>
                {inventoryGallery.map((item) => (
                  <article className={`gallery-tile ${item.className}`} key={item.name}>
                    <span>{item.name}</span>
                  </article>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section" id="process">
          <Reveal className="section-head process-head" direction="up">
            <div>
              <p className="eyebrow">Buying Process</p>
              <h2>Direct, transparent, and built for buyers.</h2>
            </div>
            <p className="section-note">
              From first inquiry to final delivery, each step is structured so
              you know what happens next and what to expect.
            </p>
          </Reveal>
          <div className="process-grid">
            {processSteps.map((step, index) => (
              <Reveal
                className="process-step"
                key={step.number}
                direction="up"
                delay={index * 100}
              >
                <article>
                  <p className="step-number">{step.number}</p>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section founder-section" id="about">
          <Reveal className="founder-card" direction="right">
            <div>
              <p className="eyebrow">About the Brand</p>
              <h2>Curated JDM and Euro imports for serious enthusiasts.</h2>
              <p>
                Founded by Andre Iancu, Walltap Garage sources, imports, and
                resells premium Japanese and European vehicles for buyers who
                care about quality, style, and a straightforward process.
              </p>
            </div>
          </Reveal>
        </section>

        <section className="section cta-section" id="contact">
          <Reveal className="cta-card" direction="up">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Ready to find your next vehicle?</h2>
            </div>
            <div className="cta-copy">
              <p>
                Contact Walltap Garage to ask about current inventory, discuss a
                sourcing request, or schedule a viewing.
              </p>
              <div className="cta-actions">
                <a className="button button-primary" href="https://walltapgarage.com/contact">
                  Contact Us
                </a>
                <a className="button button-secondary" href="https://walltapgarage.com/">
                  View Inventory
                </a>
              </div>
            </div>
          </Reveal>
        </section>

        <footer className="site-footer">
          <div className="footer-brand">Walltap Garage</div>
          <div className="footer-links">
            <a href="#top">Home</a>
            <a href="#inventory">Inventory</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <p className="footer-meta">© 2026 Walltap Garage LLC. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
