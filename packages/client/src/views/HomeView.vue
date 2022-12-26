<template lang="pug">
main.home
  h1 HOME
  UIButton(size='s') default size s
  UIButton(size='m') default size m
  UIButton(size='l') default size l
  UIButton(size='s' active) default size s active
  UIButton(size='m' active) default size m active
  UIButton(size='l' active) default size l active
  UIButton(size='s' disable) default size s disable
  UIButton(size='m' disable) default size m disable
  UIButton(size='l' disable) default size l disable
</template>
<script setup lang="ts"></script>
<style lang="sass">
.home
  display: flex
  flex-direction: column
  gap: 20px
  padding: 40px
</style>