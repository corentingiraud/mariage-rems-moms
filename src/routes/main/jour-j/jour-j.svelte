<script>
	import { PAGE_IDS } from "$lib";
	import Chemin from "$lib/assets/chemin-vert.svg";
</script>

<div class="page-container">
	<div class="page" id={PAGE_IDS.JOUR_J}>
		<div class="chemin">
			<img class="chemin__img" src={Chemin} />
			<div class="chemin__text chemin__eglise">
				<h4>16h - Cérémonie religieuse</h4>
				<h5>Eglise Saint-Jacques-le-Majeur</h5>
				<h5>Crêches-sur-Saône</h5>
			</div>
			<div class="chemin__text chemin__vin-honneur align-right">
				<h4>18h - Vin d'honneur</h4>
				<h5>Chateau de Beauchamp</h5>
				<h5>La-Chapelle-de-Guinchay</h5>
			</div>
			<div class="chemin__text chemin__diner">
				<h4>20h30 - Dîner</h4>
			</div>
			<div class="chemin__text chemin__soiree align-right">
				<h4>23h - Soirée</h4>
				<h5>Des navettes taxis pour rentrer entre 2h et 5h dans un rayon de 15km du château</h5>
			</div>
			<div class="chemin__text chemin__brunch">
				<h4>12h - Brunch</h4>
			</div>
		</div>
		<div class="footer">
			<div class="footer__card">
				<h3>Comment s'y rendre ?</h3>
				<div class="line">
					<h5>En train:</h5>
					<h5>Pontanevaux, Mâcon-Loché TGC ou Mâcon ville</h5>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.page {
		background-color: $white;
	}

	.chemin {
		position: relative;
		padding: 5%;
		display: flex;
		justify-content: center;

		&__img {
			width: 85%;
		}

		&__text {
			color: $green;
			position: absolute;
			max-width: 55%;
			text-wrap: balance;

			@media (max-width: 380px) {
				max-width: 60%;
			}

			@media (min-width: 420px) {
				max-width: 50%;
			}

			&.align-right {
				text-align: right;
			}

			h4 {
				font-family: BrendaHome, sans-serif;
				font-weight: bold;
				font-size: 30px;
			}
		}

		&__eglise {
			top: 3%;
			left: 33%;
		}

		&__vin-honneur {
			top: 25%;
			left: 27%;

			@media (min-width: 420px) {
				left: 30%;
			}
		}

		&__diner {
			top: 49%;
			left: 35%;
		}

		&__soiree {
			top: 65%;
			left: 10%;

			@media (min-width: 380px) {
				left: 14%;
			}

			@media (min-width: 420px) {
				left: 18%;
			}
		}

		&__brunch {
			top: 93%;
			left: 52%;
		}
	}

	.footer {
		margin: 20px 10px 10px;

		&__card {
			padding: 10px;
			background-color: $green;
			color: $white;
			display: flex;
			flex-direction: column;
			border-radius: 8px;

			.line {
				display: flex;
				justify-content: space-between;
			}
		}
	}
</style>
