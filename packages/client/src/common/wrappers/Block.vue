<template lang="pug">
component.block(:is='tag')
  slot
</template>
<script lang="ts" setup>
import { computed } from "vue";
import type { PropType } from "vue";

const props = defineProps({
  tag: { type: String as PropType<string>, default: "div" },
});
</script>

<style lang="sass">
.block
  padding: 100px
  background: rgb(var(--contrast_200))
</style>
