import { Link } from "react-router";

function NotFoundPage() {
	return (
		<section>
			<h1>Page Not Found</h1>
			<p>
				<Link to="/">Click here to go back to the homepage.</Link>
			</p>
		</section>
	);
}

export default NotFoundPage;
