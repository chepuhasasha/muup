<template lang="pug">
header.header
  .header_content
    RouterLink(to='/').header_content_logo
      //- img(src='@/assets/logo_fill.svg' height='26')
      | muup.
    .header_content_nav
      RouterLink(to='about') About
      RouterLink(to='ui') Docs
      RouterLink(to='planes') Planes
      WidgetIcon(icon='translate')
      WidgetIcon(icon='github')
      UIButton(mode='link' size='m') Log in
      UIButton(mode="ghost" size='m') Sign Up
</template>
<script lang="ts" setup>
</script>
<style lang="sass">
.header
  background: var(--color-background-100)
  display: flex
  place-content: center
  width: 100vw
  border-bottom: 1px solid var(--color-background-300)
  &_content
    display: flex
    place-items: center
    justify-content: space-between
    gap: 10px
    max-width: 1200px
    width: 100%
    padding: 10px
    &_logo
      display: flex
      flex-direction: column
      place-items: center
      text-decoration: none
      // padding: 6px
      // border-radius: 4px
      // background: var(--color-text-200)
      // color: var(--color-background-200) !important
      // border: 1px solid var(--color-text-200)
    &_nav
      display: flex
      place-items: center
      gap: 20px
      color: red
</style>