interface LatLng {
	lat: number;
	lng: number;
}

export interface Lieu {
	name: string;
	city: string;
	location: LatLng;
	distanceToCastle: string;
	faIcon: string;
}

export interface Logement extends Lieu {
	numberOfBeds?: string;
	link: string;
	mapsLink?: string;
}
