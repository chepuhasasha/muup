import type { PropType } from "vue";
export default {
  props: {
    text: { type: String as PropType<string>, default: "text" },
  },
  setup(props) {
    return () => props.text;
  },
};
