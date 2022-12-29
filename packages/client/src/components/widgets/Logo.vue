<template lang="pug">
.logo
  svg(v-if='fill' :width="294 * scale" :height="194 * scale" viewBox="0 0 294 194" fill="none" xmlns="http://www.w3.org/2000/svg")
    path(fill-rule="evenodd" clip-rule="evenodd" d="M0 17C0 7.61116 7.61116 0 17 0H94V47C94 72.9574 72.9574 94 47 94H0V17Z" fill="var(--color-text-200)")
    path(fill-rule="evenodd" clip-rule="evenodd" d="M100 47V0H117C159.526 0 194 34.4741 194 77V94H147C121.043 94 100 72.9574 100 47Z" fill="var(--color-text-200)")
    path(fill-rule="evenodd" clip-rule="evenodd" d="M200 17C200 7.61116 207.611 0 217 0C259.526 0 294 34.4741 294 77V94H247C221.043 94 200 72.9574 200 47V17Z" fill="var(--color-text-200)")
    path(fill-rule="evenodd" clip-rule="evenodd" d="M0 177V100H47C72.9574 100 94 121.043 94 147V177C94 186.389 86.3888 194 77 194H17C7.61116 194 0 186.389 0 177Z" fill="var(--color-text-200)")
    path(fill-rule="evenodd" clip-rule="evenodd" d="M100 147C100 121.043 121.043 100 147 100H194V177C194 186.389 186.389 194 177 194H147C121.043 194 100 172.957 100 147Z" fill="var(--color-text-200)")
    path(fill-rule="evenodd" clip-rule="evenodd" d="M200 147C200 121.043 221.043 100 247 100H294V177C294 186.389 286.389 194 277 194H247C221.043 194 200 172.957 200 147Z" fill="var(--color-text-200)")
  svg(v-else :width="306 * scale" :height="206 * scale" viewBox="0 0 306 206" fill="none" xmlns="http://www.w3.org/2000/svg")
    path(d="M3 23C3 11.9543 11.9543 3 23 3H103V53C103 80.6142 80.6142 103 53 103H3V23Z" stroke="var(--color-text-200)" :stroke-width="stroke / scale")
    path(d="M103 3H123C167.183 3 203 38.8172 203 83V103H153C125.386 103 103 80.6142 103 53V3Z" stroke="var(--color-text-200)" :stroke-width="stroke / scale")
    path(d="M203 23C203 11.9543 211.954 3 223 3V3C267.183 3 303 38.8172 303 83V103H253C225.386 103 203 80.6142 203 53V23Z" stroke="var(--color-text-200)" :stroke-width="stroke / scale")
    path(d="M3 103H53C80.6142 103 103 125.386 103 153V183C103 194.046 94.0457 203 83 203H23C11.9543 203 3 194.046 3 183V103Z" stroke="var(--color-text-200)" :stroke-width="stroke / scale")
    path(d="M103 153C103 125.386 125.386 103 153 103H203V183C203 194.046 194.046 203 183 203H153C125.386 203 103 180.614 103 153V153Z" stroke="var(--color-text-200)" :stroke-width="stroke / scale")
    path(d="M203 153C203 125.386 225.386 103 253 103H303V183C303 194.046 294.046 203 283 203H253C225.386 203 203 180.614 203 153V153Z" stroke="var(--color-text-200)" :stroke-width="stroke / scale")
    path(d="M103 62L105.138 67.7768C110.81 83.105 122.895 95.1904 138.223 100.862L144 103L138.223 105.138C122.895 110.81 110.81 122.895 105.138 138.223L103 144L100.862 138.223C95.1904 122.895 83.105 110.81 67.7768 105.138L62 103L67.7768 100.862C83.105 95.1904 95.1904 83.105 100.862 67.7768L103 62Z" fill="var(--color-text-200)")

</template>
<script lang="ts" setup>
import type { PropType } from "vue";

defineProps({
  fill: { type: Boolean as PropType<boolean>, default: false },
  stroke: { type: String as PropType<string>, default: "6" },
  scale: { type: Number as PropType<number>, default: 1 },
});
</script>
<style lang="sass"></style>
