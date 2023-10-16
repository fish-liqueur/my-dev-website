<script setup lang="ts">

</script>

<template>
    <div class="flex flex-col sm:flex-row gap-6 text-left">
        <div class="fancy-image-backdrop relative h-fit w-4/6">
            <NuxtImg src="/images/intro-portrait.jpg" class="relative" />
        </div>
        <div class="flex flex-col gap-4 sm:justify-center w-4/6">
            <h5 class="text-lg sm:text-3xl leading-tight font-extrabold uppercase">My name is Ivan, I'm a front-end developer based in Belgrade, Serbia </h5>
            <p class="pl-6 text-sm sm:text-base leading-tight font-medium">
                I develop JavaScript / TypeScript applications for almost 5 years. Prefer to work with Vue.js and Nuxt.
                <br>
                Love nature, cycling and music.
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.fancy-image-backdrop {
    margin-right: 5%;
    margin-bottom: 5%;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #303030;
        transform: translate(5%, 7%) rotate(-5deg);
    }
}
</style>
