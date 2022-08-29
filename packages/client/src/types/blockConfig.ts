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
    zIndex: number;
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
    zIndex: number;
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
    zIndex: number;
  };
  style: {
    background: string;
    borderColor: string;
    borderWidth: number;
    borderStyle: string;
    borderRadius: number;
  };
  widgets: WidgetConfig[];
}
