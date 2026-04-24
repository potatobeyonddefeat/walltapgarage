"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems } from "../lib/site-content";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <header className="site-header">
      <div className="site-header__inner">
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

          <div className="site-header-mobile-shell">
            <button
              aria-controls="mobile-menu"
              aria-expanded={open}
              className="site-header-nav-toggle"
              onClick={() => setOpen((value) => !value)}
              type="button"
            >
              <span className="site-header-nav-toggle-box" aria-hidden="true">
                <span className="site-header-nav-toggle-line" />
                <span className="site-header-nav-toggle-line" />
                <span className="site-header-nav-toggle-line" />
              </span>
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            </button>
          </div>
        </div>
      </div>

      <div
        aria-hidden={!open}
        className={`site-header-mobile-nav ${open ? "is-open" : ""}`}
        id="mobile-menu"
        onClick={closeMenu}
      >
        <div className="site-header-mobile-nav-backdrop" />
        <div
          className="site-header-mobile-nav-frame"
          onClick={(event) => event.stopPropagation()}
        >
          <p className="site-header-mobile-nav-kicker">Navigation</p>
          <nav aria-label="Mobile navigation" className="site-header-mobile-nav-links">
            {navItems.map((item) => (
              <Link
                className={pathname === item.href ? "is-active" : ""}
                href={item.href}
                key={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            className="button button-primary site-header-mobile-nav-cta"
            href="/contact"
            onClick={closeMenu}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
