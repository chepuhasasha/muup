export interface MuupTag {
  tag: string;
  css: CSSStyleDeclaration;
  classes: string[];
  childs: MuupTag[];
  props: Record<string, unknown>;
}

export interface MuupTextNode {
  tag: "TextNode";
  text: string;
}
