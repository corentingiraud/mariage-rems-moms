<script>
	import { PAGE_IDS } from '$lib';
	import Gift from '$lib/assets/white-gift.svg';
</script>

<div class="page-container--colorized">
	<div class="page" id={PAGE_IDS.LISTE_MARIAGE}>
		<div class="title">
			<h1>Liste de mariage</h1>
		</div>
		<div class="gift">
			<img alt="Gift" src={Gift} />
		</div>
		<div class="button__wrapper">
			<button class="button">Voir la liste</button>
		</div>
	</div>
</div>

<style lang="scss">
	.page {
		min-height: unset;
		background-color: $green;
	}

	.title {
		display: flex;
		justify-content: center;
		padding-top: 25%;

		h1 {
			color: $white;
			font-size: 40px;
			font-weight: bold;
		}
	}

	.gift {
		display: flex;
		justify-content: center;
		margin-top: 10%;

		img {
			width: 50%;
			max-width: 400px;
		}
	}

	.button {
		height: 50px;
		border-radius: 4px;
		background-color: $green;
		color: $white;
		font-size: 32px;
		border: 1px solid $white;
		font-weight: bold;

		&__wrapper {
			display: flex;
			justify-content: center;
			margin-top: 10%;
			padding-bottom: 25%;
		}
	}
</style>
