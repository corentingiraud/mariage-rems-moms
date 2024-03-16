<script lang="ts">
	import { createEventDispatcher } from "svelte";

	export let title: string;
	export let subtitle: string;
	export let link: string;
	export let mapsLink: string | undefined;
	export let secondaryType: boolean | undefined = false;

	const dispatch = createEventDispatcher();
</script>

<div class="card-list-item">
	<div class="card-list-item__content" class:secondary={secondaryType}>
		<h3 class="card-list-item__content__title">{title}</h3>
		<h4 class="card-list-item__content__subtitle">{subtitle}</h4>
	</div>
	<div class="card-list-item__cta">
		{#if mapsLink}
			<a href={mapsLink} target="_blank">
				<button class="card-list-item__cta__button" class:secondary={secondaryType}>
					<i class="fab fa-google"></i>Maps
				</button>
			</a>
		{/if}
		<a href={link} target="_blank">
			<button class="card-list-item__cta__button" class:secondary={secondaryType}>
				<i class="fa-solid fa-globe"></i>Site
			</button>
		</a>
		<button
			class="card-list-item__cta__button"
			class:secondary={secondaryType}
			on:click={() => dispatch("showMap")}
		>
			<i class="fa-regular fa-map"></i>Voir
		</button>
	</div>
</div>

<style lang="scss">
	.card-list-item {
		display: flex;
		flex-direction: column;
		margin-bottom: 10px;

		&__content {
			color: $green;
			margin-bottom: 10px;

			@media (min-width: 768px) {
				display: flex;
				gap: 8px;
			}

			&.secondary {
				color: $white;
			}

			&__title {
				font-size: 16px;

				@media (min-width: 768px) {
					font-size: 20px;
				}
			}

			&__subtitle {
				font-weight: 400;
				font-style: italic;
				font-size: 14px;

				@media (min-width: 768px) {
					font-size: 18px;
				}
			}
		}

		&__cta {
			display: flex;
			justify-content: end;
			gap: 7px;
			text-decoration: none;

			&__button {
				background-color: $green-light;
				color: $green;
				padding: 5px 10px;
				border: 1px solid $green;
				border-radius: 200px;
				cursor: pointer;
				font-size: 11px;

				i {
					margin-right: 8px;
				}

				@media (min-width: 768px) {
					padding: 6px 12px;
					font-size: 14px;
				}

				&.secondary {
					border: 1px solid white;
					color: $white;
				}
			}
		}
	}
</style>
