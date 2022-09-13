import { defineNuxtConfig } from "nuxt";
import Muup from "..";

export default defineNuxtConfig({
  modules: [Muup],
  components: {
    global: true,
    dirs: ["~/components"],
  },
});

