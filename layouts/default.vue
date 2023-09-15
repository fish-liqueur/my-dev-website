<template>
    <div class="flex flex-col min-h-screen bg-neutral-200">
        <HeaderMain />
        <main class="grow px-3">
            <slot />
        </main>
        <FooterMain />
    </div>
</template>

<script setup lang="ts">
//
</script>