const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  // disable is help to disable PWA in deployment mode
});
/** @type {import('next').NextConfig} */
module.exports = withPWA({
  swcMinify: true,
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["res.cloudinary.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    // formats: ['image/webp'],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
  },
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
    scrollrestoration: true,
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },
});
