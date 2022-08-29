<template lang="pug">
.input(:class='getClasses')
  span.input_label(v-if='label') {{ label }}:
  transition(name='slide-fade')
    span.input_error_text(v-if='error') {{ error }}
  Icon(v-if='icon && !load' :icon='icon' size='10px'
    color='rgb(255,255,255)')
  Loader(v-if='load' size='12px' mode='ring')
  input(
    :title="title"
    v-bind="$attrs"
    :value='modelValue'
    @focus='onfocus(true)'
    @blur='onfocus(false)'
    @input='$emit("update:modelValue", $event.target?.value)'
  )
  Icon(
    pointer
    icon='cross'
    size='10px'
    color='rgb(255,255,255)'
    v-if="modelValue && !nobtn"
    @click='$emit("update:modelValue", null)')
  slot
</template>

<script lang="ts" setup>
// TODO: Небходим ревакторинг, и кое какие доделки
import { computed, ref } from "vue";
import type { PropType } from "vue";
import type { IconName } from "@/common/widgets/icons";

const props = defineProps({
  modelValue: {
    type: [String, Number] as PropType<string | number | null>,
    default: null,
  },
  title: { type: String as PropType<string>, default: "" },
  label: { type: String as PropType<string | null>, default: null },
  icon: { type: String as PropType<IconName | null>, default: null },
  nobtn: { type: Boolean as PropType<boolean>, default: false },
  load: { type: Boolean as PropType<boolean>, default: false },
  error: { type: String as PropType<string>, default: "" },
  size: { type: String as PropType<"s" | "m" | "l">, default: "m" },
});
const emit = defineEmits(["focus", "update:modelValue"]);
const focus = ref(false);
const onfocus = (val: boolean) => {
  focus.value = val;
  emit("focus", val);
};
const getClasses = computed(() => ({
  [`input_${props.size}`]: true,
  input_focus: focus.value,
  input_error: props.error,
}));
</script>
<style lang="sass">
.input
  position: relative
  display: flex
  align-items: center
  // padding: 20px
  // gap: 20px
  width: 100%
  background: #1E1F29
  // border: 1px dashed rgb(var(--contrast_100))
  border-radius: 4px
  height: max-content

  &_label
    font-size: 12px
    font-family: var(--font_200)
    color: rgba(255,255,255, 0.4)

  input
    font-size: 12px
    background: none
    padding: 0
    border: none
    outline: none
    font-family: var(--font_200)
    color: rgba(255,255,255, 0.6)
    width: 100%


  &:hover, &_focus
    border-color: rgb(var(--contrast_300),)

  &_error
    border-color: rgb(var(--error_100))
    animation: shake 0.5s
    &_text
      position: absolute
      font-size: 12px
      top: -10px
      background: rgb(var(--error_100))
      border-radius: 4px
      padding: 4px 8px
  &_s
    padding: 0
    gap: 10px
    background: none
  &_m
    padding: 10px
    gap: 10px
    // input
    //   font-size: 12px
    // TODO: Доделать размеры
</style>
