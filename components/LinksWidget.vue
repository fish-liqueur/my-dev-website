<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";

const menuLinks = ref([
    {
        link: '/docs/Ivan_Novak_-_Frontend_Developer_-_CV.pdf',
        external: true,
        title: 'Download my CV',
        subtitle: 'in PDF',
    },
    {
        link: 'https://www.linkedin.com/in/novak-frontend/',
        external: true,
        title: 'My Linkedin',
        subtitle: 'contact me!',
    },
    {
        link: 'https://github.com/fish-liqueur',
        external: true,
        title: 'My Github',
        subtitle: 'some projects',
    },
    {
        link: '/tetris',
        external: false,
        title: 'Play Tetris',
        subtitle: 'because you can!',
    },
]);

/* refs */

const scrollArea = ref(null);

/* image animation */

const translateBase = ref(0);
let observer: IntersectionObserver;
const handleIntersect = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    translateBase.value = entry.intersectionRatio;
};

const movingImageStyle = computed(() => ({ transform: `translateX(-${(1 - translateBase.value) * 100}vw)`}));

onMounted(() => {
    const observerOptions = {
        rootMargin: "0px",
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    };
    observer = new IntersectionObserver(handleIntersect, observerOptions);
    observer.observe(scrollArea.value !);
});

onUnmounted(() => {
    observer.disconnect();
});

</script>

<template>
    <div class="lg:pb-16" ref="scrollArea">
        <h2 class="text-4xl sm:text-7xl font-extrabold sm:mb-4">links</h2>
        <div class="flex flex-col lg:flex-row-reverse lg:gap-16">
            <div class="flex flex-col self-end w-3/4 lg:w-1/2 divide-y">
                <FancyLink
                    v-for="link in menuLinks"
                    :external="link.external"
                    :link="link.link"
                    :title="link.title"
                    :subtitle="link.subtitle"
                    class="border-black"
                />
            </div>
            <div class="flex align-middle h-52 lg:h-64 max-w-full">
                <NuxtPicture
                    format="avif,webp"
                    src="/images/cat-walk.png"
                    :style="movingImageStyle"
                    class="flex justify-center m-auto h-3/4 transition-transform duration-1000 delay-150"
                    :imgAttrs="{style:'max-height: 100%; max-width: 100%;'}"
                />
            </div>
        </div>
    </div>
</template>

