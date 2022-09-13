import { fileURLToPath } from "url";
import fs from "node:fs/promises";
import { addComponentsDir, createResolver } from "@nuxt/kit";
import { log } from "console";

const muupDir = fileURLToPath(new URL("../../.muup", import.meta.url));
const { resolve } = createResolver(muupDir);

export default class PageService {
  static async getPagesList() {
    try {
      const list = await fs.readdir(resolve());
      return list;
    } catch (e) {
      return [];
    }
  }

  static async getPage(name: string) {
    try {
      const page = await fs.readFile(resolve(`${name}.json`), "utf8");
      return JSON.parse(page);
    } catch (e) {
      const error = await fs.readFile(resolve("error.json"), "utf8");
      return JSON.parse(error);
    }
  }

  static async newPage(name: string, config: Record<string, string>) {
    try {
      await fs.writeFile(resolve(`${name}.json`), JSON.stringify(config));
      return await this.getPage(name);
    } catch (e) {
      return null;
    }
  }
}
