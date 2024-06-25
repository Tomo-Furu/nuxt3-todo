<template>
  <div>
    <h1>ToDoApp</h1>
    <input v-model="taskName">
    <button @click="addTask()">Add</button>
    <h2>Task List</h2>
      <div v-for="taskName in taskNameList" :key="taskName">
        {{ taskName }}
      </div>
  </div>
</template>

<script setup lang="ts">
  const taskNameList = ref<string[]>(['vue', 'Vue3', 'Nuxt3']);
  const taskName = ref<string>('');
  const addTask = () => {
    if(taskName.value === '') {
      return;
    }
    taskNameList.value.push(taskName.value);
    taskName.value = '';
  }
</script>