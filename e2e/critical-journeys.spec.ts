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

	await page.getByRole("link", { name: "Explore projects" }).click();
	await expect(page).toHaveURL(/\/projects$/);
	await expect(
		page.getByRole("heading", { name: "Selected Projects" }),
	).toBeVisible();
	await expect(
		page.getByRole("heading", {
			name: "Vessel List Template Administration",
		}),
	).toBeVisible();

	await page
		.getByRole("link", {
			name: "Senior Frontend Software Engineer at The Signal Group",
		})
		.click();
	await expect(page).toHaveURL(
		/\/experience#signal-group-senior-frontend-software-engineer-2023-2024$/,
	);
	await expect(
		page.locator("#signal-group-senior-frontend-software-engineer-2023-2024"),
	).toBeVisible();

	await page.goto("/work");
	await page.getByRole("link", { name: "Read case studies" }).click();
	await expect(page).toHaveURL(/\/case-studies$/);
	await expect(
		page.getByRole("heading", { name: "Case Studies" }),
	).toBeVisible();

	await primaryNavigation.getByRole("link", { name: "Resume" }).click();
	await expect(page).toHaveURL(/\/resume$/);
	await expect(page.getByRole("heading", { name: "Resume" })).toBeVisible();

	await page.getByRole("banner").getByRole("link", { name: "Contact" }).click();
	await expect(page).toHaveURL(/\/contact$/);
	await expect(page.getByRole("heading", { name: "Contact" })).toBeVisible();
});

test("restores the top of the destination after navigating from the bottom", async ({
	page,
}) => {
	await page.goto("/experience");
	await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
	await expect
		.poll(() => page.evaluate(() => window.scrollY))
		.toBeGreaterThan(0);

	await page
		.getByRole("navigation", { name: "Continue exploring" })
		.getByRole("link", { name: "Explore selected work" })
		.click();

	await expect(page).toHaveURL(/\/work$/);
	await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
});

test("continues between long-form routes", async ({ page }) => {
	const continuations = [
		{
			from: "/experience",
			label: "Explore selected work",
			to: /\/work$/,
		},
		{
			from: "/projects",
			label: "Read the case studies",
			to: /\/case-studies$/,
		},
		{
			from: "/case-studies",
			label: "View the career context",
			to: /\/experience$/,
		},
		{
			from: "/resume",
			label: "Get in touch",
			to: /\/contact$/,
		},
	] as const;

	for (const { from, label, to } of continuations) {
		await page.goto(from);
		await page
			.getByRole("navigation", { name: "Continue exploring" })
			.getByRole("link", { name: label })
			.click();
		await expect(page).toHaveURL(to);
	}
});

test("keeps contextual continuations usable at a narrow viewport", async ({
	page,
}) => {
	const continuations = [
		{ path: "/experience", label: "Explore selected work" },
		{ path: "/projects", label: "Read the case studies" },
		{ path: "/case-studies", label: "View the career context" },
		{ path: "/resume", label: "Get in touch" },
	] as const;

	await page.setViewportSize({ width: 320, height: 900 });

	for (const { path, label } of continuations) {
		await page.goto(path);

		const continuation = page.getByRole("navigation", {
			name: "Continue exploring",
		});
		await expect(continuation).toBeVisible();
		await expect(continuation.getByRole("link", { name: label })).toBeVisible();

		const hasHorizontalOverflow = await page.evaluate(
			() =>
				document.documentElement.scrollWidth >
				document.documentElement.clientWidth,
		);
		expect(hasHorizontalOverflow).toBe(false);
	}
});

test("does not duplicate list separators before continuations", async ({
	page,
}) => {
	for (const path of ["/experience", "/projects", "/case-studies"]) {
		await page.goto(path);

		await expect(
			page.getByRole("navigation", { name: "Continue exploring" }),
		).toHaveCSS("border-top-width", "0px");
	}
});

test("supports keyboard traversal through the shell navigation", async ({
	page,
}) => {
	await page.goto("/");
	await page.evaluate(() => document.body.focus());

	const header = page.getByRole("banner");
	const links = [
		header.getByRole("link", { name: "Davi Naizer" }),
		header
			.getByRole("navigation", { name: "Primary" })
			.getByRole("link", { name: "Experience" }),
		header
			.getByRole("navigation", { name: "Primary" })
			.getByRole("link", { name: "Work" }),
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
		"Davi Naizer",
		"Experience",
		"Work",
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
	await expect(
		page.getByText("The page you requested does not exist or may have moved."),
	).toBeVisible();

	await page.getByRole("link", { name: "Return home" }).click();
	await expect(page).toHaveURL(/\/$/);
	await expect(
		page.getByRole("heading", { name: "Davi Naizer" }),
	).toBeVisible();
});

test("does not expose removed routes", async ({ page }) => {
	for (const path of ["/engineering", "/summary"]) {
		await page.goto(path);
		await expect(
			page.getByRole("heading", { name: "Page Not Found" }),
		).toBeVisible();
	}
});
