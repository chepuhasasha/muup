import { App } from "vue";
import ButtonVue from "./Button.vue";
import InputVue from "./Input.vue";

export default {
  install(Vue: App): void {
    Vue.component("Button", ButtonVue);
    Vue.component("Input", InputVue);
  },
};
