import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, expect, it } from "vitest";
import { routes } from "../app/routes.ts";
import { professionalContent } from "../content/professional-content.ts";
import { axe } from "../test/axe.ts";
import ResumePage from "./ResumePage.tsx";

function renderResumePage() {
	return render(
		<MemoryRouter>
			<ResumePage />
		</MemoryRouter>,
	);
}

describe("ResumePage", () => {
	it("renders the approved resume access content", () => {
		renderResumePage();

		expect(
			screen.getByRole("heading", { level: 1, name: "Resume" }),
		).toBeInTheDocument();
		expect(
			screen.getByText(
				"You can download my current resume for a concise overview of my experience, from frontend product development and architecture to developer tooling and recent native iOS work.",
			),
		).toBeInTheDocument();

		const resumeLink = screen.getByRole("link", {
			name: professionalContent.resume.label,
		});
		expect(resumeLink).toHaveAttribute("href", professionalContent.resume.url);
		expect(resumeLink).toHaveAttribute("download");

		const updatedAt = professionalContent.resume.updatedAt;
		if (!updatedAt) {
			throw new Error("Expected the approved resume update date.");
		}

		const updatedDateLabel = new Intl.DateTimeFormat("en-GB", {
			day: "numeric",
			month: "long",
			year: "numeric",
			timeZone: "UTC",
		}).format(new Date(`${updatedAt}T00:00:00Z`));
		const updatedDate = screen.getByText(updatedDateLabel);
		expect(updatedDate.tagName).toBe("TIME");
		expect(updatedDate).toHaveAttribute("datetime", updatedAt);
	});

	it("provides a contextual continuation to Contact", () => {
		renderResumePage();

		expect(
			within(
				screen.getByRole("navigation", { name: "Continue exploring" }),
			).getByRole("link", { name: "Get in touch" }),
		).toHaveAttribute("href", routes.contact);
	});

	it("has no detectable accessibility violations", async () => {
		const { container } = renderResumePage();

		expect((await axe(container)).violations).toHaveLength(0);
	});
});
