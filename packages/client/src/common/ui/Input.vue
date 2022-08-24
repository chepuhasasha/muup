<template lang="pug">
.input(:class='getClasses')
  transition(name='slide-fade')
    span.input_error_text(v-if='error') {{ error }}
  Icon(v-if='icon && !load' :icon='icon' :size='14')
  Loader(v-if='load' size='12px' mode='ring')
  input(
    :title="title"
    v-bind="$attrs"
    :value='modelValue'
    @focus='onfocus(true)'
    @blur='onfocus(false)'
    @input='$emit("update:modelValue", $event.target?.value)'
  )
  Icon(pointer icon='cross' size='10px' v-if="modelValue && !nobtn" @click='$emit("update:modelValue", null)')
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
  icon: { type: String as PropType<IconName | null>, default: null },
  nobtn: { type: Boolean as PropType<boolean>, default: false },
  load: { type: Boolean as PropType<boolean>, default: false },
  error: { type: String as PropType<string>, default: "" },
});
const emit = defineEmits(["focus", "update:modelValue"]);
const focus = ref(false);
const onfocus = (val: boolean) => {
  focus.value = val;
  emit("focus", val);
};
const getClasses = computed(() => ({
  input_focus: focus.value,
  input_error: props.error,
}));
</script>
<style lang="sass">
.input
  position: relative
  display: flex
  align-items: center
  padding: 10px
  gap: 10px
  width: 100%

  background: rgb(var(--bg_300))
  border: 2px solid rgb(var(--bg_300))
  border-radius: 10px

  input
    padding: 0
    background: none
    outline: none
    border: none
    width: 100%
    color: rgb(var(--text_100))
    font-size: 12px
    font-weight: 300
    white-space: normal
    letter-spacing: 0.5px
    &::placeholder
      font-size: 12px
      font-weight: 500
      color: rgb(var(--text_200))


  &:hover, &_focus
    background: rgb(var(--primary_100), 0.3)
    border-color: rgb(var(--primary_100))

  &_error
    border-color: var(--error_100)
    animation: shake 0.5s
    &_text
      position: absolute
      font-size: 12px
      top: -10px
      background: var(--error_100)
      border-radius: 6px
      padding: 2px 6px
      box-shadow: 0 0px 20px -5px var(--error_200)
</style>
