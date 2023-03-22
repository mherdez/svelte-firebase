<script>
	import { addDoc, collection, onSnapshot } from 'firebase/firestore';
	import { db } from './firebase';

	let task = { title: '', description: '' };

	let tasks = [];

	const handleSubmit = async () => {
		await addDoc(collection(db, 'tasks'), task);
		tasks = [...tasks, task];
		console.log('tarea guardada');
		task = {
			title: '',
			description: '',
		};
	};

	onSnapshot(
		collection(db, 'tasks'),
		(querySnapshot) => {
			tasks = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
			console.log(tasks);
		},
		(err) => {
			console.log(err);
		}
	);
</script>

<main>
	<h1>Firebase</h1>

	<div class='container'>
		<form on:submit|preventDefault={handleSubmit} class=''>
			<label class='col-form-label' for='title'>Titulo</label>
			<input
				class='form-control'
				bind:value={task.title}
				type='text'
				placeholder='Escribe un titulo'
			/>
			<label class='col-form-label' for='description'>Decripcion</label>
			<textarea
				class='form-control'
				bind:value={task.description}
				id='description'
				rows='3'
				placeholder='Descripcion'
			/>
			<button class='btn btn-dark m-2'>Enviar</button>
		</form>
		<hr />
		<table class='table table-striped'>
			<thead>
				<tr>
					<th scope='col'>ID</th>
					<th scope='col'>Titulo</th>
					<th scope='col'>Descripcion</th>
				</tr>
			</thead>
			<tbody>
				{#each tasks as item}
					<tr>
						<td class=''>{item.id}</td>
						<td class=''>{item.title}</td>
						<td class=''>{item.description}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</main>

<style>
</style>
