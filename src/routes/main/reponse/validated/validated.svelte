<script lang="ts">
	import ValidatedIcon from "$lib/assets/email-sent.png";
</script>

<div class="validated-screen">
	<div class="validated-screen__content">
		<img alt="Email sent" class="validated-screen__content__icon" src={ValidatedIcon} />
		<h2 class="validated-screen__content__title">Merci, ta participation a été envoyée !</h2>
	</div>
</div>

<style lang="scss">
	.validated-screen {
		display: flex;
		justify-content: center;
		padding-bottom: 15%;

		&__content {
			padding-right: 10%;
			padding-left: 10%;
			max-width: 700px;
			display: flex;
			flex-direction: column;
			gap: 32px;
			align-items: center;

			&__title {
				font-family: Candara, sans-serif;
				color: $green;
				text-align: center;
				font-size: 40px;
			}

			&__icon {
				max-width: 350px;
				width: 100%;
			}
		}
	}
</style>
