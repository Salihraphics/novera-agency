import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Novera Agency - Dijital Ajanstır",
  description: "Markaların dijital dünyada güçlü bir kimlik kazanmasına yardımcı oluyoruz. Web tasarım, sosyal medya ve dijital pazarlama hizmetleri.",
  keywords: "web tasarım, dijital pazarlama, sosyal medya, video düzenleme, ajanstır",
  openGraph: {
    title: "Novera Agency - Dijital Ajanstır",
    description: "Markaların dijital dünyada güçlü bir kimlik kazanmasına yardımcı oluyoruz.",
    url: "https://noveragency.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
