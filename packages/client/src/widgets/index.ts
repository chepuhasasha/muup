import { App } from "vue";
import MaskVue from "./Mask.vue";

export default {
  install(Vue: App): void {
    Vue.component("Mask", MaskVue);
  },
};
