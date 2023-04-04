<script>
  import { questions } from '../stores/storeQuestion';

  let question = {
    title: '',
    answer1: '',
    points1: 0,
    answer2: '',
    points2: 0,
    answer3: '',
    points3: 0,
  };

  const handleSubmit = () => {
    console.log(question);
    questions.add(question);
    question = {
      title: '',
      answer1: '',
      points1: 0,
      answer2: '',
      points2: 0,
      answer3: '',
      points3: 0,
    };
  };
</script>

<form on:submit|preventDefault={handleSubmit}>
  <h3>Pregunta</h3>
  <input
    class="form-control"
    bind:value={question.title}
    type="text"
    placeholder="Escribe la pregunta"
  />

  <div class="mt-3">
    <h4>Respuestas</h4>

    <div class="row mt-3">
      <div class="col-10">
        <input
          class="form-control"
          bind:value={question.answer1}
          id="answer1"
          placeholder="Respuesta 1"
        />
      </div>
      <div class="col-2">
        <input
          class="form-control"
          bind:value={question.points1}
          id="points1"
          placeholder="Puntos"
        />
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-10">
        <input
          class="form-control"
          bind:value={question.answer2}
          id="answer2"
          placeholder="Respuesta 2"
        />
      </div>
      <div class="col-2">
        <input
          class="form-control"
          bind:value={question.points2}
          id="points2"
          placeholder="Puntos"
        />
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-10">
        <input
          class="form-control"
          bind:value={question.answer3}
          id="answer3"
          placeholder="Respuesta 3"
        />
      </div>
      <div class="col-2">
        <input
          class="form-control"
          bind:value={question.points3}
          id="points3"
          placeholder="Puntos"
        />
      </div>
    </div>
  </div>

  <div class="row mt-3">
    <button class="btn btn-dark m-2">Enviar</button>
  </div>
</form>
