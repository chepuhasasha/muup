<template lang="pug">
PropBlock(title='Decktop')
  Input(label='X' type='number' v-model='SELECTED.decktop.x' nobtn size='s')
  Input(label='Y' type='number' v-model='SELECTED.decktop.y' nobtn size='s')
  Input(icon="width" type='number' v-model='SELECTED.decktop.w' nobtn size='s')
  Input(icon='height' type='number' v-model='SELECTED.decktop.h' nobtn size='s')
  Input(type='number' icon='align_top' v-model='SELECTED.decktop.padding_top' nobtn size='s')
  Input(type='number' icon='align_bottom' v-model='SELECTED.decktop.padding_bottom' nobtn size='s')
  Input(type='number' icon='align_left' v-model='SELECTED.decktop.padding_left' nobtn size='s')
  Input(type='number' icon='align_right' v-model='SELECTED.decktop.padding_right' nobtn size='s')
  Input(icon="gap" type='number' v-model='SELECTED.decktop.gap' nobtn size='s')
  .prop_block_row
    Button(@click='SELECTED.decktop.direction = "row"' size='s' icon='right' :active='SELECTED.decktop.direction === "row"')
    Button(@click='SELECTED.decktop.direction = "column"' size='s' icon='down' :active='SELECTED.decktop.direction === "column"')
PropBlock(title='Tablet')
  Input(label='X' type='number' v-model='SELECTED.tablet.x' nobtn size='s')
  Input(label='Y' type='number' v-model='SELECTED.tablet.y' nobtn size='s')
  Input(icon="width" type='number' v-model='SELECTED.tablet.w' nobtn size='s')
  Input(icon='height' type='number' v-model='SELECTED.tablet.h' nobtn size='s')
  Input(type='number' icon='align_top' v-model='SELECTED.tablet.padding_top' nobtn size='s')
  Input(type='number' icon='align_bottom' v-model='SELECTED.tablet.padding_bottom' nobtn size='s')
  Input(type='number' icon='align_left' v-model='SELECTED.tablet.padding_left' nobtn size='s')
  Input(type='number' icon='align_right' v-model='SELECTED.tablet.padding_right' nobtn size='s')
  Input(icon="gap" type='number' v-model='SELECTED.tablet.gap' nobtn size='s')
  .prop_block_row
    Button(@click='SELECTED.tablet.direction = "row"' size='s' icon='right' :active='SELECTED.tablet.direction === "row"')
    Button(@click='SELECTED.tablet.direction = "column"' size='s' icon='down' :active='SELECTED.tablet.direction === "column"')
PropBlock(title='Mobile')
  Input(label='X' type='number' v-model='SELECTED.mobile.x' nobtn size='s')
  Input(label='Y' type='number' v-model='SELECTED.mobile.y' nobtn size='s')
  Input(icon="width" type='number' v-model='SELECTED.mobile.w' nobtn size='s')
  Input(icon='height' type='number' v-model='SELECTED.mobile.h' nobtn size='s')
  Input(type='number' icon='align_top' v-model='SELECTED.mobile.padding_top' nobtn size='s')
  Input(type='number' icon='align_bottom' v-model='SELECTED.mobile.padding_bottom' nobtn size='s')
  Input(type='number' icon='align_left' v-model='SELECTED.mobile.padding_left' nobtn size='s')
  Input(type='number' icon='align_right' v-model='SELECTED.mobile.padding_right' nobtn size='s')
  Input(icon="gap" type='number' v-model='SELECTED.mobile.gap' nobtn size='s')
  .prop_block_row
    Button(@click='SELECTED.mobile.direction = "row"' size='s' icon='right' :active='SELECTED.mobile.direction === "row"')
    Button(@click='SELECTED.mobile.direction = "column"' size='s' icon='down' :active='SELECTED.mobile.direction === "column"')
PropBlock(title='Border')
  span Color
  Input(type='color' nobtn size='s')
  span Width
  Input(type='number' nobtn size='s')
  span Style
  Input(type='number' nobtn size='s')
  span Radius
  Input(type='number' nobtn size='s')
  span Border radius
  Input(type='number' nobtn size='s')
</template>
<script lang="ts" setup>
import { ConfigStoreHelper } from "@/store/modules/config";

const { SELECTED } = ConfigStoreHelper();
</script>
<style lang="sass">
.row
  display: flex
  justify-content: space-between
</style>
