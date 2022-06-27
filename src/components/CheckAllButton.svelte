<script lang="ts">
  import { TodoStore } from '../store/todoStore'
  $: markFlag = $TodoStore.every((todo) => todo.done) ? false : true
  const toggleAll = () => {
    TodoStore.update((todos) =>
      todos.map((todo) => {
        todo.done = markFlag
        return todo
      }),
    )
    localStorage.setItem('todos', JSON.stringify($TodoStore))

    // Reverse flag for next click
    markFlag = !markFlag
  }
</script>

{#if $TodoStore.length > 0}
  <button on:click={toggleAll} type="button">&check;</button>
{/if}

<style lang="scss">
  button {
    position: absolute;
    top: 50%;
    left: 0.8rem;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    color: var(--text);
  }
</style>
