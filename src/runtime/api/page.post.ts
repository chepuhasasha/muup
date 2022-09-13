import PageService from "./page.service";

export default defineEventHandler(async (event) => {
  const body = await useBody(event);
  if (body.name && body.scheme) {
    const page = await PageService.newPage(body.name, body.scheme);
    return page;
  }
  return null;
});
