import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

type PageShellProps = {
  children: React.ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="page-shell">
      <SiteHeader />
      <div className="page-shell__content">{children}</div>
      <SiteFooter />
    </div>
  );
}
