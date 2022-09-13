import { defineNuxtPlugin, useState } from "#app";
import { ref } from "vue";
import type { MuupTag } from "./types/tag.interface";

export interface MuupState {
  selected: { node: MuupTag; parent: MuupTag } | null;
  hover: MuupTag | null;
  screen: number;
}

export const useMuupState = () =>
  useState<MuupState>("counter", () => {
    const selected = ref<{ node: MuupTag; parent: MuupTag } | null>(null);
    const hover = ref<MuupTag | null>(null);
    const screen = ref<number>(700);
    return { selected, hover, screen };
  });

export default defineNuxtPlugin(
  (_nuxtApp) =>
    new Promise<void>((resolve) => {
      const muupState = useMuupState();
      resolve();
    })
);
