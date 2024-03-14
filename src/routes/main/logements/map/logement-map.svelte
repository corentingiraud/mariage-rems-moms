<script lang="ts">
	import { CASTLE, CHURCH, TRAIN_STATION } from "$lib";
	import { COLORS, PUBLIC_GOOGLE_MAPS_API_KEY } from "$lib/contants";
	import * as gmaps from "@googlemaps/js-api-loader";
	import { onMount } from "svelte";
	import { toGMapMarker } from "../utils";
	import { currentDisplayedLogementInMap } from "$lib/stores/logement";
	import { get } from "svelte/store";

	const { Loader } = gmaps;
	let mapElement: HTMLElement;
	let map: google.maps.Map;
	let infoWindow: google.maps.InfoWindow;
	let bounds: google.maps.LatLngBounds;

	onMount(async function () {
		const loader = new Loader({
			apiKey: PUBLIC_GOOGLE_MAPS_API_KEY,
			version: "weekly"
		});

		const { Map, InfoWindow } = await loader.importLibrary("maps");
		const { LatLngBounds } = await loader.importLibrary("core");

		await google.maps.importLibrary("marker");

		map = new Map(mapElement, {
			center: { lat: 46.2292491, lng: 4.7819825 },
			zoom: 13,
			mapId: "1c1ae9f4503e0135",
			gestureHandling: "greedy",
			zoomControl: false,
			mapTypeControl: false,
			scaleControl: false,
			streetViewControl: false,
			rotateControl: false,
			fullscreenControl: true,
			clickableIcons: false
		});

		infoWindow = new InfoWindow();
		bounds = new LatLngBounds();

		createMarkers();
	});

	function createMarkers() {
		const markers = [
			toGMapMarker(CHURCH, COLORS.PURPLE),
			toGMapMarker(CASTLE, COLORS.PURPLE),
			toGMapMarker(TRAIN_STATION, COLORS.PURPLE)
		];

		const maybeCurrentMarker = get(currentDisplayedLogementInMap);

		if (maybeCurrentMarker) {
			markers.push(toGMapMarker(maybeCurrentMarker, COLORS.GREEN));
		}

		markers.forEach((marker) => {
			marker.map = map;

			marker.addListener("click", () => {
				infoWindow.close();
				infoWindow.setContent(marker.title);
				infoWindow.open(marker.map, marker);
			});

			bounds.extend(marker.position!);
		});

		map.setCenter(bounds.getCenter());
		map.fitBounds(bounds);
	}
</script>

<div bind:this={mapElement} style:width={"100%"} class="map"></div>

<style lang="scss">
	.map {
		height: 500px;
	}
</style>
