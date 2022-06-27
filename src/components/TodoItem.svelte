<script lang="ts">
  import { TodoStore } from '../store/todoStore'
  import CheckTodo from './CheckTodo.svelte'
  import DeleteTodoButton from './DeleteTodoButton.svelte'
  import TodoContent from './TodoContent.svelte'

  export let todo: { id: string; text: string; done: boolean }
  let deleteButtonVisible = false
  let isEditing = false

  const handleDblClick = () => {
    if (!todo.done) isEditing = true
  }
  const stopEditing = () => {
    isEditing = false
  }
</script>

<article
  on:mouseenter={() => (deleteButtonVisible = true)}
  on:mouseleave={() => (deleteButtonVisible = false)}
  on:dblclick={handleDblClick}
>
  <CheckTodo {todo} />
  <TodoContent {todo} {isEditing} {stopEditing} />
  <DeleteTodoButton {deleteButtonVisible} {todo} {isEditing} />
</article>

<style lang="scss">
  article {
    font-size: 1.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    gap: 0.6rem;
    margin: 0.6rem 0;
    padding: 0.4rem;
    padding-right: 1rem;
    background-color: var(--bg-input);
    border-radius: 0.25rem;
  }
</style>
