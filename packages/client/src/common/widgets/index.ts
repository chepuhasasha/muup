import { App } from "vue";
import IconVue from "./Icon.vue";
import LoaderVue from "./Loader.vue";
import MaskVue from "./Mask.vue";

export default {
  install(Vue: App): void {
    Vue.component("Icon", IconVue);
    Vue.component("Loader", LoaderVue);
    Vue.component("Mask", MaskVue);
  },
};
