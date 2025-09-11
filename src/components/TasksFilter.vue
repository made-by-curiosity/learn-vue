<script setup lang="ts">
    import { ref, watch } from 'vue';
    import { Filter } from '../types/types';

    const emit = defineEmits<{
        filterSelected: [filter: Filter]
    }>()

    const filters: Filter[] = Object.values(Filter)
    const activeFilter = ref<Filter>(Filter.All)

    function handleFilterSelect(selectedFilter: Filter): void {
        activeFilter.value = selectedFilter;
    }

    watch(activeFilter, () => {
        emit('filterSelected', activeFilter.value)
    })
</script>

<template>
    <ul class="filters-list">
        <li
            class="filters-item"
            v-for="filter in filters"
            :key="filter"
        >
            <button
                class="secondary filters-button"
                :class="{
                    'filters-button--active': filter === activeFilter
                }"
                type="button"
                @click="handleFilterSelect(filter)"
            >{{ filter }}</button>
        </li>
    </ul>
</template>

<style scoped>
    .filters-list {
        display: flex;
        justify-content: flex-end;
        gap: 10px;
    }

    .filters-item {
        list-style: none;
    }

    .filters-button {
        text-transform: capitalize;
    }

    .filters-button--active {
        opacity: 0.3;
    }
</style>