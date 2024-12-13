import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['rickandmortyapi.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rickandmortyapi.com/api'
      }
    ],
  },

};

export default nextConfig;
