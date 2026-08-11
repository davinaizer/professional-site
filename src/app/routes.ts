// src/app/routes.ts
export const routes = {
	home: "/",
	summary: "/summary",
	experience: "/experience",
	work: "/work",
	projects: "/projects",
	caseStudies: "/case-studies",
	engineering: "/engineering",
	resume: "/resume",
	contact: "/contact",
} as const satisfies Record<string, `/${string}`>;

export type AppRoute = (typeof routes)[keyof typeof routes];
