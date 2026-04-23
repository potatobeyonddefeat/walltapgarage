import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://walltapgarage.com";
const siteTitle = "Walltap Garage LLC - Premium Japanese and European Vehicles";
const siteDescription =
  "Walltap Garage LLC is a boutique automotive business based in Tomball, Houston, Texas, specializing in the sourcing, importation, and resale of premium Japanese and European vehicles.";
const organizationDescription =
  "Walltap Garage LLC is a boutique automotive business based in Tomball, Houston, Texas, specializing in the sourcing, importation, and resale of premium Japanese and European vehicles. Catering to enthusiasts and car culture, this professional LLC operation focuses on iconic models such as Nissan Skylines, Toyota Crowns, and Mazda MX-5s. By providing a modern and sleek brand experience, Walltap Garage makes the process of importing high-quality JDM and Euro cars accessible to buyers across the United States.";
const ogImage = `${siteUrl}/durable-og`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Walltap Garage LLC",
      url: siteUrl,
      description: organizationDescription,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Houston",
        addressLocality: "Houston",
        addressRegion: "Texas",
        addressCountry: "US",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: "2817458884",
          email: "iancuandre@yahoo.com",
        },
      ],
      email: "iancuandre@yahoo.com",
      telephone: "2817458884",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${siteUrl}/`,
      name: siteTitle,
      description: siteDescription,
      url: `${siteUrl}/`,
      about: {
        "@id": `${siteUrl}/#organization`,
      },
      mainEntity: {
        "@id": `${siteUrl}/#organization`,
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  applicationName: siteTitle,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: siteTitle,
    locale: "en",
    type: "website",
    images: [
      {
        url: ogImage,
        type: "image/png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [ogImage],
  },
  icons: {
    icon: [
      { url: "/icon?size=32", sizes: "32x32", type: "image/png" },
      { url: "/icon", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/icon?size=apple", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#FCFCFC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bodyFont.variable}>
        {children}
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          id="json-schema"
          type="application/ld+json"
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
