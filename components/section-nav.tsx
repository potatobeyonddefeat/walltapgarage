"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#services", label: "Services", id: "services" },
  { href: "#inventory", label: "Inventory", id: "inventory" },
  { href: "#process", label: "Process", id: "process" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export function SectionNav() {
  const [active, setActive] = useState<string>("");

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

  return (
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
  );
}
