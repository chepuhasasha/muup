import { PageConfig } from "@/types/pageConfig";
import { computed } from "vue";
import { Module, useStore } from "vuex";
import { key, State } from "../index";

export interface IScreenState {
  screen: "mobile" | "tablet" | "decktop";
}

export const screen: Module<IScreenState, State> = {
  state: {
    screen: "decktop",
  },
  getters: {
    SCREEN: (state) => state.screen,
  },
  mutations: {
    SET_SCREEN_MODE(state, size: number) {
      if (size <= 800) state.screen = "mobile";
      else if (size <= 1300 && size > 800) state.screen = "tablet";
      else state.screen = "decktop";
    },
  },
  actions: {
    setScreenMode({ commit }, size: number) {
      commit("SET_SCREEN_MODE", size);
    },
  },
};

export function ScreenStoreHelper() {
  const STORE = useStore(key);
  return {
    SCREEN: computed<IScreenState["screen"]>(() => STORE.getters.SCREEN),
    SET: (size: number) => STORE.dispatch("setScreenMode", size),
  };
}
