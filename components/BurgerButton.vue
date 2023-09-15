<template>
    <button class="burger-button" :class="{ 'burger-button--open': modelValue }"
        @click="$emit('update:modelValue', !modelValue)">
        <div class="burger-button__bar burger-button__bar--top"></div>
        <div class="burger-button__bar burger-button__bar--mid"></div>
        <div class="burger-button__bar burger-button__bar--bottom"></div>
    </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    modelValue: {
        type: Boolean,
    },
});
const emit = defineEmits(['update:modelValue']);
</script>

<style lang="scss" scoped>
.burger-button {
    position: relative;
    border-radius: 50%;
    border: 1px solid #000;

    &__bar {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 85%;
        height: 2%;
        background-color: #000;
        transform: translate(-50%, -50%);
        transition: 0.2s ease-in;

        &--top {
            top: 40%;
        }

        &--bottom {
            top: 60%;
        }
    }

    &--open {
        .burger-button__bar {
            &--top {
                top: 50%;
                transform: translate(-50%, -50%) rotate(-45deg);
            }

            &--mid {
                transform: translate(-50%, -50%) rotate(405deg);
            }

            &--bottom {
                top: 50%;
                transform: translate(-50%, -50%) rotate(45deg);
            }


        }
    }
}
</style>