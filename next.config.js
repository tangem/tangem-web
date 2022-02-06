const withPlugins = require('next-compose-plugins')
const withSass = require('@zeit/next-sass')
const withImages = require('next-images')

const nextConfig = {
  assetPrefix: '.',
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

module.exports = withPlugins([
  // [withSass, {
  //   sassLoaderOptions: {
  //     includePaths: ['./styles/']
  //   },
  //   cssModules: true,
  // }],
  // [withImages],
  nextConfig
])
