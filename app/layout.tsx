import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Kryptondo — Invest in Businesses You Love",
    template: "%s | Kryptondo",
  },
  description:
    "Kryptondo tokenizes business equity on Arbitrum. Invest in local businesses, earn real dividends, and get exclusive loyalty perks — starting from €100.",
  keywords: ["crowdinvesting", "tokenization", "equity", "dividends", "Arbitrum", "Malta SPV"],
  openGraph: {
    title: "Kryptondo — Invest in Businesses You Love",
    description: "Own real equity. Earn dividends. Get exclusive perks — starting from €100.",
    url: "https://kryptondo.de",
    siteName: "Kryptondo",
    locale: "en_EU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kryptondo",
    description: "Own real equity in businesses you love. Earn dividends. Get exclusive perks.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
