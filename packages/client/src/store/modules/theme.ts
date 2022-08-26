import { Module, useStore } from "vuex";
import { ITheme } from "@/types/theme";
import { ThemeName } from "@/style/themes";
import { themes } from "@/style/themes/index";
import { key, State } from "../index";
import { computed } from "vue";

export interface IThemeState {
  name: ThemeName;
  theme: ITheme | null;
}

export const theme: Module<IThemeState, State> = {
  state: {
    name: "base",
    theme: null,
  },
  getters: {
    THEME: (state) => state.theme,
  },
  mutations: {
    SET_THEME(state, name: ThemeName) {
      state.name = name;
    },
  },
  actions: {
    setTheme({ commit }, name: ThemeName) {
      const style = document.getElementById("theme");
      let result = "";
      if (themes[name]) {
        result = ":root {";
        Object.keys(themes[name]).forEach((key) => {
          result += `  --${key}: ${themes[name][key as keyof ITheme]};`;
        });
        result += " }";
      }
      if (style) {
        style.innerText = result;
      }
      commit("SET_THEME", name);
    },
  },
};

export function ThemeStoreHelper() {
  const STORE = useStore(key);
  return {
    THEME: computed<IThemeState["theme"]>(() => STORE.getters.THEME),
    SET: (name: ThemeName) => STORE.dispatch("setTheme", name),
  };
}
