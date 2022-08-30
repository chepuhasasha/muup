<template lang="pug">
#app(:style='colors')
  router-view
</template>
<script lang="ts" setup>
import site from "./site.json";
import { computed, onMounted } from "vue";
import { key } from "./store";
import { ConfigStoreHelper } from "./store/modules/config";
import { ScreenStoreHelper } from "./store/modules/screen";
import { useRouter } from "vue-router";

const router = useRouter();
const { SET_SCREEN } = ScreenStoreHelper();
const { SET_SITE, COLORS } = ConfigStoreHelper();

const colors = computed(() => {
  let result: Record<string, string> = {};
  if (COLORS.value) {
    Object.keys(COLORS.value).forEach((key) => {
      result[`--${key}`] = COLORS.value[key];
    });
    return result;
  }
  return result;
});

onMounted(() => {
  SET_SCREEN();
  window.addEventListener("resize", () => SET_SCREEN());
  SET_SITE(site);
});
</script>
<style lang="sass">
#app
  background: rgb(var(--contrast_300))
  max-width: 100vw
  max-height: 100vh
  width: 100vw
  height: 100vh

  display: flex
  flex-direction: column
</style>
