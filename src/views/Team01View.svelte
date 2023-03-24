<script>
  import { todos } from '../stores/store';
</script>

<h1>Team 1</h1>

{#each $todos as item}
  {#if item.title == 'team1'}
    <p style="background-color: teal; color: white; padding: 10px">
      {item.description}
    </p>
  {/if}
{/each}
