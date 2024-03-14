import type { Logement } from "$lib/dto";
import type { Writable } from "svelte/store";
import { writable } from "svelte/store";

export const currentViewId: Writable<number> = writable(1);
export const currentDisplayedLogementInMap: Writable<Logement | undefined> = writable();
