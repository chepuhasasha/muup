<template lang="pug">
component(
  v-if='node.tag != "#text"'
  :is='node.tag'
  :style='node.css'
  :class='[...node.classes, active ? "muup_selected" : ""]'
  @mouseover.capture='muup.hover = node'
  @mouseleave.capture='muup.hover = null'
  @click.capture='select'
  )
  .muup_selected_label(v-if='active') {{ node.tag }} 
  MuupUtilsNodeEdit(
    v-for='child in node.childs' :node='child' :parent='node'
    :class='{muup_selected_child: active}')
MuupUtilsNodeTextEdit(
  v-else :node='node'
  :class='[ active ? "muup_selected" : ""]'
  @mouseover.capture='muup.hover = node'
  @mouseleave.capture='muup.hover = null'
  @click.capture='select')
//- MuupUtilsText(v-else :text='node.text')
</template>
<script lang="ts" setup>
import type { PropType } from "vue";
import { computed } from "vue";
import type { MuupTag } from "../../../types/tag.interface";
import { useMuupState } from "../../../state";

const muup = useMuupState();

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
const active = computed(() => {
  return (
    muup.value.hover === props.node ||
    (muup.value.selected && muup.value.selected.node === props.node)
  );
});

// const TextNode = createTextVNode(props.node.tag);

const select = () => {
  muup.value.selected = {
    node: props.node,
    parent: props.parent,
  };
};
</script>
<style lang="sass">
.muup_selected
  position: relative
  box-shadow: 0 0 0 2px var(--muup_accent_100) !important
  &_child
    outline: 1px dashed var(--muup_accent_100) !important
  &_label
    position: absolute
    bottom: 100%
    left: -2px
    padding: 0px 4px
    font-size: 11px
    font-family: var(--muup_font_100)
    border-radius: 4px 4px 0 0
    color: var(--muup_text_100)
    // height: 10px

    background: var(--muup_accent_100)
</style>
