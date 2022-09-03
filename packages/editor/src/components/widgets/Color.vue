<template lang="pug">
.color
  .color_value(:style='{ background: color }')
  .color_name {{ name }}
</template>

<script lang="ts" setup>
import { PropType } from "vue";

const props = defineProps({
  color: { type: String as PropType<string>, default: "color" },
  name: { type: String as PropType<string>, default: "name" },
});
</script>
<style lang="sass">
.color
  display: flex
  gap: 10px
  align-items: center
  padding: 6px
  width: 100%
  &:hover, &_active
    background: #1E1F29
    cursor: pointer
  &_value
    width: 16px
    height: 16px
    min-width: 16px
    min-height: 16px
    max-width: 16px
    max-height: 16px
    border-radius: 2px
    border: 1px solid rgba(255,255,255,0.2)
  &_name
    font-family: Inter
    font-size: 12px
    color: rgba(255,255,255,0.5)
</style>
