const nextConfig = {
  assetPrefix: '.',
  optimizeFonts: true,
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/ru": { page: "/ru" },
      "/en": { page: "/en" },
    };
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    })
    return config;
  },
}

module.exports = nextConfig;
