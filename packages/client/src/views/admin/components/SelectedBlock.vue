<template lang="pug">
PropBlock(title='grid')
  Input(:style='{gridArea: "1 / 4 / 2 / 5"}' icon="layout" type='number' v-model='screenMode.grid.zIndex' nobtn size='s')
  Input(:style='{gridArea: "2 / 1 / 3 / 2"}' label='X' type='number' v-model='screenMode.grid.x' nobtn size='s')
  Input(:style='{gridArea: "2 / 2 / 3 / 3"}' label='Y' type='number' v-model='screenMode.grid.y' nobtn size='s')
  Input(:style='{gridArea: "2 / 3 / 3 / 4"}' label='W' type='number' v-model='screenMode.grid.w' nobtn size='s')
  Input(:style='{gridArea: "2 / 4 / 3 / 5"}' label='H' type='number' v-model='screenMode.grid.h' nobtn size='s')
  //- Input(:style='{gridArea: "4 / 3 / 5 / 5"}' icon="maximize" type='number' v-model='screenMode.grid.borderRadius' nobtn size='s')
PropBlock(title='layout')
  .prop_block_row(:style='{gridArea: "2 / 1 / 3 / 2"}')
    Button(@click='screenMode.layout.direction = "row"' size='s' icon='right' :active='screenMode.layout.direction === "row"')
    Button(@click='screenMode.layout.direction = "column"' size='s' icon='down' :active='screenMode.layout.direction === "column"')
  .aligment
    Button(
      :style='{gridArea: "1 / 1 / 2 / 2"}' icon='target' size='s'
      @click='setAligment("start", "start")' 
      :active='screenMode.layout.v === "start" && screenMode.layout.h === "start"')
    Button(
      :style='{gridArea: "1 / 2 / 2 / 3"}' icon='target' size='s'
      @click='setAligment("start", "center")' 
      :active='screenMode.layout.v === "start" && screenMode.layout.h === "center"')
    Button(
      :style='{gridArea: "1 / 3 / 2 / 4"}' icon='target' size='s'
      @click='setAligment("start", "end")' 
      :active='screenMode.layout.v === "start" && screenMode.layout.h === "end"')
    Button(
      :style='{gridArea: "2 / 1 / 3 / 2"}' icon='target' size='s'
      @click='setAligment("center", "start")' 
      :active='screenMode.layout.v === "center" && screenMode.layout.h === "start"')
    Button(
      :style='{gridArea: "2 / 2 / 3 / 3"}' icon='target' size='s' 
      @click='setAligment("center", "center")' 
      :active='screenMode.layout.v === "center" && screenMode.layout.h === "center"')
    Button(
      :style='{gridArea: "2 / 3 / 3 / 4"}' icon='target' size='s'
      @click='setAligment("center", "end")' 
      :active='screenMode.layout.v === "center" && screenMode.layout.h === "end"')
    Button(
      :style='{gridArea: "3 / 1 / 4 / 2"}' icon='target' size='s'
      @click='setAligment("end", "start")' 
      :active='screenMode.layout.v === "end" && screenMode.layout.h === "start"')
    Button(
      :style='{gridArea: "3 / 2 / 4 / 3"}' icon='target' size='s'
      @click='setAligment("end", "center")' 
      :active='screenMode.layout.v === "end" && screenMode.layout.h === "center"')
    Button(
      :style='{gridArea: "3 / 3 / 4 / 4"}' icon='target' size='s'
      @click='setAligment("end", "end")' 
      :active='screenMode.layout.v === "end" && screenMode.layout.h === "end"')
  span(:style='{gridArea: "2 / 2 / 3 / 3"}') {{ screenMode.layout.direction }}
  Input(:style='{gridArea: "3 / 1 / 4 / 2"}' :icon='screenMode.layout.direction === "row" ? "width" : "height"' type='number' v-model='screenMode.layout.gap' nobtn size='s')
  Button(:style='{gridArea: "3 / 2 / 4 / 3", width: "100%"}' size='s' @click='screenMode.layout.gap = null' :active='screenMode.layout.gap === null') auto
  Input(:style='{gridArea: "4 / 1 / 5 / 2"}' type='number' icon='align_top' v-model='screenMode.layout.padding_top' nobtn size='s')
  Input(:style='{gridArea: "4 / 2 / 5 / 3"}' type='number' icon='align_bottom' v-model='screenMode.layout.padding_bottom' nobtn size='s')
  Input(:style='{gridArea: "5 / 1 / 6 / 2"}' type='number' icon='align_left' v-model='screenMode.layout.padding_left' nobtn size='s')
  Input(:style='{gridArea: "5 / 2 / 6 / 3"}' type='number' icon='align_right' v-model='screenMode.layout.padding_right' nobtn size='s')
  Button(size='s' :style='{gridArea: "6 / 1 / 7 / 5", width: "100%"}') apply to all screens
//- PropBlock(title='background')
//-   Input(label='BG' type='color' v-model='SELECTED.style.background' nobtn size='s')
//-   Button(size='s' :style='{gridArea: "5 / 1 / 6 / 3", width: "100%"}') apply to all screens
//- PropBlock(title='border')
//-   Input(label='BG' type='color' v-model='SELECTED.style.background' nobtn size='s')
//-   Button(size='s' :style='{gridArea: "5 / 1 / 6 / 3", width: "100%"}') apply to all screens
PropBlock(title='Figma')
  Input(:style='{gridArea: "2 / 1 / 3 / 5"}' v-model='screenMode.node' label='Key' size='s')
  Input(:style='{gridArea: "3 / 1 / 4 / 5"}' v-model='screenMode.node' label='Node ID' size='s')
  Button(:style='{gridArea: "4 / 1 / 5 / 5", width: "100%"}' size='s') Sync
</template>
<script lang="ts" setup>
import { ConfigStoreHelper } from "@/store/modules/config";
import { computed, onMounted } from "@vue/runtime-core";
import { ScreenStoreHelper } from "../../../store/modules/screen";

const { SELECTED } = ConfigStoreHelper();
const { SCREEN } = ScreenStoreHelper();
const screenMode = computed(() => SELECTED.value[SCREEN.value]);

const setAligment = (v: string, h: string) => {
  if (screenMode.value) {
    screenMode.value.layout.v = v;
    screenMode.value.layout.h = h;
  }
};
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
