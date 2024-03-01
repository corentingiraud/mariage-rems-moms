<script lang="ts">
	import Header from "./header/header.svelte";
	import Home from "./home/home.svelte";
	import JourJ from "./jour-j/jour-j.svelte";
	import Logements from "./logements/logements.svelte";
	import ListeMariage from "./liste-mariage/liste-mariage.svelte";
	import Reponse from "./reponse/reponse.svelte";
</script>

<Header />
<div class="pages">
	<Home />
	<JourJ />
	<Logements />
	<ListeMariage />
	<Reponse />
</div>

<style lang="scss">
	.pages {
		position: relative;
	}
</style>
