import { track } from "@vercel/analytics";
import type { LinkItem } from "@/data/links";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Devuelve la url final del link, con los utm params añadidos si el link los define */
export function getLinkHref(link: LinkItem): string {
  if (!link.utm) return link.url;

  let url: URL;
  try {
    url = new URL(link.url);
  } catch {
    return link.url;
  }

  const { source, medium, campaign } = link.utm;
  if (source) url.searchParams.set("utm_source", source);
  if (medium) url.searchParams.set("utm_medium", medium);
  if (campaign) url.searchParams.set("utm_campaign", campaign);

  return url.toString();
}

/**
 * Dispara un evento "link_click" hacia Vercel Analytics (si el proyecto está
 * desplegado en Vercel con Analytics activado) y hacia Google Analytics
 * (si `window.gtag` existe, por ejemplo tras añadir el snippet de GA con next/script).
 * Ambas llamadas son no-op seguras si el servicio correspondiente no está configurado.
 */
export function trackLinkClick(link: LinkItem) {
  track("link_click", {
    id: link.id,
    title: link.title,
    url: link.url,
  });

  if (typeof window !== "undefined") {
    window.gtag?.("event", "link_click", {
      link_id: link.id,
      link_title: link.title,
      link_url: link.url,
    });
  }
}
