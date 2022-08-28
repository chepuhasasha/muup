<template lang="pug">
.toolbar_block.toolbar_block_col(@keydown.stop)
  span Decktop
  .prop
    .prop_name X:
    input.prop_input(type='number' v-model='SELECTED.decktop.x')
  .prop
    .prop_name Y:
    input.prop_input(type='number' v-model='SELECTED.decktop.y')
  .prop
    .prop_name W:
    input.prop_input(type='number' v-model='SELECTED.decktop.w')
  .prop
    .prop_name H:
    input.prop_input(type='number' v-model='SELECTED.decktop.h')
  .prop
    .prop_name GAP:
    input.prop_input(type='number' v-model='SELECTED.decktop.gap')
  .prop
    .prop_name PADDING:
    input.prop_input(v-model='SELECTED.decktop.padding')
  .prop
    .prop_name DIRECTION:
    select.prop_input(v-model='SELECTED.decktop.direction')
      option row
      option column
.toolbar_block.toolbar_block_col
  span Tablet
  .prop
    .prop_name X:
    input.prop_input(type='number' v-model='SELECTED.tablet.x')
  .prop
    .prop_name Y:
    input.prop_input(type='number' v-model='SELECTED.tablet.y')
  .prop
    .prop_name W:
    input.prop_input(type='number' v-model='SELECTED.tablet.w')
  .prop
    .prop_name H:
    input.prop_input(type='number' v-model='SELECTED.tablet.h')
.toolbar_block.toolbar_block_col
  span Mobile
  .prop
    .prop_name X:
    input.prop_input(type='number' v-model='SELECTED.mobile.x')
  .prop
    .prop_name Y:
    input.prop_input(type='number' v-model='SELECTED.mobile.y')
  .prop
    .prop_name W:
    input.prop_input(type='number' v-model='SELECTED.mobile.w')
  .prop
    .prop_name H:
    input.prop_input(type='number' v-model='SELECTED.mobile.h')
</template>
<script lang="ts" setup>
import { ConfigStoreHelper } from "@/store/modules/config";

const { SELECTED } = ConfigStoreHelper();
</script>
<style lang="sass"></style>
