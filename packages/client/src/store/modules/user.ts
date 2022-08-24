import { Module } from "vuex";
import { State } from "../index";

export interface IUserState {
  user: { name: string } | null;
}

export const user: Module<IUserState, State> = {
  state: {
    user: { name: "Maria" },
  },
  getters: {
    USER: (state) => state.user,
  },
  mutations: {
    // SET_LANG(state, lang: string) {
    //   if (lang === "ru") {
    //     state.lang = "ru";
    //   } else {
    //     state.lang = "en";
    //   }
    // },
  },
  actions: {
    // setLang({ commit }, lang: string) {
    //   commit("SET_LANG", lang);
    // },
  },
};
