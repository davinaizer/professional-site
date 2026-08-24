import { professionalContent } from "../content/professional-content.ts";
import "./ProfessionalSummaryPage.css";

function ProfessionalSummaryPage() {
	const { summary } = professionalContent;

	return (
		<section className="professional-summary page-section">
			<header className="professional-summary__header page-lead">
				<p className="eyebrow">Professional profile</p>
				<h1>Professional Summary</h1>
				<p className="professional-summary__intro page-intro">
					{summary.summary}
				</p>
			</header>

			<section
				aria-labelledby="focus-areas-heading"
				className="professional-summary__focus"
			>
				<h2 id="focus-areas-heading">Focus areas</h2>
				<ul>
					{summary.focusAreas.map((focusArea) => (
						<li key={focusArea}>{focusArea}</li>
					))}
				</ul>
			</section>
		</section>
	);
}

export default ProfessionalSummaryPage;
