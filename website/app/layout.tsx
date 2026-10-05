import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
// New section styles (pricing, FAQ, value props, contact, module panel).
// Kept separate from globals.css so the original file stays untouched.
import "./sections.css";
import SmoothScroll from "../components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site-config";

const display = Archivo({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | Software Development, Cybersecurity & Business Systems`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "Soramap",
    "custom software development Kenya",
    "cybersecurity firm",
    "HR and payroll software",
    "business management modules",
    "CRM",
    "POS",
  ],

  // Open Graph (For formatting links on WhatsApp, LinkedIn, X, etc.)
  openGraph: {
    title: `${SITE.name} | Software & Cybersecurity`,
    description: SITE.description,
    url: "https://soramaplabs.com",
    siteName: SITE.name,
    locale: "en_KE", // Tells search engines you are based in Kenya
    type: "website",
  },

  // Search Engine Crawling Directions
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
