<template lang="pug">
component.block(:is='tag')
  component(v-for='widget in widgets' :is='widget.type' v-bind='widget.props') 
</template>
<script lang="ts" setup>
import { computed } from "vue";
import type { PropType } from "vue";
import { WidgetConfig } from "@/types/widgetConfig";

const props = defineProps({
  tag: { type: String as PropType<string>, default: "div" },
  widgets: { type: Array as PropType<WidgetConfig[]>, default: () => [] },
});
</script>

<style lang="sass">
// .block
//   padding: 100px
//   background: rgb(var(--contrast_200))
</style>
