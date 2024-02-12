<script lang="ts">
	import { AUBERGES, PAGE_IDS } from '$lib';
	import type { Logement } from '$lib/dto';
	import Card from './components/Card.svelte';
	import CardListItem from './components/CardListItem.svelte';
	import type { ComponentProps } from 'svelte';

	function logementToCardItem(logement: Logement): ComponentProps<CardListItem> {
		return {
			title: logement.name,
			subtitle: `${logement.city} - ${logement.distanceToCastle}`
		};
	}

	const mappedAuberges = AUBERGES.map(logementToCardItem);
</script>

<div class="page" id={PAGE_IDS.LOGEMENTS}>
	<h1>Bon où est-ce que je crèche moi ?</h1>
	<div class="card-container">
		<Card title="Auberges">
			{#each mappedAuberges as auberge}
				<CardListItem {...auberge}></CardListItem>
			{/each}
		</Card>
	</div>
</div>

<style lang="scss">
	.page {
		background-color: $gray;
	}

	.card-container {
		margin-left: 10px;
		margin-right: 10px;
	}
</style>
