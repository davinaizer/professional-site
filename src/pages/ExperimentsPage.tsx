import { Link } from "react-router";
import { routes } from "../app/routes.ts";
import ContextualContinuation from "../components/ContextualContinuation.tsx";
import { projects } from "../content/evidence-content.ts";
import { professionalContent } from "../content/professional-content.ts";

function ExperimentsPage() {
	return (
		<section className="experiments page-section">
			<header className="experiments__header page-lead">
				<p className="eyebrow">Independent work</p>
				<h1>Experiments</h1>
				<p className="experiments__intro page-intro">
					Prototypes and builds I’ve explored independently. These are personal
					experiments, not paid case studies; each records what I tried,
					observed, and would change.
				</p>
			</header>

			<ul aria-label="Experiments" className="experiments__list">
				{projects.map((project) => (
					<li className="experiments__item" key={project.slug}>
						<article
							aria-labelledby={`${project.slug}-heading`}
							className="experiments__entry"
						>
							<div className="experiments__narrative">
								<header className="experiments__entry-header">
									<p className="experiments__label">Independent experiment</p>
									<h2 id={`${project.slug}-heading`}>{project.title}</h2>
									<p className="experiments__summary">{project.summary}</p>
								</header>

								{project.context ? (
									<p className="experiments__context">{project.context}</p>
								) : null}

								<section className="experiments__detail">
									<h3 id={`${project.slug}-purpose`}>Purpose</h3>
									<p>{project.purpose}</p>
								</section>

								{project.problem ? (
									<section className="experiments__detail">
										<h3 id={`${project.slug}-problem`}>Problem</h3>
										<p>{project.problem}</p>
									</section>
								) : null}

								{project.solution ? (
									<section className="experiments__detail">
										<h3 id={`${project.slug}-solution`}>What I built</h3>
										<p>{project.solution}</p>
									</section>
								) : null}

								{project.role ? (
									<section className="experiments__detail">
										<h3 id={`${project.slug}-role`}>My contribution</h3>
										<p>{project.role}</p>
									</section>
								) : null}

								{project.decisions?.length ? (
									<section className="experiments__detail">
										<h3 id={`${project.slug}-decisions`}>
											Design and engineering decisions
										</h3>
										<ul>
											{project.decisions.map((decision) => (
												<li key={decision}>{decision}</li>
											))}
										</ul>
									</section>
								) : null}

								{project.visuals?.length ? (
									<section
										aria-labelledby={`${project.slug}-visuals-heading`}
										className="experiments__visuals"
									>
										<div className="experiments__visuals-intro">
											<h3 id={`${project.slug}-visuals-heading`}>
												{project.visualsHeading ?? "Project visuals"}
											</h3>
											{project.visualsIntro ? (
												<p>{project.visualsIntro}</p>
											) : null}
										</div>
										<ul className="experiments__visual-grid">
											{project.visuals.map((visual) => (
												<li
													className={`experiments__visual-item experiments__visual-item--${visual.layout}`}
													key={visual.src}
												>
													<figure
														className={`experiments__visual experiments__visual--${visual.layout}`}
													>
														<div className="experiments__visual-image">
															<img
																alt={visual.alt}
																decoding="async"
																loading="lazy"
																src={visual.src}
															/>
														</div>
														<figcaption>
															<strong className="experiments__visual-title">
																{visual.title}
															</strong>
															<p className="experiments__visual-caption">
																{visual.caption}
															</p>
														</figcaption>
													</figure>
												</li>
											))}
										</ul>
									</section>
								) : null}

								{project.outcomes?.length ? (
									<section className="experiments__detail experiments__outcome">
										<h3 id={`${project.slug}-outcomes`}>What I observed</h3>
										<ul>
											{project.outcomes.map((outcome) => (
												<li key={outcome.statement}>
													{outcome.statement}
													{outcome.detail ? ` ${outcome.detail}` : null}
												</li>
											))}
										</ul>
									</section>
								) : null}

								{project.reflection ? (
									<section className="experiments__detail">
										<h3 id={`${project.slug}-reflection`}>Reflection</h3>
										<p>{project.reflection}</p>
									</section>
								) : null}
							</div>

							<aside className="experiments__metadata">
								{project.relatedExperienceSlugs?.length ? (
									<section
										aria-label={`Relevant experience for ${project.title}`}
										className="experiments__detail"
									>
										<h3>Relevant experience</h3>
										<ul className="experiments__links">
											{project.relatedExperienceSlugs.map((experienceSlug) => {
												const experienceEntry =
													professionalContent.experience.find(
														(entry) => entry.slug === experienceSlug,
													);

												return experienceEntry ? (
													<li key={experienceEntry.slug}>
														<Link
															to={`${routes.experience}#${experienceEntry.slug}`}
														>
															{experienceEntry.role} at{" "}
															{experienceEntry.company}
														</Link>
													</li>
												) : null;
											})}
										</ul>
									</section>
								) : null}

								{project.capabilities?.length ? (
									<section
										aria-label={`Capabilities for ${project.title}`}
										className="experiments__detail"
									>
										<h3>Capabilities</h3>
										<ul className="experiments__tags">
											{project.capabilities.map((capability) => (
												<li key={capability}>{capability}</li>
											))}
										</ul>
									</section>
								) : null}

								{project.technologies?.length ? (
									<section className="experiments__detail">
										<h3>Tools and materials</h3>
										<ul className="experiments__tags">
											{project.technologies.map((technology) => (
												<li key={technology}>{technology}</li>
											))}
										</ul>
									</section>
								) : null}
							</aside>
						</article>
					</li>
				))}
			</ul>

			<ContextualContinuation
				label="Read the case studies"
				to={routes.caseStudies}
			/>
		</section>
	);
}

export default ExperimentsPage;
