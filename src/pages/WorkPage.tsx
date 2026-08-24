import { Link } from "react-router";
import { routes } from "../app/routes.ts";
import "./WorkPage.css";

function WorkPage() {
	return (
		<section className="work page-section">
			<header className="work__header page-lead">
				<p className="eyebrow">Professional evidence</p>
				<h1>Work</h1>
				<p className="work__intro page-intro">
					Explore concise project narratives and focused case studies that add
					depth beyond the career timeline.
				</p>
			</header>

			<section aria-labelledby="work-areas-heading" className="work__areas">
				<h2 id="work-areas-heading">Explore the evidence</h2>
				<p>
					Use selected projects for focused examples of product engineering and
					delivery, or examine a smaller set of work through context, decisions,
					and outcomes.
				</p>

				<ul className="work__links">
					<li className="work__link">
						<Link to={routes.projects}>
							Selected projects
							<span aria-hidden="true">↗</span>
						</Link>
						<p className="work__description">
							Focused project narratives covering product engineering, frontend
							delivery, and workflow improvement.
						</p>
					</li>
					<li className="work__link">
						<Link to={routes.caseStudies}>
							Case studies
							<span aria-hidden="true">↗</span>
						</Link>
						<p className="work__description">
							Deeper narratives examining the context, decisions, and outcomes
							behind selected work.
						</p>
					</li>
				</ul>
			</section>
		</section>
	);
}

export default WorkPage;
