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
const SOCIAL_GROUP = "Redes sociales";

export const links: LinkItem[] = [
  // Eventos ordenados por fecha. Verifica fechas y enlaces antes de publicar.
  {
    id: "burpsuite-day",
    title: "Burp Suite Day Perú · 7 NOV",
    url: "https://burpsuitedayperu.com/",
    icon: "calendar",
    order: 1,
    group: EVENTS_GROUP,
    expiresAt: "2026-11-07",
  },
  {
    id: "devfest-lima",
    title: "DevFest Lima · 13-14 NOV",
    url: "https://gdg.community.dev/events/details/google-gdg-lima-presents-devfest-lima-2026-dia-ii/",
    icon: "calendar",
    order: 2,
    group: EVENTS_GROUP,
    expiresAt: "2026-11-14",
  },
  {
    id: "black-alpaca",
    title: "Black Alpaca Security · 14 NOV",
    url: "https://blackalpaca.org/",
    icon: "calendar",
    order: 3,
    group: EVENTS_GROUP,
    expiresAt: "2026-11-14",
  },
  {
    id: "dmc-data-ai-summit",
    title: "DMC Data & AI Summit · 20 NOV",
    url: "https://dmc.pe/descubre/summit-2026",
    icon: "calendar",
    order: 5,
    group: EVENTS_GROUP,
    expiresAt: "2026-11-20",
  },
  {
    id: "devfest-open-lima",
    title: "DevFest Open · 21 NOV",
    url: "https://gdg.community.dev/events/details/google-gdg-open-presents-devfest-open-lima-2026/cohost-gdg-cloud-lima/",
    icon: "calendar",
    order: 6,
    group: EVENTS_GROUP,
    expiresAt: "2026-11-21",
  },
  {
    id: "peruhack",
    title: "PERÚHACK · 21 NOV · Gratis",
    url: "https://peruhack.org/",
    icon: "calendar",
    order: 7,
    group: EVENTS_GROUP,
    expiresAt: "2026-11-21",
  },
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
    id: "instagram",
    title: "INSTAGRAM",
    url: "https://www.instagram.com/carlosserna__/",
    icon: "instagram",
    order: 12,
    group: SOCIAL_GROUP,
    utm: { source: "linkbio", medium: "social", campaign: "instagram" },
  },
];
