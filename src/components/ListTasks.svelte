<script>
  export let tasks;
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
      {#each tasks as item}
        <tr>
          <td class="">{item.id}</td>
          <td class="">{item.title}</td>
          <td class="">{item.description}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</main>