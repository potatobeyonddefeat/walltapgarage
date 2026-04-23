import Link from "next/link";
import {
  companyDetails,
  footerColumns,
  utilityLinks,
} from "../lib/site-content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand-block">
          <Link className="footer-brand-mark" href="/" aria-label="Walltap Garage home">
            <img
              alt="Walltap Garage logo"
              className="footer-brand-logo"
              src="https://rjdavx8ozyznxeyh.public.blob.vercel-storage.com/production/websites/generated-logos/db4f8c75-a766-4859-8999-e5f0037992ee-Gd0J9YdMy09ohXlu8fxlAE9hKgCjpn.png"
            />
          </Link>
          <div className="footer-brand-copy">
            <p className="footer-eyebrow">Walltap Garage</p>
            <p className="footer-mission">{companyDetails.mission}</p>
          </div>
        </div>

        <div className="footer-contact-grid">
          <a className="footer-contact-card" href={companyDetails.phoneHref}>
            <span className="footer-contact-label">Phone</span>
            <span className="footer-contact-value">{companyDetails.phoneDisplay}</span>
          </a>
          <a className="footer-contact-card" href={companyDetails.emailHref}>
            <span className="footer-contact-label">Email</span>
            <span className="footer-contact-value">{companyDetails.email}</span>
          </a>
          <div className="footer-contact-card">
            <span className="footer-contact-label">Location</span>
            <span className="footer-contact-value">{companyDetails.location}</span>
          </div>
        </div>

        <div className="footer-nav-grid">
          {footerColumns.map((column) => (
            <div className="footer-column" key={column.title}>
              <p className="footer-column-title">{column.title}</p>
              <div className="footer-column-links">
                {column.links.map((link) => (
                  <Link href={link.href} key={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="footer-socials" aria-label="Social media links">
          <a
            aria-label="Instagram"
            className="footer-social-link"
            href={companyDetails.instagramHref}
            rel="noreferrer"
            target="_blank"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
              <circle cx="12" cy="12" r="4.25" />
              <circle cx="17.25" cy="6.75" r="1.25" />
            </svg>
          </a>
          <a
            aria-label="Facebook"
            className="footer-social-link"
            href={companyDetails.facebookHref}
            rel="noreferrer"
            target="_blank"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M13.25 20.5v-7h2.6l.45-3h-3.05V8.65c0-.96.32-1.65 1.83-1.65h1.43V4.38c-.25-.03-1.1-.11-2.09-.11-2.92 0-4.66 1.53-4.66 4.69v1.54H7.5v3h2.24v7h3.51Z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="footer-utility">
        <div className="footer-utility-links">
          {utilityLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        <p className="footer-meta">© 2026 Walltap Garage LLC. All rights reserved.</p>
      </div>
    </footer>
  );
}
