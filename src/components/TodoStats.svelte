<script lang="ts">
  import { TodoStore } from '../store/todoStore'
  import ClearCompleted from './ClearCompleted.svelte'
  import TodoFilter from './TodoFilter.svelte'

  $: todosRemaining =
    $TodoStore.length - $TodoStore.filter((todo) => todo.done).length
  $: statsString = `${todosRemaining} task${
    todosRemaining === 1 ? '' : 's'
  } left`
</script>

{#if $TodoStore.length > 0}
  <footer>
    <p>
      {statsString}
    </p>
    <TodoFilter />
    <ClearCompleted />
  </footer>
{/if}

<style lang="scss">
  footer {
    margin-top: 1.4rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 0.9rem;
    color: var(--text);
  }
</style>
