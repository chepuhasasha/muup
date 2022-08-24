import { ITheme } from "./theme.interface";
import base from "./base";

export type ThemeName = "base";
export const themes: { [key in ThemeName]: ITheme } = {
  base,
};
