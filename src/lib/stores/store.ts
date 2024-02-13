import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

export const pageHeight: Writable<number> = writable(700);
export const headerHeight: Writable<number> = writable(50);