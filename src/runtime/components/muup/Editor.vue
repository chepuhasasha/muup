<template lang="pug">
.muup_editor
  .muup_editor_tree
    MuupUtilsDOM(:node='page.main' :parent='null')
  .muup_editor_view_scroll
    .muup_editor_view(:style='{minWidth: muup.screen + "px"}')
      MuupUtilsNodeEdit(v-if='page' :node='page.main')
  MuupUtilsCSSProps(v-if='muup.selected && muup.selected.node.css')
</template>
<script lang="ts" setup>
import type { PropType } from "vue";
import { onMounted } from "vue";
import { useFetch } from "#app";
import { useMuupState } from "../../state";
import type { MuupPage } from "../../types/page.interface";

const muup = useMuupState();

const props = defineProps({
  page: { type: String as PropType<string>, default: "home" },
});
const { data: page } = await useFetch(`/muup_api/page?alias=${props.page}`);

const keydownHandlers: {
  [key: string]: { ctrl: boolean; handler: (e: KeyboardEvent) => void };
} = {
  ArrowUp: {
    ctrl: false,
    handler: (e: KeyboardEvent) => {
      if (muup.value.selected && muup.value.selected.parent) {
        let i = muup.value.selected.parent.childs.indexOf(
          muup.value.selected.node
        );
        muup.value.selected.parent.childs.splice(i, 1);
        if (i > 0) i -= 1;
        else i = muup.value.selected.parent.childs.length;
        muup.value.selected.parent.childs.splice(
          i,
          0,
          muup.value.selected.node
        );
      }
    },
  },
  ArrowDown: {
    ctrl: false,
    handler: (e: KeyboardEvent) => {
      if (muup.value.selected && muup.value.selected.parent) {
        let i = muup.value.selected.parent.childs.indexOf(
          muup.value.selected.node
        );
        muup.value.selected.parent.childs.splice(i, 1);
        if (i === muup.value.selected.parent.childs.length) i = 0;
        else i += 1;
        muup.value.selected.parent.childs.splice(
          i,
          0,
          muup.value.selected.node
        );
      }
    },
  },
  Escape: {
    ctrl: false,
    handler: (e: KeyboardEvent) => {
      muup.value.selected = null;
    },
  },
};

const keydown = (e: KeyboardEvent) => {
  if (keydownHandlers[e.code])
    if (keydownHandlers[e.code].ctrl === e.ctrlKey)
      keydownHandlers[e.code].handler(e);
};

onMounted(() => {
  document.addEventListener("keydown", keydown);
});
</script>
<style lang="sass">
.muup_editor
  display: grid
  grid-template-rows: auto 1fr
  grid-template-columns: 300px 1fr 300px
  background: var(--muup_contrast_100)
  width: 100vw
  height: 100vh
  &_tree
    display: flex
    gap: 10px
    flex-direction: column
    padding: 10px
    outline: 1px solid var(--muup_border_200)
    width: 100%
    height: 100%
    background: var(--muup_contrast_200)
  &_view
    display: flex
    justify-content: center
    align-items: center
    // min-width: 100%
    // min-height: 100%
    &_scroll
      display: flex
      justify-content: center
      align-items: center
      grid-area: 1/2/3/3
      overflow: auto

  &_tree
    overflow: auto
    grid-area: 1/1/3/2
    // padding: 20px
    &_head
      font-family: var(--muup_font_100)
      color: var(--muup_text_300)
      font-size: 14px
  &_toolbar
    grid-area: 1/3/2/4
    display: flex
    background: var(--muup_contrast_100)
    width: max-content
    overflow: auto
    width: 100%
    gap: 10px
    padding: 10px
</style>
