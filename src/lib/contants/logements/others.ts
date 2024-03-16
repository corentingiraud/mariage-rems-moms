import type { Lieu, Logement } from "$lib/dto/logements.dto";

export const AUBERGE_DU_PARADIS: Logement = {
	name: "Auberge du Paradis",
	city: "Saint Amour Bellevue",
	distanceToCastle: "6min en voiture",
	link: "https://aubergeduparadis.fr",
	mapsLink:
		"https://www.google.fr/maps/search/?api=1&query=Auberge+du+Paradis+-+H%C3%B4tel+Restaurant",
	numberOfBeds: "15",
	location: {
		lat: 46.2521535,
		lng: 4.7180148
	},
	faIcon: "fa-solid fa-bed"
};

export const CHURCH: Lieu = {
	name: "Église Saint Jacques le Majeur",
	city: "Crêches-sur-Saône",
	distanceToCastle: "6min en voiture",
	location: { lat: 46.2473352, lng: 4.7861207 },
	faIcon: "fa-solid fa-church"
};

export const CASTLE: Lieu = {
	name: "Chateau de Beauchamp",
	city: "La Chapelle-de-Guinchay",
	distanceToCastle: "0min",
	location: { lat: 46.215985, lng: 4.772734 },
	faIcon: "fa-brands fa-fort-awesome"
};

export const TRAIN_STATION: Lieu = {
	name: "Gare de Pontanevaux la Chapelle",
	city: "La Chapelle-de-Guinchay",
	distanceToCastle: "3min à pied",
	location: { lat: 46.2130426, lng: 4.7727487 },
	faIcon: "fa-solid fa-train"
};
