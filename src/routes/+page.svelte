<script lang="ts">
    import './style.scss';
    import {AppMode, pageHeight} from '$lib';
    import Main from './main/main.svelte';
    import Rems from './rems/rems.svelte';
    import type {Readable, Writable} from 'svelte/store';
    import {get} from 'svelte/store';
    import {onMount} from 'svelte';

    let mode: AppMode = AppMode.DEFAULT;
    onMount(() => {
        definePageHeight();
        setPageHeightCssVariable(pageHeight);
    });

    function definePageHeight(): void {
        const screenHeight: number = window?.screen?.height || 700;
        pageHeight.set(screenHeight);
    }

    function setPageHeightCssVariable(pageHeight: Writable<number>): void {
        const pageHeightValue: number = get<number>(pageHeight as Readable<number>);
        (document?.querySelector(':root') as HTMLStyleElement | null)?.style?.setProperty(
            '--page-height',
            `${pageHeightValue}px`
        );
    }
</script>

{#if mode === AppMode.REMS}
    <Rems/>
{:else}
    <Main/>
{/if}
