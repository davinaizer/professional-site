import type { ProfessionalContent } from "./professional";

export const professionalContent: ProfessionalContent = {
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
	experience: [
		{
			company: "Independent Product Venture",
			role: "Product Engineer & Co-creator",
			startDate: "12/2025",
			responsibilities: [
				"Lead native iOS development while sharing responsibility for product direction, application architecture, and technical decisions.",
			],
			contributions: [
				"Delivered the first end-to-end product experience across onboarding, authentication, recommendations, and planning workflows.",
				"Designed a layered architecture using MVVM-style presentation, repositories, use cases, and dependency injection.",
				"Integrated authentication, real-time updates, deep linking, and application state with clear boundaries between networking, domain logic, and presentation.",
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
		{
			company: "Self-employed",
			role: "Planned Career Break",
			startDate: "11/2024",
			endDate: "11/2025",
			location: "Brazil",
			responsibilities: [
				"Took a planned break from full-time employment after relocating permanently to the UK. During that time I focused on recovery, re-evaluated the direction I wanted my career to take and returned to hands-on product development by building Alfred, a native SwiftUI application.",
			],
			contributions: [],
			technologies: [],
		},
		{
			company: "The Signal Group",
			role: "Senior Frontend Software Engineer",
			startDate: "12/2023",
			endDate: "10/2024",
			location: "London, UK",
			responsibilities: [
				"Contributed to the Vessel List area of Signal Ocean with Product, Design, Backend, and QA in a React and TypeScript monorepo.",
			],
			contributions: [
				"Owned the frontend implementation, testing, fixes, and production release of the Template Admin experience.",
				"Implemented role-based template management for a multi-company SaaS platform.",
				"Built data-intensive configuration workflows covering validation, permissions, interaction states, and reusable editing behaviour.",
			],
			technologies: [
				"React",
				"TypeScript",
				"MobX",
				"OpenLayers",
				"AG Grid",
				"C#",
				".NET",
				"Azure DevOps",
				"REST APIs",
			],
		},
		{
			company: "Bally's Interactive",
			role: "Frontend Tech Lead",
			startDate: "11/2022",
			endDate: "11/2023",
			location: "London, UK",
			responsibilities: [
				"Provided technical direction for frontend engineering initiatives across code quality, developer experience, onboarding, and platform modernisation.",
			],
			contributions: [
				"Defined a code-quality standardisation programme across 13 frameworks, tools, and shared libraries.",
				"Integrated SonarQube with GitHub Actions and pull-request decoration while investigating monorepo test-reporting issues.",
				"Created a structured onboarding programme and automated repository discovery through Confluence.",
			],
			technologies: [
				"React",
				"TypeScript",
				"Redux Toolkit",
				"Nx",
				"GitHub Actions",
				"SonarQube",
				"Jenkins",
				"Storybook",
				"Node.js",
				"GitHub Enterprise REST APIs",
			],
		},
		{
			company: "Gamesys / Bally's Interactive",
			role: "Senior Frontend Engineer",
			startDate: "10/2020",
			endDate: "11/2022",
			location: "London, UK",
			responsibilities: [
				"Worked across customer-facing products and internal engineering tooling, with a focus on developer experience, workflow automation, and frontend platform improvements.",
			],
			contributions: [
				"Built a Node.js tool around the Jira REST API that reduced a promotional-content workflow from days to minutes.",
				"Developed GitHub Enterprise REST API tooling that removed the need to clone repositories for deployment-related tasks.",
				"Created onboarding guides, architecture documentation, and dependency maps for large projects.",
			],
			technologies: [
				"React",
				"JavaScript",
				"Styled-components",
				"Node.js",
				"Redux",
				"GitHub REST API",
				"Jenkins",
				"Jira REST API",
			],
		},
		{
			company: "Gamesys",
			role: "Frontend Developer",
			startDate: "03/2019",
			endDate: "09/2020",
			location: "London, UK",
			responsibilities: [
				"Built customer-facing promotional experiences while contributing to frontend architecture, developer tooling, and cross-team enablement.",
			],
			contributions: [
				"Led the Landing Pages technical-improvement initiative, defining the proposed frontend architecture and roadmap.",
				"Built reusable frontend components and styling foundations for promotional interfaces.",
				"Developed GitHub API-based deployment tooling and supported mentoring, debugging, and technical documentation.",
			],
			technologies: ["React", "JavaScript", "Redux", "Sass", "Node.js"],
		},
		{
			company: "UNBOX Learning Experience",
			role: "Co-founder & Technical Lead",
			startDate: "2009",
			endDate: "2017",
			location: "Brazil",
			responsibilities: [
				"Co-founded a digital-learning company and led technical delivery across product discovery, solution design, frontend development, client delivery, and business operations.",
			],
			contributions: [
				"Coordinated a multidisciplinary team of designers and developers, including up to five developers.",
				"Reduced e-learning delivery time from around three months to four weeks through a reusable framework and end-to-end process improvements.",
				"Built browser-based learning platforms, interactive educational products, and custom LMS functionality for enterprise projects.",
			],
			technologies: ["JavaScript", "HTML", "CSS", "ActionScript", "Moodle"],
		},
	],
	resume: {
		label: "Download Resume",
		url: "/resume.pdf",
		updatedAt: "2026-08-13",
	},
	contact: [
		{
			label: "Email",
			url: "mailto:davi.naizer@gmail.com",
		},
		{
			label: "LinkedIn",
			url: "https://www.linkedin.com/in/davi-naizer",
		},
	],
};
