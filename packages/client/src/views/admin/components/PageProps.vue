<template lang="pug">
.page_props(v-if='PAGE' :class='{ page_props_vertical: SCREEN === "mobile"}')
  Input(type='number' label='COLS' v-model='GRID.cols' nobtn size='s')
  Input(type='number' label='ROWS' v-model='GRID.rows' nobtn size='s')
  Input(icon='gap' type='number' v-model='GRID.gap' nobtn size='s')
  Input(type='color' label='BG' v-model='PAGE.background' nobtn size='s')

</template>
<script lang="ts" setup>
import { ConfigStoreHelper } from "@/store/modules/config";
import { ScreenStoreHelper } from "@/store/modules/screen";

const { GRID, PAGE } = ConfigStoreHelper();
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
