<script lang="ts">
	import SeeMoreBtn from './SeeMoreBtn.svelte';

	export let title: string;
	export let subtitle: string;
</script>

<div class="card-list-item">
	<div class="card-list-item__content">
		<h3>{title}</h3>
		<h4>{subtitle}</h4>
	</div>
	<div class="card-list-item__cta">
		<slot name="cta">
			<SeeMoreBtn></SeeMoreBtn>
		</slot>
	</div>
</div>

<style lang="scss">
	.card-list-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
