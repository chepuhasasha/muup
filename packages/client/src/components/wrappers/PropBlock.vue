<template lang="pug">
.prop_block(@keydown.stop)
  .prop_block_title(v-if='title') {{ title }}
  slot
</template>
<script lang="ts" setup>
import { computed } from "vue";
import type { PropType } from "vue";
import { BlockConfig } from "@/types/blockConfig";
import { ScreenStoreHelper } from "@/store/modules/screen";
import { ConfigStoreHelper } from "@/store/modules/config";

const { SCREEN } = ScreenStoreHelper();
const { SET_SELECTED_BLOCK, SELECTED } = ConfigStoreHelper();
const props = defineProps({
  title: { type: String as PropType<string> },
});
</script>

<style lang="sass">
.prop_block
  display: grid
  grid-template-columns: 1fr 1fr
  max-width: 100%
  grid-template-rows: repeat(2, 27px)
  padding: 20px
  gap: 10px
  background: #171822
  align-items: center
  span
    font-family: var(--font_200)
    font-size: 12px
    color: rgba(255, 255, 255, 0.4)
  &_row
    display: flex
    gap: 10px
    justify-content: end
  &_title
    font-family: var(--font_200)
    color: rgba(255, 255, 255, 0.4)
    font-size: 12px
    grid-area: 1/1/2/3
</style>
