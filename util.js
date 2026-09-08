import { $$ } from "@inspirejs/core/util";

export function getConfig () {
	let configElements = $$("[data-markdown-elements]");
	let selectors = configElements.map(e => e.getAttribute("data-markdown-elements"));

	// Load and apply plugins specified via data-markdown-plugins (comma-separated npm package names or URLs)
	let pluginNames = new Set(
		configElements.flatMap(e => {
			let attr = e.getAttribute("data-markdown-plugins");
			return attr ? attr.split(/\s*,\s*/).filter(Boolean) : [];
		}),
	);

	return { selectors, pluginNames };
}

export { $$ };
