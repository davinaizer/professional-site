import type { CaseStudy } from "../types/evidence.ts";

function CaseStudyGallery({
	slug,
	visuals,
}: {
	slug: string;
	visuals: NonNullable<CaseStudy["visuals"]>;
}) {
	return (
		<section
			aria-labelledby={`${slug}-visuals-heading`}
			className="case-studies__visuals"
		>
			<div className="case-studies__visuals-intro">
				<h3 id={`${slug}-visuals-heading`}>App screens</h3>
				<p>
					These screenshots are from the Alfred app. The onboarding screens use
					Alfred’s earlier WhatNext name.
				</p>
			</div>
			<ul className="case-studies__visual-grid">
				{visuals.map((visual) => (
					<li
						className={`case-studies__visual-item case-studies__visual-item--${visual.layout}`}
						key={visual.src}
					>
						<figure
							className={`case-studies__visual case-studies__visual--${visual.layout}`}
						>
							<div className="case-studies__visual-image">
								<img
									alt={visual.alt}
									decoding="async"
									loading="lazy"
									src={visual.src}
								/>
							</div>
							<figcaption>
								<strong className="case-studies__visual-title">
									{visual.title}
								</strong>
								<p className="case-studies__visual-caption">{visual.caption}</p>
							</figcaption>
						</figure>
					</li>
				))}
			</ul>
		</section>
	);
}

export default CaseStudyGallery;
