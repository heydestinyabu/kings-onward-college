import type { Metadata, Viewport } from "next";
import {
  SITE_NAME,
  SITE_URL,
  SITE_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  TWITTER_HANDLE,
  pages,
  getSchoolJsonLd,
  getWebsiteJsonLd,
  getLocalBusinessJsonLd,
} from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ============================================================
// Root Metadata — applies to ALL pages unless overridden
// ============================================================
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: pages.home.title,
    template: `%s | ${SITE_NAME}`,
  },
  description: pages.home.description,
  keywords: pages.home.keywords,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: pages.home.title,
    description: pages.home.description,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Excellence in Education`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pages.home.title,
    description: pages.home.description,
    images: [DEFAULT_OG_IMAGE],
    creator: TWITTER_HANDLE,
    site: TWITTER_HANDLE,
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-NG": SITE_URL,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

// ============================================================
// Viewport — mobile-first configuration
// ============================================================
export const viewport: Viewport = {
  themeColor: "#0F1B2C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external origins for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800&family=Outfit:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Additional SEO & Performance hints */}
        <meta name="msapplication-TileColor" content="#0F1B2C" />
        <meta name="theme-color" content="#0F1B2C" />
        <meta name="geo.region" content="NG-ED" />
        <meta name="geo.placename" content="Benin City" />
        <meta name="geo.position" content="6.335;5.627" />
        <meta name="ICBM" content="6.335, 5.627" />
      </head>
      <body>
        {/* Global Structured Data — School + Website + LocalBusiness */}
        <JsonLd data={getSchoolJsonLd()} />
        <JsonLd data={getWebsiteJsonLd()} />
        <JsonLd data={getLocalBusinessJsonLd()} />

        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
