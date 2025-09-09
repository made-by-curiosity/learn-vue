<script lang="ts" setup>
  import { ref } from 'vue';

  const emit = defineEmits<{
    addTaskTriggered: [newTask: string]
  }>();

  const newTask = ref('');
  const error = ref<string | null>(null)

  function handleChange() {
    if (error.value === null) {
      return
    }

    error.value = null
  }

  function handleFormSubmit() {
    if (!newTask.value.trim()) {
      error.value = 'Task can not be empty'
      return
    }

    emit('addTaskTriggered', newTask.value.trim())

    newTask.value = ''
  }
</script>

<template>
  <form @submit.prevent="handleFormSubmit">
    <label>
      New Task
      <input
        @change="handleChange"
        v-model="newTask"
        class="input-class"
        type="text"
        name="newTask"
        :aria-invalid="!!error || undefined"
      >
    </label>
    <small
      v-if="error"
      id="invalid-helper"
    >
      {{ error }}
    </small>

    <div class="button-container">
      <button>Add</button>
    </div>
  </form>
</template>

<style scoped>
  .button-container {
    display: flex;
    justify-content: flex-end;
  }
</style>