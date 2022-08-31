import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

// import "./assets/main.css";
import editor from "muup";
import { widgetsList, widgets } from "./components";

createApp(App)
  .use(editor, widgetsList)
  .use(widgets)
  .use(router)
  .mount(document.body);

