<template lang="pug">
.toolbar(@keydown.stop)
  User.toolbar_block
  .toolbar_block(style="width: 100%;")
  //- ToolbarBtn(
  //-   v-if='!SELECTED'
  //-   :active='menu.widgets'
  //-   @click="menu.widgets = !menu.widgets"
  //-   icon='stars' title='Web settings')
  //- ToolbarBtn(
  //-   v-if='!SELECTED'
  //-   :active='menu.add'
  //-   @click="menu.add = !menu.add"
  //-   icon='plus' title='Add block')
  PageProps(v-if='!SELECTED').toolbar_block

  ToolbarBtn(
    :active='settingsIsOpen'
    @click="settingsIsOpen = !settingsIsOpen"
    icon='settings' title='Settings')
  ToolbarBtn(
    :active='SCREEN === "decktop"'
    @click="SET_SCREEN(1400)"
    icon='decktop' title='Decktop screen')
  ToolbarBtn(
    :active='SCREEN === "tablet"'
    @click="SET_SCREEN(1200)"
    icon='tablet' title='Tablet screen')
  ToolbarBtn(
    :active='SCREEN === "mobile"'
    @click="SET_SCREEN(390)"
    icon='mobile' title='Mobile screen')
  ToolbarBtn(
    @click="SET_SCREEN()"
    icon='minimize' title='Auto detect screen')
.toolbar_menu(v-if='settingsIsOpen')
  SelectedBlock(v-if='SELECTED')
</template>
<script lang="ts" setup>
import { ref } from "vue";
import User from "./User.vue";
import PageProps from "./PageProps.vue";
import SelectedBlock from "./SelectedBlock.vue";
import ToolbarBtn from "./ToolbarBtn.vue";
import { ConfigStoreHelper } from "@/store/modules/config";
import { ScreenStoreHelper } from "../../../store/modules/screen";

const { PAGE, BLOCKS, SELECTED, SET_SELECTED_BLOCK } = ConfigStoreHelper();
const { SCREEN, SET_SCREEN } = ScreenStoreHelper();

const settingsIsOpen = ref(true);

const showedMenu = ref<string | null>(null);
const selectMenu = (name: string) => {
  if (showedMenu.value === name) {
    showedMenu.value = null;
  } else {
    showedMenu.value = name;
  }
};

const keydownHandlers: {
  [key: string]: { ctrl: boolean; handler: (e: KeyboardEvent) => void };
} = {
  ArrowUp: {
    ctrl: false,
    handler: (e: KeyboardEvent) => {
      if (SELECTED.value)
        SELECTED.value[SCREEN.value].grid.y =
          +SELECTED.value[SCREEN.value].grid.y - 1;
    },
  },
  ArrowDown: {
    ctrl: false,
    handler: (e: KeyboardEvent) => {
      if (SELECTED.value)
        SELECTED.value[SCREEN.value].grid.y =
          +SELECTED.value[SCREEN.value].grid.y + 1;
    },
  },
  ArrowLeft: {
    ctrl: false,
    handler: (e: KeyboardEvent) => {
      if (SELECTED.value)
        SELECTED.value[SCREEN.value].grid.x =
          +SELECTED.value[SCREEN.value].grid.x - 1;
    },
  },
  ArrowRight: {
    ctrl: false,
    handler: (e: KeyboardEvent) => {
      if (SELECTED.value)
        SELECTED.value[SCREEN.value].grid.x =
          +SELECTED.value[SCREEN.value].grid.x + 1;
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
        SELECTED.value.decktop.grid.y += 1;
        SELECTED.value.decktop.grid.x += 1;
        SELECTED.value.tablet.grid.y += 1;
        SELECTED.value.tablet.grid.x += 1;
        SELECTED.value.mobile.grid.y += 1;
        SELECTED.value.mobile.grid.x += 1;
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
  padding-bottom: 2px
  width: 100%
  min-height: 50px

  &_menu
    display: flex
    position: absolute
    overflow-y: auto
    width: 300px
    flex-direction: column
    height: calc(100% - 50px)
    top: 50px
    right: 0
    background: #171822
    z-index: 9999
  &_block
    background: #171822
    display: flex
    gap: 10px
    padding: 10px
    align-items: center
    font-family: var(--font_200)
    color: rgba(255,255,255, 0.6)
    font-size: 12px
    // span
    //     color: rgba(255,255,255, 0.6)
    &_col
      flex-direction: column
      align-items: start
</style>
