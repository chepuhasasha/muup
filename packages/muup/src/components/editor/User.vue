<template lang="pug">
.user(v-if="user")
  img.user_avatar(:src='user.avatar')
  .user_info(v-if='user')
    .user_name {{ user.name }}
    .user_login {{ user.login }}
</template>
<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "../stores/user";

const { user } = storeToRefs(useUserStore());
</script>
<style lang="sass">
.user
  min-width: max-content
  &_avatar
    border-radius: 100%
    width: 30px
    height: 30px
  &_info
    min-width: max-content
    display: flex
    flex-direction: column
    *
      font-family: Inter
  &_name
    color: rgba(255,255,255, 0.6)
    font-size: 12px
  &_login
    color: rgba(255,255,255, 0.4)
    font-size: 10px
</style>

