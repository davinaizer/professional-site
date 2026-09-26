import { render, screen, within } from "@testing-library/react";
import type { ComponentProps } from "react";
import { MemoryRouter } from "react-router";
import { describe, expect, it } from "vitest";
import { routes } from "../app/routes.ts";
import { caseStudies } from "../content/evidence-content.ts";
import { professionalContent } from "../content/professional-content.ts";
import { axe } from "../test/axe.ts";
import type { CaseStudy } from "../types/evidence.ts";
import CaseStudiesPage from "./CaseStudiesPage.tsx";

const caseStudyFixture: CaseStudy = {
	slug: "fixture-case-study",
	title: "Fixture Case Study",
	summary: "A fixture for verifying the reusable case-study structure.",
	context: "A product team needed to improve a high-friction workflow.",
	problem: "The existing workflow was difficult to understand and maintain.",
	role: "Led the frontend implementation in collaboration with product and design.",
	constraints: ["Existing API contracts", "A small delivery team"],
	decisions: [
		"Keep the workflow explicit",
		"Validate the riskiest states first",
	],
	productAndUx:
		"Clarified the primary task and reduced unnecessary interaction.",
	engineering:
		"Separated state transitions from presentation and covered key states with tests.",
	outcomes: [
		{
			statement: "The workflow became easier to operate.",
			detail: "The qualitative outcome was observed during team use.",
		},
	],
	reflection:
		"The clearest boundary was more valuable than adding another abstraction.",
};

function renderCaseStudiesPage(
	props: ComponentProps<typeof CaseStudiesPage> = {},
) {
	return render(
		<MemoryRouter>
			<CaseStudiesPage {...props} />
		</MemoryRouter>,
	);
}

describe("CaseStudiesPage", () => {
	it("renders the approved Alfred case study content", () => {
		renderCaseStudiesPage();

		const caseStudy = caseStudies.find(
			({ slug }) => slug === "alfred-what-to-do-next",
		);
		if (!caseStudy) {
			throw new Error("Expected the Alfred case study to be published.");
		}

		const article = screen.getByRole("article", {
			name: caseStudy.title,
		});

		expect(within(article).getByText(caseStudy.summary)).toBeInTheDocument();
		expect(within(article).queryByText("UpNext")).not.toBeInTheDocument();
		expect(
			within(article)
				.getAllByRole("heading", { level: 3 })
				.map(({ textContent }) => textContent?.trim()),
		).toEqual([
			"Context",
			"Problem",
			"Decisions",
			"Product / UX",
			"App screens",
			"Engineering",
			"Outcomes",
			"Reflection",
			"Role",
			"Constraints",
			"Relevant experience",
			"Technologies",
		]);
		const visuals = within(article).getByRole("region", {
			name: "App screens",
		});

		for (const visual of caseStudy.visuals ?? []) {
			expect(visual.alt).not.toBe("PLACEHOLDER");
			expect(
				within(visuals).getByRole("img", { name: visual.alt }),
			).toHaveAttribute("src", visual.src);
			expect(within(visuals).getByText(visual.title)).toBeInTheDocument();
			expect(within(visuals).getByText(visual.caption)).toBeInTheDocument();
		}
	});

	it("does not include the UV Insect Trap in professional case studies", () => {
		renderCaseStudiesPage();

		expect(
			screen.queryByRole("article", { name: "UV Insect Trap" }),
		).not.toBeInTheDocument();
	});

	it("preserves technologies and links case studies to relevant experience", () => {
		renderCaseStudiesPage();

		for (const slug of [
			"alfred-what-to-do-next",
			"signal-vessel-list-template-administration",
			"promotional-content-production-workflow",
		]) {
			const caseStudy = caseStudies.find((entry) => entry.slug === slug);
			if (!caseStudy) {
				throw new Error(`Expected case study ${slug} to be published.`);
			}

			const article = screen.getByRole("article", { name: caseStudy.title });
			const experience = within(article).getByRole("region", {
				name: "Relevant experience",
			});

			for (const experienceSlug of caseStudy.relatedExperienceSlugs ?? []) {
				const entry = professionalContent.experience.find(
					(candidate) => candidate.slug === experienceSlug,
				);
				if (!entry) {
					throw new Error(`Missing experience entry for ${experienceSlug}.`);
				}

				expect(
					within(experience).getByRole("link", {
						name: `${entry.role} at ${entry.company}`,
					}),
				).toHaveAttribute("href", `${routes.experience}#${entry.slug}`);
			}

			const technologies = within(article).getByRole("region", {
				name: "Technologies",
			});
			for (const technology of caseStudy.technologies ?? []) {
				expect(within(technologies).getByText(technology)).toBeInTheDocument();
			}
		}
	});

	it("retains the qualified Gamesys outcome", () => {
		renderCaseStudiesPage();

		const caseStudy = caseStudies.find(
			(entry) => entry.slug === "promotional-content-production-workflow",
		);
		if (!caseStudy) {
			throw new Error("Expected the Gamesys case study to be published.");
		}

		const article = screen.getByRole("article", { name: caseStudy.title });
		expect(
			within(article).getByText(
				"The reported production cycle for the promotional-content workflow fell from days to minutes.",
			),
		).toBeInTheDocument();
	});

	it("renders each explicit narrative section from a fixture", () => {
		renderCaseStudiesPage({ caseStudies: [caseStudyFixture] });

		const article = screen.getByRole("article", {
			name: caseStudyFixture.title,
		});

		expect(
			within(article).getByText(caseStudyFixture.summary),
		).toBeInTheDocument();

		for (const [heading, content] of [
			["Context", caseStudyFixture.context],
			["Problem", caseStudyFixture.problem],
			["Role", caseStudyFixture.role],
			["Product / UX", caseStudyFixture.productAndUx],
			["Engineering", caseStudyFixture.engineering],
			["Reflection", caseStudyFixture.reflection],
		] as const) {
			const section = within(article).getByRole("region", { name: heading });
			expect(within(section).getByText(content)).toBeInTheDocument();
		}

		for (const [heading, items] of [
			["Constraints", caseStudyFixture.constraints],
			["Decisions", caseStudyFixture.decisions],
		] as const) {
			const section = within(article).getByRole("region", { name: heading });
			for (const item of items) {
				expect(within(section).getByText(item)).toBeInTheDocument();
			}
		}

		const outcomes = within(article).getByRole("region", { name: "Outcomes" });
		const outcome = within(outcomes).getByRole("listitem");
		expect(outcome).toHaveTextContent(caseStudyFixture.outcomes[0].statement);
		expect(outcome).toHaveTextContent(
			caseStudyFixture.outcomes[0].detail as string,
		);
		expect(
			within(article).queryByRole("heading", { name: "Approach" }),
		).not.toBeInTheDocument();
	});

	it("provides a contextual continuation to Experience", () => {
		renderCaseStudiesPage();

		expect(
			within(
				screen.getByRole("navigation", { name: "Continue exploring" }),
			).getByRole("link", { name: "View the career context" }),
		).toHaveAttribute("href", routes.experience);
	});

	it("has no detectable accessibility violations with fixture content", async () => {
		const { container } = renderCaseStudiesPage({
			caseStudies: [caseStudyFixture],
		});

		expect((await axe(container)).violations).toHaveLength(0);
	});
});
