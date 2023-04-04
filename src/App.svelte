<script>
  import { snap, snapQuestions } from './helpers/onSnapshot'
  import Router from './routers/Router.svelte';

  // Escucha la db
  snap;
  snapQuestions;

</script>

<main>
  <Router />
</main>

<style>
</style>
