import { App } from "vue";
import ButtonVue from "./ui/Button.vue";
import InputVue from "./ui/Input.vue";
import IconVue from "./widgets/Icon.vue";
import LoaderVue from "./widgets/Loader.vue";
import BlockVue from "./wrappers/Block.vue";
import PropBlockVue from "./wrappers/PropBlock.vue";
import ColorVue from "./widgets/Color.vue";
import ColorLibVue from "./ui/ColorLib.vue";
import InputColorVue from "./ui/InputColor.vue";
import ViewerVue from "./wrappers/Viewer.vue";

export default {
  install(Vue: App): void {
    Vue.component("Icon", IconVue);
    Vue.component("Loader", LoaderVue);
    Vue.component("Button", ButtonVue);
    Vue.component("Input", InputVue);
    Vue.component("InputColor", InputColorVue);
    Vue.component("Color", ColorVue);
    Vue.component("ColorLib", ColorLibVue);
    Vue.component("Block", BlockVue);
    Vue.component("PropBlock", PropBlockVue);
    Vue.component("Viewer", ViewerVue);
  },
};
