import { browser } from "$app/environment";
import type { Writable } from "svelte/store";
import { get, writable } from "svelte/store";

export const pageHeight: Writable<number> = writable(700);
export const headerHeight: Writable<number> = writable(50);
export const currentPageHTMLId: Writable<string> = writable();

export function scrollToPageId(newHTMLId: string): void {
	if (!browser) return;

	const section: HTMLElement | null = document.getElementById(newHTMLId);
	if (section) {
		const offsetPosition: number =
			section.getBoundingClientRect().top -
			document.body.getBoundingClientRect().top -
			get(headerHeight) -
			20;
		window.scrollTo({
			top: offsetPosition,
			behavior: "smooth"
		});
	}
}
