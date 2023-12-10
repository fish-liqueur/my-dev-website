<script setup lang="ts">
    const route = useRoute();
</script>

<template>
    <div v-if="route.path !== '/'" class="flex flex-wrap gap-2 py-2">
        <NuxtLink to="/">home</NuxtLink>
        <span class="text-gray-700">/ {{ route.name }}</span>
    </div>
</template>
