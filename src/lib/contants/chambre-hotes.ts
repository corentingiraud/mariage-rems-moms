import type { Logement } from '$lib/dto/logements.dto';

export const CHAMBRE_HOTES: Logement[] = [
	{
		name: 'Les Tournesoles',
		city: 'Crèches sur Saone',
		distanceToCastle: '4min en voiture',
		numberOfBeds: '6',
		link: 'https://www.les-tournesols-en-beaujolais.fr/index.html',
		location: {
			lat: 46.2338171,
			lng: 4.7724174
		}
	},
	{
		name: 'Les chambres chez Estelle',
		city: 'Crêches sur Saone',
		distanceToCastle: '4min en voiture',
		numberOfBeds: '6',
		link: 'https://www.booking.com/hotel/fr/chambres-d-hotes-chez-estelle-et-pascal.fr.html',
		location: {
			lat: 46.2339109,
			lng: 4.7721318
		}
	},
	{
		name: 'Casa Altea',
		city: 'La Chapelle de Guinchay',
		distanceToCastle: '1min en voiture',
		link: 'https://www.booking.com/hotel/fr/casa-altea.fr.html',
		location: {
			lat: 46.2136532,
			lng: 4.7672774
		}
	},
	{
		name: 'La Côte des blancs',
		city: 'Vinzelles',
		distanceToCastle: '11min en voiture',
		numberOfBeds: '10',
		link: 'https://www.lacotedesblancs.fr/fr/chambres-d-hotes',
		location: {
			lat: 46.2631387,
			lng: 4.7663036
		}
	},
	{
		name: "L'eglantyne",
		city: 'La Chapelle de Guinchay',
		distanceToCastle: '6min en voiture',
		numberOfBeds: '8',
		link: 'https://www.chambrehoteeglantyne.com/fr',
		location: {
			lat: 46.2165358,
			lng: 4.7370312
		}
	},
	{
		name: 'La maison du Hérisson',
		city: 'Fuissé',
		distanceToCastle: '16min en voiture',
		numberOfBeds: '8',
		link: 'https://www.lamaisonduherisson.com/',
		location: {
			lat: 46.2792226,
			lng: 4.74221
		}
	}
];
