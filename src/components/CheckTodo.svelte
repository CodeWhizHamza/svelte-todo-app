<script lang="ts">
  import { TodoStore } from '../store/todoStore'

  export let todo
  $: isDone = todo.done

  const handleDone = (id: string) => {
    TodoStore.update((todos) =>
      todos.map((todo) => {
        if (todo.id === id) todo.done = !todo.done
        return todo
      }),
    )
    localStorage.setItem('todos', JSON.stringify($TodoStore))
  }
</script>

<div class="input">
  <input
    id={todo.id}
    type="checkbox"
    bind:checked={isDone}
    on:input={() => handleDone(todo.id)}
  />
  <label for={todo.id}>
    {#if isDone}
      &check;
    {/if}
  </label>
</div>

<style lang="scss">
  .input {
    position: relative;
    overflow: hidden;
    width: 25px;
    height: 20px;
    align-self: center;

    input {
      visibility: hidden;
      position: absolute;
      top: -999px;
      left: -999px;
    }
    label {
      width: 20px;
      height: 20px;
      border-radius: 999rem;
      border: 1px solid var(--text);
      color: var(--text);
      display: flex;
      justify-content: center;
      align-items: center;
      user-select: none;
      cursor: pointer;
    }
  }
</style>
