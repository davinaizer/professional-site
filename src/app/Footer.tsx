import { Icon } from "../components/Icon.tsx";
import { professionalContent } from "../content/professional-content.ts";

function Footer() {
	const email = professionalContent.contact.find(
		(link) => link.label === "Email",
	);
	const footerLinks = email
		? [...professionalContent.identity.profileLinks, email]
		: professionalContent.identity.profileLinks;

	return (
		<footer className="site-footer">
			<div className="site-footer__inner">
				<small>© 2026 Davi Naizer</small>
				<nav aria-label="Social and contact links">
					<ul className="site-footer__links">
						{footerLinks.map((link) => (
							<li key={link.label}>
								<a aria-label={link.label} href={link.url}>
									<Icon label={link.label} />
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</footer>
	);
}

export default Footer;
