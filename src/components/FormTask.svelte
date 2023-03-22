
<script>
  export let task;
  export let handleSubmit;
</script>

<form on:submit|preventDefault={handleSubmit} class="">
  <label class="col-form-label" for="title">Titulo</label>
  <input
    class="form-control"
    bind:value={task.title}
    type="text"
    placeholder="Escribe un titulo"
  />
  <label class="col-form-label" for="description">Decripcion</label>
  <textarea
    class="form-control"
    bind:value={task.description}
    id="description"
    rows="3"
    placeholder="Descripcion"
  />
  <button class="btn btn-dark m-2">Enviar</button>
</form>