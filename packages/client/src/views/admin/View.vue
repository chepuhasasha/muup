<template lang="pug">
h1 ADMIN
.editor(v-if='USER && PAGE' @keydown.stop)
  .editor_block(v-if='edit')
    h3 Settings
    .editor_item
      span Title
      Input(size='s' v-model='PAGE.title' nobtn)
    .editor_item
      span URL
      Input(size='s' v-model='PAGE.path' nobtn)
    .editor_row
      .editor_item
        span cols
        Input(size='s' v-model='GRID.cols' type='number' nobtn)
      .editor_item
        span rows
        Input(size='s' v-model='GRID.rows' type='number' nobtn)
      .editor_item
        span gap
        Input(size='s' v-model='GRID.gap' type='number' nobtn)
    .editor_selected(v-if='SELECTED')
      span DECKTOP
      .editor_row
        .editor_item
          span x
          Input(size='s' v-model='SELECTED.decktop.x' type='number' nobtn)
        .editor_item
          span y
          Input(size='s' v-model='SELECTED.decktop.y' type='number' nobtn)
        .editor_item
          span w
          Input(size='s' v-model='SELECTED.decktop.w' type='number' nobtn)
        .editor_item
          span h
          Input(size='s' v-model='SELECTED.decktop.h' type='number' nobtn)
      span TABLET
      .editor_row
        .editor_item
          span x
          Input(size='s' v-model='SELECTED.tablet.x' type='number' nobtn)
        .editor_item
          span y
          Input(size='s' v-model='SELECTED.tablet.y' type='number' nobtn)
        .editor_item
          span w
          Input(size='s' v-model='SELECTED.tablet.w' type='number' nobtn)
        .editor_item
          span h
          Input(size='s' v-model='SELECTED.tablet.h' type='number' nobtn)
      span MOBILE
      .editor_row
        .editor_item
          span x
          Input(size='s' v-model='SELECTED.mobile.x' type='number' nobtn)
        .editor_item
          span y
          Input(size='s' v-model='SELECTED.mobile.y' type='number' nobtn)
        .editor_item
          span w
          Input(size='s' v-model='SELECTED.mobile.w' type='number' nobtn)
        .editor_item
          span h
          Input(size='s' v-model='SELECTED.mobile.h' type='number' nobtn)

    Button(@click='save') SAVE
  Icon(pointer @click='edit=!edit'  icon='cross' size='12px')
.page(:style='getPageStyle')
  Block(v-for='(block, i) in BLOCKS' :config='block')
</template>
<script lang="ts" setup>
import type { PageConfig } from "@/types/pageConfig";
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { PageStoreHelper } from "@/store/modules/page";
import config from "./testpage.json";
import { UserStoreHelper } from "@/store/modules/user";
import { ScreenStoreHelper } from "@/store/modules/screen";

const route = useRoute();
const edit = ref<boolean>(true);
const pageName = ref<string | string[]>();
const { SET, BLOCKS, GRID, TITLE, PAGE, SELECTED, SET_SELECTED_BLOCK } =
  PageStoreHelper();
const { SCREEN } = ScreenStoreHelper();
const { USER } = UserStoreHelper();
document.addEventListener("keydown", (e) => {
  if (SELECTED.value) {
    switch (e.code) {
      case "ArrowUp":
        SELECTED.value[SCREEN.value].y -= 1;
        break;
      case "ArrowDown":
        SELECTED.value[SCREEN.value].y += 1;
        break;
      case "ArrowLeft":
        SELECTED.value[SCREEN.value].x -= 1;
        break;
      case "ArrowRight":
        SELECTED.value[SCREEN.value].x += 1;
        break;
      case "Delete":
        // eslint-disable-next-line no-case-declarations
        const i = BLOCKS.value.indexOf(SELECTED.value);
        BLOCKS.value.splice(i, 1);
        SET_SELECTED_BLOCK(null);
        break;
      case "KeyC":
        if (e.ctrlKey) {
          window.navigator.clipboard.writeText(JSON.stringify(SELECTED.value));
        }
        break;
      case "KeyV":
        if (e.ctrlKey) {
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
        }
        break;

      default:
        break;
    }
  }
});

const save = () => {
  window.navigator.clipboard.writeText(JSON.stringify(PAGE.value));
  alert("ok");
};

onMounted(() => {
  SET(config);
  pageName.value = route.params.name;
});

const getPageStyle = computed(() => {
  if (GRID.value) {
    return {
      gridTemplateRows: `repeat(${GRID.value.rows}, ${100 / GRID.value.rows}%)`,
      gridTemplateColumns: `repeat(${GRID.value.cols}, ${
        100 / GRID.value.cols
      }%)`,
      gap: `${GRID.value.gap}px`,
    };
  }
  return {};
});
</script>
<style lang="sass">
.page
  display: grid
  width: 100%
  max-width: 100%
  min-height: 100%
  overflow: hidden
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
