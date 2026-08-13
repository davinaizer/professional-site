import { render, screen, within } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";
import { describe, expect, it } from "vitest";
import HomePage from "../pages/HomePage.tsx";
import { axe } from "../test/axe.ts";
import App from "./App.tsx";
import { routes } from "./routes.ts";

function renderApp() {
	const router = createMemoryRouter(
		[
			{
				Component: App,
				children: [{ index: true, Component: HomePage }],
			},
		],
		{ initialEntries: [routes.home] },
	);

	return render(<RouterProvider router={router} />);
}

describe("App", () => {
	it("renders the shared shell around the current route content", async () => {
		renderApp();

		expect(
			screen.getByRole("link", { name: "Professional Site" }),
		).toHaveAttribute("href", routes.home);
		expect(
			screen.getByRole("navigation", { name: "Primary" }),
		).toBeInTheDocument();
		expect(
			within(screen.getByRole("banner")).getByRole("link", {
				name: "Contact",
			}),
		).toHaveAttribute("href", routes.contact);
		expect(await screen.findByRole("main")).toHaveTextContent(
			"Davi Naizer Santos",
		);
		expect(
			screen.getByText("Senior Frontend & Product Engineer"),
		).toBeInTheDocument();
		expect(
			screen.getByRole("link", { name: "Professional summary" }),
		).toHaveAttribute("href", routes.summary);
		expect(
			screen.getByRole("link", { name: "Explore experience" }),
		).toHaveAttribute("href", routes.experience);
		expect(
			screen.getByRole("link", { name: "Download Resume" }),
		).toHaveAttribute("href", "/resume.pdf");
		expect(
			within(
				screen.getByRole("navigation", {
					name: "Explore core professional areas",
				}),
			).getByRole("link", { name: "Contact" }),
		).toHaveAttribute("href", routes.contact);
		expect(screen.getByText("© DAVI NAIZER SANTOS | 2026")).toBeInTheDocument();
	});

	it("has no detectable accessibility violations", async () => {
		const { container } = renderApp();

		await screen.findByRole("main");
		expect((await axe(container)).violations).toHaveLength(0);
	});
});
