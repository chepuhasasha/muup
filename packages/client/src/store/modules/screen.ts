import { computed } from "vue";
import { Module, useStore } from "vuex";
import { key, State } from "../index";

export interface IScreenState {
  screen: "mobile" | "tablet" | "decktop";
  w: number;
}

export const screen: Module<IScreenState, State> = {
  state: {
    screen: "decktop",
    w: 0,
  },
  getters: {
    SCREEN: (state) => state.screen,
    W: (state) => state.w,
  },
  mutations: {
    SET_SCREEN(state, size?: number) {
      let width = window.innerWidth;
      if (size) width = size;
      if (width <= 800) state.screen = "mobile";
      else if (width <= 1300 && width > 800) state.screen = "tablet";
      else state.screen = "decktop";
      state.w = width;
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
    W: computed<IScreenState["w"]>(() => STORE.getters.W),
    SET_SCREEN: (size?: number) => STORE.dispatch("setScreen", size),
  };
}
