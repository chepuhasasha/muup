import { WidgetConfig } from "./widgetConfig";

export interface BlockConfig {
  tag: string;
  decktop: { x: number; y: number; w: number; h: number };
  tablet: { x: number; y: number; w: number; h: number };
  mobile: { x: number; y: number; w: number; h: number };
  style: {
    background: string;
    padding: string;
    gap: number;
    flexDerection: string;
  };
  widgets: WidgetConfig[];
}
