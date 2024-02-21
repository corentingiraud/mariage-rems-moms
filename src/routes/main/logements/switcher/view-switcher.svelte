<script lang="ts">
	import type { View } from '../utils';
	import SwitcherItem from './switcher-item.svelte';

	export let activeViewId: number;
	export let marginBottom: number;
	export let views: View[];
</script>

<ul style="--margin-bottom: {marginBottom}px">
	{#each views as { id, label }, i}
		<SwitcherItem
			{label}
			isActive={activeViewId === id}
			on:click={() => {
				activeViewId = id;
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
	}
</style>
