<template lang="pug">
component(:is='tag') {{ text }}
</template>
<script lang="ts" setup>
import { PropType } from "vue";
const props = defineProps({
  tag: { type: String as PropType<string> },
  text: { type: String as PropType<string> },
});
</script>
<style lang="sass"></style>
