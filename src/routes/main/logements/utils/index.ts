import type { Lieu } from "$lib/dto";
import type { ComponentType } from "svelte";

export type LogementView = {
	id: number;
	label: string;
	content: ComponentType;
};

export function toGMapMarker(
	lieu: Lieu,
	colorHexCode: string
): google.maps.marker.AdvancedMarkerElement {
	const icon = document.createElement("div");
	icon.innerHTML = `<i class="fa ${lieu.faIcon} fa-lg"></i>`;

	const faPin = new google.maps.marker.PinElement({
		glyph: icon,
		background: "white",
		glyphColor: colorHexCode,
		borderColor: colorHexCode
	});

	return new google.maps.marker.AdvancedMarkerElement({
		position: lieu.location,
		title: lieu.name,
		content: faPin.element
	});
}
