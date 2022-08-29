<template lang="pug">
PropBlock(:title='SCREEN')
  Input(label='X' type='number' v-model='screenMode.grid.x' nobtn size='s')
  Input(label='Y' type='number' v-model='screenMode.grid.y' nobtn size='s')
  Input(icon="width" type='number' v-model='screenMode.grid.w' nobtn size='s')
  Input(icon='height' type='number' v-model='screenMode.grid.h' nobtn size='s')
  Input(icon="layout" type='number' v-model='screenMode.grid.zIndex' nobtn size='s')
PropBlock(title='layout')
  Input(type='number' icon='align_top' v-model='screenMode.layout.padding_top' nobtn size='s')
  Input(type='number' icon='align_bottom' v-model='screenMode.layout.padding_bottom' nobtn size='s')
  Input(type='number' icon='align_left' v-model='screenMode.layout.padding_left' nobtn size='s')
  Input(type='number' icon='align_right' v-model='screenMode.layout.padding_right' nobtn size='s')
  Input(icon="gap" type='number' v-model='screenMode.layout.gap' nobtn size='s')
  .prop_block_row
    Button(@click='screenMode.layout.direction = "row"' size='s' icon='right' :active='screenMode.layout.direction === "row"')
    Button(@click='screenMode.layout.direction = "column"' size='s' icon='down' :active='screenMode.layout.direction === "column"')

PropBlock(title='background')
  Input(label='BG' type='color' v-model='SELECTED.style.background' nobtn size='s')
PropBlock(title='border')
  Input(label='BG' type='color' v-model='SELECTED.style.background' nobtn size='s')
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
