import type { Lieu, Logement } from '$lib/dto/logements.dto';

export const AUBERGE_DU_PARADIS: Logement = {
	name: 'Auberge du Paradis',
	city: 'Saint Amour Bellevue',
	distanceToCastle: '6min en voiture',
	link: 'https://aubergeduparadis.fr',
	numberOfBeds: '15',
	location: {
		lat: 46.2521535,
		lng: 4.7180148
	}
};

export const CHURCH: Lieu = {
	name: 'Église Saint Jacques le Majeur',
	city: 'Crêches-sur-Saône',
	distanceToCastle: '6min en voiture',
	location: { lat: 46.2473352, lng: 4.7861207 }
};

export const CASTLE: Lieu = {
	name: 'Chateau de Beauchamp',
	city: 'La Chapelle-de-Guinchay',
	distanceToCastle: '0min',
	location: { lat: 46.215985, lng: 4.772734 }
};

export const TRAIN_STATION: Lieu = {
	name: 'Gare de Pontanevaux la Chapelle',
	city: 'La Chapelle-de-Guinchay',
	distanceToCastle: '3min à pied',
	location: { lat: 46.2130426, lng: 4.7727487 }
};
