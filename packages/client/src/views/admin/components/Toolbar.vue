<template lang="pug">
.toolbar(:class='{ toolbar_vertical: SCREEN === "mobile"}' @keydown.stop)
  User.toolbar_block
  .toolbar_btn(title='Layout settings' v-if='SELECTED' @click="showedMenu = 'Layout'")
    Icon(icon='layout' color='rgba(255, 255, 255, 0.6)')
  .toolbar_btn(title='Style settings' v-if='SELECTED')
    Icon(icon='colors' color='rgba(255, 255, 255, 0.6)')
  .toolbar_btn(title='Widgets lib' v-if='SELECTED')
    Icon(icon='stars' color='rgba(255, 255, 255, 0.6)')
  .toolbar_btn(title='Web settings' v-if='!SELECTED')
    Icon(icon='web' color='rgba(255, 255, 255, 0.6)')
  .toolbar_btn(title='Add block' v-if='!SELECTED')
    Icon(icon='plus' color='rgba(255, 255, 255, 0.6)')
  PageProps(v-if='!SELECTED').toolbar_block
  .toolbar_block(style="width: 100%;")
  .toolbar_block {{ SCREEN }}
.toolbar_menu(v-if='showedMenu')
  Layout(v-if='showedMenu === "Layout" && SELECTED')
</template>
<script lang="ts" setup>
import { ref } from "vue";
import User from "./User.vue";
import PageProps from "./PageProps.vue";
import Layout from "./Layout.vue";
import { PageStoreHelper } from "@/store/modules/page";
import { ScreenStoreHelper } from "../../../store/modules/screen";

const { PAGE, BLOCKS, SELECTED, SET_SELECTED_BLOCK } = PageStoreHelper();
const { SCREEN } = ScreenStoreHelper();

const showedMenu = ref<"Layout" | null>(null);

const keydownHandlers: {
  [key: string]: { ctrl: boolean; handler: (e: KeyboardEvent) => void };
} = {
  ArrowUp: {
    ctrl: false,
    handler: (e: KeyboardEvent) => {
      if (SELECTED.value)
        SELECTED.value[SCREEN.value].y = +SELECTED.value[SCREEN.value].y - 1;
    },
  },
  ArrowDown: {
    ctrl: false,
    handler: (e: KeyboardEvent) => {
      if (SELECTED.value)
        SELECTED.value[SCREEN.value].y = +SELECTED.value[SCREEN.value].y + 1;
    },
  },
  ArrowLeft: {
    ctrl: false,
    handler: (e: KeyboardEvent) => {
      if (SELECTED.value)
        SELECTED.value[SCREEN.value].x = +SELECTED.value[SCREEN.value].x - 1;
    },
  },
  ArrowRight: {
    ctrl: false,
    handler: (e: KeyboardEvent) => {
      if (SELECTED.value)
        SELECTED.value[SCREEN.value].x = +SELECTED.value[SCREEN.value].x + 1;
    },
  },
  Delete: {
    ctrl: false,
    handler: (e: KeyboardEvent) => {
      const i = BLOCKS.value.indexOf(SELECTED.value);
      BLOCKS.value.splice(i, 1);
      SET_SELECTED_BLOCK(null);
    },
  },
  Escape: {
    ctrl: false,
    handler: (e: KeyboardEvent) => {
      SET_SELECTED_BLOCK(null);
    },
  },
  KeyC: {
    ctrl: true,
    handler: (e: KeyboardEvent) => {
      window.navigator.clipboard.writeText(JSON.stringify(SELECTED.value));
    },
  },
  KeyV: {
    ctrl: true,
    handler: () => {
      window.navigator.clipboard.readText().then((res) => {
        const copy = JSON.parse(res);
        SET_SELECTED_BLOCK(copy);
        SELECTED.value.decktop.y += 1;
        SELECTED.value.decktop.x += 1;
        SELECTED.value.tablet.y += 1;
        SELECTED.value.tablet.x += 1;
        SELECTED.value.mobile.y += 1;
        SELECTED.value.mobile.x += 1;
        BLOCKS.value.push(copy);
      });
    },
  },
  KeyS: {
    ctrl: true,
    handler: (e: KeyboardEvent) => {
      window.navigator.clipboard.writeText(JSON.stringify(PAGE.value));
      alert("ok");
    },
  },
};

const keydown = (e: KeyboardEvent) => {
  if (keydownHandlers[e.code])
    if (keydownHandlers[e.code].ctrl === e.ctrlKey)
      keydownHandlers[e.code].handler(e);
};
document.addEventListener("keydown", keydown);
</script>
<style lang="sass">
.toolbar
  position: relative
  display: flex
  gap: 2px
  background: #1E1F29
  width: 100%
  height: max-content
  &_vertical
    flex-direction: column
  &_btn
    position: relative
    display: flex
    min-width: 48px
    align-items: center
    justify-content: center
    background: #171822
    &:hover
      background: #189EFF
  &_menu
    display: flex
    overflow-x: auto
    // position: absolute
    top: 100%
    left: 0
    background: #1E1F29
    padding: 0
    width: 100%
    padding: 2px 0
    gap: 2px
  &_block
    background: #171822
    display: flex
    gap: 10px
    padding: 10px
    align-items: center
    font-family: var(--font_200)
    color: rgba(255,255,255, 0.6)
    font-size: 12px
    span
        color: rgba(255,255,255, 0.6)
.prop
  display: flex
  gap: 10px
  align-items: center
  width: 100%
  justify-content: space-between

  &_name
    font-size: 12px
    font-family: var(--font_200)
    color: rgba(255,255,255, 0.4)
  &_input
    font-size: 12px
    background: #1E1F29
    padding: 2px 4px
    border: none
    outline: none
    font-family: var(--font_200)
    color: rgba(255,255,255, 0.6)
    width: 50px
</style>
