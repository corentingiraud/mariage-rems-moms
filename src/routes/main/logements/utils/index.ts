import type { Lieu } from '$lib/dto';
import type { ComponentType } from 'svelte';

export type View = {
	id: number;
	label: string;
	content: ComponentType;
};

export function toGMapMarker(lieu: Lieu): google.maps.marker.AdvancedMarkerElement {
	return new google.maps.marker.AdvancedMarkerElement({
		position: lieu.location,
	});
}
