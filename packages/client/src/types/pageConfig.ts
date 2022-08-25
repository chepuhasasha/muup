import { BlockConfig } from "./blockConfig";

export interface PageConfig {
  path: string;
  title: string;
  grid: { rows: number; cols: number; gap: number };
  blocks: BlockConfig[];
  images: {
    [key: string]: string;
  };
}
