<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    export let label: string;
    const dispatch = createEventDispatcher();
</script>

<div on:click={() => dispatch('click')} class="header-title">
    <p class="header-title__label">{label}</p>
</div>

<style lang="scss">
    :host {
        cursor: pointer;
    }

    .header-title {
      height: 100%;
      cursor: pointer;
      padding-left: 4px;
      padding-right: 4px;

      &__label {
            font-family: 'Roboto', sans-serif;
            font-size: 16px;
            font-weight: bold;
            color: #000;
        }
    }
</style>