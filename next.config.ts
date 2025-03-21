import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "placehold.co",
      },
      {
        hostname: "skkyjvdnikftxykbddoi.supabase.co",
      },
      {
        hostname: "flagcdn.com",
      },
      {
        hostname: "mundo-tours.s3.eu-central-1.amazonaws.com",
      },
    ],
    deviceSizes: [256, 384, 750, 1080, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128],

    dangerouslyAllowSVG: true,
  },
  logging: {
    fetches: { fullUrl: true, hmrRefreshes: true },
    incomingRequests: true,
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
    allowedDevOrigins: ["timetravel.localhost"],
  },
};

export default nextConfig;
