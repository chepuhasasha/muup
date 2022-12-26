<template lang="pug">
button.button(:class='classes')
  slot   
</template>
<script lang="ts" setup>
import { computed, type PropType } from "vue";

const props = defineProps({
  size: { type: String as PropType<"s" | "m" | "l">, default: "m" },
  mode: {
    type: String as PropType<"default" | "ghost" | "danger">,
    default: "default",
  },
  active: { type: Boolean as PropType<boolean>, default: false },
  disable: { type: Boolean as PropType<boolean>, default: false },
});

const classes = computed(() => [
  `button_${props.mode}`,
  `button_${props.mode}__${props.size}`,
  props.active ? `button_${props.mode}__active` : null,
  props.disable ? `button_${props.mode}__disable` : null,
]);
</script>
<style lang="sass">
.button
  cursor: pointer
  display: flex
  border: none
  max-width: max-content
  &_default
    border-radius: 4px
    background: var(--color-background-300)
    color: var(--color-text-200)
    &__s
      padding: 4px 8px
      font-size: 12px
    &__m
      font-size: 14px
      padding: 8px 12px
    &__l
      font-size: 16px
      padding: 12px 20px
    &:hover
      background: var(--accent-100)
      color: var(--color-text-100)
    &__active
      background: var(--accent-200)
      color: var(--accent-100)
    &__disable
      cursor: not-allowed
      opacity: 0.5
      &:hover
        background: var(--color-background-100)
        color: var(--color-text-300)
</style>
