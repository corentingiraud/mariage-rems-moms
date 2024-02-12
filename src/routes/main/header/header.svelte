<script lang="ts">
    import HeaderTitle from './header-title.svelte'
    import Icon from '$lib/assets/fake-icon.png';
    import {PAGE_IDS} from '$lib';
    import {onMount} from "svelte";
    import {createEventDispatcher} from "svelte";

    const dispatch = createEventDispatcher();
    export let HEADER_HEIGHT: number;
    let activeSectionId: PAGE_IDS | null = null;

    onMount(() => {
        window.addEventListener('scroll', detectSection);
    });

    function detectSection(): boolean {
        return Object.values(PAGE_IDS)?.some((pageId: PAGE_IDS) => {
            const section: HTMLElement | null = document.getElementById(pageId);
            if (isInSection(section)) {
                if (activeSectionId !== pageId) {
                    activeSectionId = pageId;
                }
                return true;
            }
            return false;
        });
    }


    function isInSection(element: HTMLElement | undefined | null): boolean {
        return !!element && element.getBoundingClientRect().top < HEADER_HEIGHT + 10 && element.getBoundingClientRect().bottom > HEADER_HEIGHT + 5;
    }
</script>
<div class="header" style="height: {HEADER_HEIGHT}px">
    <div class="icon" on:click={() => dispatch('scrollToSection', PAGE_IDS.HOME)}>
        <img src={Icon} alt="fake icon" />
    </div>
    <div class="header__container">
        <HeaderTitle {activeSectionId} on:scrollToSection pageId={PAGE_IDS.JOUR_J} label="Infos" />
        <HeaderTitle {activeSectionId} on:scrollToSection pageId={PAGE_IDS.LOGEMENTS} label="Logements" />
        <HeaderTitle {activeSectionId} on:scrollToSection pageId={PAGE_IDS.LISTE_MARIAGE} label="Liste mariage" />
        <HeaderTitle {activeSectionId} on:scrollToSection pageId={PAGE_IDS.REPONSE} label="Réponse" />
    </div>
</div>

<style lang="scss">

    .header {
      z-index: 2;
      position: sticky;
      top: 0;
      background-color: white;
      display: flex;
      align-items: center;
      gap: 8px;

      &__container {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-grow: 1;
        gap: 8px;
        overflow: hidden;
        height: 100%;
      }

      .icon {
        padding-left: 6px;
        cursor: pointer;

        img {
          width: 24px;
          height: 24px;
        }
      }
    }
</style>