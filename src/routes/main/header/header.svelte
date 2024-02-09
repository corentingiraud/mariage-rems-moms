<script lang="ts">
    import HeaderTitle from './header-title.svelte'
    import Icon from '$lib/assets/fake-icon.png';
    import {PAGE_IDS} from '$lib';

    const HEADER_HEIGHT = 50;

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
</script>
<div class="header" style="height: {HEADER_HEIGHT}px">
    <div class="icon" on:click={() => scrollToSection(PAGE_IDS.HOME)}>
        <img src={Icon} alt="fake icon" />
    </div>
    <div class="header__container">
        <HeaderTitle on:click={() => scrollToSection(PAGE_IDS.JOUR_J)} label="Jour J" />
        <HeaderTitle on:click={() => scrollToSection(PAGE_IDS.LOGEMENTS)} label="Logements" />
        <HeaderTitle on:click={() => scrollToSection(PAGE_IDS.LISTE_MARIAGE)} label="Liste de mariage" />
        <HeaderTitle on:click={() => scrollToSection(PAGE_IDS.REPONSE)} label="Réponse" />
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