import type { CaseStudy, Project } from "../types/evidence.ts";

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
		role: "I lead development of the native iOS application while sharing responsibility for product direction, application architecture and technical decisions.",
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
			},
			{
				statement:
					"Added automated tests across routing, view models, domain services, data mapping, repositories, notifications, real-time refresh, and design-system utilities.",
			},
		],
		reflection:
			"I would validate the decision-first proposition with users earlier, then preserve only the architectural boundaries that demonstrably improve feature isolation or testability.",
	},
	{
		slug: "signal-vessel-list-template-administration",
		title: "Vessel List Template Administration",
		summary:
			"A self-service, role-aware workflow for creating and managing reusable templates in Signal Ocean’s Vessel List.",
		context:
			"As a Senior Frontend Software Engineer at The Signal Group, I worked with a cross-functional team on the Vessel List area of Signal Ocean. The application used a large React and TypeScript monorepo, shared frontend state, and metadata-driven APIs.",
		problem:
			"Creating reusable Vessel List templates involved support requests and manual engineering work. The workflow needed to let company administrators create and manage templates while making permissions, validation, and the resulting data states clear to administrators and end users.",
		role: "I contributed collaborative frontend implementation across the Template Admin workflow, from forms and state integration through testing, fixes, and production release. Product, design, backend, and QA partners contributed to the wider work; I did not own the platform, backend services, or the feature alone.",
		constraints: [
			"The feature had to fit an established React and TypeScript monorepo, shared application state, and existing API contracts.",
			"Administrator and end-user workflows required permission-aware creation, editing, read-only, validation, and deletion states.",
			"Template configuration sat alongside a data-intensive Vessel List with shared UI components and grid behaviour.",
			"The available evidence supports implementation and production release, but does not establish adoption, time saved, or other business impact.",
		],
		decisions: [
			"Keep the administrator workflow permission-aware, with distinct create, edit, and delete actions, and carry those permissions through the corresponding UI states.",
			"Represent validation and read-only states in the frontend so that configuration errors and unavailable actions are visible in context.",
			"Integrate template operations with the existing metadata-driven APIs and shared frontend state, keeping request and response mappings aligned with the backend contracts without taking ownership of backend design.",
			"Move Template Admin state and behaviour into a focused context while refactoring existing store usage, keeping the new workflow integrated with the surrounding Vessel List application.",
		],
		productAndUx:
			"The experience connected the existing “Save as Template” entry point to modal and form flows for creating and maintaining templates. It handled input validation, dropdown values, map-preview coordinates, administrator permissions, and the different editing, read-only, and deletion states needed across administrator and end-user workflows.",
		engineering:
			"I worked in React and TypeScript across Template Admin and the wider Vessel List. The implementation included context and store changes, API request mapping, DTO and enum alignment, role and feature-permission checks, and AG Grid configuration. I also maintained focused tests and snapshots, addressed type, lint, SonarLint, and review feedback, and contributed to modernising deprecated shared UI components.",
		outcomes: [
			{
				statement:
					"The frontend workflow progressed through implementation, testing, fixes, and production release, supporting role-based template creation and management.",
			},
			{
				statement:
					"The work included permission-aware editing, validation, read-only and deletion states integrated with frontend state and metadata-driven APIs.",
			},
		],
		reflection:
			"A production release confirms delivery, but not whether the workflow reduced support effort or became easy to use. I would pair implementation evidence with administrator feedback and usage evidence before making those outcome claims.",
	},
	{
		slug: "promotional-content-production-workflow",
		title: "A Repeatable Promotional Content Workflow",
		summary:
			"A set of internal authoring, preview, and delivery tools made a repetitive promotional-content workflow faster and easier to review.",
		context:
			"At Gamesys/Bally’s Interactive, I contributed to a collaborative set of tools supporting configuration-driven promotional content. This case study focuses on making the authoring and delivery workflow more repeatable, while keeping employer-specific systems and campaign details private.",
		problem:
			"Producing and delivering promotional UI involved repetitive setup across templates, configuration, versions, and repositories. The production cycle could take days, and each delivery needed to remain compatible with its target configuration and pass review before release.",
		role: "As a frontend engineer, I contributed to the Node.js tooling and preview workflow alongside other engineers and partner teams. My work included maintaining and migrating tooling to TypeScript, improving generated-content validation, and supporting reviewable delivery. The wider toolchain and its outcomes were collaborative.",
		constraints: [
			"Generated UI had to match the target configuration and compatible framework versions.",
			"Delivery used a pull request and left the merge and release decision for human review.",
			"The workflow operated within an existing internal ecosystem; its product names, campaign information, and repository details are not public.",
			"The accepted outcome is a reported reduction from days to minutes. There is no independent adoption count or broader business-impact measurement in the available evidence.",
		],
		decisions: [
			"Use reusable templates and guided inputs to generate promotional UI consistently, reducing repeated manual setup while keeping the chosen configuration explicit.",
			"Pin compatible framework versions in generated output so a delivery has a clear, reproducible dependency baseline.",
			"Add a preview workflow that checks generated UI against real configuration before delivery, making configuration problems easier to spot before review.",
			"Prepare changes through a pull request for review, keeping the final release decision with the team.",
		],
		productAndUx:
			"The authoring flow guided an engineer through the required content choices, generated a working set of files from reusable templates, and provided a preview against the target configuration. The workflow connected creation, validation, and review so that the next step was visible without hiding the release decision behind automation.",
		engineering:
			"The toolchain used Node.js, with the command-line tooling migrated to TypeScript. It generated version-pinned UI from templates, validated generated output in a preview application against real configuration, and prepared changes for pull-request-based delivery. I also introduced supporting CI and release practices around the tooling. Internal package names, endpoints, repository identifiers, and campaign data are omitted.",
		outcomes: [
			{
				statement:
					"The reported production cycle for the promotional-content workflow fell from days to minutes.",
			},
			{
				statement:
					"Template-based generation, configuration preview, and reviewable delivery made the production path more repeatable while retaining a human review step.",
			},
		],
		reflection:
			"I would make conflict and file-change behaviour clearer before delivery, then measure cycle time and support effort consistently. The current evidence supports the reported speed improvement, but it does not establish adoption scale or a measured effect on quality.",
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
					"Developed the frontend implementation of the Template Admin experience, taking the feature through implementation, testing, fixes and production release.",
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
			"Workflow-oriented product engineering across internal tools and developer-facing automation.",
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
			"Recent exploratory product work spanning an independent product project and a planned career break.",
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
