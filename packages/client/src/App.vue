<template lang="pug">
router-view
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
import { key } from "./store";
import { ScreenStoreHelper } from "./store/modules/screen";
import { ThemeStoreHelper } from "./store/modules/theme";

const SCREEN = ScreenStoreHelper();
const THEME = ThemeStoreHelper();

const resize = () => {
  SCREEN.SET(window.innerWidth);
};
onMounted(() => {
  THEME.SET("base");
  SCREEN.SET(window.innerWidth);
  window.addEventListener("resize", resize);
});
</script>
<style lang="sass">
#app
  background: rgb(var(--contrast_300))
  width: 100vw
  height: 100vh
  overflow-y: scroll
</style>
