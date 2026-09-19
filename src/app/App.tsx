import { Outlet, ScrollRestoration } from "react-router";
import PrimaryNavigation from "../components/PrimaryNavigation.tsx";
import Footer from "./Footer.tsx";

function App() {
	return (
		<>
			<PrimaryNavigation />

			<main>
				<Outlet />
			</main>

			<Footer />
			<ScrollRestoration />
		</>
	);
}

export default App;
