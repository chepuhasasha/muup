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
import { ScreenStoreHelper } from "../../store/modules/screen";
import { PageStoreHelper } from "../../store/modules/page";

const { SCREEN } = ScreenStoreHelper();
const { SET_SELECTED_BLOCK, SELECTED } = PageStoreHelper();
const props = defineProps({
  config: { type: Object as PropType<BlockConfig>, require: true },
});

const style = computed(() => {
  if (props.config) {
    const result: Record<string, unknown> = { ...props.config.style };
    const area = props.config[SCREEN.value];
    result.gridArea = `${area.y} / ${area.x} / ${+area.y + +area.h} / ${
      +area.x + +area.w
    }`;
    return result;
  }
  return {};
});
</script>

<style lang="sass">
.block
  overflow: hidden
  transition: all 0.2s linear
  &_unselected
    opacity: 0.8
</style>
