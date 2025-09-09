<script lang="ts" setup>
    import type { Task } from '../types/types';

    const props = defineProps<{
        tasksList: Task[]
    }>()

    const emit = defineEmits<{
        toggleDone: [taskId: string]
    }>()

    function toggleDone(taskId: string): void {
        emit('toggleDone', taskId)
    }
</script>

<template>
    <article
        v-for="task in props.tasksList"
        :key="task.id"
    >
        <label>
            <input
                type="checkbox"
                @change="toggleDone(task.id)"
                :checked="task.done"
            >
            <span :class="{ 'task-done': task.done }">{{ task.title }}</span>
        </label>
    </article>
</template>

<style scoped>
    .task-done {
        text-decoration: line-through;
    }
</style>