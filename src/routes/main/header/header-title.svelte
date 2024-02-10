<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    export let label: string;
    export let activeSectionId: string | null;
    export let pageId: string | null;
    const dispatch = createEventDispatcher();
</script>

<div class:active="{activeSectionId === pageId}" on:click={() => dispatch('click', pageId)} class="header-title">
    <p class="header-title__label">{label}</p>
</div>

<style itemscope lang="scss">
    :host {
        cursor: pointer;
    }

    .header-title {
      height: 100%;
      cursor: pointer;
      padding-left: 4px;
      padding-right: 4px;
      transition: 300ms ease-in-out;
      border-bottom: 2px solid transparent;

      &.active {
        color: $orange;
        border-bottom: 2px solid $orange;
      }

      &__label {
            font-family: CandaraBold, sans-serif;
            font-size: 16px;
        }
    }
</style>