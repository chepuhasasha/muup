import { App } from "vue";
import BlockVue from "./Block.vue";
import PropBlockVue from "./PropBlock.vue";

export default {
  install(Vue: App): void {
    Vue.component("Block", BlockVue);
    Vue.component("PropBlock", PropBlockVue);
  },
};
