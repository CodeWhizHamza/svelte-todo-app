import { writable, derived } from 'svelte/store'

const todos: { id: string; text: string; done: boolean }[] =
  JSON.parse(localStorage.getItem('todos')) || []

export const TodoStore = writable(todos)
export const filter = writable('all')
export const RenderTodoStore = derived(
  [TodoStore, filter],
  ([$todos, $filter]) => {
    if ($filter === 'all') return $todos
    if ($filter === 'completed') return $todos.filter((todo) => todo.done)
    if ($filter === 'uncompleted') return $todos.filter((todo) => !todo.done)
  },
)

