import { professionalContent } from "../content/professional-content.ts";
import "./ResumePage.css";

function ResumePage() {
	const { resume } = professionalContent;
	const { updatedAt } = resume;
	const formattedDate = updatedAt
		? new Intl.DateTimeFormat("en-GB", {
				day: "numeric",
				month: "long",
				year: "numeric",
				timeZone: "UTC",
			}).format(new Date(`${updatedAt}T00:00:00Z`))
		: null;

	return (
		<section className="resume page-section">
			<header className="resume__header page-lead">
				<p className="eyebrow">Professional profile</p>
				<h1>Resume</h1>
				<p className="resume__intro page-intro">
					Download my current resume for a concise overview of my professional
					experience as a senior frontend and product engineer.
				</p>
				<p className="resume__intro page-intro">
					It covers my experience across React, TypeScript, product development,
					frontend architecture, developer tooling, workflow automation, and
					recent native iOS development.
				</p>
			</header>

			{formattedDate ? (
				<p className="resume__metadata">
					Updated <time dateTime={updatedAt}>{formattedDate}</time>
				</p>
			) : null}

			<p className="resume__action">
				<a href={resume.url} download>
					{resume.label}
				</a>
			</p>
		</section>
	);
}

export default ResumePage;
