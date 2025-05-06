import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    GITHUB_ID: process.env.GITHUB_ID,
    GITHUB_SECRET: process.env.GITHUB_SECRET,
  },
  async rewrites() {
    return [
      // Auth
      {
        source: "/auth/:path*",
        destination: "/auth/:path*",
      },
      // Admin Area
      {
        source: "/admin/:path*",
        destination: "/admin/:path*",
      },
      // cliente Area
      {
        source: "/cliente/:path*",
        destination: "/cliente/:path*",
      },
    ];
  },
};

export default nextConfig;
