<script lang="ts">
	import { PAGE_IDS } from "$lib";
	import Vigne from "$lib/assets/vigne.jpg";
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();
</script>

<div class="page" id={PAGE_IDS.HOME}>
	<div class="vigne-wrapper">
		<img alt="Vignes" class="vigne" src={Vigne} />
	</div>
	<div class="content">
		<h1 class="title">Morgane & Rémy</h1>
		<h1 class="subtitle">Samedi 24 Août 2024</h1>
		<h1 class="subtitle">Château de Beauchamp</h1>
		<div class="button-wrapper">
			<button class="info-button" on:click={() => dispatch("scrollToSection", PAGE_IDS.JOUR_J)}>
				<h3>Infos Jour J</h3>
			</button>
		</div>
	</div>
</div>

<style lang="scss">
	.vigne-wrapper {
		display: flex;
		justify-content: center;
		overflow: hidden;

		.vigne {
			width: 100%;
			max-width: 800px;

			@media (max-width: 360px) {
				height: 40vh;
				width: unset;
			}

			@media (min-width: 361px) and (max-width: 500px) {
				height: 50vh;
				width: unset;
			}
		}
	}

	.content {
		font-family: BrendaHome, sans-serif;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
		font-size: 20px;

		@media (max-width: 360px) {
			gap: 4px;
			font-size: 18px;
		}

		.title {
			font-size: 50px;
		}

		.subtitle {
			font-size: 30px;
		}

		.button-wrapper {
			margin-top: 16px;
			max-width: 400px;
			width: min(70%, 400px);
			display: flex;
			justify-content: center;
			padding: 20px;

			@media (max-width: 360px) {
				margin-top: 8px;
			}

			.info-button {
				width: 100%;
				background-color: $green;
				color: $white;
				text-align: center;
				border: none;
				height: 40px;
				border-radius: 4px;
				box-shadow: 5px 7px 20px -15px rgba(0, 0, 0, 0.77);
				cursor: pointer;

				h3 {
					font-family: Candara, sans-serif;
					font-weight: bold;
				}
			}
		}
	}
</style>
