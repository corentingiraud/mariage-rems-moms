<script lang="ts">
  import './style.scss';
  import Main from './main/main.svelte';
  import Rems from './rems/rems.svelte';
</script>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Main />
<Rems />

<style lang="scss">
  p {
    font-size: 30px;
  }
</style>
