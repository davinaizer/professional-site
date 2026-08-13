import type { ProfessionalContent } from "./professional";

export const professionalContent = {
	identity: {
		name: "Davi Naizer Santos",
		headline: "Senior Frontend & Product Engineer",
		location: "Hove, United Kingdom",
		profileLinks: [
			{
				label: "LinkedIn",
				url: "https://www.linkedin.com/in/davi-naizer",
			},
		],
	},
	summary: {
		summary:
			"Senior frontend and product engineer with experience building product applications, internal tools, and the engineering systems behind them. My commercial experience centres on React, TypeScript, and JavaScript, alongside recent native iOS development with Swift and SwiftUI.",
		focusAreas: [
			"Frontend architecture",
			"Product development",
			"Developer tooling",
			"Workflow automation",
			"Engineering practices",
		],
	},
} satisfies Pick<ProfessionalContent, "identity" | "summary">;
