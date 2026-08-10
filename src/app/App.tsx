import { Outlet } from "react-router";
import PrimaryNavigation from "../components/PrimaryNavigation.tsx";
import Footer from "./Footer.tsx";

function App() {
	return (
		<>
			<header>
				<p>Professional Site</p>
				<PrimaryNavigation />
			</header>

			<main>
				<Outlet />
			</main>

			<Footer />
		</>
	);
}

export default App;
