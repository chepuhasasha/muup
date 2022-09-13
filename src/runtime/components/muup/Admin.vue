<template lang="pug">
.muup
  h1 ADMIN
  MuupUiButton TEST
</template>
<script lang="ts" setup>
import { useRoute } from "vue-router";
const route = useRoute();
console.log(route);

const props = defineProps({
  page: { type: String as PropType<string>, default: "editor" },
});
</script>
