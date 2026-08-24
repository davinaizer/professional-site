import type { Project } from "./evidence.ts";

export const projects: readonly Project[] = [
	{
		slug: "vessel-list-template-administration",
		title: "Vessel List Template Administration",
		summary:
			"A role-based administration experience for managing vessel-list templates within a multi-company SaaS platform.",
		context:
			"Production product work delivered with Product, Design, Backend, and QA in a React and TypeScript monorepo.",
		purpose:
			"Give authorised users a self-service workflow for creating and maintaining templates.",
		problem:
			"Data-intensive configuration required clear validation, permissions, interaction states, and reusable editing behaviour.",
		solution:
			"Implemented the frontend experience, including role-based template management, validation, reusable editing behaviour, testing, fixes, and production release.",
		outcomes: [
			{
				statement:
					"Owned the frontend implementation, testing, fixes, and production release of the Template Admin experience.",
			},
		],
		technologies: ["React", "TypeScript", "MobX", "AG Grid", "REST APIs"],
	},
	{
		slug: "internal-content-production-workflow",
		title: "Internal Content-production Workflow",
		summary:
			"A safe abstraction of internal tooling that improved the repeatability and speed of a promotional-content workflow.",
		context:
			"Workflow-oriented product engineering across internal tools and developer-facing automation; private systems and project details are intentionally omitted.",
		purpose:
			"Reduce manual effort in content production while making delivery steps more repeatable and reviewable.",
		problem:
			"A promotional-content workflow took days and depended on repetitive operational steps.",
		solution:
			"Built reusable Node.js and API tooling around internal workflow systems, with validation and automation that reduced the workflow from days to minutes.",
		outcomes: [
			{
				statement:
					"Reduced a promotional-content workflow from days to minutes.",
			},
		],
		technologies: ["Node.js", "Jira REST API", "GitHub Enterprise REST API"],
	},
	{
		slug: "alfred",
		title: "Alfred",
		summary:
			"A native product experience exploring end-to-end development, shared product decisions, and architecture in an unfamiliar ecosystem.",
		context:
			"Recent exploratory product work spanning an independent product venture and a planned career break; public details are intentionally limited to the product-engineering evidence.",
		purpose:
			"Build and learn through a complete product experience across onboarding, authentication, recommendations, and planning.",
		problem:
			"A complete product experience needed coherent boundaries across networking, domain logic, application state, and presentation.",
		solution:
			"Delivered the first end-to-end experience and designed a layered architecture using MVVM-style presentation, repositories, use cases, and dependency injection.",
		outcomes: [
			{
				statement:
					"Integrated authentication, real-time updates, deep linking, and application state with clear boundaries between networking, domain logic, and presentation.",
			},
		],
		technologies: [
			"Swift",
			"SwiftUI",
			"REST APIs",
			"Firebase",
			"XCTest",
			"XcodeGen",
		],
	},
];
