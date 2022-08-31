import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

import editor from "../";

createApp(App).use(editor).mount(document.body);

