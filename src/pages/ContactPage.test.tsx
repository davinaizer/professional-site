import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { professionalContent } from "../content/professional-content.ts";
import { axe } from "../test/axe.ts";
import ContactPage from "./ContactPage.tsx";

describe("ContactPage", () => {
	it("renders the approved professional contact links", () => {
		render(<ContactPage />);

		expect(
			screen.getByRole("heading", { level: 1, name: "Contact" }),
		).toBeInTheDocument();

		const contactLinks = screen.getAllByRole("link");
		expect(contactLinks).toHaveLength(professionalContent.contact.length);

		for (const contact of professionalContent.contact) {
			const contactLink = screen.getByRole("link", { name: contact.label });
			expect(contactLink).toHaveAttribute("href", contact.url);
		}
	});

	it("has no detectable accessibility violations", async () => {
		const { container } = render(<ContactPage />);

		expect((await axe(container)).violations).toHaveLength(0);
	});
});
