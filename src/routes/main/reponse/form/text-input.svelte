<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let label: string;
	export let value: string;

	const dispatch = createEventDispatcher();
</script>

<div class="text-input">
	<label class="label">{label}</label>
	<input bind:value class="input" on:change={() => dispatch('formChange', value)} type="text" />
</div>

<style lang="scss">
	.text-input {
		display: flex;
		flex-direction: column;

		.label {
			margin-left: 4px;
			font-size: 18px;
			font-weight: bold;
			color: $green;
		}

		.input {
			height: 28px;
			border-radius: 4px;
			background-color: $green-light;
			border: 1px solid $green;
			transition: all 150ms ease-in-out;
			font-family: CandaraLight, sans-serif;
			font-size: 16px;

			&:focus,
			&:active {
				border: 1px solid $orange;
				outline: none;
			}
		}
	}
</style>
