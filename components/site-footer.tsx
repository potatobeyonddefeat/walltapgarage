import Link from "next/link";
import { navItems } from "../lib/site-content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">Walltap Garage LLC</div>
      <div className="footer-links">
        {navItems.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </div>
      <p className="footer-meta">© 2026 Walltap Garage LLC. All rights reserved.</p>
    </footer>
  );
}
