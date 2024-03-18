<script lang="ts">
	export let label: string, isActive: boolean;
</script>

<div class:active={isActive}>
	<span on:click>
		{label}
	</span>
</div>

<style lang="scss">
	div {
		width: 50px;
		height: 30px;
		display: flex;
		border-radius: 20px;
		justify-content: center;
		align-items: center;
		padding-right: 4px;
		padding-left: 4px;
	}

	span {
		color: $green;
		font-weight: 500;
	}

	div.active {
		background-color: $green;
	}

	div.active > span {
		color: $white;
	}
</style>
