<template lang="pug">
.page(:style='getPageStyle')
  Block(v-for='(block, i) in BLOCKS' :config='block')
</template>
<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { ConfigStoreHelper } from "@/store/modules/config";
import config from "../testpage.json";

const route = useRoute();
const pageName = ref<string | string[]>();
const { SET_PAGE, BLOCKS, GRID, PAGE } = ConfigStoreHelper();

onMounted(() => {
  SET_PAGE(config);
  pageName.value = route.params.name;
});

const getPageStyle = computed(() => {
  if (GRID.value) {
    const tile =
      (window.innerWidth - GRID.value.gap * (GRID.value.cols - 1)) /
      GRID.value.cols;
    return {
      gridTemplateRows: `repeat(${GRID.value.rows}, ${100 / GRID.value.rows}%)`,
      gridTemplateColumns: `repeat(${GRID.value.cols}, ${tile}px)`,
      gap: `${GRID.value.gap}px`,
      background: PAGE.value.background,
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
</style>
