<template>
    <header class="sticky top-0 w-full h-14 flex gap-4 items-center justify-end bg-neutral-200 px-3">
        <BurgerButton v-model="burgerMenuOpen" ref="burgerButtonRef" class="w-10 h-10" />
        <Transition name="slide">
            <MenuMain v-if="burgerMenuOpen" :ignore-click-ref="burgerButtonRef" @click-outside="burgerMenuOpen = false"/>
        </Transition>
    </header>
</template>

<script setup lang="ts">
import { ref } from "vue";

const burgerButtonRef = ref(null);
let burgerMenuOpen = ref(false);
</script>

<style >
.slide-enter-active {
    transform: translateX(-100%);
    transition: all .2s linear;
}
.slide-enter-to, .slide-leave {
    transform: translateX(0);
}

.slide-enter, .slide-leave-to {
    transform: translateX(-100%);
}
</style>
