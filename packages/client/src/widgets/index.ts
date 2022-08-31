import { App } from "vue";
import MaskVue from "./Mask.vue";
import HeaderVue from "./Header.vue";

export default {
  install(Vue: App): void {
    Vue.component("Mask", MaskVue);
    Vue.component("Header", HeaderVue);
  },
};
