<script lang="ts" setup>
    import type { Task } from '../types/types';

    const props = defineProps<{
        tasksList: Task[]
    }>()
</script>

<template>
    <article
        v-for="task in props.tasksList"
        :key="task.id"
    >
        {{ task.title }}
    </article>
</template>