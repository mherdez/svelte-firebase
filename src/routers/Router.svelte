<script>
  import { Link, Route, Router } from 'svelte-routing';
  import ControlView from '../views/ControlView.svelte';
  import TableView from '../views/TableView.svelte';
  import Team01View from '../views/Team01View.svelte';
  import Team02View from '../views/Team02View.svelte';
</script>

<Router>
  <nav class="navbar bg-dark text-light mb-5">
    <div class="container text-center">
      <a class="navbar-brand text-primary" href={'#'}>100 Estudiantes Dijeron</a
      >
      <div class="nav-item">
        <Link class="nav-link" to="/">Home</Link>
      </div>
      <div class="nav-item">
        <Link class="nav-link" to="/team1">Team01</Link>
      </div>
      <div class="nav-item">
        <Link class="nav-link" to="/team2">Team02</Link>
      </div>
      <div class="nav-item">
        <Link class="nav-link" to="/table">Table</Link>
      </div>
    </div>
  </nav>

  <div class="container">
    <Route path="/"><ControlView /></Route>
    <Route path="/team1"><Team01View /></Route>
    <Route path="/team2"><Team02View /></Route>
    <Route path="/table"><TableView /></Route>
  </div>
</Router>
