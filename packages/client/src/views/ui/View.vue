<template lang="pug">
.wrapper
  .component
    h1 ICONS
    .component_body 
      Icon
      Icon(icon='rect')
      Icon(icon='hash')
      Icon(icon='pen')
      Icon(icon='text')
      Icon(icon='pointer')
      Icon(icon='hand')
      Icon(icon='comment')
      Icon(icon='play')
      Icon(icon='menu')
      Icon(icon='search')
      Icon(icon='left')
      Icon(icon='code')
      Icon(icon='colors')
      Icon(icon='dashed_rect')
      Icon(icon='cross')
  .component
    h1 BUTTON
    .component_body 
      Button(size='m' :modes='["clear"]') Clear
      Button(size='m') Simple
      //- Button(size='l') Share
      Button(size='m' :modes='["active"]') Active
      Button(size='m' :modes='["active"]' load) Load
      Button(size='m' :modes='["active"]') Slot
        Icon(icon='cross' :size='10' pointer)
        //- Input(icon='search' v-model='input' placeholder='Search')
      Button(size='m' :modes='["icon", "active"]' icon='pointer')
      Button(size='m' :modes='["icon", "clear"]' icon='hand')
      Button(size='s') small
  .component
    h1 INPUT 
    .component_body
      Input(icon='search' v-model='input' placeholder='Search')
      Input(v-model='input' :error='input ? "(╯°益°)╯" : null' placeholder='Error')
      Input(v-model='input' :load='input ? true : false' placeholder='Load')
      Input(v-model='input' placeholder='Slot')
        Button(size='s' :modes='["active"]') small
          Icon(icon='cross' :size='8' pointer)
        Button(size='s' :modes='["active"]') small
          Icon(icon='cross' :size='8' pointer)
        Button(size='s' :modes='["active"]') small
          Icon(icon='cross' :size='8' pointer)

</template>
<script lang="ts" setup>
import { ref } from "@vue/reactivity";

const input = ref<null | string>(null);
</script>
<style lang="sass">
.wrapper
  display: flex
  flex-direction: column
  gap: 10px
  padding: 40px
.component
  display: flex
  flex-direction: column
  gap: 10px
  padding: 20px
  border: 1px dashed rgb(var(--text_300))
  border-radius: 20px
  &_body
    display: flex
    gap: 10px
</style>
