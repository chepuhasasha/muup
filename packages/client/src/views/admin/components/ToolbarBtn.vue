<template lang="pug">
.toolbar_btn(
  :class='{ toolbar_btn_active: active}'
  title='Layout settings' )
  Icon(:icon='icon' color='rgba(255, 255, 255, 0.6)')
</template>
<script lang="ts" setup>
import { PropType } from "vue";
import { IconName } from "@/components/widgets/icons";

const props = defineProps({
  icon: { type: String as PropType<IconName>, default: "error" },
  active: { type: Boolean as PropType<boolean>, default: false },
});
</script>
<style lang="sass">
.toolbar_btn
  position: relative
  display: flex
  min-width: 48px
  align-items: center
  justify-content: center
  background: #171822
  &:hover, &_active
    background: #1E1F29
    path
      stroke: white
</style>
