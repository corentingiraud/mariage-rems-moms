import type { Logement } from "$lib/dto/logements.dto";
import { AUBERGE_DU_PARADIS } from "./others";

export const GITES: Logement[] = [
	{
		name: "Domaine Bel Avenir",
		city: "La Chapelle de Guinchay",
		distanceToCastle: "3min en voiture",
		link: "https://www.domaine-bel-avenir.com/tourisme.php",
		mapsLink:
			"https://www.google.fr/maps/search/?api=1&query=Domaine+Bel+Avenir+-+Alain+Dardanelli",
		numberOfBeds: "6",
		location: {
			lat: 46.2208692,
			lng: 4.7533327
		},
		faIcon: "fa-solid fa-bed"
	},
	{
		name: "Le moulin de St Jacques",
		city: "Saint Jacques des Arrêts",
		distanceToCastle: "26min en voiture",
		link: "https://www.domaine-bel-avenir.com/tourisme.php",
		mapsLink:
			"https://www.google.fr/maps/search/?api=1&query=Le+moulin+de+Saint-Jacques+%2F+Maison+et+Table+d'h%C3%B4tes",
		numberOfBeds: "13",
		location: {
			lat: 46.2503855,
			lng: 4.5823487
		},
		faIcon: "fa-solid fa-bed"
	},
	{
		name: "Gite des moriers",
		city: "Fleurie",
		distanceToCastle: "13min en voiture",
		link: "https://www.airbnb.fr/rooms/19816938?productId=19816938&check_in=2024-08-23&check_out=2024-08-25&guests=13&adults=13&children=0&infants=0&pets=0&source_impression_id=p3_1704908939_NvTKIq9pJ4SvcIzu",
		numberOfBeds: "15",
		location: {
			lat: 46.2005559,
			lng: 4.7145315
		},
		faIcon: "fa-solid fa-bed"
	},
	AUBERGE_DU_PARADIS
];
