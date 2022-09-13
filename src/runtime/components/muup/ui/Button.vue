<template lang="pug">
button.muup_button(:class="classes")
  slot
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import { computed } from "vue";

const props = defineProps({
  mode: { type: String as PropType<"default" | "tool">, default: "default" },
  size: { type: String as PropType<"s" | "m" | "l">, default: "m" },
  active: { type: Boolean as PropType<boolean>, default: false },
  disable: { type: Boolean as PropType<boolean>, default: false },
});

const classes = computed(() => ({
  [`muup_button_${props.mode}`]: true,
  [`muup_button_${props.mode}_${props.size}`]: true,
  [`muup_button_${props.mode}_active`]: props.active,
  [`muup_button_${props.mode}_disable`]: props.disable,
}));
</script>

<style lang="sass">
.muup_button
  position: relative
  cursor: pointer
  outline: none
  border: none
  font-family: var(--muup_font_100)

  &_default
    background: var(--muup_contrast_200)
    color: var(--muup_text_200)
    &_disable
      opacity: 0.5
    &_active, &:hover
      background: var(--muup_accent_100)
      // box-shadow: 0 0 0 2px inset var(--muup_accent_200)
      color: var(--muup_accent_100)
    &_s
      padding: 6px
      font-size: 10px
      border-radius: 6px
    &_m
      padding: 10px 13px
      font-size: 13px
      border-radius: 4px
    &_l
      padding: 14px 18px
      font-size: 15px
      border-radius: 8px
  &_tool
    background: var(--muup_contrast_100)
    color: var(--muup_text_200)
    min-width: 48px
    height: 48px
    border-radius: 10px
    path
      stroke: var(--muup_text_200)
    &_disable
      opacity: 0.5
    &_active
      path
        stroke: var(--muup_accent_100)

    &:hover
      background: var(--muup_contrast_200)
      // box-shadow: inset 0 -2px 0 var(--muup_accent_100)
      color: var(--muup_text_100)
    &_m, &_s, &_l
      padding: 10px 13px
      font-size: 13px
</style>
