import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, expect, it } from "vitest";
import { routes } from "../app/routes.ts";
import { axe } from "../test/axe.ts";
import WorkPage from "./WorkPage.tsx";

describe("WorkPage", () => {
	it("renders the evidence areas and their destinations", () => {
		render(
			<MemoryRouter initialEntries={[routes.work]}>
				<WorkPage />
			</MemoryRouter>,
		);

		expect(
			screen.getByRole("heading", { level: 1, name: "Work" }),
		).toBeInTheDocument();
		expect(
			screen.getByText(
				"Explore concise project narratives and focused case studies that add depth beyond the career timeline.",
			),
		).toBeInTheDocument();

		const evidenceAreas = screen.getByRole("region", {
			name: "Explore the evidence",
		});
		const links = within(evidenceAreas).getAllByRole("link");

		expect(links).toHaveLength(2);
		expect(links[0]).toHaveAttribute("href", routes.projects);
		expect(links[1]).toHaveAttribute("href", routes.caseStudies);
	});

	it("has no detectable accessibility violations", async () => {
		const { container } = render(
			<MemoryRouter initialEntries={[routes.work]}>
				<WorkPage />
			</MemoryRouter>,
		);

		expect((await axe(container)).violations).toHaveLength(0);
	});
});
