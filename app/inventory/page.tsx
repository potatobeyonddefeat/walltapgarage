import { PageShell } from "../../components/page-shell";
import { InventoryBrowser } from "../../components/inventory-browser";
import { inventoryVehicles } from "../../lib/site-content";

const allowedCategories = new Set(["all", "jdm", "european", "new-arrivals"]);

type InventoryPageProps = {
  searchParams?: Promise<{
    body?: string;
    category?: string;
    q?: string;
    status?: string;
  }>;
};

export default async function InventoryPage({ searchParams }: InventoryPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const requestedCategory = resolvedSearchParams?.category ?? "all";
  const initialCategory = allowedCategories.has(requestedCategory) ? requestedCategory : "all";

  return (
    <PageShell>
      <main>
        <section className="section page-intro">
          <InventoryBrowser
            initialBodyStyle={resolvedSearchParams?.body ?? ""}
            initialCategory={initialCategory as "all" | "jdm" | "european" | "new-arrivals"}
            initialSearch={resolvedSearchParams?.q ?? ""}
            initialStatus={resolvedSearchParams?.status ?? ""}
            vehicles={inventoryVehicles}
          />
        </section>
      </main>
    </PageShell>
  );
}
