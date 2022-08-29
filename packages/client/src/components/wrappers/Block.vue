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
      borderRadius: props.config.style.borderRadius + "px",
      borderStyle: props.config.style.borderStyle,
      borderWidth: props.config.style.borderWidth + "px",
    };
    const area = props.config[SCREEN.value];
    result.gridArea = `${area.y} / ${area.x} / ${+area.y + +area.h} / ${
      +area.x + +area.w
    }`;
    result.paddingTop = `${area.padding_top}px`;
    result.paddingBottom = `${area.padding_bottom}px`;
    result.paddingLeft = `${area.padding_left}px`;
    result.paddingRight = `${area.padding_right}px`;
    result.flexDirection = area.direction;
    result.gap = area.gap + "px";
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
