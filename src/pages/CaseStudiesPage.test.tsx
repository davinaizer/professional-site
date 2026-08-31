import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type { CaseStudy } from "../content/evidence.ts";
import { caseStudies } from "../content/evidence-content.ts";
import { axe } from "../test/axe.ts";
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
	publicEvidenceBoundary:
		"This account describes the contribution and learning without naming private systems or metrics.",
};

describe("CaseStudiesPage", () => {
	it("renders an intentional empty state when no case studies are published", () => {
		render(<CaseStudiesPage caseStudies={[]} />);

		expect(
			screen.getByRole("heading", { level: 1, name: "Case Studies" }),
		).toBeInTheDocument();
		expect(
			screen.getByRole("heading", {
				level: 2,
				name: "Case studies in progress",
			}),
		).toBeInTheDocument();
		expect(screen.queryByRole("article")).not.toBeInTheDocument();
		expect(caseStudies).toHaveLength(1);
	});

	it("renders the approved Alfred case study content", () => {
		render(<CaseStudiesPage />);

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
		expect(
			within(article).getByText(caseStudy.publicEvidenceBoundary),
		).toBeInTheDocument();
		expect(within(article).queryByText("UpNext")).not.toBeInTheDocument();
	});

	it("renders each explicit narrative section from a fixture", () => {
		render(<CaseStudiesPage caseStudies={[caseStudyFixture]} />);

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
			[
				"Public-safe evidence boundary",
				caseStudyFixture.publicEvidenceBoundary,
			],
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

	it("has no detectable accessibility violations with fixture content", async () => {
		const { container } = render(
			<CaseStudiesPage caseStudies={[caseStudyFixture]} />,
		);

		expect((await axe(container)).violations).toHaveLength(0);
	});
});
