import { WidgetConfig } from "./widgetConfig";

export interface BlockConfig {
  tag: string;
  decktop: {
    x: number;
    y: number;
    w: number;
    h: number;
    direction: "column" | "row";
    padding_top: number;
    padding_bottom: number;
    padding_left: number;
    padding_right: number;
    gap: number;
  };
  tablet: {
    x: number;
    y: number;
    w: number;
    h: number;
    direction: "column" | "row";
    padding_top: number;
    padding_bottom: number;
    padding_left: number;
    padding_right: number;
    gap: number;
  };
  mobile: {
    x: number;
    y: number;
    w: number;
    h: number;
    direction: "column" | "row";
    padding_top: number;
    padding_bottom: number;
    padding_left: number;
    padding_right: number;
    gap: number;
  };
  style: {
    background: string;
    padding_top: number;
    padding_bottom: number;
    padding_left: number;
    padding_right: number;
  };
  widgets: WidgetConfig[];
}
