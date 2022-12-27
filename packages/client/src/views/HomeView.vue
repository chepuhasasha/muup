<template lang="pug">
main.home
  //- h1 HOME
  img.home_logo(src='@/assets/logo.svg' width='100')
  h1 Muup Typography
  h2 Header 2
  h3 Header 3
  h4 Header 4
  h5 Header 5
  p Lorem Ipsum is simply dummy text of the #[mark printing and typesetting industry]. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
  blockquote Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
  span span
  cite cite
  mark mark
  code CODE wef wefp ewkp fkewpf kwepoof kewpo kwepk 
  label label
  h2 Button
  UIButton(size='s') default size s
  UIButton(size='m') default size m
  UIButton(size='l') default size l
  UIButton(size='l' accent) default size l accent
  UIButton(size='l' danger) default size l danger
  UIButton(size='l' danger accent) default size l danger accent
  UIButton(size='s' disabled) default size s disable
  UIButton(size='m' disabled) default size m disable
  UIButton(size='l' disabled) default size l disable
  UIButton(mode='link' size='s') default size s
  UIButton(mode='link' size='m') default size m
  UIButton(mode='link' size='l') default size l
  UIButton(mode='link' size='l' accent) default size l accent
  UIButton(mode='link' size='l' danger) default size l danger
  UIButton(mode='link' size='l' danger accent) default size l danger accent
  UIButton(mode='link' size='s' disabled) default size s disable
  UIButton(mode='link' size='m' disabled) default size m disable
  UIButton(mode='link' size='l' disabled) default size l disable
  UIButton(mode='ghost' size='s') default size s
  UIButton(mode='ghost' size='m') default size m
  UIButton(mode='ghost' size='l') default size l
  UIButton(mode='ghost' size='l' accent) default size l
  UIButton(mode='ghost' size='l' danger) default size l danger
  UIButton(mode='ghost' size='l' danger accent) default size l danger accent
  UIButton(mode='ghost' size='s' disabled) default size s disable
  UIButton(mode='ghost' size='m' disabled) default size m disable
  UIButton(mode='ghost' size='l' disabled) default size l disable
</template>
<script setup lang="ts"></script>
<style lang="sass">
.home
  display: flex
  flex-direction: column
  gap: 20px
  padding: 40px
  height: 100%
  width: 100%
</style>