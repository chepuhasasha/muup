<template lang="pug">
.editor(v-if='USER && PAGE')
  .editor_block(v-if='edit')
    .editor_item
      span Title
      Input(size='s' v-model='PAGE.title')
    .editor_item
      span URL
      Input(size='s' v-model='PAGE.path')
    .editor_row
      .editor_item
        span cols
        Input(size='s' v-model='GRID.cols' type='number')
      .editor_item
        span rows
        Input(size='s' v-model='GRID.rows' type='number')
    .editor_selected(v-if='SELECTED')
      h3 BLOCK
      span DECKTOP
      .editor_row
        .editor_item
          span x
          Input(size='s' v-model='SELECTED.decktop.x' type='number')
        .editor_item
          span y
          Input(size='s' v-model='SELECTED.decktop.y' type='number')
      .editor_row
        .editor_item
          span width
          Input(size='s' v-model='SELECTED.decktop.w' type='number')
        .editor_item
          span height
          Input(size='s' v-model='SELECTED.decktop.h' type='number')

      span TABLET
      .editor_row
        .editor_item
          span x
          Input(size='s' v-model='SELECTED.tablet.x' type='number')
        .editor_item
          span y
          Input(size='s' v-model='SELECTED.tablet.y' type='number')
      .editor_row
        .editor_item
          span width
          Input(size='s' v-model='SELECTED.tablet.w' type='number')
        .editor_item
          span height
          Input(size='s' v-model='SELECTED.tablet.h' type='number')

      span MOBILE
      .editor_row
        .editor_item
          span x
          Input(size='s' v-model='SELECTED.mobile.x' type='number')
        .editor_item
          span y
          Input(size='s' v-model='SELECTED.mobile.y' type='number')
      .editor_row
        .editor_item
          span width
          Input(size='s' v-model='SELECTED.mobile.w' type='number')
        .editor_item
          span height
          Input(size='s' v-model='SELECTED.mobile.h' type='number')
    
    Button SAVE
  Button(@click='edit=!edit' mode='light') tools
.page(:style='getPageStyle')
  Block(v-for='(block, i) in BLOCKS' :config='block') {{i}}
</template>
<script lang="ts" setup>
import type { PageConfig } from "@/types/pageConfig";
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { PageStoreHelper } from "@/store/modules/page";
import config from "./testpage.json";
import Block from "@/common/wrappers/Block.vue";
import { UserStoreHelper } from "@/store/modules/user";
import Button from "@/common/ui/Button.vue";

const route = useRoute();
const edit = ref<boolean>(true);
const pageName = ref<string | string[]>();
const { SET, BLOCKS, GRID, TITLE, PAGE, SELECTED } = PageStoreHelper();
const { USER } = UserStoreHelper();

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
  gap: 10px
  height: 100vh
  &_block
    width: 300px
    overflow-y: auto
    display: flex
    flex-direction: column
    gap: 10px
    padding: 20px
    background: rgb(var(--contrast_200))
    border-right: 1px solid rgb(var(--contrast_300))
  &_item
    display: flex
    // flex-direction: column
    gap: 10px
    align-items: center
    padding-bottom: 10px
  &_row
    display: flex
    gap: 20px
  &_selected
    display: flex
    flex-direction: column
    gap: 10px
</style>
