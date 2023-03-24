<script>
  import { todos } from '../stores/store';
</script>

<h1>Team 2</h1>

{#each $todos as item}
  {#if item.title == 'team2'}
    <p style="background-color: coral; color: white; padding: 10px">
      {item.description}
    </p>
  {/if}
{/each}