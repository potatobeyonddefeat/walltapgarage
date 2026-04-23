import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Walltap Garage | Premium JDM and Euro Imports",
  description:
    "Walltap Garage sources, imports, and delivers premium Japanese and European vehicles for enthusiasts who want more than dealer inventory.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
