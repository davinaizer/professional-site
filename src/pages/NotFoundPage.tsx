import { Link } from "react-router";
import { routes } from "../app/routes";

function NotFoundPage() {
	return (
		<section>
			<h1>Page Not Found</h1>
			<p>
				<Link to={routes.home}>Return home</Link>
			</p>
		</section>
	);
}

export default NotFoundPage;
