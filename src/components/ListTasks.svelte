<script>
  // export let tasks;
  import { todos } from '../stores/store';
</script>

<main>
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Titulo</th>
        <th scope="col">Descripcion</th>
      </tr>
    </thead>
    <tbody>
      {#each $todos as item}
        <tr>
          <td class="">{item.id}</td>
          <td class="">{item.title}</td>
          <td class="">{item.description}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</main>
