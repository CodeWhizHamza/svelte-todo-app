<script lang="ts">
  import { onMount } from 'svelte'
  import { TodoStore } from '../store/todoStore'
  import { v4 as uniqueId } from 'uuid'
  import CheckAllButton from './CheckAllButton.svelte'

  let todoText = ''
  let inputBox: HTMLInputElement

  const addTodo = () => {
    const todo = {
      id: uniqueId(),
      text: todoText,
      done: false,
    }
    TodoStore.update((prev) => [...prev, todo])
    todoText = ''
    localStorage.setItem('todos', JSON.stringify($TodoStore))
  }
  onMount(() => inputBox && inputBox.focus())
</script>

<form on:submit|preventDefault={addTodo}>
  <CheckAllButton />
  <input
    type="text"
    bind:this={inputBox}
    bind:value={todoText}
    placeholder="What needs to be done."
    required
  />
</form>

<style lang="scss">
  form {
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    input {
      width: 100%;
      font-size: inherit;
      font-family: inherit;
      padding: 0.4rem 2rem;
      border-radius: 0.25rem;
      border: 1px solid var(--border-color);
      font-size: 1.2rem;
      background-color: var(--bg-input);
      color: var(--text);

      &::placeholder {
        color: var(--placeholder-color);
      }
    }
  }
</style>
