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
  mode: string;
}>();

const mode = computed(() => {
  const result: Record<string, boolean> = {
    [`button_${props.size}`]: true,
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
  width: max-content
  height: max-content
  outline: none
  cursor: pointer
  font-family: var(--font_200)
  font-weight: 500
  font-size: 16px
  background: rgb(var(--contrast_400))
  border: 2px solid rgb(var(--contrast_400))
  padding: 10px 14px
  gap: 14px
  border-radius: 4px
  color: rgb(var(--contrast_200))
  &:hover, &:focus
    background: none
    border: 2px solid rgb(var(--contrast_400))
    color: rgb(var(--contrast_400))
  &_link
    border: none
    background: none
    border-bottom: 2px solid rgb(var(--contrast_400))
    border-radius: 0
    color: rgb(var(--contrast_400))
    &:hover, &:focus
      border: none
      border-bottom: 2px solid rgb(var(--accent_100))
      color: rgb(var(--accent_100))
  &_light
    background: rgb(var(--contrast_100))
    border: 2px solid rgb(var(--contrast_100))
    color: rgb(var(--contrast_400))
  &_blur
    backdrop-filter: blur(5px)
    background: rgb(var(--contrast_100), 0.2)
    border: 2px solid rgb(var(--contrast_100))
    color: rgb(var(--contrast_400))

  &_l
    padding: 20px 30px
    gap: 30px
  &_s
    padding: 4px 8px
    gap: 6px
    font-size: 12px
    font-weight: 500
    border-width: 1px
    border-radius: 2px
    &:hover, &:focus
      border-width: 1px
</style>
