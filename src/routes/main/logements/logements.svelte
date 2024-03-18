<script lang="ts">
	import LogementsList from "./list/logements-list.svelte";
	import LogementMap from "./map/logement-map.svelte";
	import ViewSwitcher from "./switcher/view-switcher.svelte";
	import type { LogementView } from "./utils";
	import { PAGE_IDS } from "$lib";
	import { currentViewId } from "$lib/stores/logement";
	import { get } from "svelte/store";

	let views: LogementView[] = [
		{ id: 1, label: "Liste", content: LogementsList },
		{ id: 2, label: "Carte", content: LogementMap }
	];

	let activeViewId = get(currentViewId);
	currentViewId.subscribe((newViewId) => {
		activeViewId = newViewId;
	});
	let state = 1;
	let slideWrapper: HTMLElement;
	let anim: { in: number; out: number };

	$: currentView = views[activeViewId - 1];
	$: if (slideWrapper) {
		animController();
		state = activeViewId;
	}

	function animController() {
		if (activeViewId == state) return;

		const nodeWidth = slideWrapper.offsetWidth;
		const currentMultiplier = activeViewId > state ? 1 : -1;

		anim = {
			in: nodeWidth * currentMultiplier,
			out: nodeWidth * -currentMultiplier
		};
	}
</script>

<div class="slide-container" id={PAGE_IDS.LOGEMENTS}>
	<h1 class="page-title">Les logements</h1>
	{#key currentView.id}
		<div bind:this={slideWrapper} class="slide">
			<svelte:component this={currentView.content}></svelte:component>
		</div>
	{/key}
	<ViewSwitcher {views} />
</div>

<style lang="scss">
	.slide-container {
		position: relative;
		margin-bottom: 50px;
	}
</style>
