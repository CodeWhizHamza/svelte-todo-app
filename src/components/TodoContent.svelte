<script lang="ts">
  import EditingInput from './EditingInput.svelte'

  export let todo: { id: string; text: string; done: boolean }
  export let isEditing: boolean
  export let stopEditing: () => void
</script>

{#if isEditing}
  <EditingInput {todo} on:editing-change={stopEditing} />
{:else}
  <p class:done={todo.done} contenteditable={isEditing}>{todo.text}</p>
{/if}

<style lang="scss">
  p {
    color: var(--text);
    width: 100%;
    user-select: none;
    &.done {
      text-decoration: line-through;
      color: rgb(131, 131, 131);
      opacity: 0.7;
    }
  }
</style>
