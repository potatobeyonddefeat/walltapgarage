"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "../lib/site-content";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="topbar">
        <Link className="brand" href="/">
          <img
            alt="Walltap Garage logo"
            className="brand-logo"
            src="https://rjdavx8ozyznxeyh.public.blob.vercel-storage.com/production/websites/generated-logos/db4f8c75-a766-4859-8999-e5f0037992ee-Gd0J9YdMy09ohXlu8fxlAE9hKgCjpn.png"
          />
          <span>Walltap Garage</span>
        </Link>

        <div className="desktop-nav">
          <nav className="nav-links" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link
                className={pathname === item.href ? "is-active" : ""}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link className="button button-primary header-cta" href="/contact">
            Contact Us
          </Link>
        </div>

        <div className="mobile-nav-shell">
          <button
            aria-controls="mobile-menu"
            aria-expanded={open}
            className="nav-toggle"
            onClick={() => setOpen((value) => !value)}
            type="button"
          >
            Menu
          </button>

          <div className={`mobile-nav ${open ? "is-open" : ""}`} id="mobile-menu">
            <div className="mobile-nav-frame">
              <p className="mobile-nav-kicker">Navigation</p>
              {navItems.map((item) => (
                <Link
                  className={pathname === item.href ? "is-active" : ""}
                  href={item.href}
                  key={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link className="button button-primary mobile-nav-cta" href="/contact">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
