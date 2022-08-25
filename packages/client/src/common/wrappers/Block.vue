<template lang="pug">
component.block(:is='config?.tag' :style='style') 
  component(v-for='widget in config?.widgets' :is='widget.type' v-bind='widget.props') 
</template>
<script lang="ts" setup>
import { computed } from "vue";
import type { PropType } from "vue";
import { BlockConfig } from "@/types/blockConfig";
import { ScreenStoreHelper } from "../../store/modules/screen";

const { SCREEN } = ScreenStoreHelper();
const props = defineProps({
  config: { type: Object as PropType<BlockConfig>, require: true },
});
const style = computed(() => {
  if (props.config) {
    const result: Record<string, unknown> = { ...props.config.style };
    const area = props.config[SCREEN.value];
    result.gridArea = `${area[0]} / ${area[1]} / ${area[1] + area[2]} / ${
      area[0] + area[3]
    }`;
    console.log(result);
    return result;
  }
  return {};
});
</script>

<style lang="sass">
// .block
//   padding: 100px
//   background: rgb(var(--contrast_200))
</style>
