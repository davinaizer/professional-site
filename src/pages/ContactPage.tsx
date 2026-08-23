import { professionalContent } from "../content/professional-content.ts";
import "./ContactPage.css";

function ContactPage() {
	const { contact } = professionalContent;

	return (
		<section className="contact">
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
		</section>
	);
}

export default ContactPage;
