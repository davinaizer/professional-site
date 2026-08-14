import { professionalContent } from "../content/professional-content.ts";
import "./ExperiencePage.css";

function ExperiencePage() {
	const { experience } = professionalContent;

	return (
		<section className="experience">
			<header className="experience__header">
				<p className="experience__label">Career history</p>
				<h1>Experience</h1>
				<p className="experience__intro">
					Career history with clear context and accurate contribution
					boundaries.
				</p>
			</header>

			<ol className="experience__timeline">
				{experience.map((entry) => {
					const dates = `${entry.startDate} – ${entry.endDate ?? "Present"}`;
					const metadata = [dates, entry.location].filter(Boolean).join(" · ");

					return (
						<li
							className="experience__item"
							key={`${entry.company}-${entry.role}-${entry.startDate}`}
						>
							<article className="experience__entry">
								<header className="experience__entry-header">
									<h2>{entry.role}</h2>
									<p className="experience__company">{entry.company}</p>
									<p className="experience__metadata">{metadata}</p>
								</header>

								{entry.responsibilities?.length ? (
									<section className="experience__detail">
										<h3>Responsibilities</h3>
										<ul>
											{entry.responsibilities.map((responsibility) => (
												<li key={responsibility}>{responsibility}</li>
											))}
										</ul>
									</section>
								) : null}

								{entry.contributions?.length ? (
									<section className="experience__detail">
										<h3>Selected contributions</h3>
										<ul>
											{entry.contributions.map((contribution) => (
												<li key={contribution}>{contribution}</li>
											))}
										</ul>
									</section>
								) : null}

								{entry.technologies?.length ? (
									<section className="experience__detail">
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
