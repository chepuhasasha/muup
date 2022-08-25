import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import { IScreenState, screen } from "./modules/screen";
import { lang, ILangState } from "./modules/lang";
import { theme, IThemeState } from "./modules/theme";
import { page, IPageState } from "./modules/page";
import { IUserState, user } from "./modules/user";

export interface State {
  user: IUserState;
  theme: IThemeState;
  screen: IScreenState;
  lang: ILangState;
  page: IPageState;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  modules: {
    user,
    theme,
    screen,
    lang,
    page,
  },
});
