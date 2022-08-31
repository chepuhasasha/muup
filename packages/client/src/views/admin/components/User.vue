<template lang="pug">
.user(v-if="USER")
  img.user_avatar(:src='USER.avatar')
  .user_info
    .user_name {{ USER.name }}
    .user_username {{ USER.username }}
</template>
<script lang="ts" setup>
import { UserStoreHelper } from "../../../store/modules/user";

const { USER } = UserStoreHelper();
</script>
<style lang="sass">
.user
  min-width: max-content
  &_avatar
    border-radius: 100%
  &_info
    min-width: max-content
    display: flex
    flex-direction: column
    *
      font-family: Inter
  &_name
    color: rgba(255,255,255, 0.6)
    font-size: 12px
  &_username
    color: rgba(255,255,255, 0.4)
    font-size: 10px
</style>
