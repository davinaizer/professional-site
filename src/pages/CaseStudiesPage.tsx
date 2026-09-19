import { routes } from "../app/routes.ts";
import ContextualContinuation from "../components/ContextualContinuation.tsx";
import { caseStudies as caseStudyContent } from "../content/evidence-content.ts";
import type { CaseStudy } from "../types/evidence.ts";
import "./CaseStudiesPage.css";

type CaseStudiesPageProps = {
	caseStudies?: readonly CaseStudy[];
};

function CaseStudiesPage({
	caseStudies = caseStudyContent,
}: CaseStudiesPageProps) {
	return (
		<section className="case-studies page-section">
			<header className="case-studies__header page-lead">
				<p className="eyebrow">Selected work</p>
				<h1>Case Studies</h1>
				<p className="case-studies__intro page-intro">
					A more detailed look at how I approached a problem, the decisions I
					made, and what I would do differently.
				</p>
			</header>

			{caseStudies.length ? (
				<ul aria-label="Case studies" className="case-studies__list">
					{caseStudies.map((caseStudy) => (
						<li className="case-studies__item" key={caseStudy.slug}>
							<article
								aria-labelledby={`${caseStudy.slug}-heading`}
								className="case-studies__entry"
							>
								<div className="case-studies__narrative">
									<header className="case-studies__entry-header">
										<p className="case-studies__label">Product case study</p>
										<h2 id={`${caseStudy.slug}-heading`}>{caseStudy.title}</h2>
										<p className="case-studies__summary">{caseStudy.summary}</p>
									</header>

									<section
										aria-labelledby={`${caseStudy.slug}-context-heading`}
										className="case-studies__detail"
									>
										<h3 id={`${caseStudy.slug}-context-heading`}>Context</h3>
										<p>{caseStudy.context}</p>
									</section>

									<section
										aria-labelledby={`${caseStudy.slug}-problem-heading`}
										className="case-studies__detail"
									>
										<h3 id={`${caseStudy.slug}-problem-heading`}>Problem</h3>
										<p>{caseStudy.problem}</p>
									</section>

									<section
										aria-labelledby={`${caseStudy.slug}-decisions-heading`}
										className="case-studies__detail case-studies__decisions"
									>
										<h3 id={`${caseStudy.slug}-decisions-heading`}>
											Decisions
										</h3>
										<ul>
											{caseStudy.decisions.map((decision) => (
												<li key={decision}>{decision}</li>
											))}
										</ul>
									</section>

									<section
										aria-labelledby={`${caseStudy.slug}-product-ux-heading`}
										className="case-studies__detail"
									>
										<h3 id={`${caseStudy.slug}-product-ux-heading`}>
											Product / UX
										</h3>
										<p>{caseStudy.productAndUx}</p>
									</section>

									<section
										aria-labelledby={`${caseStudy.slug}-engineering-heading`}
										className="case-studies__detail"
									>
										<h3 id={`${caseStudy.slug}-engineering-heading`}>
											Engineering
										</h3>
										<p>{caseStudy.engineering}</p>
									</section>

									<section
										aria-labelledby={`${caseStudy.slug}-outcomes-heading`}
										className="case-studies__detail case-studies__outcomes"
									>
										<h3 id={`${caseStudy.slug}-outcomes-heading`}>Outcomes</h3>
										<ul>
											{caseStudy.outcomes.map((outcome) => (
												<li key={outcome.statement}>
													{outcome.statement}
													{outcome.detail ? ` ${outcome.detail}` : null}
												</li>
											))}
										</ul>
									</section>

									<section
										aria-labelledby={`${caseStudy.slug}-reflection-heading`}
										className="case-studies__detail"
									>
										<h3 id={`${caseStudy.slug}-reflection-heading`}>
											Reflection
										</h3>
										<p>{caseStudy.reflection}</p>
									</section>
								</div>

								<aside className="case-studies__metadata">
									<section
										aria-labelledby={`${caseStudy.slug}-role-heading`}
										className="case-studies__detail"
									>
										<h3 id={`${caseStudy.slug}-role-heading`}>Role</h3>
										<p>{caseStudy.role}</p>
									</section>

									<section
										aria-labelledby={`${caseStudy.slug}-constraints-heading`}
										className="case-studies__detail"
									>
										<h3 id={`${caseStudy.slug}-constraints-heading`}>
											Constraints
										</h3>
										<ul className="case-studies__constraints">
											{caseStudy.constraints.map((constraint) => (
												<li key={constraint}>{constraint}</li>
											))}
										</ul>
									</section>
								</aside>
							</article>
						</li>
					))}
				</ul>
			) : null}

			<ContextualContinuation
				label="View the career context"
				to={routes.experience}
			/>
		</section>
	);
}

export default CaseStudiesPage;
