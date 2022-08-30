<template lang="pug">
//- GRID
PropBlock(title='grid' :flex='false')
  template(v-slot:header)
    Input(v-w="'58px'" icon="layout" type='number' v-model='screenMode.grid.area[4]' nobtn size='s')
  Input(v-area="'1/1/2/2'" label='X' type='number' v-model='screenMode.grid.area[0]' nobtn size='s')
  Input(v-area="'1/2/2/3'" label='Y' type='number' v-model='screenMode.grid.area[1]' nobtn size='s')
  Input(v-area="'1/3/2/4'" label='W' type='number' v-model='screenMode.grid.area[2]' nobtn size='s')
  Input(v-area="'1/4/2/5'" label='H' type='number' v-model='screenMode.grid.area[3]' nobtn size='s')
//- LAYOUT
PropBlock(title='layout' :flex='false')
  .prop_block_row(v-area="'1/1/2/2'")
    Button(@click='screenMode.layout.direction = "row"' size='s' icon='right' :active='screenMode.layout.direction === "row"')
    Button(@click='screenMode.layout.direction = "column"' size='s' icon='down' :active='screenMode.layout.direction === "column"')
  .aligment
    Icon(
      v-for="(align, i) in aligment"
      pointer
      size="20px"
      :style='{gridArea: align.area}' 
      :icon='align.active ? "target" : "maximize"'
      @click='setAligment(align.p[0], align.p[1])' 
      :color='align.active ? "#189EFF" : "rgba(255,255,255,0.4)"')
  span(v-area="'1/2/2/3'") {{ screenMode.layout.direction }}
  Input(v-area="'2/1/3/2'" :icon='screenMode.layout.direction === "row" ? "width" : "height"' type='number' v-model='screenMode.layout.gap' nobtn size='s')
  Button(v-area="'2/2/3/3'" size='s' @click='screenMode.layout.gap = null' :active='screenMode.layout.gap === null') auto
  Input(v-area="'3/1/4/2'" type='number' icon='align_top' v-model='screenMode.layout.padding[0]' nobtn size='s')
  Input(v-area="'4/2/5/3'" type='number' icon='align_right' v-model='screenMode.layout.padding[1]' nobtn size='s')
  Input(v-area="'3/2/4/3'" type='number' icon='align_bottom' v-model='screenMode.layout.padding[2]' nobtn size='s')
  Input(v-area="'4/1/5/2'" type='number' icon='align_left' v-model='screenMode.layout.padding[3]' nobtn size='s')
  Button(v-area="'5/1/6/5'" v-w="'100%'" size='s') apply to all screens
//- BG
PropBlock(title='background' :grid='screenMode.bg ? true : false')
  template(v-slot:header)
    Icon(
      :icon='screenMode.bg ? "solid" : "plus"'
      pointer @click="setBG()")
  template(v-slot:flex)
    ColorLib(
      v-if='screenMode.bg'
      v-model='screenMode.bg')
    Button(v-w="'100%'" size='s') apply to all screens
//- BORDER
PropBlock(title='border' :grid='screenMode.border ? true : false')
  template(v-slot:header)
    Icon(
      :icon='screenMode.border ? "solid" : "plus"'
      pointer @click="setBorder()")
  ColorLib(
    v-if='screenMode.border'
    v-area="'1/1/2/4'"
    v-model='screenMode.border.color')
  Input(
    v-if='screenMode.border'
    v-area="'2/1/3/2'"
    v-model='screenMode.border.width[0]'
    type="number" icon='border_top' size='s' nobtn)
  Input(
    v-if='screenMode.border'
    v-area="'2/2/3/3'"
    v-model='screenMode.border.width[1]'
    type="number" icon='border_right' size='s' nobtn)
  Input(
    v-if='screenMode.border'
    v-area="'2/3/3/4'"
    v-model='screenMode.border.width[2]'
    type="number" icon='border_bottom' size='s' nobtn)
  Input(
    v-if='screenMode.border'
    v-area="'2/4/3/5'"
    v-model='screenMode.border.width[3]'
    type="number" icon='border_left' size='s' nobtn)
  .prop_block_row(v-area="'1/4/2/5'")
    Button(
      v-if='screenMode.border' 
      @click='screenMode.border.style = "dashed"'
      size='s' icon='dashed'
      :active='screenMode.border.style === "dashed"')
    Button(
      v-if='screenMode.border'
      @click='screenMode.border.style = "solid"'
      size='s' icon='solid'
      :active='screenMode.border.style === "solid"')
  template(v-slot:flex)
    Button(v-area="'3/1/4/5'" v-w="'100%'" size='s') apply to all screens
  
