# Link in bio

Landing page tipo "link in bio" (estilo Linktree), pensada para pegarse en la bio de TikTok. Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion, sin librerías de UI pesadas.

## Stack

- **Next.js 16** (App Router) + React + TypeScript
- **Tailwind CSS v4** para estilos
- **Framer Motion** para las micro-animaciones de los botones
- **@vercel/analytics** para el tracking de clics (opcional, no-op si no está activado)
- Pensado para desplegarse en **Vercel**

## Estructura

```
app/
  layout.tsx          # fuentes, metadata (OG/Twitter), <Analytics />
  page.tsx             # ensambla ProfileHeader + LinkList
  globals.css          # paleta de colores y fuentes (tokens de Tailwind v4)
  icon.tsx             # favicon generado dinámicamente
  opengraph-image.tsx  # imagen OG generada dinámicamente
components/
  ProfileHeader.tsx    # foto circular + nombre + handle + bio
  LinkList.tsx         # ordena y renderiza los LinkButton
  LinkButton.tsx        # botón "pill" individual con animación y tracking
  icons.tsx            # set de iconos SVG inline (sin dependencias)
data/
  links.ts             # ← EDITA AQUÍ tu perfil y tus links
lib/
  analytics.ts         # utm params + evento de tracking de clics
```

## Cómo editar tus links y tu perfil

Todo el contenido vive en [`data/links.ts`](data/links.ts), sin tocar el diseño:

```ts
export const profile: Profile = {
  name: "Tu Nombre",
  handle: "@tuusuario",
  bio: "Tu bio corta aquí ✨",
  avatarUrl: "/avatar.png", // reemplaza public/avatar.png por tu foto real
};

export const links: LinkItem[] = [
  {
    id: "tiktok",              // único, no lo cambies una vez publicado (se usa en el tracking)
    title: "Sígueme en TikTok",
    url: "https://www.tiktok.com/@tuusuario",
    icon: "tiktok",             // opcional: tiktok | instagram | youtube | whatsapp | spotify | x | email | web
    order: 1,                   // controla el orden en la lista
    highlighted: true,          // opcional: lo pinta en naranja para destacarlo
    utm: { source: "linkbio", medium: "social", campaign: "tiktok_profile" }, // opcional
  },
  // ...más links
];
```

Para tu foto de perfil: sustituye `public/avatar.png` por tu imagen (jpg/png/webp) y ajusta `avatarUrl` si cambias el nombre de archivo.

## Paleta e identidad visual

- **Tipografía**: [Bebas Neue](https://fonts.google.com/specimen/Bebas+Neue) para el nombre/títulos (`font-display`), [Nunito](https://fonts.google.com/specimen/Nunito) para el resto del texto (fuente por defecto, `font-sans`).
- **Color de acento**: naranja `#FF9900` (tipo AWS), con hover `#FFAC31`.
- **Fondo**: oscuro (`#0B0B0D`) — se eligió fondo oscuro porque el naranja contrasta mucho mejor sobre negro que sobre blanco (más legible y con más "pop"), es la estética dominante en las páginas link-in-bio de creadores, y es más cómodo para la vista en el navegador in-app de TikTok. Todos los tokens de color están centralizados como variables CSS en [`app/globals.css`](app/globals.css) si quieres ajustarlos.

## Tracking de clics

Cada link puede llevar un objeto `utm` (`source`, `medium`, `campaign`) que se añade automáticamente a la URL al hacer clic — útil para ver en Google Analytics de qué link vino el tráfico.

Además, cada clic dispara un evento `link_click` (ver [`lib/analytics.ts`](lib/analytics.ts)) hacia:

- **Vercel Analytics**: ya está integrado (`<Analytics />` en `app/layout.tsx` + `track()` en cada clic). Solo tienes que activar Analytics en el dashboard de tu proyecto en Vercel — no requiere cambios de código.
- **Google Analytics**: si añades el snippet de `gtag.js` (por ejemplo con `next/script` en `app/layout.tsx`), el evento se enviará automáticamente porque `trackLinkClick` detecta `window.gtag` si existe. Si no lo añades, esta llamada simplemente no hace nada.

## Desarrollo local

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). El sitio está optimizado mobile-first: pruébalo con las devtools en modo responsive (~375–430px de ancho) para simular el navegador in-app de TikTok.

## Desplegar en Vercel con dominio propio

1. **Sube el proyecto a GitHub** (si aún no lo has hecho):
   ```bash
   git add -A
   git commit -m "Landing link in bio"
   git branch -M main
   git remote add origin https://github.com/<tu-usuario>/<tu-repo>.git
   git push -u origin main
   ```
2. **Importa el repo en Vercel**: entra a [vercel.com/new](https://vercel.com/new), conecta tu cuenta de GitHub y selecciona el repositorio. Vercel detecta Next.js automáticamente, no hace falta configurar nada.
3. **Variables de entorno**: en el proyecto de Vercel → *Settings → Environment Variables*, añade `NEXT_PUBLIC_SITE_URL` con tu dominio final (ej. `https://tuusuario.com`), tal como se indica en [`.env.example`](.env.example). Esto asegura que las meta tags de Open Graph apunten a la URL correcta cuando compartas el link.
4. **Deploy**: Vercel construye y publica automáticamente. Cada push a `main` genera un nuevo deploy en producción; cada PR genera un preview.
5. **Activa Vercel Analytics** (opcional pero recomendado): en el proyecto → pestaña *Analytics* → *Enable*. Empezarás a ver los eventos `link_click` de cada botón sin tocar código.
6. **Dominio propio**:
   - En el proyecto de Vercel → *Settings → Domains* → añade tu dominio (ej. `tuusuario.com` o un subdominio como `link.tuusuario.com`).
   - Vercel te da los registros DNS a configurar:
     - Dominio raíz (`tuusuario.com`): registro **A** apuntando a `76.76.21.21`.
     - Subdominio (`link.tuusuario.com`): registro **CNAME** apuntando a `cname.vercel-dns.com`.
   - Añade esos registros en el panel DNS de donde compraste el dominio (Namecheap, GoDaddy, etc.). La propagación puede tardar desde minutos hasta un par de horas.
   - Vercel emite el certificado SSL automáticamente en cuanto detecta el DNS correcto (https funciona solo, sin configuración extra).
7. **Pega el link en TikTok**: ve a tu perfil de TikTok → *Editar perfil* → *Sitio web*, y pega tu dominio (o la URL `https://tu-proyecto.vercel.app` si aún no tienes dominio propio).

## Aviso sobre analíticas de terceros

Si más adelante conectas Google Analytics u otra herramienta de terceros, recuerda actualizar tu política de privacidad si aplica en tu jurisdicción, ya que estarás recolectando datos de los visitantes.
