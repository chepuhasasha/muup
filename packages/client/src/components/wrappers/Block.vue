<template lang="pug">
component.block(
  :is='config?.tag' 
  :style='style'
  @click="SET_SELECTED_BLOCK(config)" 
  :class='{block_unselected: config !== SELECTED && SELECTED}') 
  component(v-for='widget in config?.widgets' :is='widget.type' v-bind='widget.props') 
</template>
<script lang="ts" setup>
import { computed } from "vue";
import type { PropType } from "vue";
import { BlockConfig } from "@/types/blockConfig";
import { ScreenStoreHelper } from "@/store/modules/screen";
import { ConfigStoreHelper } from "@/store/modules/config";

const { SCREEN } = ScreenStoreHelper();
const { SET_SELECTED_BLOCK, SELECTED } = ConfigStoreHelper();
const props = defineProps({
  config: { type: Object as PropType<BlockConfig>, require: true },
});

const style = computed(() => {
  if (props.config) {
    const result: Record<string, unknown> = {
      background: props.config.style.background,
      borderColor: props.config.style.borderColor,
      borderStyle: props.config.style.borderStyle,
      borderWidth: props.config.style.borderWidth + "px",
    };
    const screen = props.config[SCREEN.value];
    result.gridArea = `${screen.grid.y} / ${screen.grid.x} / ${
      +screen.grid.y + +screen.grid.h
    } / ${+screen.grid.x + +screen.grid.w}`;
    result.borderRadius = screen.grid.borderRadius + "px";
    result.paddingTop = `${screen.layout.padding_top}px`;
    result.paddingBottom = `${screen.layout.padding_bottom}px`;
    result.paddingLeft = `${screen.layout.padding_left}px`;
    result.paddingRight = `${screen.layout.padding_right}px`;
    result.flexDirection = screen.layout.direction;
    if (screen.layout.gap) result.gap = screen.layout.gap + "px";
    else result.justifyContent = "space-between";
    return result;
  }
  return {};
});
</script>

<style lang="sass">
.block
  display: flex
  overflow: hidden
  transition: all 0.2s linear
  &_unselected
    opacity: 0.5
</style>
