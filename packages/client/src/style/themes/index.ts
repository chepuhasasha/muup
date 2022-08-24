import { ITheme } from "./theme.interface";
import dark from "./dark";

export type ThemeName = "dark";
export const themes: { [key in ThemeName]: ITheme } = {
  dark,
};
