import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, expect, it } from "vitest";
import { routes } from "../app/routes.ts";
import { projects } from "../content/evidence-content.ts";
import { professionalContent } from "../content/professional-content.ts";
import { axe } from "../test/axe.ts";
import ProjectsPage from "./ProjectsPage.tsx";

function renderProjectsPage() {
	return render(
		<MemoryRouter>
			<ProjectsPage />
		</MemoryRouter>,
	);
}

describe("ProjectsPage", () => {
	it("renders the approved selected projects", () => {
		renderProjectsPage();

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

	it("connects projects to relevant experience and capabilities", () => {
		renderProjectsPage();

		for (const project of projects) {
			const article = screen
				.getByRole("heading", { level: 2, name: project.title })
				.closest("article");
			if (!article) {
				throw new Error(`Expected an article for ${project.title}.`);
			}

			const experienceSection = within(article).getByRole("region", {
				name: `Relevant experience for ${project.title}`,
			});
			const experienceSlugs = project.relatedExperienceSlugs ?? [];
			const experienceLinks = within(experienceSection).getAllByRole("link");
			expect(experienceLinks).toHaveLength(experienceSlugs.length);

			for (const experienceSlug of experienceSlugs) {
				const experienceEntry = professionalContent.experience.find(
					(entry) => entry.slug === experienceSlug,
				);
				if (!experienceEntry) {
					throw new Error(`Missing experience entry for ${experienceSlug}.`);
				}

				expect(
					within(experienceSection).getByRole("link", {
						name: `${experienceEntry.role} at ${experienceEntry.company}`,
					}),
				).toHaveAttribute(
					"href",
					`${routes.experience}#${experienceEntry.slug}`,
				);
			}

			const capabilitiesSection = within(article).getByRole("region", {
				name: `Capabilities for ${project.title}`,
			});
			for (const capability of project.capabilities ?? []) {
				expect(
					within(capabilitiesSection).getByText(capability),
				).toBeInTheDocument();
				expect(professionalContent.summary.focusAreas).toContain(capability);
			}
		}
	});

	it("has no detectable accessibility violations", async () => {
		const { container } = renderProjectsPage();

		expect((await axe(container)).violations).toHaveLength(0);
	});
});
