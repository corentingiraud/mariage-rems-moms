<script>
	import { PAGE_IDS } from '$lib';
	import Card from './components/Card.svelte';
	import CardListItem from './components/CardListItem.svelte';
</script>

<div class="page" id={PAGE_IDS.LOGEMENTS}>
	<h1>Bon où est-ce que je crèche moi ?</h1>
	<div class="card-container">
		<Card title="J'ai pas d'argent">
			<CardListItem title="Mon Logement 1" subtitle="Putain c'est loin"></CardListItem>
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
