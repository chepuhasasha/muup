<template lang="pug">
LayoutDefault(v-if='isDefaultPage')
  RouterView
RouterView(v-else)

</template>
<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const isDefaultPage = computed(() => {
  const defaultPages = ["home", "ui"];
  if (route.name && defaultPages.includes(route.name.toString())) {
    return true;
  }
  return false;
});

</script>

<style scoped></style>
