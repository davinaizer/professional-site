import { professionalContent } from "../content/professional-content.ts";
import "./ContactPage.css";

function ContactPage() {
	const { contact } = professionalContent;

	return (
		<section className="contact">
			<div className="contact__layout">
				<header className="contact__header">
					<p className="contact__label">Get in touch</p>
					<h1>Contact</h1>
					<p className="contact__intro">
						For professional opportunities, conversations, and collaboration,
						reach me through the channels below.
					</p>
				</header>

				<ul aria-label="Professional contact links" className="contact__links">
					{contact.map((link, index) => (
						<li className="contact__link" key={link.label}>
							<p className="contact__metadata">
								<span>{String(index + 1).padStart(2, "0")}</span>
								<span aria-hidden="true">{"//"}</span>
								<span>{link.category}</span>
							</p>
							<a href={link.url}>
								{link.actionLabel}
								<span aria-hidden="true">↗</span>
							</a>
							{link.description ? (
								<p className="contact__description">{link.description}</p>
							) : null}
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

export default ContactPage;
