<template lang="pug">
.inputColor(:class='getClasses' @click='open')
  input(
    :value='modelValue'
    type='color'
    @input='$emit("update:modelValue", $event.target?.value)'
    ref='input'
  )
  Color(:color="modelValue" :name='label')
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import type { PropType } from "vue";

const props = defineProps({
  modelValue: {
    type: [String, Number] as PropType<string | number | null>,
    default: null,
  },
  label: { type: String as PropType<string | null>, default: null },
  size: { type: String as PropType<"s" | "m" | "l">, default: "m" },
});

const input = ref<HTMLInputElement | null>(null);
const open = () => {
  if (input.value) input.value.click();
};
const emit = defineEmits(["focus", "blur", "update:modelValue"]);
const focus = ref(false);
const onfocus = (val: boolean) => {
  focus.value = val;
  emit("focus", val);
  if (!val) emit("blur");
};
const getClasses = computed(() => ({
  [`inputColor_${props.size}`]: true,
  input_focus: focus.value,
}));
</script>
<style lang="sass">
.inputColor
  position: relative
  display: flex
  align-items: center
  width: 100%
  background: #1E1F29
  border-radius: 4px
  height: max-content

  &_label
    font-size: 12px
    font-family: Inter
    font-weight: 300
    color: rgba(255,255,255, 0.4)
    white-space: nowrap

  input
    width: 1px
    opacity: 0
    position: absolute

  &:hover, &_focus
    border-color: rgb(var(--contrast_300),)

  &_s
    padding: 0
    background: none
  &_m
    padding: 10px
</style>
