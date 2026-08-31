import type { CaseStudy } from "../content/evidence.ts";
import { caseStudies as caseStudyContent } from "../content/evidence-content.ts";
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
				<p className="eyebrow">Professional evidence</p>
				<h1>Case Studies</h1>
				<p className="case-studies__intro page-intro">
					Deeper narratives examining the context, decisions, and outcomes
					behind selected work.
				</p>
			</header>

			{caseStudies.length === 0 ? (
				<section
					aria-labelledby="case-studies-empty-heading"
					className="case-studies__empty"
				>
					<h2 id="case-studies-empty-heading">Case studies in progress</h2>
					<p>
						Focused case studies will be added as their public-safe narratives
						are ready.
					</p>
				</section>
			) : (
				<ol aria-label="Case studies" className="case-studies__list">
					{caseStudies.map((caseStudy) => (
						<li className="case-studies__item" key={caseStudy.slug}>
							<article
								aria-labelledby={`${caseStudy.slug}-heading`}
								className="case-studies__entry"
							>
								<header className="case-studies__entry-header">
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
									<ul>
										{caseStudy.constraints.map((constraint) => (
											<li key={constraint}>{constraint}</li>
										))}
									</ul>
								</section>

								<section
									aria-labelledby={`${caseStudy.slug}-decisions-heading`}
									className="case-studies__detail"
								>
									<h3 id={`${caseStudy.slug}-decisions-heading`}>Decisions</h3>
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
									className="case-studies__detail"
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

								<section
									aria-labelledby={`${caseStudy.slug}-evidence-boundary-heading`}
									className="case-studies__detail"
								>
									<h3 id={`${caseStudy.slug}-evidence-boundary-heading`}>
										Public-safe evidence boundary
									</h3>
									<p>{caseStudy.publicEvidenceBoundary}</p>
								</section>
							</article>
						</li>
					))}
				</ol>
			)}
		</section>
	);
}

export default CaseStudiesPage;
