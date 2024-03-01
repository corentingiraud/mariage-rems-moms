<script lang="ts">
	import HeaderTitle from "./header-title.svelte";
	import Icon from "$lib/assets/logo.svg";
	import { PAGE_IDS, currentPageHTMLId, headerHeight, scrollToPageId } from "$lib";
	import { onMount } from "svelte";
	import { createEventDispatcher } from "svelte";
	import { get } from "svelte/store";
	import type { Writable } from "svelte/store";
	import { pageHeight } from "$lib";
	import JourJ from "../jour-j/jour-j.svelte";

	const dispatch = createEventDispatcher();
	const HEADER_HEIGHT = get(headerHeight);
	let activeSectionId: PAGE_IDS | null = null;

	onMount(() => {
		window.addEventListener("scroll", () => detectSection(pageHeight));
	});

	function detectSection(pageHeight: Writable<number>): boolean {
		const pageHeightValue: number = get(pageHeight);
		const pageProportionDetection: number = 0.7;
		return Object.values(PAGE_IDS)?.some((pageId: PAGE_IDS) => {
			const section: HTMLElement | null = document.getElementById(pageId);
			if (isInSection(section, pageHeightValue, pageProportionDetection)) {
				if (activeSectionId !== pageId) {
					activeSectionId = pageId;
				}
				return true;
			}
			return false;
		});
	}

	function isInSection(
		element: HTMLElement | undefined | null,
		pageHeight: number,
		pageProportionDetection: number
	): boolean {
		return (
			!!element &&
			element.getBoundingClientRect().top < pageProportionDetection * pageHeight + HEADER_HEIGHT &&
			element.getBoundingClientRect().bottom > pageProportionDetection * pageHeight + HEADER_HEIGHT
		);
	}
</script>

<div class="header" style="height: {HEADER_HEIGHT}px">
	<div class="header__container">
		<div class="icon" on:click={() => scrollToPageId(PAGE_IDS.HOME)}>
			<img src={Icon} alt="fake icon" />
		</div>
		<div class="header__item-container">
			<HeaderTitle
				active={activeSectionId === PAGE_IDS.JOUR_J}
				label="Infos"
				on:click={() => (scrollToPageId(PAGE_IDS.JOUR_J))}
			/>
			<HeaderTitle
				active={activeSectionId === PAGE_IDS.LOGEMENTS}
				label="Logements"
				on:click={() => (scrollToPageId(PAGE_IDS.LOGEMENTS))}
			/>
			<HeaderTitle
				active={activeSectionId === PAGE_IDS.LISTE_MARIAGE}
				label="Liste mariage"
				on:click={() => (scrollToPageId(PAGE_IDS.LISTE_MARIAGE))}
			/>
			<HeaderTitle
				active={activeSectionId === PAGE_IDS.REPONSE}
				label="Réponse"
				on:click={() => (scrollToPageId(PAGE_IDS.REPONSE))}
			/>
		</div>
	</div>
</div>

<style lang="scss">
	.header {
		z-index: 2;
		position: sticky;
		top: 0;
		background-color: $white;

		&__container {
			display: flex;
			align-items: stretch;
			gap: 4px;
			max-width: 1200px;
			margin: 0 auto;
			height: 100%;
		}

		&__item-container {
			display: flex;
			align-items: stretch;
			justify-content: space-evenly;
			flex-grow: 1;
			gap: 8px;
			overflow: hidden;
		}

		.icon {
			height: 100%;
			cursor: pointer;

			img {
				margin-top: 12%;
				width: 24px;
				margin-left: 12%;
			}
		}
	}
</style>
