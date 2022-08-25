<template lang="pug">
router-view
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
import { useStore } from "vuex";
import { key } from "./store";
import { ScreenStoreHelper } from "./store/modules/screen";

const { SET } = ScreenStoreHelper();

const store = useStore(key);
const resize = () => {
  SET(window.innerWidth);
};

onMounted(() => {
  store.dispatch("setTheme", "base");
  SET(window.innerWidth);
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
