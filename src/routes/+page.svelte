<script lang="ts">
    import './style.scss';
    import {AppMode} from '$lib';
    import Main from './main/main.svelte';
    import Rems from './rems/rems.svelte';

    let mode: AppMode = AppMode.DEFAULT;
</script>

{#if mode === AppMode.REMS}
    <Rems />
{:else}
    <Main />
{/if}

<style lang="scss">
</style>
