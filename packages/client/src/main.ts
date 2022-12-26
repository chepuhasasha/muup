import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// COMPONENTS
import UI from "./components/ui";

import "./assets/main.sass";

createApp(App).use(createPinia()).use(router).use(UI).mount("#app");
