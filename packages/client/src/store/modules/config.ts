import { BlockConfig } from "@/types/blockConfig";
import { PageConfig } from "@/types/pageConfig";
import { SiteConfig } from "@/types/siteConfig";
import { computed } from "vue";
import { Module, useStore } from "vuex";
import { key, State } from "../index";

export interface IConfigState {
  site: SiteConfig | null;
  page: PageConfig | null;
  selectedBlock: BlockConfig | null;
}

export const config: Module<IConfigState, State> = {
  state: {
    site: null,
    page: null,
    selectedBlock: null,
  },
  getters: {
    COLORS: (state) => state.site?.colors,
    SITE: (state) => state.site,
    PAGE: (state) => state.page,
    TITLE: (state) => state.page?.title,
    GRID: (state) => state.page?.grid,
    BLOCKS: (state) => state.page?.blocks,
    IMAGES: (state) => state.page?.images,
    SELECTED: (state) => state.selectedBlock,
  },
  mutations: {
    SET_SITE(state, site: SiteConfig) {
      state.site = site;
    },
    SET_PAGE(state, page: PageConfig) {
      state.page = page;
      document.title = page.title;
    },
    // SET_COLORS(state) {
    //   if (state.site) {
    //     const style = document.getElementById("theme");
    //     let result = "";
    //     if (state.site.colors) {
    //       result = ":root {";
    //       Object.keys(state.site.colors).forEach((key) => {
    //         result += `  --${key}: ${state.site?.colors[key]};`;
    //       });
    //       result += " }";
    //     }
    //     if (style) {
    //       style.innerText = result;
    //     }
    //   }
    // },
    SET_SELECTED_BLOCK(state, block: BlockConfig | null) {
      state.selectedBlock = block;
    },
  },
  actions: {
    setSite({ commit }, site: SiteConfig) {
      commit("SET_SITE", site);
    },
    setPage({ commit }, page: PageConfig) {
      commit("SET_PAGE", page);
    },
    setSelectedBlock({ commit }, block: BlockConfig | null) {
      commit("SET_SELECTED_BLOCK", block);
    },
  },
};

export function ConfigStoreHelper() {
  const STORE = useStore(key);
  return {
    SITE: computed<SiteConfig>(() => STORE.getters.SITE),
    PAGE: computed<PageConfig>(() => STORE.getters.PAGE),
    TITLE: computed<PageConfig["title"]>(() => STORE.getters.TITLE),
    COLORS: computed<SiteConfig["colors"]>(() => STORE.getters.COLORS),
    GRID: computed<PageConfig["grid"]>(() => STORE.getters.GRID),
    BLOCKS: computed<PageConfig["blocks"]>(() => STORE.getters.BLOCKS),
    IMAGES: computed<PageConfig["images"]>(() => STORE.getters.IMAGES),
    SELECTED: computed<BlockConfig>(() => STORE.getters.SELECTED),
    SET_SITE: (site: SiteConfig) => STORE.dispatch("setSite", site),
    SET_PAGE: (page: PageConfig) => STORE.dispatch("setPage", page),
    SET_SELECTED_BLOCK: (block: BlockConfig | null) =>
      STORE.dispatch("setSelectedBlock", block),
  };
}
