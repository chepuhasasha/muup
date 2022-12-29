<template lang="pug">
footer.footer
  .footer_content
    .footer_content_logo
      WidgetLogo(stroke='2' scale='0.5')
      | Copyright © 2022 #[br] Sergey Batukov
    .footer_content_text
</template>
<script lang="ts" setup>
</script>
<style lang="sass">
.footer
  background: var(--color-background-100)
  display: flex
  place-content: center
  width: 100vw
  border-top: 1px solid var(--color-background-300)
  &_content
    display: flex
    flex-direction: column
    // place-content: center
    // place-items: center
    span
      font-weight: 500
    gap: 10px
    max-width: 1200px
    width: 100%
    padding: 40px
    &_logo
      display: flex
      flex-direction: column
      text-decoration: none
      padding: 6px
      border-radius: 8px
    &_text
      display: flex
      flex-direction: column
</style>