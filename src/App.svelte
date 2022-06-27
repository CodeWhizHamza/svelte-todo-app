<script lang="ts">
  import ColorModeToggle from './components/ColorModeToggle.svelte'
  import Form from './components/Form.svelte'
  import TodoList from './components/TodoList.svelte'
  import TodoStats from './components/TodoStats.svelte'
  import './global.scss'
</script>

<main>
  <h1>Todo app</h1>
  <Form />
  <TodoList />
  <TodoStats />
  <ColorModeToggle />
</main>

<style lang="scss">
  main {
    position: relative;
  }
  h1 {
    margin-bottom: 1.4rem;
    text-align: center;
    font-size: 3rem;
    font-weight: normal;
    color: var(--text);
  }
</style>
