export enum AppMode {
	DEFAULT = 'DEFAULT',
	REMS = 'REMS'
}

export enum PAGE_IDS {
	HOME = 'home',
	JOUR_J = 'jour-j',
	LOGEMENTS = 'logements',
	LISTE_MARIAGE = 'liste-mariage',
	REPONSE = 'reponse'
}

export interface ResponseForm {
	firstName: string;
	lastName: string;
	playlistComment: string;
	comment: string;
}
