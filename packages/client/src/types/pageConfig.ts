import { BlockConfig } from "./blockConfig";

export interface PageConfig {
  path: string;
  title: string;
  grid: { rows: number; cols: number; gap: number };
  blocks: BlockConfig[];
  background: string;
  images: {
    [key: string]: string;
  };
}

export interface PageMin {
  id: string;
  title: string;
  path: string;
}
