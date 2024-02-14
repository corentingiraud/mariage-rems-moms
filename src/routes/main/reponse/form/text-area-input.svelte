<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let label: string;
	export let value: string;
	export let name: string;

	const dispatch = createEventDispatcher();
</script>

<div class="textarea-input">
	<label class="label">{label}</label>
	<textarea
		bind:value
		class="textarea"
		on:change={() => dispatch('formChange', value)}
		rows="3"
		{name}
	/>
</div>

<style lang="scss">
	.textarea-input {
		display: flex;
		flex-direction: column;

		.label {
			margin-left: 4px;
			font-size: 18px;
			color: $green;
			font-weight: bold;
		}

		.textarea {
			resize: vertical;
			min-height: 50px;
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
