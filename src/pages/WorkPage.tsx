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

			<section aria-label="Explore the evidence" className="work__areas">
				<ul className="work__links">
					<li className="work__link">
						<p className="work__label">Project narratives</p>
						<h2>Selected projects</h2>
						<p className="work__description">
							Focused project narratives covering product engineering, frontend
							delivery, and workflow improvement.
						</p>
						<Link className="work__action" to={routes.projects}>
							Explore projects
						</Link>
					</li>

					<li className="work__link">
						<p className="work__label">Detailed analysis</p>
						<h2>Case studies</h2>
						<p className="work__description">
							Deeper narratives examining the context, decisions, and outcomes
							behind selected work.
						</p>
						<Link className="work__action" to={routes.caseStudies}>
							Read case studies
						</Link>
					</li>
				</ul>
			</section>
		</section>
	);
}

export default WorkPage;
