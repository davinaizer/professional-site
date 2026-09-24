import { fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import AnalyticsSettings from "./AnalyticsSettings.tsx";

const showModalDescriptor = Object.getOwnPropertyDescriptor(
	HTMLDialogElement.prototype,
	"showModal",
);

describe("AnalyticsSettings", () => {
	beforeEach(() => {
		window.localStorage.clear();
		Object.defineProperty(HTMLDialogElement.prototype, "showModal", {
			configurable: true,
			value: vi.fn(),
		});
	});

	afterEach(() => {
		if (showModalDescriptor) {
			Object.defineProperty(
				HTMLDialogElement.prototype,
				"showModal",
				showModalDescriptor,
			);
		} else {
			Reflect.deleteProperty(HTMLDialogElement.prototype, "showModal");
		}
	});

	it("does not interrupt the visit and opens the disclosure on request", () => {
		const { container } = render(<AnalyticsSettings />);
		const dialog = container.querySelector("dialog");

		expect(dialog).not.toBeNull();
		expect(dialog).not.toHaveAttribute("open");
		expect(
			screen.getByRole("button", { name: "Privacy & analytics" }),
		).toHaveAttribute("aria-haspopup", "dialog");

		fireEvent.click(
			screen.getByRole("button", { name: "Privacy & analytics" }),
		);

		expect(HTMLDialogElement.prototype.showModal).toHaveBeenCalledOnce();
		expect(
			within(dialog as HTMLDialogElement).getByText(
				/Cloudflare Web Analytics provides aggregate reports about page visits/,
			),
		).toBeInTheDocument();
		expect(
			within(dialog as HTMLDialogElement).getByRole("checkbox", {
				hidden: true,
			}),
		).toBeChecked();
	});

	it("reflects a saved opt-out when settings are opened", () => {
		window.localStorage.setItem("professional-site.analytics-opt-out", "true");
		const { container } = render(<AnalyticsSettings />);
		const dialog = container.querySelector("dialog");
		if (!dialog) {
			throw new Error("Expected the analytics settings dialog.");
		}

		expect(
			within(dialog).getByRole("checkbox", { hidden: true }),
		).not.toBeChecked();
	});
});
