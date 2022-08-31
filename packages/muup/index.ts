import type { App } from "vue";
import { createPinia } from "pinia";
import TestVue from "./src/components/Test.vue";

export default {
  install(Vue: App, widgets: string[]) {
    Vue.use(createPinia());
    console.log(widgets);
    Vue.component("Test", TestVue);
  },
};

