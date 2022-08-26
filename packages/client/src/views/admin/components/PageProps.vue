<template lang="pug">
.page_props(v-if='PAGE' :class='{ page_props_vertical: SCREEN === "mobile"}')
  .page_props_prop
    .page_props_prop_name COLS:
    input.page_props_prop_input(type='number' v-model='GRID.cols')
  .page_props_prop
    .page_props_prop_name ROWS:
    input.page_props_prop_input(type='number' v-model='GRID.rows')
  .page_props_prop
    .page_props_prop_name GAP:
    input.page_props_prop_input(type='number' v-model='GRID.gap')
  .page_props_prop
    .page_props_prop_name BG:
    input.page_props_prop_input(type='color' v-model='PAGE.background')
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

  &_prop
    display: flex
    gap: 10px
    align-items: center
    &_name
      font-size: 12px
      font-family: var(--font_200)
      color: rgba(255,255,255, 0.4)
    &_input
      font-size: 12px
      background: #1E1F29
      padding: 2px 4px
      border: none
      outline: none
      font-family: var(--font_200)
      color: rgba(255,255,255, 0.6)
      width: 50px
    // flex-direction: column
    // *
    //   font-family: var(--font_200)
</style>
