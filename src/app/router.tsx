import { createBrowserRouter, Navigate } from "react-router";
import CaseStudiesPage from "../pages/CaseStudiesPage.tsx";
import ContactPage from "../pages/ContactPage.tsx";
import EngineeringPage from "../pages/EngineeringPage.tsx";
import ExperiencePage from "../pages/ExperiencePage.tsx";
import HomePage from "../pages/HomePage.tsx";
import NotFoundPage from "../pages/NotFoundPage.tsx";
import ProjectsPage from "../pages/ProjectsPage.tsx";
import ResumePage from "../pages/ResumePage.tsx";
import WorkPage from "../pages/WorkPage.tsx";
import App from "./App.tsx";
import { routes } from "./routes.ts";

export default createBrowserRouter([
	{
		Component: App,
		children: [
			{ path: routes.home, Component: HomePage, index: true },
			{ path: "/summary", element: <Navigate replace to={routes.home} /> },
			{ path: routes.experience, Component: ExperiencePage },
			{ path: routes.work, Component: WorkPage },
			{ path: routes.projects, Component: ProjectsPage },
			{ path: routes.caseStudies, Component: CaseStudiesPage },
			{ path: routes.engineering, Component: EngineeringPage },
			{ path: routes.resume, Component: ResumePage },
			{ path: routes.contact, Component: ContactPage },
			{ path: "*", Component: NotFoundPage },
		],
	},
]);
