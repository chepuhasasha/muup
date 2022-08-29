<template lang="pug">
PropBlock(title='grid')
  Input(:style='{gridArea: "2 / 1 / 3 / 3"}' label='X' type='number' v-model='screenMode.grid.x' nobtn size='s')
  Input(:style='{gridArea: "2 / 3 / 3 / 5"}' label='Y' type='number' v-model='screenMode.grid.y' nobtn size='s')
  Input(:style='{gridArea: "3 / 1 / 4 / 3"}' label='W' type='number' v-model='screenMode.grid.w' nobtn size='s')
  Input(:style='{gridArea: "3 / 3 / 4 / 5"}' label='H' type='number' v-model='screenMode.grid.h' nobtn size='s')
  Input(:style='{gridArea: "4 / 1 / 5 / 3"}' icon="layout" type='number' v-model='screenMode.grid.zIndex' nobtn size='s')
  Input(:style='{gridArea: "4 / 3 / 5 / 5"}' icon="maximize" type='number' v-model='screenMode.grid.borderRadius' nobtn size='s')
PropBlock(title='layout')
  .prop_block_row(:style='{gridArea: "2 / 1 / 3 / 2"}')
    Button(@click='screenMode.layout.direction = "row"' size='s' icon='right' :active='screenMode.layout.direction === "row"')
    Button(@click='screenMode.layout.direction = "column"' size='s' icon='down' :active='screenMode.layout.direction === "column"')
  Button(:style='{gridArea: "2 / 2 / 3 / 3"}' icon='down' size='s')
  Button(:style='{gridArea: "2 / 3 / 3 / 4"}' icon='down' size='s')
  Button(:style='{gridArea: "2 / 4 / 3 / 5"}' icon='down' size='s')
  Button(:style='{gridArea: "3 / 2 / 4 / 3"}' icon='down' size='s')
  Button(:style='{gridArea: "3 / 3 / 4 / 4"}' icon='down' size='s')
  Button(:style='{gridArea: "3 / 4 / 4 / 5"}' icon='down' size='s')
  Button(:style='{gridArea: "4 / 2 / 5 / 3"}' icon='down' size='s')
  Button(:style='{gridArea: "4 / 3 / 5 / 4"}' icon='down' size='s')
  Button(:style='{gridArea: "4 / 4 / 5 / 5"}' icon='down' size='s')
  Input(:style='{gridArea: "3 / 1 / 4 / 3"}' :icon='screenMode.layout.direction === "row" ? "width" : "height"' type='number' v-model='screenMode.layout.gap' nobtn size='s')
  Input(:style='{gridArea: "5 / 1 / 6 / 2"}' type='number' icon='align_top' v-model='screenMode.layout.padding_top' nobtn size='s')
  Input(:style='{gridArea: "5 / 2 / 6 / 3"}' type='number' icon='align_bottom' v-model='screenMode.layout.padding_bottom' nobtn size='s')
  Input(:style='{gridArea: "5 / 3 / 6 / 4"}' type='number' icon='align_left' v-model='screenMode.layout.padding_left' nobtn size='s')
  Input(:style='{gridArea: "5 / 4 / 6 / 5"}' type='number' icon='align_right' v-model='screenMode.layout.padding_right' nobtn size='s')
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
import { computed } from "@vue/runtime-core";
import { ScreenStoreHelper } from "../../../store/modules/screen";

const { SELECTED } = ConfigStoreHelper();
const { SCREEN } = ScreenStoreHelper();

const screenMode = computed(() => SELECTED.value[SCREEN.value]);
</script>
<style lang="sass"></style>
