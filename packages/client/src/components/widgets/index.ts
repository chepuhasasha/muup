import type { App } from "vue";
import IconVue from "./Icon.vue";
import LogoVue from "./Logo.vue";

export default {
  install(vue: App) {
    vue.component("WidgetIcon", IconVue);
    vue.component("WidgetLogo", LogoVue);
  },
};
