
<script>
  // export let tasks;
import { todos } from '../stores/store'

console.log($todos)
  </script>

<h1>Team 1</h1>
{#each $todos as item}
  <p style="background-color: {item.title}; color: white; padding: 10px">{item.description}</p>
{/each}
