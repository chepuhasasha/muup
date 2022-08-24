<template lang="pug">
Block
  h1 qtb korea
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();
const create = () => {
  router.push({ name: "editor" });
};
</script>
<style lang="sass">
h1
  font-family: var(--font_100)
</style>
