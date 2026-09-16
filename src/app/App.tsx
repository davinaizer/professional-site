import { Link, Outlet } from "react-router";
import PrimaryNavigation from "../components/PrimaryNavigation.tsx";
import Footer from "./Footer.tsx";
import { routes } from "./routes.ts";

function App() {
	return (
		<>
			<header className="site-header">
				<div className="site-header__inner">
					<Link className="site-header__identity" to={routes.home}>
						Davi Naizer
					</Link>
					<PrimaryNavigation />
					<Link className="site-header__contact" to={routes.contact}>
						Contact
					</Link>
				</div>
			</header>

			<main>
				<Outlet />
			</main>

			<Footer />
		</>
	);
}

export default App;
