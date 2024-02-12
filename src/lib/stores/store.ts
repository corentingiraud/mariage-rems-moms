import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export const pageHeight: Writable<number> = writable(700);
