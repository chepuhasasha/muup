import { PageConfig } from "@/types/pageConfig";
import { computed } from "vue";
import { Module, useStore } from "vuex";
import { key, State } from "../index";

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

export function UserStoreHelper() {
  const STORE = useStore(key);
  return {
    USER: computed<IUserState["user"]>(() => STORE.getters.USER),
    // TITLE: computed<PageConfig["title"]>(() => STORE.getters.TITLE),
    // GRID: computed<PageConfig["grid"]>(() => STORE.getters.GRID),
    // BLOCKS: computed<PageConfig["blocks"]>(() => STORE.getters.BLOCKS),
    // IMAGES: computed<PageConfig["images"]>(() => STORE.getters.IMAGES),
    // SET: (page: PageConfig) => STORE.dispatch("setPage", page),
  };
}
