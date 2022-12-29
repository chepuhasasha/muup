<template lang="pug">
main
  .editor(@drop='drag')
    .node(
      v-for='node in config'
      :key='node.id' 
      :style='{gridArea: node.area.join("/")}'
      :draggable='true'
      @dragstart='drag'
      @dragend='end(node, $event)'
    ) {{ node  }}
  UIButton(@click='newNode') new Node
</template>
<script lang="ts" setup>
import { ref } from "vue";

export type Primitive = "STRING" | "NUMBER" | "WIDGET";
export type NodeType = "WIDGET" | "TOOL";
export interface INode {
  id: string;
  node_type: NodeType;
  component: string;
  area: [number, number, number, number];
  props: {
    [key: string]: unknown;
  };
  in: {
    [key: string]: {
      type: Primitive;
      out_id: string;
    };
  };
  out: {
    id: string;
    type: Primitive;
  };
}

const config = ref<INode[]>([]);

const newNode = () => {
  console.log([1, 1, 2, 2].join("/"));
  config.value.push({
    id: Date.now().toString(),
    node_type: "WIDGET",
    component: "",
    area: [1, 1, 12, 12],
    props: {},
    in: {},
    out: {
      id: "out_" + Date.now().toString(),
      type: "WIDGET",
    },
  });
};

const drag = (e: Event) => {
  console.log(e);
};
const end = (node: INode, e: Event) => {
  // @ts-ignore
  console.log(e.x, e.x / 20)
  // @ts-ignore
  const x = (e.x - (e.x % 20)) / 20;
  // @ts-ignore
  const y = (e.y - (e.y % 20)) / 20;
  node.area = [
    y,
    // @ts-ignore
    x,
    // @ts-ignore
    y + node.area[2],
    // @ts-ignore
    x + node.area[3],
  ];
  console.log(node.area);
};
</script>
<style lang="sass">
.editor
  display: grid
  grid-auto-rows: 20px
  grid-auto-columns: 20px
  overflow-x: auto
  overflow-y: auto
  width: max-content
  height: max-content

  h1
    grid-area: 20/20/20/20

  .node
    background: var(--color-background-300)
    padding: 10px
</style>
