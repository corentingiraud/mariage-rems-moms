<script>
    import {PAGE_IDS } from '$lib';
    import Form from './form/form.svelte'
    import Validated from './validated/validated.svelte';
    import { fade, fly } from 'svelte/transition';

    let showValidatedScreen = false;
</script>
<div class="page" id={PAGE_IDS.REPONSE}>
    <div class="response">
        {#if showValidatedScreen}
            <div class="response__content" in:fly={{delay: 100, x: 200, duration: 200}}>
                <Validated />
            </div>
        {:else}
            <div class="response__content" out:fade={{duration: 100}}>
                <Form on:scrollToSection  on:formSubmit={() => showValidatedScreen = true} />
            </div>
        {/if}
    </div>
</div>
<style lang="scss">
    .response {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;

      &__content {
        position: absolute;
        top: 0;
        width: 100%;
      }
    }
</style>