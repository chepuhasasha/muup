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
  warn?: boolean;
  size: "s" | "m" | "l";
  mode?: string;
}>();

const mode = computed(() => {
  const result: Record<string, boolean> = {
    [`button_${props.size}`]: true,
    ["button_active"]: props.active,
    [`button_${props.mode}`]: true,
  };
  if (props.mode) result[`button_${props.mode}`] = true;

  return result;
});
</script>

<style lang="sass">
.button
  transition: all 0.2s linear
  display: flex
  align-items: center
  justify-content: center
  width: max-content
  height: max-content
  outline: none
  cursor: pointer
  font-family: Inter
  font-size: 16px
  background: #1E1F29
  border: none
  // border: 1px solid #1E1F29
  padding: 10px 14px
  gap: 14px
  border-radius: 4px
  color: rgba(255,255,255,0.6)
  &:hover, &_active
    background: #189EFF
    color: rgba(255,255,255,1)
    // border: 1px solid rgb(var(--contrast_400))
    // color: rgb(var(--contrast_400))
  &_link
    border: none
    background: none
    border-bottom: 1px solid rgb(var(--contrast_400))
    border-radius: 0
    color: rgb(var(--contrast_400))
    &:hover, &:focus
      border: none
      // border-bottom: 1px solid rgb(var(--accent_100))
      color: rgb(var(--accent_100))
  &_light
    background: rgb(var(--contrast_100))
    // border: 1px solid rgb(var(--contrast_100))
    color: rgb(var(--contrast_400))
  &_blur
    backdrop-filter: blur(5px)
    background: rgb(var(--contrast_100), 0.2)
    // border: 1px solid rgb(var(--contrast_100))
    color: rgb(var(--contrast_400))

  &_warn
    background: #ff5200
    color: white
  &_l
    padding: 20px 30px
    gap: 30px
  &_m
    padding: 16px 8px
    gap: 10px
    font-size: 14px
    border-radius: 0
  &_s
    padding: 4px 4px
    border-radius: 4px
    gap: 6px
    font-size: 12px
    font-weight: 400
    border-width: 1px
    &:hover, &:focus
      // border-width: 1px
</style>
