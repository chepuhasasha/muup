<template lang="pug">
.colorlib(tabindex="0" @focus="isOpen = true" @blur="isOpen = false" ref='container')
  .colorlib_color(:style='{ background: `var(--${modelValue})` }')
  Input(v-model='modelValue'  nobtn size='s')
  .colorlib_pop(v-if='isOpen')
    Color(v-for='(value, key) in COLORS' @click="select(key)" :color='value' :name='key')

</template>

<script lang="ts" setup>
import { PropType, ref } from "vue";
import { ConfigStoreHelper } from "../../store/modules/config";

const isOpen = ref<boolean>(false);
const container = ref<HTMLElement | null>(null);
const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: { type: String as PropType<string | null>, default: null },
});
const select = (key?: string) => {
  if (key) emit("update:modelValue", key);
  else emit("update:modelValue", null);
  isOpen.value = false;
  if (container.value) container.value.blur();
};

const { COLORS } = ConfigStoreHelper();
</script>
<style lang="sass">
.colorlib
  cursor: pointer
  display: flex
  gap: 10px
  align-items: center
  position: relative
  &_color
    width: 16px
    height: 16px
    min-width: 16px
    min-height: 16px
    max-width: 16px
    max-height: 16px
    border-radius: 2px
    border: 1px solid rgba(255,255,255,0.2)
  &_value
    font-family: Inter
    font-size: 12px
    color: rgba(255,255,255,0.5)
  &_pop
    z-index: 9999
    display: flex
    flex-direction: column
    gap: 2px
    background: #171822
    border: 2px solid #1E1F29
    padding: 10px
    border-radius: 10px
    position: absolute
    top: 100%
    width: 100%
    margin-top: 10px
    max-height: 300px
    overflow-y: auto
    &_item
      display: flex
      gap: 10px
      align-items: center
      padding: 6px
      &:hover, &_active
        background: #1E1F29
        cursor: pointer
</style>
