<template lang="pug">
Toolbar
.admin
  .page(:style='getPageStyle')
    Block(v-for='(block, i) in BLOCKS' :config='block')
</template>
<script lang="ts" setup>
import type { PageConfig } from "@/types/pageConfig";
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { ConfigStoreHelper } from "@/store/modules/config";
import config from "../testpage.json";
import { UserStoreHelper } from "@/store/modules/user";
import { ScreenStoreHelper } from "@/store/modules/screen";
import Toolbar from "./components/Toolbar.vue";
import Login from "./components/Login.vue";

const route = useRoute();
const pageName = ref<string | string[]>();
const { SET_PAGE, BLOCKS, GRID, TITLE, PAGE, SELECTED, SET_SELECTED_BLOCK } =
  ConfigStoreHelper();
const { SCREEN, W } = ScreenStoreHelper();
const { USER } = UserStoreHelper();

onMounted(() => {
  SET_PAGE(config);
  pageName.value = route.params.name;
});

const getPageStyle = computed(() => {
  if (GRID.value) {
    const tile =
      (W.value - GRID.value.gap * (GRID.value.cols - 1)) / GRID.value.cols;
    return {
      width: W.value + "px",
      gridTemplateRows: `repeat(${GRID.value.rows}, 40px)`,
      gridTemplateColumns: `repeat(${GRID.value.cols}, ${tile}px)`,
      gap: `${GRID.value.gap}px`,
      background: `var(--${PAGE.value.background})`,
    };
  }
  return {};
});
</script>
<style lang="sass">
.admin
  width: 100%
  height: 100%
  max-width: 100%
  max-height: 100%
  overflow-y: auto
  background: #1E1F29
  display: flex
  // align-items: center
  justify-content: center
.page
  display: grid
  // width: 100%
  // max-width: 100%
  min-height: 100%
  overflow-x: hidden
.editor
  position: absolute
  display: flex
  // gap: 10px
  height: max-content
  max-height: 100vh
  backdrop-filter: blur(10px)
  background: rgb(var(--contrast_100), 0.6)
  border-right: 1px solid rgb(var(--contrast_100))
  gap: 20px
  padding: 20px
  padding-left: 20px
  &_block
    width: 300px
    overflow-y: auto
    display: flex
    flex-direction: column
    gap: 10px

  &_item
    display: flex
    // flex-direction: column
    gap: 4px
    align-items: center
    padding-bottom: 10px
  &_row
    display: flex
    gap: 4px
  &_selected
    display: flex
    flex-direction: column
    gap: 10px
</style>
