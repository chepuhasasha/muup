import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/style/main.sass";
import { key, store } from "./store";
import widgets from "./common/widgets";
import ui from "./common/ui";
import wrappers from "./common/wrappers";
createApp(App)
  .use(store, key)
  .use(router)
  .use(widgets)
  .use(ui)
  .use(wrappers)
  .mount("#app");
