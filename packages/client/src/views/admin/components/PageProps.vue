<template lang="pug">
.page_props(v-if='PAGE' :class='{ page_props_vertical: SCREEN === "mobile"}')
  .prop
    .prop_name COLS:
    input.prop_input(type='number' v-model='GRID.cols')
  .prop
    .prop_name ROWS:
    input.prop_input(type='number' v-model='GRID.rows')
  .prop
    .prop_name GAP:
    input.prop_input(type='number' v-model='GRID.gap')
  .prop
    .prop_name BG:
    input.prop_input(type='color' v-model='PAGE.background')
</template>
<script lang="ts" setup>
import { PageStoreHelper } from "../../../store/modules/page";
import { ScreenStoreHelper } from "../../../store/modules/screen";

const { GRID, PAGE } = PageStoreHelper();
const { SCREEN } = ScreenStoreHelper();
</script>
<style lang="sass">
.page_props
  &_vertical
    flex-direction: column
    .page_props_prop
      width: 100%
      justify-content: space-between
      &_input
        width: 100px
    // flex-direction: column
    // *
    //   font-family: var(--font_200)
</style>
