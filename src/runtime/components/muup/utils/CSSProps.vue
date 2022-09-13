<template lang="pug">
.muup_settings
  .muup_settings_block
    .muup_settings_block_head Layout
      MuupUiIcon(icon='plus' pointer @click='addLayout')
  .muup_settings_block
    .muup_settings_block_head Background
      MuupUiIcon(icon='plus' pointer @click='addBackground')
  .muup_settings_block
    .muup_settings_block_head Stroke
      MuupUiIcon(icon='plus' pointer @click='addStroke')
  .muup_settings_block
    .muup_settings_block_head Shadow
      MuupUiIcon(icon='plus' pointer @click='addShadow')
    .muup_settings_block_body(v-if='muup.selected.node.css.boxShadow')
      .muup_settings_shadow_wrap
        .muup_settings_shadow(:style='{ boxShadow: muup.selected.node.css.boxShadow }')
      input(v-model='muup.selected.node.css.boxShadow')
  .muup_settings_block
    .muup_settings_block_head Text style
      MuupUiIcon(icon='plus' pointer @click='addTextStyle')
  .muup_settings_block
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useMuupState } from "../../../state";

const muup = useMuupState();

const style = ref({});

const addLayout = () => {
  muup.value.selected.node.css = {
    ...muup.value.selected.node.css,
    display: "flex",
    gap: "20px",
    flexDirection: "column",
  };
};
const addBackground = () => {
  muup.value.selected.node.css = {
    ...muup.value.selected.node.css,
    background: "#ffffff",
  };
};
const addStroke = () => {
  muup.value.selected.node.css = {
    ...muup.value.selected.node.css,
    border: "1px solid black",
  };
};
const addShadow = () => {
  muup.value.selected.node.css = {
    ...muup.value.selected.node.css,
    boxShadow: "5px 5px 10px 0px black",
  };
};
const addTextStyle = () => {
  muup.value.selected.node.css = {
    ...muup.value.selected.node.css,
    fontSize: "12px",
  };
};
</script>

<style lang="sass">
.muup_settings
  grid-area: 1/3/3/4
  right: 0
  color: white
  overflow-y: auto
  display: flex
  flex-direction: column
  outline: 1px solid var(--muup_border_200)
  width: 100%
  height: 100%
  background: var(--muup_contrast_200)
  &_shadow
    &_wrap
      padding: 20px
      border: 1px solid var(--muup_border_200)
      width: max-content
      background: var(--muup_contrast_200)
      overflow: hidden
    width: 50px
    height: 50px
    border-radius: 2px
    background: var(--muup_contrast_100)
    border: 1px solid var(--muup_border_200)
  &_block
    display: flex
    flex-direction: column
    gap: 10px
    font-family: var(--muup_font_100)
    padding: 20px
    border-bottom: 1px solid var(--muup_border_200)
    &:hover
      background: var(--muup_contrast_100)

    &_head
      display: flex
      justify-content: space-between
      align-items: center
      font-size: 13px
      color: var(--muup_text_300)
</style>
