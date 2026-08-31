import type { CaseStudy, Project } from "./evidence.ts";

export const caseStudies: readonly CaseStudy[] = [
	{
		slug: "alfred-what-to-do-next",
		title: "Alfred: What To Do Next",
		summary:
			"A native iOS product exploring how to help people decide what to do next.",
		context:
			"Alfred: What To Do Next was an exploratory native iOS product built around a decision-first loop: Idea -> Recommendation -> Decision -> Event/commitment. The product work covered onboarding, idea capture, recommendations, and planning.",
		problem:
			"The product was designed to help move an idea or intention toward a concrete next action. A browsing-first experience would leave the decision unresolved, so the core problem was to make recommendation, choice, and commitment understandable as one flow.",
		role: "I owned the mobile app work end-to-end, including UX/UI, user flows, mobile architecture, technical concepts, SwiftUI implementation, client-side API and real-time integration, and testing. Product direction was shared with the backend engineer, who owned infrastructure, data management, LLM model training, and API development.",
		constraints: [
			"The work was exploratory, and no user validation feedback or adoption metrics are available.",
			"Recommendation enrichment was asynchronous, so the client had to represent loading, intermediate progress, completion, and refresh states.",
			"The mobile app needed clear boundaries between feature presentation, domain logic, data mapping, infrastructure, and application routing.",
			"Backend infrastructure, data management, model training, and API development were outside the mobile ownership boundary.",
		],
		decisions: [
			"Make the product decision-first: connect Idea -> Recommendation -> Decision -> Event/commitment instead of treating recommendations as passive browsing. This narrows exploration in exchange for a clearer next action.",
			"Use onboarding to reach first value through value framing, lightweight preference and context capture, a first recommendation, and a commitment path. The trade-off is collecting less information up front.",
			"Use layered mobile architecture with feature presentation, domain services, repository protocols, DTO mapping, infrastructure adapters, and routing. The additional boundaries support isolation and testing at the cost of more types and files.",
			"Keep recommendation enrichment asynchronous at the client boundary so the app can capture intent while later results arrive through API and real-time updates. This requires explicit intermediate and refresh states.",
			"Model recommendation readiness and commitment states explicitly so accepting, dismissing, scheduling, deferring, and refreshing are distinguishable actions rather than variations of passive browsing.",
		],
		productAndUx:
			"The experience prioritised decision completion: capture an idea, add lightweight context, receive recommendations, evaluate a clear option, and turn the decision into a scheduled or otherwise actionable event. Onboarding and recommendation design used a dominant recommendation, clear rationale, and a primary action. This was a documented product direction, not a validated user finding.",
		engineering:
			"The mobile client separated feature presentation and view-model state from domain entities and services, repository interfaces, DTO mapping, infrastructure adapters, and application routing. It integrated authenticated API requests and SignalR recommendation refreshes, while client-side readiness and decision models represented whether recommendations were available and what happened next.",
		outcomes: [
			{
				statement:
					"The mobile implementation established an end-to-end product experience across onboarding, idea capture, recommendations, planning, authentication, and application state.",
				detail:
					"This is implementation evidence from the Alfred repository, not evidence of adoption or user impact.",
			},
			{
				statement:
					"The repository contains broad test coverage across routing, view models, domain services, data mapping, repositories, notifications, real-time refresh, and design-system utilities.",
				detail:
					"The available evidence does not establish that the full suite passed.",
			},
		],
		reflection:
			"I would validate the decision-first proposition with users earlier, then preserve only the architectural boundaries that demonstrably improve feature isolation or testability. I would also replace historical design references with confirmed final implementation evidence before presenting specific screens as shipped UI.",
		publicEvidenceBoundary:
			"This case study describes the mobile product experience and client-side implementation. Product direction was shared with the backend engineer; infrastructure, data management, model training, and API development are not claimed as my work. Alfred is presented as exploratory product work. No public launch, adoption, user validation, market success, unsupported metrics, private backend details, source paths, provenance, or governance metadata are claimed.",
	},
];

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
		relatedExperienceSlugs: [
			"signal-group-senior-frontend-software-engineer-2023-2024",
		],
		capabilities: [
			"Frontend architecture",
			"Product development",
			"Engineering practices",
		],
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
		relatedExperienceSlugs: [
			"gamesys-ballys-senior-frontend-engineer-2020-2022",
			"ballys-interactive-frontend-tech-lead-2022-2023",
		],
		capabilities: [
			"Developer tooling",
			"Workflow automation",
			"Engineering practices",
		],
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
		relatedExperienceSlugs: [
			"independent-product-venture-product-engineer-co-creator-2025",
			"self-employed-planned-career-break-2024-2025",
		],
		capabilities: [
			"Product development",
			"Frontend architecture",
			"Engineering practices",
		],
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
