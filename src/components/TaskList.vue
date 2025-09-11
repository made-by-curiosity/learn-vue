<script lang="ts" setup>
    import type { Task } from '../types/types';

    const props = defineProps<{
        tasksList: Task[]
    }>()

    const emit = defineEmits<{
        toggleDone: [taskId: string]
        removeTask: [taskId: string]
    }>()

    function toggleDone(taskId: string): void {
        emit('toggleDone', taskId)
    }

    function removeTask(taskId: string): void {
        emit('removeTask', taskId)
    }
</script>

<template>
    <TransitionGroup
        name="list"
        tag="div"
    >
        <article
            class="task"
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
            <button
                type="button"
                class="outline"
                @click="removeTask(task.id)"
            >Remove</button>
        </article>
    </TransitionGroup>
</template>

<style scoped>
    .task {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .task-done {
        text-decoration: line-through;
    }

    .list-enter-active,
    .list-leave-active {
        transition: all 0.5s ease
    }

    .list-enter-from,
    .list-leave-to {
        opacity: 0;
        transform: translateX(30px)
    }
</style>