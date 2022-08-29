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
    SET_SCREEN(state, size?: number) {
      let width = window.innerWidth;
      if (size) width = size;
      if (width <= 800) state.screen = "mobile";
      else if (width <= 1300 && width > 800) state.screen = "tablet";
      else state.screen = "decktop";
    },
  },
  actions: {
    setScreen({ commit }, size?: number) {
      commit("SET_SCREEN", size);
    },
  },
};

export function ScreenStoreHelper() {
  const STORE = useStore(key);
  return {
    SCREEN: computed<IScreenState["screen"]>(() => STORE.getters.SCREEN),
    SET_SCREEN: (size?: number) => STORE.dispatch("setScreen", size),
  };
}
