<template lang="pug">
.mask(ref='div')
</template>
<script lang="ts" setup>
import { onMounted, PropType, ref, watch } from "vue";
import * as PIXI from "pixi.js";
import { PageStoreHelper } from "../../store/modules/page";

interface IMask {
  type: "rect" | "ellipse";
  x: number;
  y: number;
  w: number;
  h: number;
}
const { IMAGES } = PageStoreHelper();

const div = ref<HTMLDivElement | null>(null);
const props = defineProps({
  img: { type: String as PropType<string> },
  shapes: {
    type: Array as PropType<IMask[]>,
    default: () => [
      { type: "rect", x: 0, y: 0, w: 300, h: 300 },
      // { type: "ellipse", x: 40, y: 200, w: 80, h: 300 },
    ],
  },
});

const app = new PIXI.Application({
  width: 500,
  height: 500,
  backgroundAlpha: 0,
  antialias: true,
});
const lines = new PIXI.Graphics();
const mask = new PIXI.Graphics();

const load = () => {
  app.stage.removeChildren();
  if (props.img && IMAGES.value[props.img]) {
    const sprite = PIXI.Sprite.from(PIXI.Texture.from(IMAGES.value[props.img]));
    app.stage.addChild(lines);
    app.stage.addChild(sprite);
    app.stage.addChild(mask);
    sprite.mask = mask;
  }
};
load();
watch(IMAGES, () => {
  load();
});

const drawMask = (delta: number) => {
  props.shapes.forEach((s) => {
    mask.beginFill(0x234321);
    if (s.type === "rect") mask.drawRect(s.x, s.y, s.w, s.h);
    if (s.type === "ellipse") mask.drawEllipse(s.x, s.y, s.w, s.h);
  });
};

app.ticker.add((delta) => {
  mask.clear();
  drawMask(delta);
});

onMounted(() => {
  if (div.value) div.value.appendChild(app.view);
});
</script>
<style lang="sass"></style>
