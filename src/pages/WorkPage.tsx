import { Link } from "react-router";
import { routes } from "../app/routes.ts";

function WorkPage() {
	return (
		<section>
			<h1>Work</h1>
			<p>
				Explore selected project evidence or examine a smaller set of case
				studies in depth.
			</p>
			<ul>
				<li>
					<Link to={routes.projects}>Selected projects</Link>
				</li>
				<li>
					<Link to={routes.caseStudies}>Case studies</Link>
				</li>
			</ul>
		</section>
	);
}

export default WorkPage;
