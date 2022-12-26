import type { App } from "vue";
import ButtonVue from "./Button.vue";

export default {
  install(vue: App) {
    vue.component("UIButton", ButtonVue);
  },
};
