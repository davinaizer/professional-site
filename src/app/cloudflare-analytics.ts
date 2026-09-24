const productionHostname = "davi-naizer.pages.dev";
const beaconToken = "dd6352b314a34a77b99aa07c8ca7bfe1";
const analyticsOptOutKey = "professional-site.analytics-opt-out";
const beaconScriptId = "cloudflare-web-analytics";

type AnalyticsPreferenceStorage = Pick<
	Storage,
	"getItem" | "setItem" | "removeItem"
>;

type InstallCloudflareAnalyticsOptions = {
	document?: Document;
	hostname?: string;
	isProduction?: boolean;
	storage?: AnalyticsPreferenceStorage;
};

export function isAnalyticsOptedOut(
	storage?: AnalyticsPreferenceStorage,
): boolean {
	try {
		return (
			(storage ?? window.localStorage).getItem(analyticsOptOutKey) === "true"
		);
	} catch {
		return true;
	}
}

export function saveAnalyticsOptOut(
	optedOut: boolean,
	storage?: AnalyticsPreferenceStorage,
): boolean {
	try {
		const preferenceStorage = storage ?? window.localStorage;

		if (optedOut) {
			preferenceStorage.setItem(analyticsOptOutKey, "true");
		} else {
			preferenceStorage.removeItem(analyticsOptOutKey);
		}

		return true;
	} catch {
		return false;
	}
}

export function installCloudflareAnalytics({
	document: targetDocument = document,
	hostname = window.location.hostname,
	isProduction = import.meta.env.PROD,
	storage,
}: InstallCloudflareAnalyticsOptions = {}): boolean {
	if (
		!isProduction ||
		hostname !== productionHostname ||
		isAnalyticsOptedOut(storage) ||
		targetDocument.getElementById(beaconScriptId) ||
		targetDocument.querySelector(
			'script[src="https://static.cloudflareinsights.com/beacon.min.js"]',
		)
	) {
		return false;
	}

	const script = targetDocument.createElement("script");
	script.id = beaconScriptId;
	script.type = "module";
	script.defer = true;
	script.src = "https://static.cloudflareinsights.com/beacon.min.js";
	script.dataset.cfBeacon = JSON.stringify({ token: beaconToken });
	targetDocument.body.append(script);

	return true;
}
