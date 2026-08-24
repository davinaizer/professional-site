import { professionalContent } from "../content/professional-content.ts";
import "./ContactPage.css";

function ContactPage() {
	const { contact } = professionalContent;

	return (
		<section className="contact">
<<<<<<< Updated upstream
			<header className="contact__header">
				<p className="contact__label">Professional contact</p>
				<h1>Contact</h1>
				<p className="contact__intro">
					For professional opportunities and conversations about frontend or
					product engineering, get in touch by email or connect with me on
					LinkedIn.
				</p>
			</header>

			<ul className="contact__actions">
				{contact.map((item) => (
					<li key={item.label}>
						<a href={item.url}>{item.label}</a>
					</li>
				))}
			</ul>
=======
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
>>>>>>> Stashed changes
		</section>
	);
}

export default ContactPage;
