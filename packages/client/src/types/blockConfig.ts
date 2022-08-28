import { WidgetConfig } from "./widgetConfig";

export interface BlockConfig {
  tag: string;
  decktop: {
    x: number;
    y: number;
    w: number;
    h: number;
    direction: "column" | "row";
    padding: string;
    gap: number;
  };
  tablet: {
    x: number;
    y: number;
    w: number;
    h: number;
    direction: "column" | "row";
    padding: string;
    gap: number;
  };
  mobile: {
    x: number;
    y: number;
    w: number;
    h: number;
    direction: "column" | "row";
    padding: string;
    gap: number;
  };
  style: {
    background: string;
    padding: string;
  };
  widgets: WidgetConfig[];
}
