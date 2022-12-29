<template lang="pug">
svg.icon(
  :width="size",
  :height="size",
  viewBox="0 0 24 24",
  xmlns="http://www.w3.org/2000/svg"
  fill='none'
)
  path(
    v-for="d in icon.paths",
    :d="d",
    :fill="icon.fill ? color : 'none'",
    :stroke-width="icon.fill ? 0 : width",
    :stroke='color'
    stroke-linecap="round",
    stroke-linejoin="round"
  )
</template>

<script lang="ts" setup>
import type { PropType } from "vue";
import type { IconName } from "./icons";
import { computed } from "vue";
import { icons } from "./icons";

const props = defineProps({
  icon: { type: String as PropType<IconName>, default: "error" },
  color: { type: String as PropType<string>, default: "var(--color-text-200)" },
  size: { type: Number as PropType<number>, default: 24 },
  width: { type: Number as PropType<number>, default: 2 },
});

const icon = computed(() => icons[props.icon]);
</script>