<template lang="pug">
svg(viewBox='0 0 22 22' :width='size' :height='size' fill='none' :style='getStyle')
  path(v-for='path in getPaths' :d='path' :stroke='color' stroke-linecap="round" stroke-linejoin="round" :stroke-width='width')
</template>
<script lang="ts" setup>
import { computed } from "vue";
import type { PropType } from "vue";
import type { IconName } from "./icons";
import { icons } from "./icons";

const props = defineProps({
  icon: { type: String as PropType<IconName>, default: "error" },
  color: { type: String, default: "rgb(255, 255, 255)" },
  size: { type: String, default: "18px" },
  width: { type: Number, default: 1 },
  pointer: { type: Boolean, default: false },
});

const getPaths = computed((): string[] => {
  if (icons[props.icon]) {
    return icons[props.icon];
  } else {
    // return icons.alert;
    return icons.layout;
  }
});
const getStyle = computed(() => ({
  cursor: props.pointer ? "pointer" : "default",
  maxWidth: props.size,
  minWidth: props.size,
  maxHeight: props.size,
  minHeight: props.size,
}));
</script>
