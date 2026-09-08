import { $$, getConfig } from "./util.js";

export const hasCSS = false;

let { selectors } = getConfig();
let elements = $$(selectors.join(", "));

if (elements.length > 0) {
	await import("./markdown.js");
}
