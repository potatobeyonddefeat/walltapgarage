"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#top", label: "Home", id: "top" },
  { href: "#inventory", label: "Inventory", id: "inventory" },
  { href: "#about", label: "About", id: "about" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export function SectionNav() {
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((node): node is HTMLElement => Boolean(node));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActive(visible.target.id);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0.2, 0.35, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);

    return () => window.removeEventListener("hashchange", close);
  }, []);

  return (
    <div className="nav-shell">
      <div className="nav-links" aria-label="Section navigation">
        {links.map((link) => (
          <a
            key={link.id}
            className={active === link.id ? "is-active" : ""}
            href={link.href}
          >
            {link.label}
          </a>
        ))}
      </div>

      <button
        aria-controls="mobile-navigation"
        aria-expanded={open}
        className="nav-toggle"
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        Menu
      </button>

      <div
        className={`mobile-nav ${open ? "is-open" : ""}`}
        id="mobile-navigation"
      >
        <div className="mobile-nav-frame">
          <p className="mobile-nav-kicker">Navigate</p>
          {links.map((link) => (
            <a
              key={link.id}
              className={active === link.id ? "is-active" : ""}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
