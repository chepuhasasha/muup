<template lang="pug">
.admin
  h1 ADMIN DASHBOARD
</template>
<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
import { PageConfig } from "@/types/pageConfig";
import { key } from "@/store";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const STORE = useStore(key);
const router = useRouter();
onMounted(() => {
  if (!STORE.getters.USER) router.push({ name: "login" });
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
.admin
  background: rgb(var(--contrast_200))
  display: grid
  width: 100%
  max-width: 100%
  min-height: 100%
  overflow: hidden
</style>
