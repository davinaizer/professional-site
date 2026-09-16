import { Link } from "react-router";
import { routes } from "../app/routes.ts";
import ContextualContinuation from "../components/ContextualContinuation.tsx";
import { projects } from "../content/evidence-content.ts";
import { professionalContent } from "../content/professional-content.ts";
import "./ProjectsPage.css";

const projectLabels: Readonly<Record<string, string>> = {
	"vessel-list-template-administration": "Production product work",
	"internal-content-production-workflow": "Internal tooling",
	alfred: "Exploratory product",
};

function ProjectsPage() {
	return (
		<section className="projects page-section">
			<header className="projects__header page-lead">
				<p className="eyebrow">Selected work</p>
				<h1>Selected Projects</h1>
				<p className="projects__intro page-intro">
					A closer look at a few projects I’ve worked on and the problems they
					were meant to solve.
				</p>
			</header>

			<ul aria-label="Selected projects" className="projects__list">
				{projects.map((project) => (
					<li className="projects__item" key={project.slug}>
						<article
							aria-labelledby={`${project.slug}-heading`}
							className="projects__entry"
						>
							<div className="projects__narrative">
								<header className="projects__entry-header">
									<p className="projects__label">
										{projectLabels[project.slug] ?? "Project narrative"}
									</p>
									<h2 id={`${project.slug}-heading`}>{project.title}</h2>
									<p className="projects__summary">{project.summary}</p>
								</header>

								{project.context ? (
									<p className="projects__context">{project.context}</p>
								) : null}

								<section className="projects__detail">
									<h3 id={`${project.slug}-purpose`}>Purpose</h3>
									<p>{project.purpose}</p>
								</section>

								{project.problem ? (
									<section className="projects__detail">
										<h3 id={`${project.slug}-problem`}>Problem</h3>
										<p>{project.problem}</p>
									</section>
								) : null}

								{project.solution ? (
									<section className="projects__detail">
										<h3 id={`${project.slug}-solution`}>Solution</h3>
										<p>{project.solution}</p>
									</section>
								) : null}

								{project.outcomes?.length ? (
									<section className="projects__detail projects__outcome">
										<h3 id={`${project.slug}-outcomes`}>Outcome</h3>
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
							</div>

							<aside className="projects__metadata">
								{project.relatedExperienceSlugs?.length ? (
									<section
										aria-label={`Relevant experience for ${project.title}`}
										className="projects__detail"
									>
										<h3>Relevant experience</h3>
										<ul className="projects__links">
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
										className="projects__detail"
									>
										<h3>Capabilities</h3>
										<ul className="projects__tags">
											{project.capabilities.map((capability) => (
												<li key={capability}>{capability}</li>
											))}
										</ul>
									</section>
								) : null}

								{project.technologies?.length ? (
									<section className="projects__detail">
										<h3>Technologies</h3>
										<ul className="projects__tags">
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

export default ProjectsPage;
