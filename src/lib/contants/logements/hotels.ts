import type { Logement } from "$lib/dto/logements.dto";

export const HOTELS: Logement[] = [
	{
		name: "Hotel des vignes",
		city: "Julienas",
		distanceToCastle: "9min en voiture",
		numberOfBeds: "20+",
		link: "https://www.hoteldesvignes.com/",
		mapsLink:
			"https://www.google.fr/maps/search/?api=1&query=H%C3%B4tel+des+Vignes+de+Juli%C3%A9nas",
		location: {
			lat: 46.2386191,
			lng: 4.7149669
		},
		faIcon: "fa-solid fa-bed"
	},
	{
		name: "Les maritonnes",
		city: "Romanèche Thorins",
		distanceToCastle: "10min en voiture",
		numberOfBeds: "20+",
		link: "https://www.lesmaritonnes.com/fr/",
		mapsLink:
			"https://www.google.fr/maps/search/?api=1&query=H%C3%B4tel+Les+Maritonnes+Parc+%26+Vignoble+Restaurant+Rouge+%26+Blanc",
		location: {
			lat: 46.1756164,
			lng: 4.737661
		},
		faIcon: "fa-solid fa-bed"
	}
];
