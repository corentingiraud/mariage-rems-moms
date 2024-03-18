<script lang="ts">
	import { currentViewId } from "$lib/stores/logement";
	import { get } from "svelte/store";
	import type { LogementView } from "../utils";
	import SwitcherItem from "./switcher-item.svelte";

	export let views: LogementView[];

	let activeViewId: number = get(currentViewId);
	currentViewId.subscribe((newViewId) => (activeViewId = newViewId));
</script>

<div class="sticky-switch__container">
	<div class="sticky-switch">
		{#each views as { id, label }}
			<SwitcherItem
				{label}
				isActive={activeViewId === id}
				on:click={() => {
					currentViewId.set(id);
				}}
			></SwitcherItem>
		{/each}
	</div>
</div>
<div class="sticky-wrapper"></div>

<style lang="scss">
	.sticky-switch {
		&__container {
			display: flex;
			justify-content: center;
			margin: 0;
			padding: 0;
			transition: margin 500ms ease-in-out;
			bottom: 5%;
			position: sticky;
		}

		width: fit-content;
		display: flex;
		align-items: center;
		background-color: $white;
		border-radius: 20px;
		border: 1px solid $green;
		outline: 1px solid $white;
	}
</style>
