<template lang="pug">
Toolbar
//- Grid(:width='500' :height="500")
Viewer
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { ConfigStoreHelper } from "@/store/modules/config";
import config from "../testpage.json";
import { UserStoreHelper } from "@/store/modules/user";
import Toolbar from "./components/Toolbar.vue";
import Grid from "./components/Grid.vue";

const route = useRoute();
const pageName = ref<string | string[]>();
const { SET_PAGE } = ConfigStoreHelper();
const { USER } = UserStoreHelper();

onMounted(() => {
  SET_PAGE(config);
  pageName.value = route.params.name;
});
</script>
<style lang="sass"></style>
