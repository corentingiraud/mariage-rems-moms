<script lang="ts">
	import { AUBERGES, CHAMBRE_HOTES, GITES, HOTELS, PAGE_IDS, scrollToPageId } from "$lib";
	import type { Logement } from "$lib/dto";
	import { currentDisplayedLogementInMap, currentViewId } from "$lib/stores/logement";
	import Card from "./card/Card.svelte";
	import CardListItem from "./card/item/CardListItem.svelte";
	import type { ComponentProps } from "svelte";

	function logementToCardItem(logement: Logement): ComponentProps<CardListItem> {
		return {
			title: logement.name,
			subtitle: `${logement.city} - ${logement.distanceToCastle}`,
			link: logement.link,
			mapsLink: logement?.mapsLink
		};
	}

	async function showMap(logement: Logement) {
		currentDisplayedLogementInMap.set(logement);
		currentViewId.set(2);
		scrollToPageId(PAGE_IDS.LOGEMENTS);
	}
</script>

<div>
	<div class="card-container">
		<Card title="Chambre d'hôtes">
			{#each CHAMBRE_HOTES as logement}
				<CardListItem {...logementToCardItem(logement)} on:showMap={() => showMap(logement)} />
			{/each}
		</Card>
		<Card secondaryType={true} title="Gîtes">
			{#each GITES as logement}
				<CardListItem
					{...logementToCardItem(logement)}
					on:showMap={() => showMap(logement)}
					secondaryType={true}
				/>
			{/each}
		</Card>
		<Card title="Auberges">
			{#each AUBERGES as logement}
				<CardListItem {...logementToCardItem(logement)} on:showMap={() => showMap(logement)} />
			{/each}
		</Card>
		<Card secondaryType={true} title="Hôtels">
			{#each HOTELS as logement}
				<CardListItem
					{...logementToCardItem(logement)}
					on:showMap={() => showMap(logement)}
					secondaryType={true}
				/>
			{/each}
		</Card>
	</div>
</div>

<style lang="scss">
	.card-container {
		margin: 20px 10px 10px;
		display: flex;
		flex-direction: column;
		gap: 50px;
	}
</style>
