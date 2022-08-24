<template lang="pug">
.page(:style='getPageStyle')
  pre {{ pageConfig }}
  pre(v-for='(block, i) in pageConfig?.blocks' :style='block.style') {{ block }}
</template>
<script lang="ts" setup>
import type { PageConfig } from "@/types/pageConfig";
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import config from "./testpage.json";

const route = useRoute();
const pageName = ref<string | string[]>();
const pageConfig = ref<PageConfig | null>(null);

onMounted(() => {
  console.log(config);
  pageConfig.value = config;
  pageName.value = route.params.name;
  document.title = config.title.toString();
});

const getPageStyle = computed(() => {
  if (pageConfig.value) {
    return {
      gridTemplateRows: `repeat(${pageConfig.value.grid.rows}, auto)`,
      gridTemplateColumns: `repeat(${pageConfig.value.grid.cols}, auto)`,
      gap: `${pageConfig.value.grid.gap}px`,
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
