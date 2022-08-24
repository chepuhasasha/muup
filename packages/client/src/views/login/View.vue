<template lang="pug">
.login
  .login_block
    .login_header log in
    Input(v-model='user.username' placeholder='Username')
    Input(v-model='user.password' placeholder='Password ')
    Button login
</template>
<script lang="ts" setup>
import { ref } from "vue";

const user = ref<{ username: string | null; password: string | null }>({
  username: null,
  password: null,
});
</script>
<style lang="sass">
.login
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
  gap: 40px
  background: rgb(var(--contrast_200))
  width: 100%
  max-width: 100%
  min-height: 100%
  overflow: hidden
  &_header
    font-size: 40px
    width: 100%
    // font-family: var(--font_300)
  &_block
    display: flex
    width: 400px
    flex-direction: column
    gap: 20px
    align-items: end
  *
    // color: rgb(var(--contrast_200))
</style>
