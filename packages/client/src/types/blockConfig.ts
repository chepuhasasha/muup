import { WidgetConfig } from "./widgetConfig";

export interface ScreenMode {
  node: string;
  classes: string[];
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

  // x: number;
  // y: number;
  // w: number;
  // h: number;
  // direction: "column" | "row";
  // padding_top: number;
  // padding_bottom: number;
  // padding_left: number;
  // padding_right: number;
  // gap: number;
  // zIndex: number;
}
export interface BlockConfig {
  tag: string;
  decktop: ScreenMode;
  tablet: ScreenMode;
  mobile: ScreenMode;
  style: {
    background: string;
    borderColor: string;
    borderWidth: number;
    borderStyle: string;
    borderRadius: number;
  };
  widgets: WidgetConfig[];
}
