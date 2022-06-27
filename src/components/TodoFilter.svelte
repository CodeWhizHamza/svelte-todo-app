<script lang="ts">
  import { filter as filterStore } from '../store/todoStore'
  let filter = 'all'
  $: filterStore.set(filter)
</script>

<div class="filter">
  <button on:click={() => (filter = 'all')} class:active={filter === 'all'}
    >all</button
  >
  <button
    on:click={() => (filter = 'completed')}
    class:active={filter === 'completed'}>completed</button
  >
  <button
    on:click={() => (filter = 'uncompleted')}
    class:active={filter === 'uncompleted'}>left</button
  >
</div>

<style lang="scss">
  .filter {
    display: flex;
    gap: 0;
    overflow: hidden;
    border-radius: 0.25rem;

    button {
      color: inherit;
      background: none;
      border: none;
      margin: 0;
      padding: 0.2rem;
      font-size: inherit;
      font-family: inherit;
      cursor: pointer;

      &:hover,
      &.active {
        background: var(--bg-input);
      }
    }
  }
</style>
