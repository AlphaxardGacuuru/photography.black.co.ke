import { expect, test } from "@playwright/test"
import type { Page } from "@playwright/test"

const PAGES = ["/", "/about", "/services", "/portfolio", "/contact", "/contract"]

/** Collects uncaught errors and console errors while a page is open. */
function watchErrors(page: Page): string[] {
	const errors: string[] = []

	page.on("pageerror", (error) => errors.push(error.message))
	page.on("console", (message) => {
		if (message.type() === "error") {
			errors.push(message.text())
		}
	})

	return errors
}

/** The page's heading rendered, so the screen isn't blank or stuck loading. */
async function expectPageRendered(page: Page) {
	await expect(
		page
			.locator("main h1")
			.first()
	).toBeVisible({ timeout: 30_000 })
}

for (const path of PAGES) {
	test(`${path} opens and fits the phone screen`, async ({ page }) => {
		await page.goto(path)
		await expectPageRendered(page)
		await expect(page).toHaveURL(new RegExp(`${path}$`))
		await page.waitForLoadState("networkidle")

		const overflow = await page.evaluate(
			() => document.documentElement.scrollWidth - window.innerWidth
		)

		expect(overflow, "page is wider than the screen").toBeLessThanOrEqual(0)
	})

	// App bug: CsrfInitializer (in the root layout) requests
	// `/sanctum/csrf-cookie` from NEXT_PUBLIC_BACKEND_URL on every page, but this
	// public landing site has no Laravel backend. With no backend URL set the
	// request goes to the Next server itself, gets a 404, and the page logs
	// "Failed to load resource" and "Failed to initialize CSRF cookie" console
	// errors. Remove the fixme once the CSRF call (and the unused Breeze auth
	// code) is dropped or pointed at a real backend.
	test.fixme(`${path} opens without errors`, async ({ page }) => {
		const errors = watchErrors(page)

		await page.goto(path)
		await expectPageRendered(page)
		await page.waitForLoadState("networkidle")

		expect(errors).toEqual([])
	})

	test(`${path} has a single header`, async ({ page }) => {
		// App bug: the root layout and the (app) layout both render
		// <Navigation />, so every page except the home page has two headers and
		// two sliding menus stacked on top of each other. Remove the fixme once
		// (app)/layout.jsx stops rendering it.
		test.fixme(path !== "/", "the (app) layout renders the header a second time")

		await page.goto(path)
		await expectPageRendered(page)

		await expect(page.locator("header")).toHaveCount(1)
	})
}

test("the menu moves between pages", async ({ page }) => {
	await page.goto("/")
	await expectPageRendered(page)

	// The (app) pages render the header twice (see the fixme below), and a tap
	// lands on the last one since it sits on top.
	const openMenu = page
		.getByRole("button", { name: "Open navigation" })
		.last()
	const menu = page.locator("#sliding-nav.open")

	await openMenu.click()
	await menu
		.getByRole("link", { name: "Services" })
		.click()
	await expect(page).toHaveURL(/\/services$/)
	await expectPageRendered(page)

	await openMenu.click()
	await menu
		.getByRole("link", { name: "Portfolio" })
		.click()
	await expect(page).toHaveURL(/\/portfolio$/)
	await expectPageRendered(page)
})

test("the site still opens offline once the service worker has it", async ({ page, context }) => {
	await page.goto("/")
	await expectPageRendered(page)

	// next-pwa only builds the service worker for `next build`, so there's
	// nothing to test against `npm run dev`.
	const hasServiceWorker = await page.evaluate(() =>
		navigator.serviceWorker
			.getRegistration()
			.then((registration) => !!registration)
	)

	test.skip(!hasServiceWorker, "needs `next build && next start`, not `npm run dev`")

	await page.evaluate(() => navigator.serviceWorker.ready)
	// Load once under the service worker's control so it caches the page.
	await page.reload()
	await expectPageRendered(page)

	await context.setOffline(true)
	await page.reload()
	await expectPageRendered(page)
	await context.setOffline(false)
})
