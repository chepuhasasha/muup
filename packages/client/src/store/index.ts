import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import { IScreenState, screen } from "./modules/screen";
import { lang, ILangState } from "./modules/lang";
import { theme, IThemeState } from "./modules/theme";
import { config, IConfigState } from "./modules/config";

export interface State {
  theme: IThemeState;
  screen: IScreenState;
  lang: ILangState;
  config: IConfigState;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  modules: {
    theme,
    screen,
    lang,
    config,
  },
});
