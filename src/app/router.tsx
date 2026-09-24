import { createBrowserRouter } from "react-router";
import {
	CaseStudiesPage,
	ContactPage,
	ExperiencePage,
	HomePage,
	NotFoundPage,
	ProjectsPage,
	ResumePage,
	WorkPage,
} from "../pages/";
import App from "./App.tsx";
import { routes } from "./routes.ts";

export default createBrowserRouter([
	{
		Component: App,
		children: [
			{ path: routes.home, Component: HomePage, index: true },
			{ path: routes.experience, Component: ExperiencePage },
			{ path: routes.work, Component: WorkPage },
			{ path: routes.projects, Component: ProjectsPage },
			{ path: routes.caseStudies, Component: CaseStudiesPage },
			{ path: routes.resume, Component: ResumePage },
			{ path: routes.contact, Component: ContactPage },
			{ path: "*", Component: NotFoundPage },
		],
	},
]);
