<template lang="pug">
.toolbar(:class='{ toolbar_vertical: SCREEN === "mobile"}')
  User.toolbar_block
  PageProps(v-if='!SELECTED').toolbar_block
</template>
<script lang="ts" setup>
import User from "./User.vue";
import { PageStoreHelper } from "@/store/modules/page";
import { ScreenStoreHelper } from "../../../store/modules/screen";
import PageProps from "./PageProps.vue";

const { SET, GRID, PAGE, BLOCKS, SELECTED, SET_SELECTED_BLOCK } =
  PageStoreHelper();
const { SCREEN } = ScreenStoreHelper();

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
  position: fixed
  display: flex
  gap: 2px
  background: #1E1F29
  width: 100%
  height: max-content
  &_vertical
    flex-direction: column
  &_block
    background: #171822
    display: flex
    gap: 10px
    padding: 10px
    align-items: center
</style>
