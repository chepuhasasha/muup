<template lang="pug">
Viewer
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { ConfigStoreHelper } from "@/store/modules/config";
import config from "../testpage.json";

const route = useRoute();
const pageName = ref<string | string[]>();
const { SET_PAGE } = ConfigStoreHelper();

onMounted(() => {
  SET_PAGE(config);
  pageName.value = route.params.name;
});
</script>
<style lang="sass"></style>
