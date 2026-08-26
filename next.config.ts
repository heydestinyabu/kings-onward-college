import type { NextConfig } from "next";
import { SITE_URL } from "@/lib/seo";

const nextConfig: NextConfig = {
  // ============================================================
  // SEO & Performance Headers
  // ============================================================
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
      {
        // Cache static assets for 1 year
        source: "/(logo|favicon|og-.*).(png|jpg|jpeg|svg|ico|webp)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Cache Next.js static files
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  // ============================================================
  // Image Optimization
  // ============================================================
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  // ============================================================
  // Redirects — enforce canonical URL
  // ============================================================
  async redirects() {
    return [
      // Redirect bare domain to www (choose one direction and stick with it)
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "kingsonwardcollege.edu.ng",
          },
        ],
        destination: "https://www.kingsonwardcollege.edu.ng/:path*",
        permanent: true,
      },
    ];
  },
  // ============================================================
  // General
  // ============================================================
  trailingSlash: false,
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
