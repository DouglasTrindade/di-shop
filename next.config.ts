import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: "/",
        destination: "/admin",
      },
      {
        source: "/admin/:path*",
        destination: "/admin/:path*",
      },
    ];
  },
};

export default nextConfig;
