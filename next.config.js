const withPWA = require("@ducanh2912/next-pwa").default({
	dest: "public",
	cacheOnFrontEndNav: true,
	aggressiveFrontEndNavCaching: true,
	reloadOnOnline: true,
	swcMinify: true,
	disable: process.env.NODE_ENV === "development",
	// The built-in start URL rule has no network timeout, so it's replaced by
	// the "start-url" rule below
	dynamicStartUrl: false,
	extendDefaultRuntimeCaching: true,
	workboxOptions: {
		disableDevLogs: true,
		// After the phone has been idle the first request often stalls instead
		// of failing, which left a blank screen until a reload, so pages fall
		// back to their cached copy if the network hasn't answered in 3 seconds
		runtimeCaching: [
			{
				urlPattern: "/",
				handler: "NetworkFirst",
				options: {
					cacheName: "start-url",
					networkTimeoutSeconds: 3,
					plugins: [
						{
							// Keeps a redirect from the start URL usable offline
							cacheWillUpdate: async ({ response }) =>
								response && response.type === "opaqueredirect"
									? new Response(response.body, {
											status: 200,
											statusText: "OK",
											headers: response.headers,
										})
									: response,
						},
					],
				},
			},
			{
				urlPattern: ({ request, url: { pathname }, sameOrigin }) =>
					request.mode === "navigate" &&
					sameOrigin &&
					!pathname.startsWith("/api/"),
				handler: "NetworkFirst",
				options: {
					cacheName: "navigation",
					networkTimeoutSeconds: 3,
					expiration: {
						maxEntries: 32,
						maxAgeSeconds: 30 * 24 * 60 * 60,
					},
				},
			},
		],
	},
})

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Optimize production builds
	reactStrictMode: true,

	// Enable SWC minification for faster builds
	swcMinify: true,

	// Optimize images
	images: {
		formats: ["image/webp"],
		// The photos in public/img are at most 2000px, so never ask the optimiser
		// for bigger sizes: resizing large photos in parallel pushed the server
		// process past pm2's 512 MB limit and every image request got a 502.
		deviceSizes: [640, 750, 828, 1080, 1200, 1920],
		// Keep optimised images for a month instead of re-resizing every minute.
		minimumCacheTTL: 60 * 60 * 24 * 30,
	},

	// Compiler optimizations
	compiler: {
		// Remove console.log in production
		removeConsole:
			process.env.NODE_ENV === "production"
				? {
						exclude: ["error", "warn"],
					}
				: false,
	},

	// Experimental features for better performance
	experimental: {
		// Optimize package imports
		optimizePackageImports: [
			"lucide-react",
			"@radix-ui/react-popover",
			"@radix-ui/react-slot",
		],
	},

	// Disable powered by header
	poweredByHeader: false,

	// Development optimizations
	...(process.env.NODE_ENV === "development" && {
		// Reduce memory usage in development
		onDemandEntries: {
			// Period (in ms) where the server will keep pages in the buffer
			maxInactiveAge: 25 * 1000,
			// Number of pages that should be kept simultaneously
			pagesBufferLength: 2,
		},
	}),
}

module.exports = withPWA(nextConfig)
