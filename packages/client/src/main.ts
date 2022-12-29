import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// LAYOUTS
import Layouts from "./layouts";

// COMPONENTS
import Widgets from "./components/widgets";
import UI from "./components/ui";
import Blocks from "./components/blocks";

import "./assets/main.sass";

createApp(App)
  .use(createPinia())
  .use(router)
  .use(Layouts)
  .use(Widgets)
  .use(UI)
  .use(Blocks)
  .mount("body");
