import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { projects } from "../content/evidence-content.ts";
import { axe } from "../test/axe.ts";
import ProjectsPage from "./ProjectsPage.tsx";

describe("ProjectsPage", () => {
	it("renders the approved selected projects", () => {
		render(<ProjectsPage />);

		expect(
			screen.getByRole("heading", { level: 1, name: "Selected Projects" }),
		).toBeInTheDocument();

		const projectArticles = screen.getAllByRole("article");
		expect(projectArticles).toHaveLength(projects.length);

		for (const [index, project] of projects.entries()) {
			const article = projectArticles[index];
			expect(
				within(article).getByRole("heading", {
					level: 2,
					name: project.title,
				}),
			).toBeInTheDocument();
			expect(within(article).getByText(project.summary)).toBeInTheDocument();
		}
	});

	it("has no detectable accessibility violations", async () => {
		const { container } = render(<ProjectsPage />);

		expect((await axe(container)).violations).toHaveLength(0);
	});
});
