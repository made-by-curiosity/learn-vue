<script lang="ts" setup>
  import { computed, ref } from 'vue';
  import TaskForm from './components/TaskForm.vue'
  import TaskList from './components/TaskList.vue';
  import type { Task } from './types/types';

  const message = ref('Tasks app');
  const tasksList = ref<Task[]>([]);
  const doneTasksCount = computed(() => tasksList.value.filter(task => task.done).length)

  function handleAddTask(newTask: string) {
    tasksList.value.unshift({
      id: crypto.randomUUID(),
      title: newTask,
      done: false
    })
  }

  function handleToggleDone(taskId: string) {
    const task = tasksList.value.find(task => task.id === taskId);

    if (task) {
      task.done = !task.done
    }
  }

  function handleTaskRemove(taskId: string) {
    tasksList.value = tasksList.value.filter(task => task.id !== taskId)
  }
</script>

<template>
  <main>
    <h1>{{ message }}</h1>
    <TaskForm @add-task-triggered="handleAddTask" />
    <div>
      <h3 v-if="!tasksList.length">Add a task to get started</h3>
      <h3 v-else>{{ doneTasksCount }} / {{ tasksList.length }} tasks completed.</h3>
      <TaskList
        :tasks-list
        @toggle-done="handleToggleDone"
        @remove-task="handleTaskRemove"
      />
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