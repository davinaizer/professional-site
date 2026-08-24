import { projects } from "../content/evidence-content.ts";
import "./ProjectsPage.css";

function ProjectsPage() {
	return (
		<section className="projects page-section">
			<header className="projects__header page-lead">
				<p className="eyebrow">Selected work</p>
				<h1>Selected Projects</h1>
				<p className="projects__intro page-intro">
					Focused project narratives showing product engineering, frontend
					delivery, workflow improvement, and technical judgement.
				</p>
			</header>

			<ol aria-label="Selected projects" className="projects__list">
				{projects.map((project) => (
					<li className="projects__item" key={project.slug}>
						<article
							aria-labelledby={`${project.slug}-heading`}
							className="projects__entry"
						>
							<header className="projects__entry-header">
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
								<section className="projects__detail">
									<h3 id={`${project.slug}-outcomes`}>Outcomes</h3>
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

							{project.technologies?.length ? (
								<section className="projects__detail">
									<h3 id={`${project.slug}-technologies`}>Technologies</h3>
									<ul className="projects__technologies">
										{project.technologies.map((technology) => (
											<li key={technology}>{technology}</li>
										))}
									</ul>
								</section>
							) : null}
						</article>
					</li>
				))}
			</ol>
		</section>
	);
}

export default ProjectsPage;
