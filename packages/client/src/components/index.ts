import { App } from "vue";
import ButtonVue from "./ui/Button.vue";
import InputVue from "./ui/Input.vue";
import IconVue from "./widgets/Icon.vue";
import LoaderVue from "./widgets/Loader.vue";
import BlockVue from "./wrappers/Block.vue";

export default {
  install(Vue: App): void {
    Vue.component("Icon", IconVue);
    Vue.component("Loader", LoaderVue);
    Vue.component("Button", ButtonVue);
    Vue.component("Input", InputVue);
    Vue.component("Block", BlockVue);
  },
};
