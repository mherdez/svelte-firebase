<script>
  import { addDoc, collection, onSnapshot } from 'firebase/firestore';
  import { db } from './helpers/firebase';

  import { Router, Link, Route } from 'svelte-routing';

  import FormTask from './components/FormTask.svelte';
  import Team01 from './views/Team01.svelte';
  import Team02 from './views/Team02.svelte';
  import TableView from './views/TableView.svelte';

  let tasks = [];
  let task = { title: '', description: '' };

  const handleSubmit = async () => {
    await addDoc(collection(db, 'tasks'), task);
    tasks = [...tasks];
    task = { title: '', description: '' };
    console.log('tarea guardada');
  };

  onSnapshot(
    collection(db, 'tasks'),
    (querySnapshot) => {
      tasks = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      // console.log(tasks);
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
        <a class="navbar-brand text-primary" href={"#"}>100 Estudiantes Dijeron</a>
            <div class="nav-item">
              <Link class="nav-link" to="/">Home</Link>
            </div>
            <div class="nav-item">
              <Link class="nav-link" to="/team01">Team01</Link>
            </div>
            <div class="nav-item">
              <Link class="nav-link" to="/team02" >Team02</Link>
            </div>
            <div class="nav-item">
              <Link class="nav-link" to="/table">Table</Link>
            </div>
      </div>
    </nav>

    <div class="container">
      <!-- <Route path="/"><FormTask {task} {handleSubmit} /></Route>
      <Route path="/team1"><Team01 {tasks} /></Route>
      <Route path="/team2"><Team02 /></Route> -->
      <Route path="/table"><TableView/></Route>
    </div>
  </Router>
</main>

<style>
</style>
