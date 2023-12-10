<script setup lang="ts">
    import {computed} from "vue";

    const props = defineProps(['modelValue']);
    const emit = defineEmits(['update:modelValue']);

    const value = computed({
        get() {
            return props.modelValue;
        },
        set(value) {
            emit('update:modelValue', value);
        }
    });
</script>

<template>
    <div class="relative w-[2em] h-[1em] focus-within:outline-dotted focus-within:outline-1">
        <input type="checkbox"
               v-model="value"
               class="absolute right-0 top-1/2
        block w-full h-full
        text-inherit
        appearance-none bg-transparent
        border-none
        m-0
        -translate-y-1/2
        before:content-['']
        before:absolute
        before:w-full before:h-full
        before:rounded-[1em] before:border before:border-[currentColor] before:bg-transparent
        before:transition
        after:content-['']
        after:absolute after:left-[0.2em] after:top-[0.2em]
        after:bg-[currentColor] after:rounded-full
        after:w-[0.6em] after:h-[0.6em]
        after:transition-all
        checked:before:bg-red-500
        checked:after:left-[1.2em]">
    </div>
</template>
