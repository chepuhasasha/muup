<template lang="pug">
router-view
</template>
<script lang="ts" setup>
import site from "./site.json";
import { onMounted } from "vue";
import { key } from "./store";
import { ConfigStoreHelper } from "./store/modules/config";
import { ScreenStoreHelper } from "./store/modules/screen";

const SCREEN = ScreenStoreHelper();
const { SET_SITE, SET_THEME } = ConfigStoreHelper();

const resize = () => {
  SCREEN.SET(window.innerWidth);
};
onMounted(() => {
  SCREEN.SET(window.innerWidth);
  window.addEventListener("resize", resize);
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
