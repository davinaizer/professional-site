import { beforeEach, describe, expect, it } from "vitest";
import {
	installCloudflareAnalytics,
	isAnalyticsOptedOut,
	saveAnalyticsOptOut,
} from "./cloudflare-analytics.ts";

describe("Cloudflare Web Analytics", () => {
	beforeEach(() => {
		window.localStorage.clear();
	});

	it("defaults to enabled and persists an opt-out locally", () => {
		expect(isAnalyticsOptedOut()).toBe(false);
		expect(saveAnalyticsOptOut(true)).toBe(true);
		expect(isAnalyticsOptedOut()).toBe(true);
		expect(saveAnalyticsOptOut(false)).toBe(true);
		expect(isAnalyticsOptedOut()).toBe(false);
	});

	it("fails closed when the preference cannot be read or saved", () => {
		const unavailableStorage = {
			getItem() {
				throw new Error("Storage unavailable");
			},
			setItem() {
				throw new Error("Storage unavailable");
			},
			removeItem() {
				throw new Error("Storage unavailable");
			},
		};

		expect(isAnalyticsOptedOut(unavailableStorage)).toBe(true);
		expect(saveAnalyticsOptOut(true, unavailableStorage)).toBe(false);
	});

	it.each([
		{ hostname: "localhost", isProduction: false, optedOut: false },
		{
			hostname: "develop.davi-naizer.pages.dev",
			isProduction: true,
			optedOut: false,
		},
		{ hostname: "davi-naizer.pages.dev", isProduction: true, optedOut: true },
	])(
		"does not load the beacon outside production or after opt-out (%s)",
		({ hostname, isProduction, optedOut }) => {
			const targetDocument = document.implementation.createHTMLDocument();
			const storage = {
				getItem: () => (optedOut ? "true" : null),
				setItem: () => undefined,
				removeItem: () => undefined,
			};

			expect(
				installCloudflareAnalytics({
					document: targetDocument,
					hostname,
					isProduction,
					storage,
				}),
			).toBe(false);
			expect(targetDocument.querySelector("script")).toBeNull();
		},
	);

	it("loads one manual beacon on the production hostname when enabled", () => {
		const targetDocument = document.implementation.createHTMLDocument();
		const storage = {
			getItem: () => null,
			setItem: () => undefined,
			removeItem: () => undefined,
		};
		const options = {
			document: targetDocument,
			hostname: "davi-naizer.pages.dev",
			isProduction: true,
			storage,
		};

		expect(installCloudflareAnalytics(options)).toBe(true);
		expect(installCloudflareAnalytics(options)).toBe(false);

		const script = targetDocument.querySelector("script");
		expect(script?.getAttribute("src")).toBe(
			"https://static.cloudflareinsights.com/beacon.min.js",
		);
		expect(script?.getAttribute("type")).toBe("module");
		expect(script?.dataset.cfBeacon).toBe(
			'{"token":"dd6352b314a34a77b99aa07c8ca7bfe1"}',
		);
	});

	it("does not add a second beacon if Cloudflare automatic injection is still present", () => {
		const targetDocument = document.implementation.createHTMLDocument();
		const existingScript = targetDocument.createElement("script");
		existingScript.src = "https://static.cloudflareinsights.com/beacon.min.js";
		targetDocument.body.append(existingScript);

		expect(
			installCloudflareAnalytics({
				document: targetDocument,
				hostname: "davi-naizer.pages.dev",
				isProduction: true,
				storage: {
					getItem: () => null,
					setItem: () => undefined,
					removeItem: () => undefined,
				},
			}),
		).toBe(false);
		expect(targetDocument.querySelectorAll("script")).toHaveLength(1);
	});
});
