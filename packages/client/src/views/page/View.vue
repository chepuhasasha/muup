<template lang="pug">
.page(:style='getPageStyle')
  Block(v-for='(block, i) in BLOCKS' :style='block.style' :widgets="block.widgets") {{i}}
</template>
<script lang="ts" setup>
import type { PageConfig } from "@/types/pageConfig";
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { PageStoreHelper } from "@/store/modules/page";
import config from "./testpage.json";
import Block from "@/common/wrappers/Block.vue";

const route = useRoute();
const pageName = ref<string | string[]>();
const { SET, BLOCKS, GRID } = PageStoreHelper();

onMounted(() => {
  SET(config);
  pageName.value = route.params.name;
});

const getPageStyle = computed(() => {
  if (GRID.value) {
    return {
      gridTemplateRows: `repeat(${GRID.value.rows}, auto)`,
      gridTemplateColumns: `repeat(${GRID.value.cols}, auto)`,
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
</style>
