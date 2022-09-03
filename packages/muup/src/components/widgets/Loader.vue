<template lang="pug">
.pulse(v-if='mode === "pulse"' :style='getSize')
  .pulse_circle
  .pulse_circle
  .pulse_circle
.ring(v-if='mode === "ring"' :style='getSize')


</template>
<script lang="ts" setup>
import type { PropType } from "vue";
import { computed } from "vue";

const props = defineProps({
  size: { type: String as PropType<string>, default: "100px" },
  mode: { type: String as PropType<string>, default: "pulse" },
});

const getSize = computed(() => ({
  width: props.size,
  minWidth: props.size,
  maxWidth: props.size,
  height: props.size,
  minHeight: props.size,
  maxHeight: props.size,
}));
</script>
<style lang="scss">
.pulse {
  display: inline-block;
  position: relative;
  width: 50px;
  height: 50px;
  &_circle {
    position: absolute;
    border: 4px solid rgb(var(--contrast_400));
    opacity: 1;
    border-radius: 50%;
    animation: pulse 2s ease-out infinite;
  }
  &_circle:nth-child(2) {
    animation-delay: -1s;
  }
  &_circle:nth-child(1) {
    animation-delay: -0.5s;
  }
}
.ring {
  display: inline-block;
  &:after {
    content: " ";
    display: block;
    width: 80%;
    height: 80%;
    border-radius: 50%;
    border: 2px solid rgb(var(--contrast_400));
    border-color: rgb(var(--contrast_400)) transparent rgb(var(--contrast_400))
      transparent;
    animation: ring 1.2s linear infinite;
  }
}
@keyframes ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  0% {
    top: 45%;
    left: 45%;
    width: 10%;
    height: 10%;
    opacity: 0.5;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
}
</style>
