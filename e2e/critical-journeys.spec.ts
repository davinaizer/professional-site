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

test("navigates from home through representative application routes", async ({
	page,
}) => {
	await page.goto("/");

	await page.getByRole("link", { name: "Explore experience" }).click();
	await expect(page).toHaveURL(/\/experience$/);
	await expect(page.getByRole("heading", { name: "Experience" })).toBeVisible();

	await page.getByRole("link", { name: "Work" }).click();
	await expect(page).toHaveURL(/\/work$/);
	await expect(page.getByRole("heading", { name: "Work" })).toBeVisible();

	await page.getByRole("link", { name: "Contact" }).click();
	await expect(page).toHaveURL(/\/contact$/);
	await expect(page.getByRole("heading", { name: "Contact" })).toBeVisible();
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
