import { Module } from "vuex";
import { ITheme } from "@/style/themes/theme.interface";
import { ThemeName } from "@/style/themes";
import { themes } from "@/style/themes/index";
import { State } from "../index";

export interface IThemeState {
  name: ThemeName;
  theme: ITheme | null;
}

export const theme: Module<IThemeState, State> = {
  state: {
    name: "dark",
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
