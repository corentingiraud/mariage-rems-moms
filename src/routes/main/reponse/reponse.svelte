<script>
	import { PAGE_IDS } from "$lib";
	import Form from "./form/form.svelte";
	import Validated from "./validated/validated.svelte";
	import { fade, fly } from "svelte/transition";

	let showValidatedScreen = false;
</script>

<div class="page-container" id={PAGE_IDS.REPONSE}>
	<div class="response">
		<h1 class="page-title">RSVP</h1>
		{#if showValidatedScreen}
			<div class="response__content" in:fly={{ delay: 300, x: 200, duration: 200 }}>
				<Validated />
			</div>
		{:else}
			<div class="response__content" out:fade={{ delay: 200, duration: 100 }}>
				<Form on:formSubmit={() => (showValidatedScreen = true)} />
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	.response {
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
</style>
