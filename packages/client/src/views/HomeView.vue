<template lang="pug">
.home_baner
  h1 Data #[br] visualization.
  | Affordable, productive and versatile platform for creating dashboards.
  .home_baner_bar
    UIButton(mode='link' size='m') what is this?
    UIButton(mode="ghost" size='m') GET STARTED
</template>
<script setup lang="ts"></script>
<style lang="sass">
.home
  &_baner
    display: flex
    flex-direction: column
    gap: 20px
    place-items: center
    h1
      text-align: center
      font-weight: 900
      background: -webkit-linear-gradient(315deg,#86b7ff 25%,#C9D1D9)
      background-size: 200% 200% !important
      background-clip: text
      -webkit-background-clip: text
      -webkit-text-fill-color: transparent
      animation: accent 5s linear infinite
    &_bar
      display: flex
      gap: 20px

@keyframes accent
  0%
    background-position: 0% 50%
  50%
    background-position: 100% 50%
  100%
    background-position: 0% 50%
</style>