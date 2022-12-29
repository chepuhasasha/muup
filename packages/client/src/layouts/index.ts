import type { App } from "vue";
import DefaultVue from "./Default.vue";

export default {
  install(vue: App) {
    vue.component("LayoutDefault", DefaultVue);
  },
};
