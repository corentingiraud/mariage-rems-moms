<script lang="ts">
	import SeeMoreBtn from './SeeMoreBtn.svelte';

	export let title: string;
</script>

<div class="card">
	<h1>{title}</h1>
	<div class="content">
		<slot />
	</div>
</div>

<style lang="scss">
	.card {
		background-color: red;
		padding: 20px;
	}
</style>
