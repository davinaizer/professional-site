import { createBrowserRouter } from "react-router";
import CaseStudiesPage from "../pages/CaseStudiesPage.tsx";
import ContactPage from "../pages/ContactPage.tsx";
import EngineeringPage from "../pages/EngineeringPage.tsx";
import ExperiencePage from "../pages/ExperiencePage.tsx";
import HomePage from "../pages/HomePage.tsx";
import NotFoundPage from "../pages/NotFoundPage.tsx";
import ProfessionalSummaryPage from "../pages/ProfessionalSummaryPage.tsx";
import ProjectsPage from "../pages/ProjectsPage.tsx";
import ResumePage from "../pages/ResumePage.tsx";
import App from "./App.tsx";

export default createBrowserRouter([
	{
		Component: App,
		children: [
			{ index: true, Component: HomePage },
			{ path: "/summary", Component: ProfessionalSummaryPage },
			{ path: "/experience", Component: ExperiencePage },
			{ path: "/projects", Component: ProjectsPage },
			{ path: "/case-studies", Component: CaseStudiesPage },
			{ path: "/engineering", Component: EngineeringPage },
			{ path: "/resume", Component: ResumePage },
			{ path: "/contact", Component: ContactPage },
			{ path: "*", Component: NotFoundPage },
		],
	},
]);
