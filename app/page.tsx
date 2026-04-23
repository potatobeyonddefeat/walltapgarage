const metrics = [
  {
    number: "01",
    copy: "Auction sourcing and acquisition support",
  },
  {
    number: "02",
    copy: "Shipping and import coordination to the U.S.",
  },
  {
    number: "03",
    copy: "Hand-picked inventory for serious enthusiasts",
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

export default function Home() {
  return (
    <div className="page-shell">
      <header className="hero" id="top">
        <nav className="topbar">
          <a className="brand" href="#top">
            <span className="brand-mark" />
            <span>Walltap Garage</span>
          </a>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#inventory">Inventory</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-grid">
          <section className="hero-copy">
            <p className="eyebrow">Houston, Texas</p>
            <h1>Rare imports, sourced with taste and delivered without dealership noise.</h1>
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

          <aside className="hero-panel">
            <div className="panel-label">Current Focus</div>
            <div className="signal-card">
              <p className="signal-kicker">Specialty</p>
              <p className="signal-value">JDM + Euro Imports</p>
            </div>
            <div className="signal-card">
              <p className="signal-kicker">Approach</p>
              <p className="signal-value">Curated sourcing over mass listings</p>
            </div>
            <div className="signal-card">
              <p className="signal-kicker">Client Fit</p>
              <p className="signal-value">
                Drivers who know exactly what standard they want
              </p>
            </div>
          </aside>
        </div>

        <div className="metrics-strip">
          {metrics.map((metric) => (
            <div key={metric.number}>
              <p className="metric-number">{metric.number}</p>
              <p className="metric-copy">{metric.copy}</p>
            </div>
          ))}
        </div>
      </header>

      <main>
        <section className="section" id="services">
          <div className="section-head">
            <p className="eyebrow">What Walltap Does</p>
            <h2>A sharper alternative to generic import listings.</h2>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.index}>
                <p className="card-index">{feature.index}</p>
                <h3>{feature.title}</h3>
                <p>{feature.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-band" id="inventory">
          <div className="section-head split-head">
            <div>
              <p className="eyebrow">Inventory Direction</p>
              <h2>Cars with actual taste behind them.</h2>
            </div>
            <p className="section-note">
              The brand is not "cheap imports." It is premium Japanese and
              European vehicles for buyers who care about the right spec, the
              right look, and the right process.
            </p>
          </div>
          <div className="inventory-grid">
            <article className="inventory-card inventory-card-wide">
              <p className="inventory-tag">Featured Types</p>
              <h3>Silvias, Chasers, Supras, Skylines, and standout Euros.</h3>
              <p>
                Walltap focuses on enthusiast cars with identity, not anonymous
                commuter inventory. The selection should feel narrow on purpose.
              </p>
            </article>
            <article className="inventory-card">
              <p className="inventory-tag">JDM</p>
              <h3>Driver-focused icons</h3>
            </article>
            <article className="inventory-card">
              <p className="inventory-tag">Euro</p>
              <h3>Rare prestige inventory</h3>
            </article>
            <article className="inventory-card">
              <p className="inventory-tag">Standards</p>
              <h3>Condition, authenticity, and presence first</h3>
            </article>
          </div>
        </section>

        <section className="section" id="process">
          <div className="section-head">
            <p className="eyebrow">Process</p>
            <h2>Built to feel direct and informed, not sales-heavy.</h2>
          </div>
          <div className="process-grid">
            {processSteps.map((step) => (
              <article className="process-step" key={step.number}>
                <p className="step-number">{step.number}</p>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section founder-section">
          <div className="founder-card">
            <p className="eyebrow">About the Brand</p>
            <h2>Curated imports for people who know what they are looking at.</h2>
            <p>
              Founded by Andre Iancu, Walltap Garage is built around a simple
              position: enthusiasts deserve a sourcing process that feels sharp,
              transparent, and aligned with real car culture. That means fewer
              filler listings, better taste, and more attention on the details
              that actually matter.
            </p>
          </div>
        </section>

        <section className="section cta-section" id="contact">
          <div className="cta-card">
            <div>
              <p className="eyebrow">Get in Touch</p>
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
          </div>
        </section>
      </main>
    </div>
  );
}
