<template lang="pug">
.color
  .color_color(:style='{ background: "black" }')
  .color_value contrast_100
</template>

<script lang="ts" setup></script>
<style lang="sass">
.color
  display: flex
  gap: 10px
  align-items: center
  &_color
    width: 16px
    height: 16px
    border-radius: 2px
    border: 1px solid rgba(255,255,255,0.2)
  &_value
    font-family: Inter
    font-size: 12px
    color: rgba(255,255,255,0.5)
</style>
