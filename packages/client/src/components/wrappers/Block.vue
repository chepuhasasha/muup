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
  const result: Record<string, unknown> = {};
  if (props.config) {
    const screen = props.config[SCREEN.value];

    // BORDER
    if (screen.border) {
      result.borderColor = `var(--${screen.border.color})`;
      result.borderStyle = screen.border.style;
      result.borderWidth = `${screen.border.width[0]}px ${screen.border.width[1]}px ${screen.border.width[2]}px ${screen.border.width[3]}px`;
    }

    result.gridArea = `${screen.grid.area[1]} / ${screen.grid.area[0]} / ${
      +screen.grid.area[1] + +screen.grid.area[3]
    } / ${+screen.grid.area[0] + +screen.grid.area[2]}`;
    result.zIndex = screen.grid.area[4];
    // result.borderRadius = screen.grid.borderRadius + "px";
    result.padding = `${screen.layout.padding[0]}px ${screen.layout.padding[1]}px ${screen.layout.padding[2]}px ${screen.layout.padding[3]}px`;
    result.flexDirection = screen.layout.direction;
    // result.borderКшпреWidth = `${screen.border.width[0]}px`

    if (screen.layout.direction === "column") {
      result.alignItems = screen.layout.aligment[1];
      result.justifyContent = screen.layout.aligment[0];
    } else {
      result.alignItems = screen.layout.aligment[0];
      result.justifyContent = screen.layout.aligment[1];
    }

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
  border-width: 10px 10px 14px 30px
  &_unselected
    opacity: 0.5
</style>
