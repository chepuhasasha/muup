<template lang="pug">
button.button(:class="mode")
  slot
  Icon(v-if='icon && !load' pointer :icon='icon')
  Loader(v-if='load' size='10px' mode='ring')
</template>

<script lang="ts" setup>
// TODO: Небходим ревакторинг, и кое какие доделки
import { computed } from "vue";
import type { IconName } from "@/common/widgets/icons";

const props = defineProps<{
  icon?: IconName;
  load?: boolean;
  active?: boolean;
  size: "s" | "m" | "l";
  modes: ("active" | "clear")[];
}>();

const mode = computed(() => {
  const result: Record<string, boolean> = {
    [`button_${props.size}`]: true,
  };
  props.modes?.forEach((mode) => {
    if (mode) result[`button_${mode}`] = true;
  });
  return result;
});
</script>

<style lang="sass">
.button
  display: flex
  align-items: center
  width: max-content
  height: max-content
  outline: none
  cursor: pointer
  background: rgb(var(--bg_300))
  border: 2px solid rgb(var(--bg_300))
  color: rgb(var(--text_200))
  font-weight: 500
  path
    stroke: rgb(var(--text_200))
  &:hover, &:focus
    background: rgba(var(--primary_100), 0.3)
    color: rgb(var(--primary_100))
    border-color: rgba(0,0,0,0)
    path
      stroke: rgb(var(--primary_100))
  &_active
    color: rgb(var(--primary_100))
    background: rgba(var(--primary_100), 0.3)
    border-color: rgba(0,0,0,0)
    path
      stroke: rgb(var(--primary_100))
    &:hover, &:focus
      background: rgb(var(--primary_100))
      color: rgb(var(--text_100))
      path
        stroke: rgb(var(--text_100))

  &_clear
    background: none
    border-color: rgba(0,0,0,0)
    color: rgb(var(--primary_100))
  &_icon
    width: 32px
    height: 32px
    padding: 0px !important
    justify-content: center
  &_s
    padding: 4px
    gap: 4px
    border-radius: 4px
    font-size: 10px
    line-height: 8px
  &_m
    padding: 8px 12px
    gap: 8px
    border-radius: 6px
    font-size: 12px
    line-height: 10px
  &_l
    padding: 40px
    gap: 10px
    border-radius: 40px
    font-size: 16px
    line-height: 14px
</style>
