<template lang="pug">
.prop_block(@keydown.stop)
  .prop_block_title(v-if='title') {{ title }}
    slot(name='header')
  .prop_block_grid(v-if='grid')
    slot
  .prop_block_flex(v-if='flex')
    slot(name='flex')
</template>
<script lang="ts" setup>
import { computed, useSlots } from "vue";
import type { PropType } from "vue";
import { BlockConfig } from "@/types/blockConfig";
import { ScreenStoreHelper } from "@/store/modules/screen";
import { ConfigStoreHelper } from "@/store/modules/config";

const { SCREEN } = ScreenStoreHelper();
const { SET_SELECTED_BLOCK, SELECTED } = ConfigStoreHelper();
const props = defineProps({
  title: { type: String as PropType<string> },
  grid: { type: Boolean as PropType<boolean>, default: true },
  flex: { type: Boolean as PropType<boolean>, default: true },
});
</script>

<style lang="sass">
.prop_block
  display: flex
  flex-direction: column
  max-width: 100%
  padding: 20px
  gap: 10px
  background: #171822
  border-bottom: 2px solid #1E1F29
  .prop_block_grid
    display: grid
    grid-template-columns: 1fr 1fr 1fr 1fr
    // grid-template-rows: repeat(2, max-content)
    gap: 10px
    align-items: center
  .prop_block_flex
    display: flex
    gap: 10px
    flex-direction: column
  .prop_block_title
    display: flex
    justify-content: space-between
  span
    font-family: Inter
    font-size: 12px
    color: rgba(255, 255, 255, 0.4)
  &_row
    display: flex
    justify-content: space-between
  &_title
    font-family: Inter
    color: rgba(255, 255, 255, 0.4)
    font-size: 12px
    font-weight: 500
    grid-area: 1/1/2/5
</style>
