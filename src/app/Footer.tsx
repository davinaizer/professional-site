import { professionalContent } from "../content/professional-content.ts";

function FooterIcon({ label }: { label: string }) {
	if (label === "LinkedIn") {
		return (
			<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24">
				<path d="M5.25 3.5A1.75 1.75 0 1 1 5.25 7a1.75 1.75 0 0 1 0-3.5ZM3.75 8.5h3v11.75h-3V8.5Zm5 0h2.88v1.6h.04c.4-.76 1.38-1.85 2.84-1.85 3.04 0 3.6 2 3.6 4.6v7.4h-3v-6.56c0-1.56-.03-3.57-2.18-3.57-2.18 0-2.52 1.7-2.52 3.46v6.67h-3V8.5Z" />
			</svg>
		);
	}

	if (label === "GitHub") {
		return (
			<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24">
				<path d="M12 2.25a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.75c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 7.24c.85 0 1.69.11 2.48.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.56 4.93.36.31.68.92.68 1.86v2.6c0 .27.18.58.69.48A10 10 0 0 0 12 2.25Z" />
			</svg>
		);
	}

	return (
		<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24">
			<path d="M3.75 5.5h16.5A1.75 1.75 0 0 1 22 7.25v9.5a1.75 1.75 0 0 1-1.75 1.75H3.75A1.75 1.75 0 0 1 2 16.75v-9.5A1.75 1.75 0 0 1 3.75 5.5Zm0 1.5a.25.25 0 0 0-.25.25v.42L12 13.1l8.5-5.43v-.42a.25.25 0 0 0-.25-.25H3.75Zm16.75 2.45-8.1 5.17a.75.75 0 0 1-.8 0L3.5 9.45v7.3c0 .14.11.25.25.25h16.5a.25.25 0 0 0 .25-.25v-7.3Z" />
		</svg>
	);
}

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
				<small>© 2026 Davi Naizer Santos</small>
				<nav aria-label="Social and contact links">
					<ul className="site-footer__links">
						{footerLinks.map((link) => (
							<li key={link.label}>
								<a aria-label={link.label} href={link.url}>
									<FooterIcon label={link.label} />
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
