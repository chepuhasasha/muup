<template lang="pug">
component(v-if='node.tag != "#text"' :is='node.tag' :style='node.css' :class='node.classes')
  MuupUtilsNode(v-for='child in node.childs' :node='child' :parent='node')
MuupUtilsNodeText(v-else :text='node.text')
</template>
<script lang="ts" setup>
import type { PropType } from "vue";
import type { MuupTag } from "../../../types/tag.interface";

const props = defineProps({
  node: {
    type: Object as PropType<MuupTag>,
    default: () => ({
      tag: "div",
      css: {},
      classes: [],
      childs: [],
      props: {},
    }),
  },
  parent: { type: Object as PropType<MuupTag | null>, default: null },
});
</script>
