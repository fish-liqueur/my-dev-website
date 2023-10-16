<template>
    <header class="sticky top-0 w-full h-14 sm:h-20 bg-neutral-200/75 px-3 z-50">
        <div class="flex items-center justify-end gap-4 max-w-7xl h-full mx-auto">
            <BurgerButton v-model="burgerMenuOpen" ref="burgerButtonRef" class="w-10 sm:w-14 h-10 sm:h-14" />
            <Transition name="slide">
                <MenuMain v-if="burgerMenuOpen" :ignore-click-ref="burgerButtonRef" @click-outside="burgerMenuOpen = false"/>
            </Transition>
        </div>
    </header>
</template>

<script setup lang="ts">
import { ref } from "vue";

const burgerButtonRef = ref(null);
let burgerMenuOpen = ref(false);
</script>
