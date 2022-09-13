import { fileURLToPath } from "url";
import {
  defineNuxtModule,
  addServerHandler,
  createResolver,
  addComponentsDir,
  addPlugin,
} from "@nuxt/kit";

export interface ModuleOptions {
  test: string;
}

const DEFAULTS: ModuleOptions = {
  test: "test",
};

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "muup",
    configKey: "muup",
  },
  defaults: DEFAULTS,
  setup(options, nuxt) {
    const runtimeDir = fileURLToPath(new URL("./runtime", import.meta.url));
    const { resolve } = createResolver(runtimeDir);
    // CSS
    nuxt.options.css.push(resolve("./style.css"));
    // API
    addServerHandler({
      route: "/muup_api/page",
      method: "get",
      handler: resolve("./api/page.get.ts"),
    });
    addServerHandler({
      route: "/muup_api/page",
      method: "post",
      handler: resolve("./api/page.post.ts"),
    });
    // STATE
    addPlugin(resolve("state.ts"));
    // COMPONENTS
    addComponentsDir({ path: resolve("./components") });
  },
});

