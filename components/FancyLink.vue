<script setup lang="ts">
interface LinkProps {
    link: string;
    external: boolean;
    title: string;
    subtitle: string;
};
const props = defineProps<LinkProps>();


</script>

<template>
    <NuxtLink
        :to="props.link"
        :external="props.external"
        class="inline-flex justify-between gap-4 pt-4 pb-3"
    >
        <span class="font-extrabold text-sm sm:text-4xl uppercase leading-none">{{props.title}}</span>
        <span class="self-end text-xs sm:text-lg leading-none">{{props.subtitle}}</span>
    </NuxtLink>
</template>

<style scoped>

</style>
