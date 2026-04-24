"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { startTransition, useDeferredValue, useEffect, useState } from "react";
import type { CSSProperties } from "react";
import type { InventoryVehicle } from "../lib/site-content";
import styles from "./inventory-browser.module.css";

const categoryOptions = [
  { value: "all", label: "All inventory" },
  { value: "jdm", label: "JDM imports" },
  { value: "european", label: "European imports" },
  { value: "new-arrivals", label: "New arrivals" },
] as const;

type InventoryCategory = (typeof categoryOptions)[number]["value"];

type InventoryBrowserProps = {
  vehicles: InventoryVehicle[];
  initialCategory: InventoryCategory;
  initialSearch: string;
  initialStatus: string;
  initialBodyStyle: string;
};

function formatCategoryLabel(category: InventoryCategory) {
  return categoryOptions.find((option) => option.value === category)?.label ?? "All inventory";
}

function getPriceBand(priceValue: number) {
  if (priceValue < 35000) {
    return "Under $35k";
  }

  if (priceValue < 55000) {
    return "$35k to $55k";
  }

  return "$55k+";
}

export function InventoryBrowser({
  vehicles,
  initialCategory,
  initialSearch,
  initialStatus,
  initialBodyStyle,
}: InventoryBrowserProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [category, setCategory] = useState<InventoryCategory>(initialCategory);
  const [status, setStatus] = useState(initialStatus);
  const [bodyStyle, setBodyStyle] = useState(initialBodyStyle);
  const deferredSearchTerm = useDeferredValue(searchTerm);

  useEffect(() => {
    setSearchTerm(initialSearch);
    setCategory(initialCategory);
    setStatus(initialStatus);
    setBodyStyle(initialBodyStyle);
  }, [initialBodyStyle, initialCategory, initialSearch, initialStatus]);

  useEffect(() => {
    const params = new URLSearchParams();

    if (category !== "all") {
      params.set("category", category);
    }

    if (searchTerm.trim()) {
      params.set("q", searchTerm.trim());
    }

    if (status) {
      params.set("status", status);
    }

    if (bodyStyle) {
      params.set("body", bodyStyle);
    }

    const nextUrl = params.toString() ? `${pathname}?${params.toString()}` : pathname;

    startTransition(() => {
      router.replace(nextUrl, { scroll: false });
    });
  }, [bodyStyle, category, pathname, router, searchTerm, status]);

  const bodyOptions = Array.from(new Set(vehicles.map((vehicle) => vehicle.bodyStyle)));
  const statusOptions = Array.from(new Set(vehicles.map((vehicle) => vehicle.status)));

  const filteredVehicles = vehicles.filter((vehicle) => {
    const normalizedQuery = deferredSearchTerm.trim().toLowerCase();
    const matchesSearch =
      normalizedQuery.length === 0 ||
      [
        vehicle.year,
        vehicle.make,
        vehicle.model,
        vehicle.body,
        vehicle.bodyStyle,
        vehicle.chassis,
        vehicle.source,
        vehicle.status,
        vehicle.regionLabel,
        vehicle.location,
        ...vehicle.highlights,
      ]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery);

    const matchesCategory =
      category === "all"
        ? true
        : category === "new-arrivals"
          ? vehicle.newArrival
          : vehicle.category === category;

    const matchesStatus = status ? vehicle.status === status : true;
    const matchesBodyStyle = bodyStyle ? vehicle.bodyStyle === bodyStyle : true;

    return matchesSearch && matchesCategory && matchesStatus && matchesBodyStyle;
  });

  const activeVehicles = vehicles.filter((vehicle) => vehicle.status === "Available").length;
  const incomingVehicles = vehicles.filter((vehicle) => vehicle.status === "Incoming").length;
  const avgPrice = Math.round(
    vehicles.reduce((sum, vehicle) => sum + vehicle.priceValue, 0) / vehicles.length,
  );
  const hasActiveFilters =
    category !== "all" || searchTerm.trim().length > 0 || status.length > 0 || bodyStyle.length > 0;

  return (
    <div className={styles.inventorySection}>
      <section className={styles.hero}>
        <div className={styles.heroTop}>
          <div className={styles.heroText}>
            <p className={styles.eyebrow}>Inventory</p>
            <h1 className={styles.headline}>Search inventory with the details buyers actually ask for.</h1>
            <p className={styles.lede}>
              Filter current stock, incoming units, and sourcing opportunities by region, body
              style, and availability before you call. Every listing is framed around condition,
              purchase path, and what happens next.
            </p>
          </div>

          <aside className={styles.trustPanel} aria-label="Buyer confidence notes">
            <p className={styles.trustTitle}>What Walltap shows up front</p>
            <p className={styles.trustCopy}>
              Current availability, sourcing channel, location context, and inspection-oriented
              notes stay visible on every result so buyers can sort fast without losing confidence.
            </p>
          </aside>
        </div>

        <div className={styles.heroStats}>
          <div className={styles.stat}>
            <p className={styles.statValue}>{vehicles.length}</p>
            <p className={styles.statLabel}>Vehicles across Japanese and European inventory.</p>
          </div>
          <div className={styles.stat}>
            <p className={styles.statValue}>{activeVehicles}</p>
            <p className={styles.statLabel}>Ready to view or discuss immediately.</p>
          </div>
          <div className={styles.stat}>
            <p className={styles.statValue}>{incomingVehicles}</p>
            <p className={styles.statLabel}>Inbound units buyers can reserve early.</p>
          </div>
          <div className={styles.stat}>
            <p className={styles.statValue}>${avgPrice.toLocaleString()}</p>
            <p className={styles.statLabel}>Average ticket across current listings.</p>
          </div>
        </div>
      </section>

      <section className={styles.filters} aria-label="Inventory filters">
        <div className={styles.filterHeader}>
          <div>
            <p className={styles.filterTitle}>Refine inventory</p>
            <p className={styles.filterMeta}>
              {filteredVehicles.length} result{filteredVehicles.length === 1 ? "" : "s"} shown
              {category !== "all" ? ` in ${formatCategoryLabel(category).toLowerCase()}` : ""}.
            </p>
          </div>

          {hasActiveFilters ? (
            <button
              className={styles.clearButton}
              onClick={() => {
                setSearchTerm("");
                setCategory("all");
                setStatus("");
                setBodyStyle("");
              }}
              type="button"
            >
              Clear filters
            </button>
          ) : null}
        </div>

        <div className={styles.categoryRow} role="tablist" aria-label="Inventory categories">
          {categoryOptions.map((option) => (
            <button
              aria-selected={category === option.value}
              className={`${styles.chip} ${category === option.value ? styles.chipActive : ""}`}
              key={option.value}
              onClick={() => setCategory(option.value)}
              role="tab"
              type="button"
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className={styles.searchRow}>
          <label className={styles.field}>
            <span className={styles.fieldLabel}>Search</span>
            <input
              className={styles.input}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search make, model, chassis, source, or notes"
              type="search"
              value={searchTerm}
            />
          </label>

          <label className={styles.field}>
            <span className={styles.fieldLabel}>Availability</span>
            <select
              className={styles.select}
              onChange={(event) => setStatus(event.target.value)}
              value={status}
            >
              <option value="">All statuses</option>
              {statusOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label className={styles.field}>
            <span className={styles.fieldLabel}>Body style</span>
            <select
              className={styles.select}
              onChange={(event) => setBodyStyle(event.target.value)}
              value={bodyStyle}
            >
              <option value="">All body styles</option>
              {bodyOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>
      </section>

      {filteredVehicles.length > 0 ? (
        <section className={styles.resultsGrid} aria-live="polite">
          {filteredVehicles.map((vehicle) => (
            <article className={styles.card} key={vehicle.id}>
              <div
                className={`${styles.cardMedia} ${vehicle.imageClass}`}
                style={
                  {
                    "--vehicle-base": vehicle.palette.base,
                    "--vehicle-accent": vehicle.palette.accent,
                    "--vehicle-glow": vehicle.palette.glow,
                    "--vehicle-position": vehicle.imagePosition,
                    "--vehicle-mobile-position": vehicle.mobileImagePosition,
                  } as CSSProperties
                }
              >
                <div className={styles.mediaInner}>
                  <div className={styles.mediaTopline}>
                    <span className={styles.badge}>{vehicle.regionLabel}</span>
                    <span className={styles.badge}>{vehicle.status}</span>
                    {vehicle.newArrival ? (
                      <span className={`${styles.badge} ${styles.newArrivalBadge}`}>New arrival</span>
                    ) : null}
                  </div>
                  <h2 className={styles.cardTitle}>
                    {vehicle.year} {vehicle.make}
                  </h2>
                  <p className={styles.cardMeta}>
                    {vehicle.model} · {vehicle.body} · {getPriceBand(vehicle.priceValue)}
                  </p>
                </div>
              </div>

              <div className={styles.cardBody}>
                <div className={styles.priceRow}>
                  <div className={styles.priceBlock}>
                    <p className={styles.priceLabel}>As listed</p>
                    <p className={styles.priceValue}>{vehicle.price}</p>
                  </div>
                  <p className={styles.location}>{vehicle.location}</p>
                </div>

                <div className={styles.specGrid}>
                  <div className={styles.spec}>
                    <p className={styles.specLabel}>Model</p>
                    <p className={styles.specValue}>{vehicle.model}</p>
                  </div>
                  <div className={styles.spec}>
                    <p className={styles.specLabel}>Transmission</p>
                    <p className={styles.specValue}>{vehicle.transmission}</p>
                  </div>
                  <div className={styles.spec}>
                    <p className={styles.specLabel}>Mileage</p>
                    <p className={styles.specValue}>{vehicle.mileage}</p>
                  </div>
                  <div className={styles.spec}>
                    <p className={styles.specLabel}>Source</p>
                    <p className={styles.specValue}>{vehicle.source}</p>
                  </div>
                </div>

                <div className={styles.highlights}>
                  <p className={styles.highlightLabel}>Buyer notes</p>
                  <ul className={styles.highlightList}>
                    {vehicle.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.actions}>
                  <Link
                    className="button button-primary"
                    href={`/contact?inquiry=inventory&vehicle=${encodeURIComponent(
                      `${vehicle.year} ${vehicle.make} ${vehicle.model}`,
                    )}`}
                  >
                    Ask About This Vehicle
                  </Link>
                  <Link
                    className="button button-secondary"
                    href={`/contact?inquiry=inventory&vehicle=${encodeURIComponent(
                      `${vehicle.year} ${vehicle.make} ${vehicle.model}`,
                    )}&timeline=30-days`}
                  >
                    Schedule a Viewing
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>
      ) : (
        <section className={styles.emptyState} aria-live="polite">
          <h2 className={styles.emptyTitle}>No vehicles match that filter set.</h2>
          <p className={styles.emptyCopy}>
            Try clearing one of the filters or broaden the search terms. If you still do not see
            the right fit, use the contact form for a direct sourcing conversation.
          </p>
          <div className={styles.actions}>
            <button
              className="button button-secondary"
              onClick={() => {
                setSearchTerm("");
                setCategory("all");
                setStatus("");
                setBodyStyle("");
              }}
              type="button"
            >
              Reset inventory filters
            </button>
            <Link className="button button-primary" href="/contact?inquiry=source">
              Start a Sourcing Request
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
