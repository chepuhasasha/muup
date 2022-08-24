<template lang="pug">
.home
  .home_wrap 
    //- img.home_logo(:src='require("@/assets/logo.png")')
    .home_label 
      |Обновляемая
      br
      |изометрическая
      br
      |схема
    Button.home_btn(size='m' :modes='["active"]' @click='create()') СОЗДАТЬ
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();
const create = () => {
  router.push({ name: "editor" });
};
</script>
<style lang="sass">
.home
  width: 100vw
  height: 100vh
  display: flex
  align-items: center
  justify-content: center

  &_wrap
    display: flex
    flex-direction: column
    gap: 20px
    width: 200px

  &_logo
    width: 200px
    height: 312px

  &_label
    text-transform: uppercase
    font-family: 'Inter'
    font-style: normal
    font-weight: 400
    font-size: 14px
    line-height: 18px

    color: rgb(var(--text_200))

  &_btn
    width: 100%
    justify-content: center
</style>
