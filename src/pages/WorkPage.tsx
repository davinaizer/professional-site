import { Link } from "react-router";
import { routes } from "../app/routes.ts";

function WorkPage() {
	return (
		<section className="work page-section">
			<header className="work__header page-lead">
				<p className="eyebrow">Selected work</p>
				<h1>Work</h1>
				<p className="work__intro page-intro">
					A selection of products, tools and workflows I’ve helped build, with
					more context on the problems and decisions behind them.
				</p>
			</header>

			<section aria-label="Explore the evidence" className="work__areas">
				<ul className="work__links">
					<li className="work__link">
						<p className="work__label">Detailed analysis</p>
						<h2>Case studies</h2>
						<p className="work__description">
							More detailed accounts of how I approached a problem, the
							decisions I made, and what I would do differently.
						</p>
						<Link className="work__action" to={routes.caseStudies}>
							Read case studies
						</Link>
					</li>

					<li className="work__link">
						<p className="work__label">Independent projects</p>
						<h2>Experiments</h2>
						<p className="work__description">
							Prototypes and builds I’ve explored independently, with notes on
							what I tried, observed, and would change.
						</p>
						<Link className="work__action" to={routes.experiments}>
							Explore experiments
						</Link>
					</li>
				</ul>
			</section>
		</section>
	);
}

export default WorkPage;
