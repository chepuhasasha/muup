<template lang="pug">
.toolbar 
  MuupUser.toolbar_block
</template>

<script setup lang="ts">
import { onMounted } from "vue-demi";
import { useUserStore } from "../stores/user";
const { user, setUser } = useUserStore();

onMounted(() => {
  setUser({
    name: "Sergey Batukov",
    login: "sergeybatukiv",
    avatar:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK3SURBVHgBvVZLS2pRFP48nR70ooLoNQiKalCDoCiiQRREo6AGQUHQP+gH+Duc68ihoKggiA98gAMVFMGBIxFRdOQTFfW29uWce/bxeL3ctA+2uPb59lprr73W2ls3MzPTxxAsLS3h6ekJV1dXODk5wfT09AAnlUohEonA4XAgn88PUwWdliFS+PHxgdfXVywsLLC5fr/PBrdYp2NDgtVqhclkQqFQGDAkKomEjY0NvL294fr6WjZCaDQaCIfDHPf4+Bjb29uyfHt7i06nA6fTiXQ6zXEFyVMa+/v7bCcrKysD3it3pbU7CcvLyywS5KiSK0iE9fV1PD8/Y35+HuPA/f09zs7O/uyIfr7OCe/v71hcXMQ48fDwgLW1NfafJcPn5yfOz885UrfbhSiKnCwIwoAy5RlrcXK5HPR6PUQ6TArZ3NwcR4jH4yiVSrJMRu/u7jhOIpHgMmx2dhY3Nzcc5+DgAJeXlxCoTtRGxg1KDuHi4gKTxunpKcSjoyOWfr1eD+MAnZMSdGYUMV00Gu1TMYZCIY5ADmxtbXFz6hZEzikVVyoVxGIxjnN4eIjd3V3IaaUuQPJEq7epOcosI/6wQhbwQ/gxQyx01Bl2dna4DxTvTCYjyxSivb09jlMsFlGtVmWZzkytR2rMYq1WY62HOrESVLBU1bJHXwWrZWhUwcqOksJJgy5EwWazYdJwuVwQgsEg61l0YSnHsDQdBbUeCq3dbv+dDAaDAS8vL9yC/zHUarXg8/lk2e/3M5mShKV3Mplkk6Nuz3+BtJ4Syev1YmpqihWyXEcej4eFcFyQ+ifdVxRCQfnBYrEgEAjgu8hmszCbzcxIu91mc6LaC7fbjWazicfHR/YikqB1u9I7g4pdQr1eZ08u0jHwNBv2gFxdXWXG6Pbd3NzE30AGKIWNRiPK5bIm5xcNIlKhMuNXngAAAABJRU5ErkJggg==",
  });
});
</script>

<style lang="sass">
.toolbar
  position: relative
  display: flex
  gap: 2px
  background: #1E1F29
  padding-bottom: 2px
  width: 100%
  min-height: 50px
  max-width: 100%
  overflow-x: auto
  &_block
    background: #171822
    display: flex
    gap: 10px
    padding: 10px
    align-items: center
    font-family: var(--font_200)
    color: rgba(255,255,255, 0.6)
    font-size: 12px
</style>
