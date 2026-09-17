import { $$, getConfig } from "./util.js";

export const hasCSS = false;

let { selectors } = getConfig();
// A deck with no markdown configuration has nothing to match, and querySelectorAll("") throws
let selector = selectors.filter(Boolean).join(", ");
let elements = selector ? $$(selector) : [];

if (elements.length > 0) {
	await import("./markdown.js");
}
