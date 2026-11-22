export type LinkIconName =
  | "instagram"
  | "tiktok"
  | "youtube"
  | "whatsapp"
  | "spotify"
  | "x"
  | "email"
  | "web"
  | "calendar";

export interface UtmParams {
  source?: string;
  medium?: string;
  campaign?: string;
}

export interface LinkItem {
  /** Identificador único y estable — se usa en el tracking de clics, no lo cambies una vez publicado */
  id: string;
  title: string;
  url: string;
  icon?: LinkIconName;
  /** Los links se ordenan ascendentemente por este número */
  order: number;
  /** Lo pinta con el color de acento dorado, para destacar tu link principal */
  highlighted?: boolean;
  /** Los links consecutivos con el mismo `group` se muestran bajo un título (ej. "Eventos tech en Lima") */
  group?: string;
  /** Fecha ISO (ej. "2026-11-21"); pasado ese día el botón se oculta solo */
  expiresAt?: string;
  /** Se añaden como query params a la url al hacer clic, útil para medir en GA/Vercel Analytics de dónde viene el tráfico */
  utm?: UtmParams;
}

export interface Profile {
  name: string;
  handle: string;
  /** No se muestra en la página; solo es la descripción que aparece al compartir el link */
  bio: string;
  /** Ruta dentro de /public, ej. "/avatar.jpg" */
  avatarUrl: string;
}

export const profile: Profile = {
  name: "Carlos Serna",
  handle: "@carlossserna",
  bio: "El protagonismo anda esperando\nTech | Data | Just Me",
  avatarUrl: "/avatar.jpg",
};

const EVENTS_GROUP = "Eventos tech en Lima · Noviembre";
const COMMUNITY_GROUP = "Comunidad Databricks";
const SOCIAL_GROUP = "Redes sociales";

export const links: LinkItem[] = [
  // Eventos ordenados por fecha. Verifica fechas y enlaces antes de publicar.
  // La fecha del C3Conf (28 NOV) sale de una sola fuente: la página de Luma no la muestra.
  {
    id: "databricks-live",
    title: "Databricks Live · 24 NOV",
    url: "https://events.databricks.com/fy27q4-ev-databricks-live-peru/waitlist?i=Ym4EoBh28DUIft7geS_xo_lLSpCVRIX3",
    icon: "calendar",
    order: 8,
    group: EVENTS_GROUP,
    expiresAt: "2026-11-24",
  },
  {
    id: "redhat-summit-connect",
    title: "Red Hat Summit Connect · 26 NOV",
    url: "https://www.redhat.com/en/summit/connect/latam/lima-2026",
    icon: "calendar",
    order: 9,
    group: EVENTS_GROUP,
    expiresAt: "2026-11-26",
  },
  {
    id: "aws-student-community-day",
    title: "AWS Student Community Day · 28 NOV",
    url: "https://www.aws-uni.com/student-community-day",
    icon: "calendar",
    order: 10,
    group: EVENTS_GROUP,
    expiresAt: "2026-11-28",
  },
  {
    id: "c3conf-peru",
    title: "C3Conf Perú · 28 NOV",
    url: "https://luma.com/s7ljmrjx",
    icon: "calendar",
    order: 11,
    group: EVENTS_GROUP,
    expiresAt: "2026-11-28",
  },
  {
    id: "databricks-whatsapp",
    title: "Canal de WhatsApp",
    url: "https://whatsapp.com/channel/0029Vb4sA0tAYlUNFcKSCF1O",
    icon: "whatsapp",
    order: 12,
    group: COMMUNITY_GROUP,
  },
  {
    id: "instagram",
    title: "INSTAGRAM",
    url: "https://www.instagram.com/carlosserna__/",
    icon: "instagram",
    order: 13,
    group: SOCIAL_GROUP,
    utm: { source: "linkbio", medium: "social", campaign: "instagram" },
  },
];
