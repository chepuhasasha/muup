import { WidgetConfig } from "./widgetConfig";

export interface BlockConfig {
  desktop: [number, number, number, number];
  tablet: [number, number, number, number];
  mobile: [number, number, number, number];
  tag: string;
  style: {
    background: string;
    padding: string;
    gap: number;
    flexDerection: string;
  };
  widgets: WidgetConfig[];
}
