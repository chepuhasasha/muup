import type { App, Component } from "vue";
import HeaderVue from "./Header.vue";

const imports: Record<string, Component> = {
  Header: HeaderVue,
};

export const widgetsList = Object.keys(imports);

export const widgets = {
  install(Vue: App) {
    Object.keys(imports).forEach((key) => {
      Vue.component(key, imports[key]);
    });
  },
};

