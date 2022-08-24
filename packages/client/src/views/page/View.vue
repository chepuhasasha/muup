<template lang="pug">
.page(:style='getPageStyle')
  Block(tag='article')
    h1 {{ pageName }} (╯°益°)╯
</template>
<script lang="ts" setup>
import type { PageConfig } from "@/types/pageConfig";
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const pageName = ref<string | string[]>();

onMounted(() => {
  pageName.value = route.params.name;
  document.title = route.params.name.toString();
  route.meta.title = "dkdkdkd";
});

const pageConfig = ref<PageConfig>({
  path: "new",
  title: "New Page",
  grid: { rows: 20, cols: 20, gap: 1 },
  blocks: [],
});

const getPageStyle = computed(() => {
  return {
    gridTemplateRows: `repeat(${pageConfig.value.grid.rows}, auto)`,
    gridTemplateColumns: `repeat(${pageConfig.value.grid.cols}, auto)`,
    gap: `${pageConfig.value.grid.gap}px`,
  };
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
