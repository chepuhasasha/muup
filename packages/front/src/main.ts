import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

// import "./assets/main.css";
import editor from "muup";

createApp(App).use(editor).use(router).mount(document.body);

