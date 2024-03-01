<script lang="ts">
	import Header from "./header/header.svelte";
	import Home from "./home/home.svelte";
	import JourJ from "./jour-j/jour-j.svelte";
	import Logements from "./logements/logements.svelte";
	import ListeMariage from "./liste-mariage/liste-mariage.svelte";
	import Reponse from "./reponse/reponse.svelte";
	import { headerHeight, PAGE_IDS } from "$lib";
	import { get } from "svelte/store";

	const HEADER_HEIGHT = get(headerHeight);

	function scrollToSection(pageId: PAGE_IDS): void {
		const section: HTMLElement | null = document.getElementById(pageId);
		if (section) {
			const offsetPosition: number =
				section.getBoundingClientRect().top -
				document.body.getBoundingClientRect().top -
				HEADER_HEIGHT +
				1;
			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth"
			});
		}
	}
</script>

<Header on:scrollToSection={(e) => scrollToSection(e.detail)} />
<div class="pages">
	<Home on:scrollToSection={(e) => scrollToSection(e.detail)} />
	<JourJ />
	<Logements />
	<ListeMariage />
	<Reponse on:scrollToSection={(e) => scrollToSection(e.detail)} />
</div>

<style lang="scss">
	.pages {
		position: relative;
	}
</style>
