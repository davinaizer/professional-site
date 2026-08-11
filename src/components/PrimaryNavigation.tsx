import { NavLink } from "react-router";
import { routes } from "../app/routes";

function PrimaryNavigation() {
	return (
		<nav className="primary-navigation" aria-label="Primary">
			<ul>
				<li>
					<NavLink to={routes.home}>Home</NavLink>
				</li>
				<li>
					<NavLink to={routes.summary}>Summary</NavLink>
				</li>
				<li>
					<NavLink to={routes.experience}>Experience</NavLink>
				</li>
				<li>
					<NavLink to={routes.projects}>Projects</NavLink>
				</li>
				<li>
					<NavLink to={routes.caseStudies}>Case Studies</NavLink>
				</li>
				<li>
					<NavLink to={routes.engineering}>Engineering</NavLink>
				</li>
				<li>
					<NavLink to={routes.resume}>Resume</NavLink>
				</li>
				<li>
					<NavLink to={routes.contact}>Contact</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default PrimaryNavigation;