//- FIGMA
PropBlock(title='Figma' :grid='false')
  template(v-slot:flex)
    Input(v-model='screenMode.node' label='Key' size='s')
    Input(v-model='screenMode.node' label='Node ID' size='s')
    Button(v-w='"100%"' size='s') Sync

</template>
<script lang="ts" setup>
import { ConfigStoreHelper } from "@/store/modules/config";
import { computed } from "@vue/runtime-core";
import { ScreenStoreHelper } from "../../../store/modules/screen";

const { SELECTED } = ConfigStoreHelper();
const { SCREEN } = ScreenStoreHelper();
const screenMode = computed(() => SELECTED.value[SCREEN.value]);

const setAligment = (v: string, h: string) => {
  if (screenMode.value) {
    screenMode.value.layout.aligment[0] = v;
    screenMode.value.layout.aligment[1] = h;
  }
};

const setBorder = () => {
  if (screenMode.value.border) screenMode.value.border = null;
  else
    screenMode.value.border = {
      color: "contrast_100",
      style: "solid",
      width: [1, 1, 1, 1],
    };
};
const setBG = () => {
  if (screenMode.value.bg) screenMode.value.bg = null;
  else screenMode.value.bg = "contrast_100";
};

// const applyToAll = (name: 'border' | 'bg' | 'layout', )

const aligment = computed<
  { p: [string, string]; active: boolean; area: string }[]
>(() => [
  {
    p: ["start", "start"],
    active:
      screenMode.value.layout.aligment[0] === "start" &&
      screenMode.value.layout.aligment[1] === "start",
    area: "1 / 1 / 2 / 2",
  },
  {
    p: ["start", "center"],
    active:
      screenMode.value.layout.aligment[0] === "start" &&
      screenMode.value.layout.aligment[1] === "center",
    area: "1 / 2 / 2 / 3",
  },
  {
    p: ["start", "end"],
    active:
      screenMode.value.layout.aligment[0] === "start" &&
      screenMode.value.layout.aligment[1] === "end",
    area: "1 / 3 / 2 / 4",
  },
  {
    p: ["center", "start"],
    active:
      screenMode.value.layout.aligment[0] === "center" &&
      screenMode.value.layout.aligment[1] === "start",
    area: "2 / 1 / 3 / 2",
  },
  {
    p: ["center", "center"],
    active:
      screenMode.value.layout.aligment[0] === "center" &&
      screenMode.value.layout.aligment[1] === "center",
    area: "2 / 2 / 3 / 2",
  },
  {
    p: ["center", "end"],
    active:
      screenMode.value.layout.aligment[0] === "center" &&
      screenMode.value.layout.aligment[1] === "end",
    area: "2 / 3 / 3 / 4",
  },
  {
    p: ["end", "start"],
    active:
      screenMode.value.layout.aligment[0] === "end" &&
      screenMode.value.layout.aligment[1] === "start",
    area: "3 / 1 / 4 / 2",
  },
  {
    p: ["end", "center"],
    active:
      screenMode.value.layout.aligment[0] === "end" &&
      screenMode.value.layout.aligment[1] === "center",
    area: "3 / 2 / 4 / 3",
  },
  {
    p: ["end", "end"],
    active:
      screenMode.value.layout.aligment[0] === "end" &&
      screenMode.value.layout.aligment[1] === "end",
    area: "3 / 3 / 4 / 4",
  },
]);
</script>
<style lang="sass">
.aligment
  display: grid
  width: 100%
  height: 100%
  grid-template-columns: repeat(3, 1fr)
  grid-template-rows: repeat(3, 1fr)
  grid-area: 1 / 3 / 5 / 5
  // align-items: stert
  justify-items: end
</style>
