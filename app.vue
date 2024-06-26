<script setup lang="ts">
import { storeToRefs } from "pinia";
import { reactive } from "vue";
import { useTodoStore } from "../nuxt3-todo/src/stores/todo";

const state = reactive({ newTodoLabel: "" });

const store = useTodoStore();

const { filteredTodos, filter } = storeToRefs(store);

const toggleTodo = (id: number) => store.toggleTodo(id);
const addTodo = () => {
  if (state.newTodoLabel !== "") {
    store.addTodo(state.newTodoLabel);
    state.newTodoLabel = "";
  }
};
</script>

<template>
  <v-app>
    <v-container>
      <h1>ToDo App</h1>
      <h2>タスク追加</h2>
      <div class="d-flex w-25">
        <v-text-field variant="outlined" v-model="state.newTodoLabel" type="text"></v-text-field>
        <v-btn @click="addTodo" class="ms-4 mt-2" color="blue">追加</v-btn>
      </div>

      <input id="all" type="radio" v-model="filter" value="all" />
      <label for="all">すべて</label>
      <input id="finished" type="radio" v-model="filter" value="finished" />
      <label for="finished">完了済み</label>
      <input id="unfinished" type="radio" v-model="filter" value="unfinished" />
      <label for="unfinished">未完了</label>

      <h2>タスク一覧</h2>
      <div v-for="todo in filteredTodos" :class="{ todo: true, finished: todo.finished }" :key="todo.label">
        <div class="mb-4">
          {{ todo.label }}
          <v-btn @click="toggleTodo(todo.id)" class="ms-4" color="red">削除</v-btn>
        </div>
      </div>
    </v-container>
  </v-app>

</template>