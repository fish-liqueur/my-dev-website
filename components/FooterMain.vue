<template>
    <footer class="bg-black text-neutral-200 leading-none p-4">
        <div class="flex items-center justify-between gap-4 max-w-7xl mx-auto">
            <div class="flex items-center gap-2">
                <a v-for="link in socialLinks" :key="link.to" :href="link.to" target="_blank" class="footer-link">
                    <NuxtIcon :name="link.icon" class="inline-block w-7 h-7" />
                </a>
            </div>
            <span>© 2023 Ivan Novak</span>
        </div>
    </footer>
</template>

<script setup lang="ts">
const socialLinks = ref([
    {
        icon: 'github',
        to: 'https://github.com/fish-liqueur',
    },
    {
        icon: 'linkedin',
        to: 'https://www.linkedin.com/in/novak-frontend',
    },
]);
</script>

<style scoped>
.footer-link >>> .nuxt-icon svg {
    width: 100%;
    height: 100%;
    margin-bottom: 0;
}
</style>
