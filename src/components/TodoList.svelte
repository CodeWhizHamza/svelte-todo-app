<script lang="ts">
  import { scale, blur } from 'svelte/transition'
  import { RenderTodoStore } from '../store/todoStore'
  import TodoItem from './TodoItem.svelte'
</script>

{#each $RenderTodoStore as todo (todo.id)}
  <div in:scale out:blur>
    <TodoItem {todo} />
  </div>
{/each}

<style lang="scss"></style>
