<script lang="ts">
	export let title: string;
	export let subtitle: string;
	export let link: string;
	export let secondaryType: boolean | undefined = false;
</script>

<div class="card-list-item">
	<div class="card-list-item__content" class:secondary={secondaryType}>
		<h3 class="card-list-item__content__title">{title}</h3>
		<h4 class="card-list-item__content__subtitle">{subtitle}</h4>
	</div>
	<a class="card-list-item__cta" href={link} target="_blank">
		<button class="card-list-item__cta__button" class:secondary={secondaryType}> Voir</button>
	</a>
</div>

<style lang="scss">
	.card-list-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 8px;

		&__content {
			color: $green;

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
			text-decoration: none;

			&__button {
				background-color: $green;
				color: $white;
				padding: 5px 10px;
				border: none;
				border-radius: 200px;
				cursor: pointer;
				font-size: 11px;

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
