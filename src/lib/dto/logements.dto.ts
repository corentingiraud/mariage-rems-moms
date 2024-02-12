export interface logement {
	name: string;
	city: string;
	location: {
		lat: number;
		lng: number;
	};
	distanceToCastle: string;
	numberOfBeds: string;
	link: string;
}
