import { PageConfig } from "@/types/pageConfig";
import { computed } from "vue";
import { Module, useStore } from "vuex";
import { key, State } from "../index";

export interface IPageState {
  page: PageConfig | null;
}

export const page: Module<IPageState, State> = {
  state: {
    page: null,
  },
  getters: {
    PAGE: (state) => state.page,
    TITLE: (state) => state.page?.title,
    GRID: (state) => state.page?.grid,
    BLOCKS: (state) => state.page?.blocks,
    IMAGES: (state) => state.page?.images,
  },
  mutations: {
    SET_PAGE(state, page: PageConfig) {
      state.page = page;
      document.title = page.title;
    },
  },
  actions: {
    setPage({ commit }, page: PageConfig) {
      commit("SET_PAGE", page);
    },
  },
};

export function PageStoreHelper() {
  const STORE = useStore(key);
  return {
    PAGE: computed<PageConfig>(() => STORE.getters.PAGE),
    TITLE: computed<PageConfig["title"]>(() => STORE.getters.TITLE),
    GRID: computed<PageConfig["grid"]>(() => STORE.getters.GRID),
    BLOCKS: computed<PageConfig["blocks"]>(() => STORE.getters.BLOCKS),
    IMAGES: computed<PageConfig["images"]>(() => STORE.getters.IMAGES),
    SET: (page: PageConfig) => STORE.dispatch("setPage", page),
  };
}
