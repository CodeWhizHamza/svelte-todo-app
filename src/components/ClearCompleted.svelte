<script lang="ts">
  import { TodoStore } from '../store/todoStore'
  const removeCompleted = () => {
    TodoStore.update((todos) => todos.filter((todo) => !todo.done))
    localStorage.setItem('todos', JSON.stringify($TodoStore))
  }
  $: hasOneCompleted = $TodoStore.some((todo) => todo.done)
</script>

<div class="clear">
  {#if hasOneCompleted}
    <button on:click={removeCompleted}>Clear completed</button>
  {/if}
</div>

<style lang="scss">
  button {
    font-size: inherit;
    cursor: pointer;
    border: none;
    color: var(--text);
    background: none;
  }
</style>
