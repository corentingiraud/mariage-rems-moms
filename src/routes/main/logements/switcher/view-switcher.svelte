<script lang="ts">
	import { currentViewId } from "$lib/stores/logement";
	import { get } from "svelte/store";
	import type { LogementView } from "../utils";
	import SwitcherItem from "./switcher-item.svelte";

	export let marginBottom: number;
	export let views: LogementView[];

	let activeViewId: number = get(currentViewId);
	currentViewId.subscribe((newViewId) => (activeViewId = newViewId));
</script>

<ul style="--margin-bottom: {marginBottom}px">
	{#each views as { id, label }, i}
		<SwitcherItem
			{label}
			isActive={activeViewId === id}
			on:click={() => {
				currentViewId.set(id);
			}}
		></SwitcherItem>
	{/each}
</ul>

<style lang="scss">
	ul {
		display: flex;
		justify-content: center;
		list-style: none;
		margin: 0;
		padding: 0;
		margin-bottom: var(--margin-bottom);
		transition: margin 500ms ease-in-out;
		position: sticky;
	}
</style>
