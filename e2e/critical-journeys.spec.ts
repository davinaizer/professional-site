import { expect, test } from "@playwright/test";

test("renders a durable route when opened directly", async ({ page }) => {
	await page.goto("/work");

	await expect(page).toHaveURL(/\/work$/);
	await expect(page.getByRole("heading", { name: "Work" })).toBeVisible();
	await expect(page.getByRole("link", { name: "Work" })).toHaveAttribute(
		"aria-current",
		"page",
	);
	await page.reload();
	await expect(page.getByRole("heading", { name: "Work" })).toBeVisible();

	await page.goto("/projects");
	await expect(
		page.getByRole("heading", { name: "Experiments" }),
	).toBeVisible();
	await page.reload();
	await expect(
		page.getByRole("heading", { name: "Experiments" }),
	).toBeVisible();

	await page.goto("/case-studies");
	await expect(
		page.getByRole("heading", { name: "Case Studies" }),
	).toBeVisible();
	await page.reload();
	await expect(
		page.getByRole("heading", { name: "Case Studies" }),
	).toBeVisible();
});

test("keeps the Case Studies narrative flowing beside metadata", async ({
	page,
}) => {
	await page.setViewportSize({ width: 1024, height: 900 });
	await page.goto("/case-studies");

	const article = page.getByRole("article", {
		name: "Alfred: What To Do Next",
	});
	const decisions = article.getByRole("region", { name: "Decisions" });
	const metadata = article.locator(".case-studies__metadata");
	const decisionsBox = await decisions.boundingBox();
	const metadataBox = await metadata.boundingBox();

	if (!decisionsBox || !metadataBox) {
		throw new Error("Expected Case Studies layout boxes to be measurable.");
	}

	expect(decisionsBox.y).toBeLessThan(metadataBox.y + metadataBox.height);
});

test("navigates through the shell and Work routes", async ({ page }) => {
	await page.goto("/");
	await page
		.getByRole("link", { name: "Explore my independent experiments" })
		.click();
	await expect(page).toHaveURL(/\/projects$/);
	await expect(
		page.getByRole("heading", { name: "Experiments" }),
	).toBeVisible();

	const primaryNavigation = page.getByRole("navigation", { name: "Primary" });
	await page.goto("/");

	await primaryNavigation.getByRole("link", { name: "Experience" }).click();
	await expect(page).toHaveURL(/\/experience$/);
	await expect(page.getByRole("heading", { name: "Experience" })).toBeVisible();

	await primaryNavigation.getByRole("link", { name: "Work" }).click();
	await expect(page).toHaveURL(/\/work$/);
	await expect(page.getByRole("heading", { name: "Work" })).toBeVisible();

	await page.getByRole("link", { name: "Explore experiments" }).click();
	await expect(page).toHaveURL(/\/projects$/);
	await expect(
		page.getByRole("heading", { name: "Experiments" }),
	).toBeVisible();
	await expect(
		page.getByRole("heading", {
			name: "UV Insect Trap",
		}),
	).toBeVisible();
	await page.reload();
	await expect(
		page.getByRole("heading", { name: "UV Insect Trap" }),
	).toBeVisible();

	await page.setViewportSize({ width: 320, height: 900 });
	const experimentVisuals = page.getByRole("region", {
		name: "The final prototype and CAD",
	});
	await expect(experimentVisuals).toBeVisible();
	await expect(experimentVisuals.getByRole("img")).toHaveCount(3);
	await expect(experimentVisuals.getByRole("img").first()).toBeVisible();
	const hasExperimentOverflow = await page.evaluate(
		() =>
			document.documentElement.scrollWidth >
			document.documentElement.clientWidth,
	);
	expect(hasExperimentOverflow).toBe(false);

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

test("opens analytics settings only when requested and remains usable on mobile", async ({
	page,
}) => {
	await page.setViewportSize({ width: 390, height: 844 });
	await page.goto("/");

	const settingsButton = page.getByRole("button", {
		name: "Privacy & analytics",
	});
	const dialog = page.getByRole("dialog", { name: "Analytics settings" });

	await expect(settingsButton).toBeVisible();
	await expect(dialog).not.toBeVisible();
	await settingsButton.click();
	await expect(dialog).toBeVisible();
	await expect(dialog.getByRole("checkbox")).toBeChecked();

	const hasHorizontalOverflow = await page.evaluate(
		() =>
			document.documentElement.scrollWidth >
			document.documentElement.clientWidth,
	);
	expect(hasHorizontalOverflow).toBe(false);

	await dialog.getByRole("button", { name: "Close" }).click();
	await expect(dialog).not.toBeVisible();
});

test("persists an analytics opt-out and reflects it when settings reopen", async ({
	page,
}) => {
	await page.goto("/");
	await page.getByRole("button", { name: "Privacy & analytics" }).click();

	const dialog = page.getByRole("dialog", { name: "Analytics settings" });
	await dialog.getByRole("checkbox").uncheck();
	await dialog.getByRole("button", { name: "Save preferences" }).click();

	await expect
		.poll(() =>
			page.evaluate(() =>
				localStorage.getItem("professional-site.analytics-opt-out"),
			),
		)
		.toBe("true");

	await page.getByRole("button", { name: "Privacy & analytics" }).click();
	await expect(
		page
			.getByRole("dialog", { name: "Analytics settings" })
			.getByRole("checkbox"),
	).not.toBeChecked();
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
