<template lang="pug">
.muup_view
  MuupUtilsNode(v-if='page' :node='page.main')
</template>
<script lang="ts" setup>
import type { PropType } from "vue";
import { useFetch } from "#app";

const props = defineProps({
  page: { type: String as PropType<string>, default: "home" },
});
const { data: page } = await useFetch(`/muup_api/page?alias=${props.page}`);
</script>
<style lang="sass">
.muup_view
  background: var(--muup_contrast_200)
  width: 100vw
  height: 100vh
</style>
