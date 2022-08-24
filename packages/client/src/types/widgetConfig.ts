export interface WidgetConfig {
  type: string;
  props: {
    [key: string]: unknown;
  };
}
