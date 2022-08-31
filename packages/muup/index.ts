import type { App } from "vue";
import { createPinia } from "pinia";
import TestVue from "./src/components/Test.vue";

export default {
  install(Vue: App) {
    Vue.use(createPinia());
    Vue.component("Test", TestVue);
  },
};

