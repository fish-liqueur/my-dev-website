<template>
    <nav ref="menuRef" class="absolute top-full">
        <ul class="text-sm font-bold uppercase bg-neutral-100 divide-y divide-black">
            <li v-for="(item) in menuItems" :key="item.to">
                <NuxtLink :to="item.to" class="inline-flex justify-end w-full h-full p-2 pl-4 sm:text-2xl">
                    {{ item.name }}
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core'

/* Props */
const props = defineProps([
    'ignoreClickRef'
]);

/* Menu items */
const menuItems = ref([
    {
        name: 'main',
        to: '/',
    },
    {
        name: 'tetris',
        to: '/tetris',
    },
]);

/* click outside */
const menuRef = ref(null);
const emit = defineEmits(['click-outside']);
onClickOutside(menuRef, () => emit('click-outside'), {ignore: [props.ignoreClickRef]});

</script>
