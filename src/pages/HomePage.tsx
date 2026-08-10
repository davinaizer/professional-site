import { Link } from "react-router";
import { routes } from "../app/routes.ts";

function HomePage() {
	return (
		<section>
			<h1>Davi Naizer Santos</h1>
			<p>A professional evidence application in development.</p>
			<p>
				This foundation will organise professional experience, selected work,
				and engineering decisions into reusable evidence.
			</p>
			<nav aria-label="Explore the application">
				<ul>
					<li>
						<Link to={routes.summary}>Explore the professional summary</Link>
					</li>
					<li>
						<Link to={routes.experience}>Explore experience</Link>
					</li>
					<li>
						<Link to={routes.engineering}>Explore engineering decisions</Link>
					</li>
				</ul>
			</nav>
		</section>
	);
}

export default HomePage;
