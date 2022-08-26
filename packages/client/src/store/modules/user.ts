import { PageConfig } from "@/types/pageConfig";
import { computed } from "vue";
import { Module, useStore } from "vuex";
import { key, State } from "../index";

export interface IUserState {
  user: {
    name: string;
    avatar: string;
    username: string;
  } | null;
}

export const user: Module<IUserState, State> = {
  state: {
    user: {
      name: "Sergey Batukov",
      avatar:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK3SURBVHgBvVZLS2pRFP48nR70ooLoNQiKalCDoCiiQRREo6AGQUHQP+gH+Duc68ihoKggiA98gAMVFMGBIxFRdOQTFfW29uWce/bxeL3ctA+2uPb59lprr73W2ls3MzPTxxAsLS3h6ekJV1dXODk5wfT09AAnlUohEonA4XAgn88PUwWdliFS+PHxgdfXVywsLLC5fr/PBrdYp2NDgtVqhclkQqFQGDAkKomEjY0NvL294fr6WjZCaDQaCIfDHPf4+Bjb29uyfHt7i06nA6fTiXQ6zXEFyVMa+/v7bCcrKysD3it3pbU7CcvLyywS5KiSK0iE9fV1PD8/Y35+HuPA/f09zs7O/uyIfr7OCe/v71hcXMQ48fDwgLW1NfafJcPn5yfOz885UrfbhSiKnCwIwoAy5RlrcXK5HPR6PUQ6TArZ3NwcR4jH4yiVSrJMRu/u7jhOIpHgMmx2dhY3Nzcc5+DgAJeXlxCoTtRGxg1KDuHi4gKTxunpKcSjoyOWfr1eD+MAnZMSdGYUMV00Gu1TMYZCIY5ADmxtbXFz6hZEzikVVyoVxGIxjnN4eIjd3V3IaaUuQPJEq7epOcosI/6wQhbwQ/gxQyx01Bl2dna4DxTvTCYjyxSivb09jlMsFlGtVmWZzkytR2rMYq1WY62HOrESVLBU1bJHXwWrZWhUwcqOksJJgy5EwWazYdJwuVwQgsEg61l0YSnHsDQdBbUeCq3dbv+dDAaDAS8vL9yC/zHUarXg8/lk2e/3M5mShKV3Mplkk6Nuz3+BtJ4Syev1YmpqihWyXEcej4eFcFyQ+ifdVxRCQfnBYrEgEAjgu8hmszCbzcxIu91mc6LaC7fbjWazicfHR/YikqB1u9I7g4pdQr1eZ08u0jHwNBv2gFxdXWXG6Pbd3NzE30AGKIWNRiPK5bIm5xcNIlKhMuNXngAAAABJRU5ErkJggg==",
      username: "sergeybatukov",
    },
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
