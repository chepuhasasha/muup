<template lang="pug">
.toolbar toolbar {{ SELECTED }}
</template>
<script lang="ts" setup>
import { PageStoreHelper } from "@/store/modules/page";
import { ScreenStoreHelper } from "../../../store/modules/screen";

const { SET, GRID, PAGE, BLOCKS, SELECTED, SET_SELECTED_BLOCK } =
  PageStoreHelper();
const { SCREEN } = ScreenStoreHelper();

const keydownHandlers: {
  [key: string]: { ctrl: boolean; handler: (e: KeyboardEvent) => void };
} = {
  ArrowUp: {
    ctrl: false,
    handler: (e: KeyboardEvent) => {
      SELECTED.value[SCREEN.value].y -= 1;
    },
  },
  ArrowDown: {
    ctrl: false,
    handler: (e: KeyboardEvent) => {
      SELECTED.value[SCREEN.value].y += 1;
    },
  },
  ArrowLeft: {
    ctrl: false,
    handler: (e: KeyboardEvent) => {
      SELECTED.value[SCREEN.value].x -= 1;
    },
  },
  ArrowRight: {
    ctrl: false,
    handler: (e: KeyboardEvent) => {
      SELECTED.value[SCREEN.value].x += 1;
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
</style>
