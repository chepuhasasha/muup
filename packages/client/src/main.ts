import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { key, store } from "./store";
import ui from "./components";
import widgets from "./widgets";
import editor from "./components/utils/editor";
import "@/style/main.sass";

createApp(App)
  .use(store, key)
  .use(router)
  .use(widgets)
  .use(editor)
  .use(ui)
  .mount("#app");
