import { render, screen, within } from "@testing-library/react";
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

		const contactLinks = screen.getByRole("list", {
			name: "Professional contact links",
		});
		const links = within(contactLinks).getAllByRole("link");

		expect(links).toHaveLength(professionalContent.contact.length);
		for (const contact of professionalContent.contact) {
			const link = within(contactLinks).getByRole("link", {
				name: contact.actionLabel,
			});

			expect(link).toHaveAttribute("href", contact.url);
			expect(
				within(contactLinks).getByText(contact.category),
			).toBeInTheDocument();
			if (contact.description) {
				expect(
					within(contactLinks).getByText(contact.description),
				).toBeInTheDocument();
			}
		}
	});

	it("has no detectable accessibility violations", async () => {
		const { container } = render(<ContactPage />);

		expect((await axe(container)).violations).toHaveLength(0);
	});
});
