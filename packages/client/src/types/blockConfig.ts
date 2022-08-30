import { WidgetConfig } from "./widgetConfig";

export interface ScreenMode {
  node: string;
  classes: string[];
  bg: string | null;
  grid: {
    area: [number, number, number, number, number];
    borderRadius: number;
  };
  layout: {
    direction: "column" | "row";
    padding: [number, number, number, number];
    aligment: [string, string];
    gap: number | null;
  };
  border: {
    width: [number, number, number, number];
    color: string;
    style: string;
  } | null;
}
export interface BlockConfig {
  tag: string;
  decktop: ScreenMode;
  tablet: ScreenMode;
  mobile: ScreenMode;
  widgets: WidgetConfig[];
}
