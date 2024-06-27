import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    todos: [] as Array <{
      id: number;
      name: string;
      }>,
    nextId: 1,
  }),
  persist: true,
  actions: {
    addTodo(name: string) {
      this.todos.push({ id: this.nextId++,name });
    },
    deleteTodo(id: number) {
      const index = this.todos.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        this.todos.splice(index, 1);
      }
    },
  },
});