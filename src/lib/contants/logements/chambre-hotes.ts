import type { Logement } from "$lib/dto/logements.dto";

export const CHAMBRE_HOTES: Logement[] = [
	{
		name: "Les Tournesoles",
		city: "Crèches sur Saone",
		distanceToCastle: "4min en voiture",
		numberOfBeds: "6",
		link: "https://www.les-tournesols-en-beaujolais.fr/index.html",
		mapsLink: "https://www.google.fr/maps/search/?api=1&query=les+tournesols+en+beaujolais",
		location: {
			lat: 46.2290506,
			lng: 4.7793947
		},
		faIcon: "fa-solid fa-bed"
	},
	{
		name: "Les chambres chez Estelle",
		city: "Crêches sur Saone",
		distanceToCastle: "4min en voiture",
		numberOfBeds: "6",
		link: "https://www.booking.com/hotel/fr/chambres-d-hotes-chez-estelle-et-pascal.fr.html",
		location: {
			lat: 46.2339109,
			lng: 4.7721318
		},
		faIcon: "fa-solid fa-bed"
	},
	{
		name: "Casa Altea",
		city: "La Chapelle de Guinchay",
		distanceToCastle: "1min en voiture",
		link: "https://www.booking.com/hotel/fr/casa-altea.fr.html",
		mapsLink: "https://www.google.fr/maps/search/?api=1&query=CASA+ALTEA",
		location: {
			lat: 46.2136532,
			lng: 4.7672774
		},
		faIcon: "fa-solid fa-bed"
	},
	{
		name: "La Côte des blancs",
		city: "Vinzelles",
		distanceToCastle: "11min en voiture",
		numberOfBeds: "10",
		link: "https://www.lacotedesblancs.fr/fr/chambres-d-hotes",
		mapsLink: "https://www.google.fr/maps/search/?api=1&query=Domaine+La+C%C3%B4te+des+Blancs",
		location: {
			lat: 46.2631387,
			lng: 4.7663036
		},
		faIcon: "fa-solid fa-bed"
	},
	{
		name: "L'eglantyne",
		city: "La Chapelle de Guinchay",
		distanceToCastle: "6min en voiture",
		numberOfBeds: "8",
		link: "https://www.chambrehoteeglantyne.com/fr",
		mapsLink: "https://www.google.fr/maps/search/?api=1&query=L'Eglantyne",
		location: {
			lat: 46.2165358,
			lng: 4.7370312
		},
		faIcon: "fa-solid fa-bed"
	},
	{
		name: "La maison du Hérisson",
		city: "Fuissé",
		distanceToCastle: "16min en voiture",
		numberOfBeds: "8",
		link: "https://www.lamaisonduherisson.com/",
		mapsLink: "https://www.google.fr/maps/search/?api=1&query=La+Maison+du+H%C3%A9risson",
		location: {
			lat: 46.2792226,
			lng: 4.74221
		},
		faIcon: "fa-solid fa-bed"
	}
];
