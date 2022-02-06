const nextConfig = {
  assetPrefix: '.',
  optimizeFonts: true,
  reactStrictMode: true,
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
    };
  },
  
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    })
    return config;
  }
}

module.exports = nextConfig;
