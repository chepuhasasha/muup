<template lang="pug">
.page(:style='getPageStyle')
  Block(v-for='(block, i) in BLOCKS' :config='block')
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { ConfigStoreHelper } from "@/store/modules/config";
import { ScreenStoreHelper } from "@/store/modules/screen";

const { BLOCKS, GRID, PAGE } = ConfigStoreHelper();
const { W } = ScreenStoreHelper();

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
.page
  display: grid
  overflow-x: auto
  max-width: 100vw
  overflow-y: auto
</style>
