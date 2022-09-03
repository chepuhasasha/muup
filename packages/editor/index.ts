import type { App } from "vue";
import { createPinia } from "pinia";
import UserVue from "./src/components/User.vue";
import ToolbarVue from "./src/components/Toolbar.vue";
export interface MuupOptions {
  host: string;
  widgets: string[];
}

export default {
  install(Vue: App, options: MuupOptions) {
    Vue.use(createPinia());
    console.log(options);
    Vue.component("MuupUser", UserVue);
    Vue.component("MuupToolbar", ToolbarVue);
  },
};

