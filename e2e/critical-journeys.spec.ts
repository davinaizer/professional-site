import { expect, test } from "@playwright/test";

test("renders a durable route when opened directly", async ({ page }) => {
	await page.goto("/work");

	await expect(page).toHaveURL(/\/work$/);
	await expect(page.getByRole("heading", { name: "Work" })).toBeVisible();
	await expect(page.getByRole("link", { name: "Work" })).toHaveAttribute(
		"aria-current",
		"page",
	);
});

test("navigates through the shell and Work routes", async ({ page }) => {
	await page.goto("/");

	const primaryNavigation = page.getByRole("navigation", { name: "Primary" });

	await primaryNavigation.getByRole("link", { name: "Experience" }).click();
	await expect(page).toHaveURL(/\/experience$/);
	await expect(page.getByRole("heading", { name: "Experience" })).toBeVisible();

	await primaryNavigation.getByRole("link", { name: "Work" }).click();
	await expect(page).toHaveURL(/\/work$/);
	await expect(page.getByRole("heading", { name: "Work" })).toBeVisible();

	await page.getByRole("link", { name: "Selected projects" }).click();
	await expect(page).toHaveURL(/\/projects$/);
	await expect(
		page.getByRole("heading", { name: "Selected Projects" }),
	).toBeVisible();
	await expect(
		page.getByRole("heading", {
			name: "Vessel List Template Administration",
		}),
	).toBeVisible();

	await page.goto("/work");
	await page.getByRole("link", { name: "Case studies" }).click();
	await expect(page).toHaveURL(/\/case-studies$/);
	await expect(
		page.getByRole("heading", { name: "Case Studies" }),
	).toBeVisible();

	await primaryNavigation.getByRole("link", { name: "Engineering" }).click();
	await expect(page).toHaveURL(/\/engineering$/);
	await expect(
		page.getByRole("heading", { name: "Engineering" }),
	).toBeVisible();

	await primaryNavigation.getByRole("link", { name: "Resume" }).click();
	await expect(page).toHaveURL(/\/resume$/);
	await expect(page.getByRole("heading", { name: "Resume" })).toBeVisible();

	await page.getByRole("banner").getByRole("link", { name: "Contact" }).click();
	await expect(page).toHaveURL(/\/contact$/);
	await expect(page.getByRole("heading", { name: "Contact" })).toBeVisible();
});

test("supports keyboard traversal through the shell navigation", async ({
	page,
}) => {
	await page.goto("/");
	await page.evaluate(() => document.body.focus());

	const header = page.getByRole("banner");
	const links = [
		header.getByRole("link", { name: "Davi Naizer Santos" }),
		header
			.getByRole("navigation", { name: "Primary" })
			.getByRole("link", { name: "Experience" }),
		header
			.getByRole("navigation", { name: "Primary" })
			.getByRole("link", { name: "Work" }),
		header
			.getByRole("navigation", { name: "Primary" })
			.getByRole("link", { name: "Engineering" }),
		header
			.getByRole("navigation", { name: "Primary" })
			.getByRole("link", { name: "Resume" }),
		header.getByRole("link", { name: "Contact" }),
	];

	for (const link of links) {
		await page.keyboard.press("Tab");
		await expect(link).toBeFocused();
	}
});

test("keeps shell links visible without horizontal overflow at a narrow viewport", async ({
	page,
}) => {
	await page.setViewportSize({ width: 390, height: 844 });
	await page.goto("/");

	const header = page.getByRole("banner");
	for (const name of [
		"Davi Naizer Santos",
		"Experience",
		"Work",
		"Engineering",
		"Resume",
		"Contact",
	]) {
		await expect(header.getByRole("link", { name })).toBeVisible();
	}

	const hasHorizontalOverflow = await page.evaluate(
		() =>
			document.documentElement.scrollWidth >
			document.documentElement.clientWidth,
	);
	expect(hasHorizontalOverflow).toBe(false);
});

test("recovers from an unknown route", async ({ page }) => {
	await page.goto("/unknown-route");

	await expect(
		page.getByRole("heading", { name: "Page Not Found" }),
	).toBeVisible();

	await page
		.getByRole("link", { name: "Click here to go back to the homepage." })
		.click();
	await expect(page).toHaveURL(/\/$/);
	await expect(
		page.getByRole("heading", { name: "Davi Naizer Santos" }),
	).toBeVisible();
});
