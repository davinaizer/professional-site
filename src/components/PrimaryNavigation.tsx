import { NavLink } from "react-router";
import { routes } from "../app/routes";

function PrimaryNavigation() {
	return (
		<nav className="primary-navigation" aria-label="Primary">
			<ul>
				<li>
					<NavLink to={routes.experience}>Experience</NavLink>
				</li>
				<li>
					<NavLink to={routes.work}>Work</NavLink>
				</li>
				{/*<li>
					<NavLink to={routes.engineering}>Engineering</NavLink>
				</li>*/}
				<li>
					<NavLink to={routes.resume}>Resume</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default PrimaryNavigation;
