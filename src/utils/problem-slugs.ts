import { withBase } from "./url";

export const setSlug = (team: string) =>
  team.toLowerCase().replace(/\s+/g, "-");

export const problemHref = (team: string, index: number) =>
  withBase(`/resources/problem/${setSlug(team)}/${index + 1}`);
