import { professionalContent } from "../content/professional-content.ts";
import "./ExperiencePage.css";

function ExperiencePage() {
	const { experience } = professionalContent;

	return (
		<section className="experience page-section">
			<header className="experience__header page-lead">
				<p className="eyebrow">Career history</p>
				<h1>Experience</h1>
				<p className="experience__intro page-intro">
					The roles, products and teams that have shaped how I work today.
				</p>
			</header>

			<ol className="experience__timeline">
				{experience.map((entry) => {
					const dates = `${entry.startDate} – ${entry.endDate ?? "Present"}`;
					const roleSummary = entry.responsibilities?.[0];

					return (
						<li
							className="experience__item"
							key={`${entry.company}-${entry.role}-${entry.startDate}`}
						>
							<article className="experience__entry" id={entry.slug}>
								<header className="experience__entry-header">
									<p className="experience__chronology">{dates}</p>
									<h2>{entry.role}</h2>
									<p className="experience__company">
										<span>{entry.company}</span>
										{entry.location ? ` · ${entry.location}` : null}
									</p>
								</header>

								{roleSummary ? (
									<p className="experience__summary">{roleSummary}</p>
								) : null}

								{entry.contributions?.length ? (
									<section className="experience__detail">
										<h3>Selected contributions</h3>
										<ol className="experience__contributions">
											{entry.contributions.map((contribution) => (
												<li key={contribution}>{contribution}</li>
											))}
										</ol>
									</section>
								) : null}

								{entry.technologies?.length ? (
									<section className="experience__detail experience__technology-group">
										<h3>Technologies</h3>
										<ul className="experience__technologies">
											{entry.technologies.map((technology) => (
												<li key={technology}>{technology}</li>
											))}
										</ul>
									</section>
								) : null}
							</article>
						</li>
					);
				})}
			</ol>
		</section>
	);
}

export default ExperiencePage;
