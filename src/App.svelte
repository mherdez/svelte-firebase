<script>
  import { addDoc, collection, onSnapshot } from 'firebase/firestore';
  import { db } from './helpers/firebase';

  import { todos } from './stores/store'

  import { Router, Link, Route } from 'svelte-routing';
  import ControlView from './views/ControlView.svelte';
  import Team01View from './views/Team01View.svelte';
  import Team02View from './views/Team02View.svelte';
  import TableView from './views/TableView.svelte';

  // let task = { title: '', description: '' };

  // let tasks = [];
  // const handleSubmit = async () => {
  //   await addDoc(collection(db, 'tasks'), task);
  //   tasks = [...tasks];
  //   task = { title: '', description: '' };
  //   console.log('tarea guardada');
  // };

  // onSnapshot(
  //   collection(db, 'tasks'),
  //   (querySnapshot) => {
  //     tasks = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  //     // console.log(tasks);
  //   },
  //   (err) => {
  //     console.log(err);
  //   }
  // );

  onSnapshot(
  collection(db, 'tasks'),
  (querySnapshot) => {
    // tasks = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    // console.log(tasks);
    todos.put(querySnapshot)
    console.log($todos)
  },
  (err) => {
    console.log(err);
  }
);

</script>

<main>
  <Router>
    <nav class="navbar bg-dark text-light mb-5">
      <div class="container text-center">
        <a class="navbar-brand text-primary" href={'#'}
          >100 Estudiantes Dijeron</a
        >
        <div class="nav-item">
          <Link class="nav-link" to="/">Home</Link>
        </div>
        <div class="nav-item">
          <Link class="nav-link" to="/team01">Team01</Link>
        </div>
        <div class="nav-item">
          <Link class="nav-link" to="/team02">Team02</Link>
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
</main>

<style>
</style>
