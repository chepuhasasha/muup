<template lang="pug">
button.button(:class='classes' v-bind='$attrs')
  slot   
</template>
<script lang="ts" setup>
import { computed, type PropType } from "vue";

const props = defineProps({
  size: { type: String as PropType<"s" | "m" | "l">, default: "m" },
  mode: {
    type: String as PropType<"default" | "fill" | "ghost" | "danger" | "link">,
    default: "default",
  },
  accent: { type: Boolean as PropType<boolean>, default: false },
  danger: { type: Boolean as PropType<boolean>, default: false },
});

const classes = computed(() => [
  `button_${props.mode}`,
  `button_${props.mode}__${props.size}`,
  props.accent ? `button_${props.mode}__accent` : "",
  props.danger ? `button_${props.mode}__danger` : "",
]);
</script>
<style lang="sass">
.button
  transition: all 0.3s ease
  cursor: pointer
  display: flex
  border: none
  outline: none
  max-width: max-content

  &:active
    transform: scale(0.98)

  &:disabled
    cursor: not-allowed
    opacity: 0.5

  &_default
    border-radius: 4px
    background: var(--color-background-300)
    color: var(--color-text-200)
    &__danger
      background: var(--color-background-300)
      color: var(--error-100)
      &:hover
        background: var(--error-100) !important

    &__danger + &__accent
      background: var(--error-100)
    &__s
      padding: 4px 8px
      font-size: 12px
    &__m
      font-size: 14px
      padding: 8px 12px
    &__l
      font-size: 16px
      padding: 12px 20px
    &:hover, &__accent
      background: var(--accent-100)
      color: var(--color-text-100)

    &:focus-visible
      background: var(--accent-200) !important
      color: var(--accent-100) !important
      outline: 2px solid var(--accent-100)

  &_link
    background: none
    color: var(--accent-100)
    border-bottom: 1px solid transparent
    &__danger
      color: var(--error-100)
      &:hover
        border-color: var(--error-100) !important
    &__danger + &__accent
      border-color: var(--error-100)

    &__s
      font-size: 12px
      padding: 4px 0
    &__m
      font-size: 14px
      padding: 8px 0
    &__l
      font-size: 16px
      padding: 12px 0
    &:hover, &:focus-visible, &__accent
      border-color: var(--accent-100)

  &_ghost
    background: var(--accent-200)
    color: var(--accent-100)
    border-radius: 4px
    border: 2px solid transparent
    &__danger
      color: var(--error-100)
      background: var(--error-200)
      &:hover
        border-color: var(--error-200) !important
    &__danger + &__accent
      border-color: var(--error-200)
    &__s
      font-size: 12px
      padding: 4px 8px
    &__m
      font-size: 14px
      padding: 8px 12px
    &__l
      font-size: 16px
      padding: 12px 20px
    &:hover, &:focus-visible, &__accent
      border-color: var(--accent-200)
</style>
