import { WidgetConfig } from "./widgetConfig";

export interface BlockConfig {
  desktop: [number, number, number, number];
  tablet: [number, number, number, number];
  mobile: [number, number, number, number];
  style: {
    background: string;
    padding: string;
    gap: number;
    flexDerection: string;
  };
  widgets: WidgetConfig[];
}
