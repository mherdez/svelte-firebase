<script>
  import { addDoc, collection, onSnapshot } from 'firebase/firestore';
  import { db } from './helpers/firebase';

	import { Router, Link, Route } from "svelte-routing";

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
    },
    (err) => {
      console.log(err);
    }
  );
</script>

<main>
  <h1>Firebase</h1>

  <Router>
		<div class="container">
			<Route path='/'><FormTask  {task} {handleSubmit}/></Route>
			<Route path='/team1'><Team01 /></Route>
			<Route path='/team2'><Team02 /></Route>
			<Route path='/table'><TableView {tasks}/></Route>
	</div>
	</Router>
</main>

<style>
</style>
