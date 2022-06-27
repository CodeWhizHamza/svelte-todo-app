<script lang="ts">
  import { TodoStore } from '../store/todoStore'
  import { createEventDispatcher, onMount } from 'svelte'

  const dispatch = createEventDispatcher()
  export let todo
  let editInput: HTMLInputElement
  let newTodoText = todo.text

  const updateTodo = (id: string) => {
    TodoStore.update((todos) =>
      todos.map((todo) => {
        if (todo.id === id) todo.text = newTodoText
        return todo
      }),
    )
    localStorage.setItem('todos', JSON.stringify($TodoStore))
  }
  const handleKeyUp = (e, id: string) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      updateTodo(id)
      dispatch('editing-change', null)
    }
    if (e.key === 'Escape') {
      dispatch('editing-change', null)
      newTodoText = ''
    }
  }
  const handleBlur = (e, id: string) => {
    dispatch('editing-change')
    updateTodo(id)
  }
  onMount(() => editInput.focus())
</script>

<input
  type="text"
  class="edit-input"
  bind:this={editInput}
  bind:value={newTodoText}
  on:keyup={(e) => handleKeyUp(e, todo.id)}
  on:blur={(e) => handleBlur(e, todo.id)}
/>

<style lang="scss">
  .edit-input {
    width: 100%;
    height: fit-content;
    font-size: inherit;
    font-family: inherit;
    padding: 0.4rem 0.6rem;
    border-radius: 0.25rem;
    border: 1px solid var(--border-color);
    font-size: 1.2rem;
    resize: none;
    background: var(--bg-input);
    color: var(--text);
  }
</style>
