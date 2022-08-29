<template lang="pug">
//- GRID
PropBlock(title='grid')
  Input(:style='{gridArea: "1 / 4 / 2 / 5"}' icon="layout" type='number' v-model='screenMode.grid.area[4]' nobtn size='s')
  Input(:style='{gridArea: "2 / 1 / 3 / 2"}' label='X' type='number' v-model='screenMode.grid.area[0]' nobtn size='s')
  Input(:style='{gridArea: "2 / 2 / 3 / 3"}' label='Y' type='number' v-model='screenMode.grid.area[1]' nobtn size='s')
  Input(:style='{gridArea: "2 / 3 / 3 / 4"}' label='W' type='number' v-model='screenMode.grid.area[2]' nobtn size='s')
  Input(:style='{gridArea: "2 / 4 / 3 / 5"}' label='H' type='number' v-model='screenMode.grid.area[3]' nobtn size='s')
//- LAYOUT
PropBlock(title='layout')
  .prop_block_row(:style='{gridArea: "2 / 1 / 3 / 2"}')
    Button(@click='screenMode.layout.direction = "row"' size='s' icon='right' :active='screenMode.layout.direction === "row"')
    Button(@click='screenMode.layout.direction = "column"' size='s' icon='down' :active='screenMode.layout.direction === "column"')
  .aligment
    Icon(
      v-for="(align, i) in aligment"
      pointer
      size="20px"
      :style='{gridArea: align.area}' icon='target'
      @click='setAligment(align.p[0], align.p[1])' 
      :color='align.active ? "#189EFF" : "white"')
  span(:style='{gridArea: "2 / 2 / 3 / 3"}') {{ screenMode.layout.direction }}
  Input(:style='{gridArea: "3 / 1 / 4 / 2"}' :icon='screenMode.layout.direction === "row" ? "width" : "height"' type='number' v-model='screenMode.layout.gap' nobtn size='s')
  Button(:style='{gridArea: "3 / 2 / 4 / 3", width: "100%"}' size='s' @click='screenMode.layout.gap = null' :active='screenMode.layout.gap === null') auto
  Input(:style='{gridArea: "4 / 1 / 5 / 2"}' type='number' icon='align_top' v-model='screenMode.layout.padding[0]' nobtn size='s')
  Input(:style='{gridArea: "5 / 2 / 6 / 3"}' type='number' icon='align_right' v-model='screenMode.layout.padding[1]' nobtn size='s')
  Input(:style='{gridArea: "4 / 2 / 5 / 3"}' type='number' icon='align_bottom' v-model='screenMode.layout.padding[2]' nobtn size='s')
  Input(:style='{gridArea: "5 / 1 / 6 / 2"}' type='number' icon='align_left' v-model='screenMode.layout.padding[3]' nobtn size='s')
  Button(size='s' :style='{gridArea: "6 / 1 / 7 / 5", width: "100%"}') apply to all screens
//- FIGMA
PropBlock(title='Figma')
  Input(:style='{gridArea: "2 / 1 / 3 / 5"}' v-model='screenMode.node' label='Key' size='s')
  Input(:style='{gridArea: "3 / 1 / 4 / 5"}' v-model='screenMode.node' label='Node ID' size='s')
  Button(:style='{gridArea: "4 / 1 / 5 / 5", width: "100%"}' size='s') Sync
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
  grid-area: 2 / 3 / 6 / 5
  align-items: stert
  justify-items: center
</style>
