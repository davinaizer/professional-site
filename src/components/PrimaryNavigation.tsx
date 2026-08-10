import { NavLink } from "react-router";

function PrimaryNavigation() {
	return (
		<nav>
			<ul>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/summary">Summary</NavLink>
				</li>
				<li>
					<NavLink to="/experience">Experience</NavLink>
				</li>
				<li>
					<NavLink to="/projects">Projects</NavLink>
				</li>
				<li>
					<NavLink to="/case-studies">Case Studies</NavLink>
				</li>
				<li>
					<NavLink to="/engineering">Engineering</NavLink>
				</li>
				<li>
					<NavLink to="/resume">Resume</NavLink>
				</li>
				<li>
					<NavLink to="/contact">Contact</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default PrimaryNavigation;
