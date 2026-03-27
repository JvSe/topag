import type { Metadata } from "next";
import { Geist_Mono, Inter, Manrope } from "next/font/google";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TOPAG | Topografia e Consultoria Ambiental",
  description:
    "Soluções em topografia, georeferenciamento e consultoria ambiental em Palmas e região.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${manrope.variable} ${inter.variable} ${geistMono.variable} light h-full scroll-smooth`}
    >
      <body className="min-h-full selection:bg-primary-fixed selection:text-primary">
        {children}
      </body>
    </html>
  );
}
