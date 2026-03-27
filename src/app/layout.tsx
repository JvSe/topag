import type { Metadata, Viewport } from "next";
import { Geist_Mono, Inter, Manrope } from "next/font/google";

import { JsonLd } from "@/components/seo/json-ld";
import { SITE_CONTACT_EMAIL } from "@/lib/site-contact";
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

const baseUrl = (process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000").replace(
  /\/$/,
  ""
);
const metadataBase = new URL(baseUrl);

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "TOPAG | Topografia e Consultoria Ambiental",
    template: "%s | TOPAG",
  },
  description:
    "Soluções em topografia, georeferenciamento e consultoria ambiental em Palmas e região.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: baseUrl + "/",
    siteName: "TOPAG",
    title: "TOPAG | Topografia e Consultoria Ambiental",
    description:
      "Soluções em topografia, georeferenciamento e consultoria ambiental em Palmas e região.",
    images: [
      {
        url: baseUrl + "/images/photo01.jpg",
        alt: "TOPAG - Projetos e geodados",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TOPAG | Topografia e Consultoria Ambiental",
    description:
      "Soluções em topografia, georeferenciamento e consultoria ambiental em Palmas e região.",
    images: [baseUrl + "/images/photo01.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const whatsappE164 = process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? "5563984167175";
  const telephone = whatsappE164.startsWith("+") ? whatsappE164 : `+${whatsappE164}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "TOPAG",
        url: baseUrl + "/",
        inLanguage: "pt-BR",
      },
      {
        "@type": "Organization",
        name: "TOPAG",
        url: baseUrl + "/",
        foundingDate: "2000-01-01",
        email: SITE_CONTACT_EMAIL,
        logo: {
          "@type": "ImageObject",
          url: baseUrl + "/logo-topag.png",
        },
        areaServed: [
          {
            "@type": "City",
            name: "Palmas",
          },
          {
            "@type": "AdministrativeArea",
            name: "Tocantins",
          },
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer service",
            telephone,
            email: SITE_CONTACT_EMAIL,
          },
        ],
      },
    ],
  } satisfies Record<string, unknown>;

  return (
    <html
      lang="pt-BR"
      className={`${manrope.variable} ${inter.variable} ${geistMono.variable} light h-full scroll-smooth`}
    >
      <body className="min-h-full selection:bg-primary-fixed selection:text-primary">
        <JsonLd data={jsonLd} />
        {children}
      </body>
    </html>
  );
}
