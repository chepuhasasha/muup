<template lang="pug">
router-view
</template>
<script lang="ts" setup>
import site from "./site.json";
import { onMounted } from "vue";
import { key } from "./store";
import { ConfigStoreHelper } from "./store/modules/config";
import { ScreenStoreHelper } from "./store/modules/screen";
import { useRouter } from "vue-router";

const router = useRouter();
const { SET_SCREEN } = ScreenStoreHelper();
const { SET_SITE, SET_THEME } = ConfigStoreHelper();

onMounted(() => {
  SET_SCREEN();
  window.addEventListener("resize", () => SET_SCREEN());
  // router.push(site.home);
  SET_SITE(site);
  SET_THEME(site.active_theme);
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
