import { Outlet } from "react-router";
import PrimaryNavigation from "../components/PrimaryNavigation.tsx";
import Footer from "./Footer.tsx";

function App() {
	return (
		<>
			<header className="site-header">
				<div className="site-header__inner">
					<p className="site-header__identity">Professional Site</p>
					<PrimaryNavigation />
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
