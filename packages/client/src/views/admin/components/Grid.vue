<template lang="pug">
canvas(:width='width' :height='height' ref='cvs')
</template>
<script lang="ts" setup>
import { onMounted, PropType, ref } from "vue";

const cvs = ref<HTMLCanvasElement | null>(null);
const props = defineProps({
  width: { type: Number as PropType<number>, require: true },
  height: { type: Number as PropType<number>, require: true },
});

onMounted(() => {
  if (cvs.value) {
    const ctx = cvs.value.getContext("2d");
    ctx.fillStyle = "red";
    ctx.rect(0, 0, 200, 200);
    ctx.fill();
  }
});
</script>

<style lang="sass">
// canvas
//   position: absolute
//   z-index: 999999
</style>
