<script lang="ts">
	import { CHURCH } from '$lib';
	import { PUBLIC_GOOGLE_MAPS_API_KEY } from '$lib/contants';
	import * as gmaps from '@googlemaps/js-api-loader';
	import { onMount } from 'svelte';
	import { toGMapMarker } from '../utils';

	const { Loader } = gmaps;
	let mapElement: HTMLElement;

	onMount(async function () {
		const loader = new Loader({
			apiKey: PUBLIC_GOOGLE_MAPS_API_KEY,
			version: 'weekly'
		});

		const { Map } = await loader.importLibrary('maps');
    await google.maps.importLibrary("marker")

		let map = new Map(mapElement, {
			center: { lat: 46.2292491, lng: 4.7819825 },
			zoom: 13,
			mapId: '1c1ae9f4503e0135',
			gestureHandling: 'greedy',
			zoomControl: false,
			mapTypeControl: false,
			scaleControl: false,
			streetViewControl: false,
			rotateControl: false,
			fullscreenControl: false
		});

    const marker = toGMapMarker(CHURCH)
    marker.map = map
	});
</script>

<div bind:this={mapElement} style:width={'100%'} class="map"></div>

<style lang="scss">
	.map {
		height: 500px;
	}
</style>
