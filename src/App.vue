<script lang="ts" setup>
  import { ref } from 'vue';
  import TaskForm from './components/TaskForm.vue'
  import TaskList from './components/TaskList.vue';
  import type { Task } from './types/types';

  const message = ref('Tasks app');
  const tasksList = ref<Task[]>([]);

  function handleAddTask(newTask: string) {
    tasksList.value.push({
      id: crypto.randomUUID(),
      title: newTask,
      done: false
    })
  }
</script>

<template>
  <main>
    <h1>{{ message }}</h1>
    <TaskForm @add-task-triggered="handleAddTask" />
    <div>
      <h3 v-if="!tasksList.length">Add a task to get started</h3>
      <h3 v-else>0 / {{ tasksList.length }} tasks completed.</h3>
      <TaskList :tasks-list />
    </div>
  </main>
</template>

<style scoped>
  main {
    max-width: 800px;
    margin: 10px auto;
  }

  h1 {
    text-align: center;
  }
</style>