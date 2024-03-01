import type { Logement } from "$lib/dto/logements.dto";
import { AUBERGE_DU_PARADIS } from "./others";

export const AUBERGES: Logement[] = [
	{
		name: "Les hauts de chenas",
		city: "Chenas",
		distanceToCastle: "11min en voiture",
		numberOfBeds: "20+",
		link: "http://www.hautsdechenas.fr/",
		location: {
			lat: 46.2233026,
			lng: 4.7068584
		}
	},
	AUBERGE_DU_PARADIS
];
