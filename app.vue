<template>
  <div>
    <h1>ToDoApp</h1>
    <h2>Add Task</h2>
    <input v-model="taskName">
    <button @click="addTask()">Add</button>
    <h2>Task List</h2>
      <div v-for="taskName in taskNameList" :key="taskName">
        {{ taskName }}
        <button @click="completeTask(taskName)">Done</button>
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
  const completeTask = (completedTaskName: string) => {
    taskNameList.value = taskNameList.value.filter((taskName: string) => {
      return completedTaskName !== taskName
    });
  }
</script>