<template lang="pug">
.toolbar_block
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
.toolbar_block
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
.toolbar_block
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
import { PageStoreHelper } from "../../../store/modules/page";

const { SELECTED } = PageStoreHelper();
</script>
<style lang="sass"></style>
