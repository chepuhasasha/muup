![muup](./assets/muup.svg)

# MUUP

## Начало работы

Для начала инициализируйте [Nuxt 3](https://v3.nuxtjs.org/getting-started/quick-start), после установите `MUUP`.

```
npm install --save muup
```
`nuxt.config.ts`
```ts
import { defineNuxtConfig } from "nuxt";
import Muup from "muup";

export default defineNuxtConfig({
  modules: [Muup],
  // ↓ Необходимо для того чтобы MUUP "видел" ваши компоненты
  components: {
    global: true,
    dirs: ["~/components"], // ← папка с вашими компонентами
  },
});
```
---

## Разработка

- `npm run dev:prepare`
- `npm run dev` 

[/playground](./playground)
