<script lang="ts">
    import HeaderTitle from './header-title.svelte'
    import Icon from '$lib/assets/fake-icon.png';
    import {PAGE_IDS} from '$lib';
    import {onMount} from "svelte";

    const HEADER_HEIGHT = 50;
    let activeSectionId: PAGE_IDS | null = null;

    onMount(() => {
        window.addEventListener('scroll', detectSection);
    });

    function scrollToSection(pageId: PAGE_IDS): void {
        const section: HTMLElement | null = document.getElementById(pageId);
        if (section) {
            const offsetPosition: number = section.getBoundingClientRect().top - document.body.getBoundingClientRect().top - HEADER_HEIGHT;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }
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
    <div class="icon" on:click={() => scrollToSection(PAGE_IDS.HOME)}>
        <img src={Icon} alt="fake icon" />
    </div>
    <div class="header__container">
        <HeaderTitle {activeSectionId} on:click={(e) => scrollToSection(e.detail)} pageId={PAGE_IDS.JOUR_J} label="Jour J" />
        <HeaderTitle {activeSectionId} on:click={(e) => scrollToSection(e.detail)} pageId={PAGE_IDS.LOGEMENTS} label="Logements" />
        <HeaderTitle {activeSectionId} on:click={(e) => scrollToSection(e.detail)} pageId={PAGE_IDS.LISTE_MARIAGE} label="Liste de mariage" />
        <HeaderTitle {activeSectionId} on:click={(e) => scrollToSection(e.detail)} pageId={PAGE_IDS.REPONSE} label="Réponse" />
    </div>
</div>

<style lang="scss">

    .header {
      position: sticky;
      top: 0;
      background-color: white;
      border-bottom: rgba(0, 0, 0, 0.1) 1px solid;
      display: flex;
      align-items: center;
      gap: 8px;

      &__container {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-grow: 1;
        gap: 8px;
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