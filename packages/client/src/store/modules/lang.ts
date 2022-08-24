import { Module } from "vuex";
import { State } from "../index";

export interface ILangState {
  lang: string;
}

export const lang: Module<ILangState, State> = {
  state: {
    lang: "ru",
  },
  getters: {
    LANG: (state) => state.lang,
  },
  mutations: {
    SET_LANG(state, lang: string) {
      if (lang === "ru") {
        state.lang = "ru";
      } else {
        state.lang = "en";
      }
    },
  },
  actions: {
    setLang({ commit }, lang: string) {
      commit("SET_LANG", lang);
    },
  },
};
