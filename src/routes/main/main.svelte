<script lang="ts">
    import Header from './header/header.svelte';
    import Home from './home/home.svelte';
    import JourJ from './jour-j/jour-j.svelte';
    import Logements from './logements/logements.svelte';
    import ListeMariage from './liste-mariage/liste-mariage.svelte';
    import Reponse from './reponse/reponse.svelte';
    import {PAGE_IDS} from "$lib";

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

<Header {HEADER_HEIGHT} on:scrollToSection={(e) => scrollToSection(e.detail)} />
<Home/>
<JourJ />
<Logements/>
<ListeMariage/>
<Reponse on:scrollToHome={() => scrollToSection(PAGE_IDS.HOME)}/>