<script lang="ts">
	import { AUBERGES, CHAMBRE_HOTES, GITES, HOTELS, PAGE_IDS } from "$lib";
	import type { Logement } from "$lib/dto";
	import Card from "./card/Card.svelte";
	import CardListItem from "./card/item/CardListItem.svelte";
	import type { ComponentProps } from "svelte";

	function logementToCardItem(logement: Logement): ComponentProps<CardListItem> {
		return {
			title: logement.name,
			subtitle: `${logement.city} - ${logement.distanceToCastle}`,
			link: logement.link
		} as ComponentProps<CardListItem>;
	}

	const mappedChambreHotes: ComponentProps<CardListItem>[] = CHAMBRE_HOTES.map(logementToCardItem);
	const mappedAuberges: ComponentProps<CardListItem>[] = AUBERGES.map(logementToCardItem);
	const mappedHotels: ComponentProps<CardListItem>[] = HOTELS.map(logementToCardItem);
	const mappedGites: ComponentProps<CardListItem>[] = GITES.map(logementToCardItem);
</script>

<div class="page" id={PAGE_IDS.LOGEMENTS}>
	<div class="card-container">
		<Card title="Chambre d'hôtes">
			{#each mappedChambreHotes as chambreHote}
				<CardListItem {...chambreHote} />
			{/each}
		</Card>
		<Card secondaryType={true} title="Gîtes">
			{#each mappedGites as gite}
				<CardListItem {...gite} secondaryType={true} />
			{/each}
		</Card>
		<Card title="Auberges">
			{#each mappedAuberges as auberge}
				<CardListItem {...auberge} />
			{/each}
		</Card>
		<Card secondaryType={true} title="Hôtels">
			{#each mappedHotels as hotel}
				<CardListItem {...hotel} secondaryType={true} />
			{/each}
		</Card>
	</div>
</div>

<style lang="scss">
	.page {
		min-height: unset;
	}

	.card-container {
		margin: 20px 10px 10px;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
</style>
