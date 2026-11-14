import { defineConfig, devices } from "@playwright/test"

/**
 * Browser smoke tests. They drive the app that's already running locally
 * (`npm run dev`), so start it before `npm run test:e2e`. The site is public,
 * so every test runs signed out.
 */
export default defineConfig({
	testDir: "tests/e2e",
	fullyParallel: true,
	// `next dev` compiles each page on its first visit, which can take a while.
	workers: 3,
	timeout: 60_000,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 1 : 0,
	reporter: process.env.CI ? "github" : "list",
	use: {
		baseURL: process.env.E2E_BASE_URL ?? "http://localhost:3000",
		trace: "retain-on-failure",
		screenshot: "only-on-failure",
		// The installed Chrome locally, so no browser download is needed.
		channel: process.env.CI ? undefined : "chrome",
	},
	projects: [
		{
			// The phone the apps are mostly used on: a Galaxy Z Fold6's cover
			// screen.
			name: "phone",
			use: {
				...devices["Galaxy S9+"],
				viewport: { width: 360, height: 780 },
			},
		},
	],
})
