<script>
  // export let tasks;
    import { questions } from '../stores/storeQuestion';

</script>

<main>

  <div class="container">
  <h1>Preguntas</h1>
</div>
{#each $questions as question}
    <div class="container m-5">
      <h2>{question.title} <span class="text-secondary mt-2 fs-6">({question.id})</span></h2>


      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Respuestas</th>
            <th scope="col">Puntos</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td class="">{question.answer1}</td>
              <td class="">{question.points1}</td>
            </tr>
            <tr>
              <td class="">{question.answer2}</td>
              <td class="">{question.points2}</td>
            </tr>
            <tr>
              <td class="">{question.answer3}</td>
              <td class="">{question.points3}</td>
            </tr>
        </tbody>
      </table>


    </div>
    {/each}

</main>
