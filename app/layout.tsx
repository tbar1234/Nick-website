import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pezzenteservices.com"),
  title: "Pezzente Services | Lawn Care & Property Maintenance in Glastonbury, CT",
  description:
    "Weekly lawn mowing, lawn maintenance, garden maintenance, mulching, and seasonal cleanups for residential and commercial properties in Glastonbury, CT. Larger landscaping projects available throughout the surrounding towns. Free estimates.",
  keywords: [
    "lawn mowing Glastonbury",
    "lawn maintenance Glastonbury CT",
    "garden maintenance",
    "commercial landscaping Glastonbury",
    "residential landscaping",
    "mulching services",
    "seasonal cleanups",
    "landscaping in Glastonbury CT",
  ],
  openGraph: {
    title: "Pezzente Services | Lawn Care & Property Maintenance",
    description:
      "Weekly lawn mowing, garden maintenance, mulching, and seasonal cleanups for homes and businesses in Glastonbury, CT — plus larger landscaping projects throughout the surrounding towns.",
    url: "https://www.pezzenteservices.com",
    siteName: "Pezzente Services",
    images: ["/images/hero-stone-steps.jpg"],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${plexMono.variable}`}
    >
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
