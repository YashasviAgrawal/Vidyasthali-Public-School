import type { Metadata } from "next";
import { Assistant, Cinzel, Tiro_Devanagari_Hindi } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { school } from "@/lib/site";

const body = Assistant({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});
const crest = Cinzel({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-crest",
  display: "swap",
});
const deva = Tiro_Devanagari_Hindi({
  subsets: ["devanagari", "latin"],
  weight: "400",
  variable: "--font-deva",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: `${school.name}, Durgapura, Jaipur`, template: `%s | ${school.name}` },
  description:
    "Vidyasthali Public School is a co-educational CBSE school (Affiliation No. 1730248) in Durgapura, Jaipur, teaching Nursery to Class XII in English medium.",
  icons: { icon: "/images/logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: browser extensions (Grammarly, Microsoft Editor, etc.) add attributes
    // to <html>/<body> before React loads. This only ignores attribute mismatches on these two tags.
    <html lang="en" className={`${body.variable} ${crest.variable} ${deva.variable}`} suppressHydrationWarning>
      <body className="pb-16 md:pb-0" suppressHydrationWarning>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded focus:bg-white focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
