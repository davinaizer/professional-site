import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { professionalContent } from "../content/professional-content.ts";
import { axe } from "../test/axe.ts";
import ExperiencePage from "./ExperiencePage.tsx";

describe("ExperiencePage", () => {
	it("renders the approved experience in reverse chronological order", () => {
		render(<ExperiencePage />);

		expect(
			screen.getByRole("heading", { level: 1, name: "Experience" }),
		).toBeInTheDocument();

		const roleHeadings = screen.getAllByRole("heading", { level: 2 });
		expect(roleHeadings.map(({ textContent }) => textContent)).toEqual(
			professionalContent.experience.map(({ role }) => role),
		);

		for (const entry of professionalContent.experience) {
			expect(screen.getByText(entry.company)).toBeInTheDocument();
			expect(
				screen
					.getByRole("heading", { level: 2, name: entry.role })
					.closest("article"),
			).toHaveAttribute("id", entry.slug);

			expect(
				screen.getByText(`${entry.startDate} – ${entry.endDate ?? "Present"}`),
			).toBeInTheDocument();
			if (entry.location) {
				expect(
					screen.getAllByText(entry.location, { exact: false }).length,
				).toBeGreaterThan(0);
			}

			for (const responsibility of entry.responsibilities ?? []) {
				expect(screen.getByText(responsibility)).toBeInTheDocument();
			}
			for (const contribution of entry.contributions ?? []) {
				expect(screen.getByText(contribution)).toBeInTheDocument();
			}
			for (const technology of entry.technologies ?? []) {
				expect(screen.getAllByText(technology).length).toBeGreaterThan(0);
			}
		}
	});

	it("omits empty optional detail sections", () => {
		render(<ExperiencePage />);

		const careerBreak = screen
			.getByRole("heading", { level: 2, name: "Planned Career Break" })
			.closest("article");
		if (!careerBreak) {
			throw new Error(
				"Expected career-break entry to be rendered as an article.",
			);
		}

		expect(
			within(careerBreak).queryByRole("heading", {
				level: 3,
				name: "Selected contributions",
			}),
		).not.toBeInTheDocument();
		expect(
			within(careerBreak).queryByRole("heading", {
				level: 3,
				name: "Technologies",
			}),
		).not.toBeInTheDocument();
	});

	it("has no detectable accessibility violations", async () => {
		const { container } = render(<ExperiencePage />);

		expect((await axe(container)).violations).toHaveLength(0);
	});
});
