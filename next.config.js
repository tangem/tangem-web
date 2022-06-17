const nextConfig = {

  optimizeFonts: true,
	trailingSlash: true,

	async headers() {
		return [
			{
				source: '/:all*(svg|jpg|png|avif|webp|woff2)',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=9999999999, must-revalidate',
					}
				],
			},
		]
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
