<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let label: string;
	export let activeSectionId: string | null;
	export let pageId: string | null;
	const dispatch = createEventDispatcher();
</script>

<div
	class="header-title"
	class:active={activeSectionId === pageId}
	on:click={() => dispatch('scrollToSection', pageId)}
>
	<p class="header-title__label">{label}</p>
</div>

<style itemscope lang="scss">
	:host {
		cursor: pointer;
	}

	.header-title {
		cursor: pointer;
		padding-left: 4px;
		padding-right: 4px;
		transition: 300ms ease-in-out;
		border-bottom: 2px solid transparent;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;

		&.active {
			//color: $orange;
			//border-bottom: 2px solid $orange;
			color: $green;
			border-bottom: 2px solid $green;
		}

		&__label {
			font-weight: bold;
			font-size: 16px;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			margin: 0;

			@media (min-width: 320px) and (max-width: 380px) {
				font-size: 14px;
			}

			@media (min-width: 300px) and (max-width: 320px) {
				font-size: 12px;
			}

			@media (max-width: 300px) {
				font-size: 11px;
			}
		}
	}
</style>
