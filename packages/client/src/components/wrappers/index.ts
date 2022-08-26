import { App } from "vue";
import BlockVue from "./Block.vue";

export default {
  install(Vue: App): void {
    Vue.component("Block", BlockVue);
  },
};
