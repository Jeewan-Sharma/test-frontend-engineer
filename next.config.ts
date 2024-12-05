import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'i.imgur.com',
      'api.escuelajs.co',
      'pravatar.cc' // Add this domain here
    ],
  },
};

export default nextConfig;
