<script lang='ts'>
	export let title: string;
	export let secondaryType: boolean | undefined = false;
</script>

<div class='card__wrapper' class:secondary={secondaryType}>
	<div class='card' class:secondary={secondaryType}>
		<h1 class='card__title' class:secondary={secondaryType}>{title}</h1>
		<div class='card__content'>
			<slot />
		</div>
	</div>
</div>

<style lang='scss'>
  .card {
    width: 80%;
    border-radius: 12px;
    background-color: $green-light;
    padding: 20px;
    max-width: 400px;

    &.secondary {
      background-color: $green;
    }

    &__wrapper {
      display: flex;
      justify-content: flex-start;

      &.secondary {
        justify-content: flex-end;
      }
    }

    &__title {
      font-weight: bold;
      color: $green;
      font-size: 32px;
      margin-bottom: 8px;

      &.secondary {
        color: $white;
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
  }
</style>
