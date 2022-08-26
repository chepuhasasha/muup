import { App } from "vue";
import EditorVue from "./Editor.vue";

export default {
  install(Vue: App): void {
    Vue.component("Editor", EditorVue);
  },
};
