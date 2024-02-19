<script>
	import { PAGE_IDS } from '$lib';
	import Chemin from '$lib/assets/chemin-vert.svg';
</script>

<div class='page-container--colorized'>
	<div class='page' id={PAGE_IDS.JOUR_J}>
		<div class='chemin'>
			<img class='chemin__img' src={Chemin} />
			<div class='chemin__eglise'>
				<h4>16h - Cérémonie religieuse</h4>
				<h5>Eglise Saint-Jacques-le-Majeur</h5>
				<h5>Crêches-sur-Saône</h5>
			</div>
		</div>
		<div class='footer'>
			<div class='footer__card'>
				<h3>Comment s'y rendre ?</h3>
				<div class='line'>
					<h5>En train: </h5>
					<h5>Pontanevaux, Mâcon-Loché TGC ou Mâcon ville</h5>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang='scss'>

  .page {
    background-color: $white;
  }

  .chemin {
    position: relative;
    padding: 5%;
    display: flex;
    justify-content: center;

    &__img {
      width: 90%;
    }

    &__eglise {
      color: $green;
      position: absolute;
      top: 4%;
      left: 28%;

      h5 {
        font-style: italic;
      }
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
