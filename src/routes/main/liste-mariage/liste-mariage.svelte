<script>
	import { PAGE_IDS } from "$lib";
	import Gift from "$lib/assets/white-gift.svg";
</script>

<div class="page-container page-container--colorized">
	<div class="page" id={PAGE_IDS.LISTE_MARIAGE}>
		<h1 class="page-title">Liste de mariage</h1>
		<div class="gift">
			<img alt="Gift" src={Gift} />
		</div>
		<div class="button__wrapper">
			<a href="https://www.millemercismariage.com/remyetmorgane/liste.html" target="_blank">
				<button class="button">Voir la liste</button>
			</a>
		</div>
	</div>
</div>

<style lang="scss">
	.page {
		min-height: unset;
		background-color: $green;
	}

	.gift {
		display: flex;
		justify-content: center;
		margin-top: 10%;

		@media (min-width: 768px) {
			margin-top: 5%;
		}

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
			cursor: pointer;

			@media (min-width: 768px) {
				margin-top: 5%;
				padding-bottom: 10%;
			}
		}
	}
</style>
