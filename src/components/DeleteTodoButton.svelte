<script lang="ts">
  import { TodoStore } from '../store/todoStore'

  export let todo: { id: string; text: string; done: boolean }
  export let isEditing: boolean
  export let deleteButtonVisible: boolean

  const deleteTodo = (id: string) => {
    TodoStore.update((todos) => todos.filter((todo) => todo.id !== id))
    localStorage.setItem('todos', JSON.stringify($TodoStore))
  }
</script>

<button
  on:click={() => deleteTodo(todo.id)}
  class:visible={deleteButtonVisible && !isEditing}>&times;</button
>

<style lang="scss">
  button {
    font-family: inherit;
    font-size: 1.4rem;
    border: none;
    background: none;
    cursor: pointer;
    color: rgb(195, 52, 1);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0.6rem;
    opacity: 0;
    transition: opacity 0.3s ease;

    &.visible {
      opacity: 1;
    }
  }
</style>
