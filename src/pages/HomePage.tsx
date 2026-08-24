import { Link } from "react-router";
import { routes } from "../app/routes.ts";
import { professionalContent } from "../content/professional-content.ts";
import "./HomePage.css";

function HomePage() {
	const { identity, summary, experience, resume } = professionalContent;
	const currentExperience = experience[0];

	return (
		<section className="home page-section">
			<div className="home__hero page-lead">
				<p className="eyebrow">Professional profile</p>
				<h1>{identity.name}</h1>
				<p className="home__headline">{identity.headline}</p>
				<p className="home__summary page-intro">{summary.summary}</p>
				<nav
					aria-label="Explore core professional areas"
					className="home__actions"
				>
					<ul>
						<li>
							<Link to={routes.summary}>Professional summary</Link>
						</li>
						<li>
							<Link to={routes.experience}>Explore experience</Link>
						</li>
						<li>
							<a href={resume.url}>{resume.label}</a>
						</li>
						<li>
							<Link to={routes.contact}>Contact</Link>
						</li>
					</ul>
				</nav>
			</div>

			<section aria-labelledby="focus-heading" className="home__focus">
				<div>
					<p className="eyebrow">Focus areas</p>
					<h2 id="focus-heading">Product-minded frontend engineering</h2>
				</div>
				<ul>
					{summary.focusAreas.map((focusArea) => (
						<li key={focusArea}>{focusArea}</li>
					))}
				</ul>
			</section>

			<section
				aria-labelledby="current-role-heading"
				className="home__highlight"
			>
				<p className="eyebrow">Current role</p>
				<h2 id="current-role-heading">{currentExperience.role}</h2>
				<p>{currentExperience.company}</p>
				<Link to={routes.experience}>View career timeline</Link>
			</section>
		</section>
	);
}

export default HomePage;
