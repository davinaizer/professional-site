import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, expect, it } from "vitest";
import { routes } from "../app/routes.ts";
import { axe } from "../test/axe.ts";
import PrimaryNavigation from "./PrimaryNavigation.tsx";

describe("PrimaryNavigation", () => {
	it("renders the primary navigation links with their expected destinations", () => {
		render(
			<MemoryRouter initialEntries={[routes.work]}>
				<PrimaryNavigation />
			</MemoryRouter>,
		);

		const navigation = screen.getByRole("navigation", { name: "Primary" });
		const links = within(navigation).getAllByRole("link");

		expect(links).toHaveLength(4);
		expect(
			within(navigation).getByRole("link", { name: "Experience" }),
		).toHaveAttribute("href", routes.experience);
		expect(
			within(navigation).getByRole("link", { name: "Work" }),
		).toHaveAttribute("href", routes.work);
		expect(
			within(navigation).getByRole("link", { name: "Engineering" }),
		).toHaveAttribute("href", routes.engineering);
		expect(
			within(navigation).getByRole("link", { name: "Resume" }),
		).toHaveAttribute("href", routes.resume);
	});

	it("marks the current route as active", () => {
		render(
			<MemoryRouter initialEntries={[routes.work]}>
				<PrimaryNavigation />
			</MemoryRouter>,
		);

		expect(screen.getByRole("link", { name: "Work" })).toHaveAttribute(
			"aria-current",
			"page",
		);
	});

	it("has no detectable accessibility violations", async () => {
		const { container } = render(
			<MemoryRouter initialEntries={[routes.work]}>
				<PrimaryNavigation />
			</MemoryRouter>,
		);

		expect((await axe(container)).violations).toHaveLength(0);
	});
});
