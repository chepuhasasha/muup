export type Primitive = 'STRING' | 'NUMBER' | 'WIDGET'
export type NodeType = "WIDGET" | "TOOL"

export interface INode {
  id: string
  node_type: NodeType
  component: string
  area: [number, number, number, number]
  props: {
    [key: string]: unknown
  }
  in: {
    [key: string]: {
      type: Primitive,
      out_id: string
    }
  }
  out: {
    id: string,
    type: Primitive
  }
}

export interface IElement {
  interface: {
    [key: string]: unknown
  }
  widgets: {

  }
}


const node: INode = {
  id: "1",
  node_type: "WIDGET",
  component: "",
  area: [1,1,2,2],
  props: {},
  in: {},
  out: {
    id: "1",
    type: "WIDGET"
  }
}
