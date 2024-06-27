<script setup lang="ts">
import { reactive } from "vue";
import { useTodoStore } from "../nuxt3-todo/src/stores/todo";

const state = reactive({ newTodoName: "" });

const store = useTodoStore();
const todos = store.todos;

const deleteTodo = (id: number) => store.deleteTodo(id);
const addTodo = () => {
  if (state.newTodoName !== "") {
    store.addTodo(state.newTodoName);
    state.newTodoName = "";
  }
};
</script>

<template>
  <v-app>
    <v-container>
      <h1 class="mb-4">ToDo App using Nuxt3</h1>
      <h2>タスク追加</h2>
        <div class="d-flex w-25 mx-4 mb-4">
          <v-text-field variant="outlined" label="タスク名" v-model="state.newTodoName" type="text"></v-text-field>
          <v-btn @click="addTodo" class="ms-4 mt-2" color="blue">追加</v-btn>
        </div>

      <h2>タスク一覧</h2>
      <v-table class="w-25">
        <thead>
          <tr>
            <th>タスク名</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="todo in todos" :key="todo.name" class="w-50 mx-4">
            <td>
              {{ todo.name }}
            </td>
            <td>
              <v-btn @click="deleteTodo(todo.id)" class="ms-4" color="red">削除</v-btn>
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-container>
  </v-app>
</template>