<template lang="pug">
.muup_text_node(ref='text') {{ node.text }}
  textarea(v-model='node.text')
</template>

<script lang="ts" setup>
import { watch, ref } from "vue";
import type { PropType } from "vue";
import type { MuupTextNode } from "../../../types/tag.interface";

const props = defineProps({
  node: {
    type: Object as PropType<MuupTextNode>,
    default: () => ({ text: "textNode" }),
  },
});
const text = ref<HTMLDivElement | null>(null);

watch(props.node, (n, o) => {
  if (text.value) {
    props.node.text = props.node.text.replace(/\n/g, "");
  }
});
</script>

<style lang="sass">
.muup_text_node
  display: inline
  position: relative
  outline: none
  border: none
  textarea
    position: absolute
    top: 0
    left: 0
    outline: none
    border: none
    width: 100%
    height: 100%
    resize: none
    font-family: inherit
    font-size: inherit
    font-weight: inherit
    letter-spacing: inherit
    line-height: inherit
    background: none
    padding: 0
    margin: 0
    color: rgba(0,0,0,0)
    caret-color: var(--muup_accent_100)
    &::-webkit-scrollbar
      display: none
</style>
