// src/app/routes.ts
export const routes = {
	home: "/",
	experience: "/experience",
	work: "/work",
	projects: "/projects",
	caseStudies: "/case-studies",
	resume: "/resume",
	contact: "/contact",
} as const satisfies Record<string, `/${string}`>;

export type AppRoute = (typeof routes)[keyof typeof routes];
