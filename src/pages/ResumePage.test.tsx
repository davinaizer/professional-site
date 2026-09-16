import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { professionalContent } from "../content/professional-content.ts";
import { axe } from "../test/axe.ts";
import ResumePage from "./ResumePage.tsx";

describe("ResumePage", () => {
	it("renders the approved resume access content", () => {
		render(<ResumePage />);

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

		const updatedDate = screen.getByText("15 September 2026");
		expect(updatedDate.tagName).toBe("TIME");
		expect(updatedDate).toHaveAttribute(
			"datetime",
			professionalContent.resume.updatedAt,
		);
	});

	it("has no detectable accessibility violations", async () => {
		const { container } = render(<ResumePage />);

		expect((await axe(container)).violations).toHaveLength(0);
	});
});
