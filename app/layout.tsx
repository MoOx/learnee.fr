import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter_Tight } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
});

export const metadata: Metadata = {
  title: "Learnee - Conseil en stratégie et innovation pédagogique",
  description:
    "Ingénieure en sciences cognitives, spécialiste du Learning Experience Design (LXD). Conseil en stratégie et innovation pédagogique pour des expériences d'apprentissage engageantes.",
  keywords: [
    "learning experience design",
    "LXD",
    "innovation pédagogique",
    "sciences cognitives",
    "formation",
    "e-learning",
    "UX learning",
  ],
  authors: [{ name: "Hélène Perez" }],
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${interTight.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
