<template lang="pug">
.muup_tree
  .muup_tree_head(
    :class='{ muup_tree_head_active: active }'
    @mouseover='muup.hover = node'
    @mouseleave='muup.hover = null'
    )
    MuupUiIcon(
      v-if='node.childs && node.childs.length > 0'
      @click='open = !open'
      pointer
      :icon='open ? "chevron_down" : "chevron_right"')
    span(@click='select') {{ node.tag != "#text" ? node.tag  : node.text}}
    MuupUiIcon(v-if='node.childs' icon='plus' pointer)
  .muup_tree_body(
    :class='{ muup_tree_body_active: active}'
    v-show='open && node.childs && node.childs.length > 0'
  )
    MuupUtilsDOM(v-for='(child, i) in node.childs' :parent='node' :node='child' :key='i')
    .muup_tree_body_close(
      :class='{ muup_tree_body_close_active: active}'
    ) /{{ node.tag }}
</template>
<script lang="ts" setup>
import type { PropType } from "vue";
import { ref, computed } from "vue";
import type { MuupTag } from "../../../types/tag.interface";
import { useMuupState } from "../../../state";

const muup = useMuupState();
const open = ref(true);
const props = defineProps({
  node: {
    type: Object as PropType<MuupTag>,
    default: () => ({ tag: "div", childs: [] }),
  },
  parent: { type: Object as PropType<MuupTag | null>, default: null },
});
const select = () => {
  muup.value.selected = { node: props.node, parent: props.parent };
};
const active = computed(
  () =>
    (muup.value.selected && muup.value.selected.node === props.node) ||
    muup.value.hover === props.node
);
</script>
<style lang="sass">
.muup_tree
  position: relative
  font-family: var(--muup_font_100)
  width: 100%
  &_head
    position: relative
    display: flex
    align-items: center
    padding: 10px 0 10px 10px
    font-size: 13px
    letter-spacing: 1px
    gap: 10px
    font-weight: 300
    color: var(--muup_text_200)
    min-width: 100px
    width: 100%
    span
      width: 100%
      cursor: pointer
      text-overflow: ellipsis
      // max-width: 100px
      overflow: hidden
    &::before
      position: absolute
      right: 100%
      content: ''
      border-bottom: 1px dashed var(--muup_border_100)
      width: 10px
      height: 1px
    &::after
      position: absolute
      left: -13px
      top: calc(50% - 2px)
      content: ''
      background: var(--muup_border_100)
      width: 5px
      height: 5px
      border-radius: 2px

    &_active
      color: var(--muup_accent_100)
      &::before
        border-color: var(--muup_accent_100)
      &::after
        background: var(--muup_accent_100)
  &_body
    position: relative
    display: flex
    flex-direction: column
    gap: 4px
    padding: 0 0px 28px 10px
    margin-left: 18px
    border-left: 1px dashed var(--muup_border_100)
    border-bottom: 1px dashed var(--muup_border_100)
    border-radius: 0 0 0 10px
    &_close
      position: absolute
      // height: 12px
      color: var(--muup_contrast_100)
      font-weight: 500
      border-radius: 4px 4px 0 0
      bottom: -1px
      padding: 0px 4px
      right: 0
      font-size: 11px
      background: var(--muup_border_100)
      &_active
        background: var(--muup_accent_100)
    &_active
      border-color: var(--muup_accent_100)
</style>
