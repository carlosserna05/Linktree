export type LinkIconName =
  | "instagram"
  | "tiktok"
  | "youtube"
  | "whatsapp"
  | "spotify"
  | "x"
  | "email"
  | "web";

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
  /** Lo pinta con el color de acento naranja, para destacar tu link principal */
  highlighted?: boolean;
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
  name: "Tu Nombre",
  handle: "@tuusuario",
  bio: "Creando contenido sobre lo que me apasiona ✨ Nuevo video cada semana.",
  avatarUrl: "/avatar.png",
};

export const links: LinkItem[] = [
  {
    id: "tiktok",
    title: "Sígueme en TikTok",
    url: "https://www.tiktok.com/@tuusuario",
    icon: "tiktok",
    order: 1,
    highlighted: true,
    utm: { source: "linkbio", medium: "social", campaign: "tiktok_profile" },
  },
  {
    id: "instagram",
    title: "Instagram",
    url: "https://www.instagram.com/tuusuario",
    icon: "instagram",
    order: 2,
    utm: { source: "linkbio", medium: "social", campaign: "instagram" },
  },
  {
    id: "youtube",
    title: "YouTube",
    url: "https://www.youtube.com/@tuusuario",
    icon: "youtube",
    order: 3,
    utm: { source: "linkbio", medium: "social", campaign: "youtube" },
  },
  {
    id: "whatsapp",
    title: "Escríbeme por WhatsApp",
    url: "https://wa.me/000000000000",
    icon: "whatsapp",
    order: 4,
  },
  {
    id: "web",
    title: "Mi sitio web",
    url: "https://tudominio.com",
    icon: "web",
    order: 5,
    utm: { source: "linkbio", medium: "social", campaign: "website" },
  },
];
