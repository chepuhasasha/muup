<template lang="pug">
router-view
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
import { useStore } from "vuex";
import { key } from "./store";

const store = useStore(key);
const resize = () => {
  store.dispatch("setScreenMode", window.innerWidth);
};

onMounted(() => {
  store.dispatch("setTheme", "base");
  store.dispatch("setScreenMode", window.innerWidth);
  window.addEventListener("resize", resize);
});
</script>
<style lang="sass">
#app
  background: rgb(var(--contrast_300))
  width: 100vw
  height: 100vh
</style>
