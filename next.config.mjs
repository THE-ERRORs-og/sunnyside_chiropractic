/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["encrypted-tbn0.gstatic.com"],
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.r2.dev',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Link",
            value:
              "<https://fonts.googleapis.com>; rel=preconnect; crossorigin",
          },
        ],
      },
    ];
  },
  webpack: (config, { dev }) => {
    if (!dev) {
      config.optimization.splitChunks.cacheGroups = {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      };
    }
    return config;
  },
};

export default nextConfig;
