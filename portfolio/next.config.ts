import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://images.unsplash.com/**?w=1080")],
  },
};

export default nextConfig;
