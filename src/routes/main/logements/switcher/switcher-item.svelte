<script lang="ts">
	export let label: string, isActive: boolean;
</script>

<li class:active={isActive}>
	<span on:click>
		{label}
	</span>
</li>

<style lang="scss">
	li {
		width: 50px;
		height: 30px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	li.active > span {
		color: $green;
		font-weight: 500;
	}
</style>
