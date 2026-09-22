import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Nunito } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { profile } from "@/data/links";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-body",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${profile.name} (${profile.handle})`,
  description: profile.bio,
  openGraph: {
    title: `${profile.name} (${profile.handle})`,
    description: profile.bio,
    url: siteUrl,
    siteName: profile.name,
    locale: "es_ES",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} (${profile.handle})`,
    description: profile.bio,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0d",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${bebasNeue.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
