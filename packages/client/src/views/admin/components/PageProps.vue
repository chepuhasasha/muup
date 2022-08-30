<template lang="pug">
PropBlock(v-if="GRID" title='grid')
  Input(v-area="'1/1/2/3'" type='number' icon='cols' v-model='GRID.cols' nobtn size='s')
  Input(v-area="'1/3/2/5'" type='number' icon='rows' v-model='GRID.rows' nobtn size='s')
  ColorLib(
    v-if='PAGE'
    v-area="'2/1/3/3'"
    v-model='PAGE.background')
  Input(v-area="'2/3/3/5'" type='number' icon='gap' v-model='GRID.gap' nobtn size='s')
PropBlock(v-if="COLORS" title='colors')
  template(v-slot:header)
    Icon(
      icon="plus"
      pointer)
  template(v-slot:flex)
    InputColor(
      v-for='(value, key) in COLORS'
      v-model='COLORS[key]'
      size='s'
      :label='key')

  //- Input(type='color' label='BG' v-model='PAGE.background' nobtn size='s')

</template>
<script lang="ts" setup>
import { ConfigStoreHelper } from "@/store/modules/config";
import { ScreenStoreHelper } from "@/store/modules/screen";

const { GRID, COLORS, PAGE } = ConfigStoreHelper();
const { SCREEN } = ScreenStoreHelper();
</script>
<style lang="sass">
// .page_props
//   // width: max-content
//   &_vertical
//     flex-direction: column
//     .page_props_prop
//       width: 100%
//       justify-content: space-between
//       &_input
    // flex-direction: column
    // *
    //   font-family: var(--font_200)
</style>
