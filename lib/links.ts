import { links, type LinkItem } from "@/data/links";

const ONE_DAY_MS = 86_400_000;

/** Links vigentes y ordenados: `expiresAt` cuenta hasta el final de ese día */
export function getActiveLinks(): LinkItem[] {
  const now = Date.now();
  return links
    .filter((link) => !link.expiresAt || new Date(link.expiresAt).getTime() + ONE_DAY_MS > now)
    .sort((a, b) => a.order - b.order);
}
