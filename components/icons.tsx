import type { LinkIconName } from "@/data/links";

interface IconProps {
  className?: string;
}

function TikTokIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.6 5.82a4.28 4.28 0 0 1-3.14-1.42 4.3 4.3 0 0 1-1.02-2.65h-3.1v13.44a2.59 2.59 0 1 1-2.4-2.58v-3.14a5.7 5.7 0 0 0-.6-.03A5.71 5.71 0 1 0 12.06 15V9.4a7.35 7.35 0 0 0 4.54 1.56z" />
    </svg>
  );
}

function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YoutubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" fillRule="evenodd" className={className} aria-hidden="true">
      <path d="M4.5 4.5h15A3 3 0 0 1 22.5 7.5v9a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3ZM10 8.5v7l6-3.5Z" />
    </svg>
  );
}

function WhatsappIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.5A9.5 9.5 0 0 0 3.4 16.5L2 22l5.7-1.4A9.5 9.5 0 1 0 12 2.5Zm5.5 13.4c-.2.6-1.3 1.2-1.8 1.3-.5.1-1 .1-3.3-.7-2.8-1.1-4.6-3.9-4.7-4.1-.1-.2-1.1-1.5-1.1-2.8 0-1.3.7-2 .9-2.2.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5.2.5.7 1.8.8 1.9.1.2.1.3 0 .5-.1.2-.2.3-.3.5-.2.2-.3.3-.5.5-.2.2-.3.4-.1.7.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.5 1.5.3.1.5.1.7-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.6-.1.2.1 1.5.7 1.8.8.3.1.5.2.5.3.1.3.1.7-.1 1.3Z" />
    </svg>
  );
}

function SpotifyIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9.2" strokeWidth="1.8" />
      <path d="M7 9.7c2.8-1 6.9-.6 9.3.9M6.7 12.7c2.4-.7 6-.5 8.2.8M6.9 15.6c2-.6 5.1-.4 6.9.7" />
    </svg>
  );
}

function XIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4 4l7.2 8.6L4.4 20h2.3l5.9-6.3 4.4 6.3H21l-7.5-9.2L19.9 4h-2.3l-5.4 5.8L8.3 4H4Zm3 1.6h2l10 13h-2l-10-13Z" />
    </svg>
  );
}

function EmailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function WebIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.4 2.6 3.6 5.7 3.6 9s-1.2 6.4-3.6 9c-2.4-2.6-3.6-5.7-3.6-9S9.6 5.6 12 3Z" />
    </svg>
  );
}

const ICONS: Record<LinkIconName, (props: IconProps) => React.JSX.Element> = {
  tiktok: TikTokIcon,
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
  whatsapp: WhatsappIcon,
  spotify: SpotifyIcon,
  x: XIcon,
  email: EmailIcon,
  web: WebIcon,
};

export function LinkIconGlyph({ name, className }: { name: LinkIconName; className?: string }) {
  const Icon = ICONS[name];
  return <Icon className={className} />;
}
