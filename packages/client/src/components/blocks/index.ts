import type { App } from "vue";
import HeaderVue from "./Header.vue";
import FooterVue from "./Footer.vue";

export default {
  install(vue: App) {
    vue.component("BlockHeader", HeaderVue);
    vue.component("BlockFooter", FooterVue);
  },
};
