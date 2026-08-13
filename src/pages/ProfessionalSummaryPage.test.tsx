import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { professionalContent } from "../content/professional-content.ts";
import { axe } from "../test/axe.ts";
import ProfessionalSummaryPage from "./ProfessionalSummaryPage.tsx";

describe("ProfessionalSummaryPage", () => {
	it("renders the approved summary and focus areas", () => {
		render(<ProfessionalSummaryPage />);

		expect(
			screen.getByRole("heading", { level: 1, name: "Professional Summary" }),
		).toBeInTheDocument();
		expect(
			screen.getByText(professionalContent.summary.summary),
		).toBeInTheDocument();

		const focusAreas = screen.getByRole("region", { name: "Focus areas" });
		const items = within(focusAreas).getAllByRole("listitem");

		expect(items).toHaveLength(professionalContent.summary.focusAreas.length);
		for (const focusArea of professionalContent.summary.focusAreas) {
			expect(within(focusAreas).getByText(focusArea)).toBeInTheDocument();
		}
	});

	it("has no detectable accessibility violations", async () => {
		const { container } = render(<ProfessionalSummaryPage />);

		expect((await axe(container)).violations).toHaveLength(0);
	});
});
