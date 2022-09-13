import PageService from "./page.service";

export default defineEventHandler(async (event) => {
  const query = useQuery(event);
  if (query.alias) {
    return await PageService.getPage(query.alias);
  }
  return await PageService.getPagesList();
});
