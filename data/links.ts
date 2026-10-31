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
  bio: string;
  /** Ruta dentro de /public, ej. "/avatar.jpg" */
  avatarUrl: string;
}

export const profile: Profile = {
  name: "Carlos Serna",
  handle: "@carlossserna",
  bio: "El protagonismo anda esperando\nTech | Data | Just Me",
  avatarUrl: "/avatar.png",
};

const EVENTS_GROUP = "Eventos tech en Lima · Noviembre";

export const links: LinkItem[] = [
  // Eventos del video. Verifica las fechas el día que grabes.
  {
    id: "devfest-lima",
    title: "DevFest Lima · 14 NOV",
    url: "https://gdg.community.dev/events/details/google-gdg-lima-presents-devfest-lima-2026-dia-ii/",
    icon: "calendar",
    order: 1,
    group: EVENTS_GROUP,
    expiresAt: "2026-11-14",
  },
  {
    id: "devfest-open-lima",
    title: "DevFest Open · 21 NOV",
    url: "https://gdg.community.dev/events/details/google-gdg-open-presents-devfest-open-lima-2026/cohost-gdg-cloud-lima/",
    icon: "calendar",
    order: 2,
    group: EVENTS_GROUP,
    expiresAt: "2026-11-21",
  },
  {
    id: "peruhack",
    title: "PERÚHACK · 21 NOV · Gratis",
    url: "https://peruhack.org/",
    icon: "calendar",
    order: 3,
    group: EVENTS_GROUP,
    expiresAt: "2026-11-21",
  },
  {
    id: "instagram",
    title: "Instagram",
    url: "https://www.instagram.com/carlosserna__/",
    icon: "instagram",
    order: 4,
    utm: { source: "linkbio", medium: "social", campaign: "instagram" },
  },
];
