
<script>
  export let tasks;

  </script>

<h1>Team 1</h1>
{#each tasks as item}
  <p style="background-color: {item.title}; color: white; padding: 10px">{item.description}</p>
{/each}
