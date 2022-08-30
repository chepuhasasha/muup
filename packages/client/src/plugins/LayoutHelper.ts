interface App {
  directive: (
    name: string,
    cb: (el: HTMLElement, binding: { value: string }) => void
  ) => void;
}

export default {
  install(Vue: App): void {
    console.log(Vue);
    Vue.directive("area", (el: HTMLElement, binding) => {
      el.style.gridArea = binding.value;
    });
    Vue.directive("justify-self", (el: HTMLElement, binding) => {
      el.style.justifySelf = binding.value;
    });
    Vue.directive("w", (el: HTMLElement, binding) => {
      el.style.width = binding.value;
    });
  },
};
