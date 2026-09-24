import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import { installCloudflareAnalytics } from "./app/cloudflare-analytics.ts";
import router from "./app/router.tsx";

const rootElement = document.getElementById("root");
if (!rootElement) {
	throw new Error('Root element with id "root" was not found.');
}

installCloudflareAnalytics();

createRoot(rootElement).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
