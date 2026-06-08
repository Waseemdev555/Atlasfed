import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atlas Federal Technologies | Secure. Scalable. Mission-Driven.",
  description:
    "Delivering intelligent, modernized IT solutions to federal, state, and local government agencies, built for mission-critical outcomes.",
  keywords: [
    "federal IT consulting",
    "government IT solutions",
    "cybersecurity",
    "cloud infrastructure",
    "digital transformation",
  ],
  openGraph: {
    title: "Atlas Federal Technologies",
    description:
      "Delivering intelligent, modernized IT solutions to federal, state, and local government agencies.",
    type: "website",
    url: "https://atlasfedtech.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-navy-900">
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
