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
              <p className="brand-lockup">Walltap Garage</p>
              <h1>Rare imports with real presence, not generic dealer inventory.</h1>
              <p className="lede">
                Walltap Garage helps enthusiasts secure premium JDM and European
                vehicles through a cleaner process: sourcing, shipping, import
                coordination, and final delivery handled with clarity from start to
                finish.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contact">
                  Start a Sourcing Request
                </a>
                <a className="button button-secondary" href="#inventory">
                  Browse Inventory
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
                    Importer taste, transparent process, cars worth waiting for.
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
              <p className="chapter-label">Chapter 01</p>
              <h2>A sharper alternative to generic import listings.</h2>
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
              <p className="chapter-label">Chapter 02</p>
              <h2>Cars with actual taste behind them.</h2>
            </div>
            <p className="section-note">
              The brand is not "cheap imports." It is premium Japanese and
              European vehicles for buyers who care about the right spec, the
              right look, and the right process.
            </p>
          </Reveal>
          <div className="inventory-editorial">
            <Reveal className="inventory-copy" direction="left" delay={120}>
              <article>
                <p className="inventory-tag">Featured Types</p>
                <h3>Silvias, Chasers, Supras, Skylines, and standout Euros.</h3>
                <p>
                  Walltap focuses on enthusiast cars with identity, not anonymous
                  commuter inventory. The selection should feel narrow on purpose.
                </p>
                <ul className="inventory-list">
                  <li>Low-volume sourcing over crowded listings</li>
                  <li>Condition, authenticity, and visual presence first</li>
                  <li>Inventory chosen for people who actually know the chassis</li>
                </ul>
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
              <p className="eyebrow">Process</p>
              <p className="chapter-label">Chapter 03</p>
              <h2>Built to feel direct and informed, not sales-heavy.</h2>
            </div>
            <p className="section-note">
              Scroll progression matters here. The process should read like a
              controlled sequence, not four matching boxes dropped into a grid.
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

        <section className="section founder-section">
          <Reveal className="founder-card" direction="right">
            <div>
              <p className="eyebrow">About the Brand</p>
              <p className="chapter-label">Chapter 04</p>
              <h2>Curated imports for people who know what they are looking at.</h2>
              <p>
                Founded by Andre Iancu, Walltap Garage is built around a simple
                position: enthusiasts deserve a sourcing process that feels sharp,
                transparent, and aligned with real car culture. That means fewer
                filler listings, better taste, and more attention on the details
                that actually matter.
              </p>
            </div>
          </Reveal>
        </section>

        <section className="section cta-section" id="contact">
          <Reveal className="cta-card" direction="up">
            <div>
              <p className="eyebrow">Get in Touch</p>
              <p className="chapter-label">Final Call</p>
              <h2>Ready to source your next car?</h2>
            </div>
            <div className="cta-copy">
              <p>
                Use this as the lead-in for a contact form, inquiry flow, or
                direct outreach. It is already structured to support a customer
                buildout.
              </p>
              <div className="cta-actions">
                <a className="button button-primary" href="mailto:hello@walltapgarage.com">
                  Email Walltap
                </a>
                <a
                  className="button button-secondary"
                  href="https://walltapgarage.com/contact"
                >
                  Current Contact Page
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </div>
  );
}
