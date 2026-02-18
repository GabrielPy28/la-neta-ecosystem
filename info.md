# La Neta — Documentación del portal desarrollado

> Resumen de todas las páginas y secciones implementadas para visibilidad completa del contenido.

---

## Producción

La página **ya se encuentra en producción** y disponible en:

**URL:** [https://la-neta-ecosystem.vercel.app/](https://la-neta-ecosystem.vercel.app/)

Se invita al equipo a **revisar el trabajo realizado** y a **compartir comentarios de mejora** para los flujos de integración y despliegue continuo (C/I & C/D).

---

## Estructura global

- **Header** (navegación global): Visible en todas las páginas. Muestra secciones según la ruta actual.
- **Footer**: Visible en todas las páginas. Información de contacto, enlaces a servicios, legal y redes sociales.

---

## Página principal (Home)

**Ruta:** `/`  
**Archivo:** `src/App.tsx` (Route path="/")

| # | Sección | Componente | Descripción |
|---|---------|------------|-------------|
| 1 | **Hero** | `HeroSection` | Sección inicial con video/imagen de fondo, título principal ("Líderes del ecosistema digital"), métricas (2B impressions, 1M dollars, 100M views, 2k+ videos), carrusel de ofertas (Strategy & Creative, Top-Tier Talent, Flawless Ops, Full-Service Fire, Data & Analytics, Elite Scouting) con auto-avance. |
| 2 | **Who is La Neta** | `WhoIsLaNeta` | Presentación de La Neta: "No somos una agencia. Somos la infraestructura de contenido, data y talento." Proceso de 3 pasos (AI variants, edición, UGC ads). |
| 3 | **Branch Offices** | `BranchOfficeLocations` | Ubicaciones: USA, México, Colombia, LATAM. Videos por ciudad, slogans, fotos del equipo (CEO, Tech Lead, Sales Lead, etc.). Carousel interactivo. |
| 4 | **Services & Business Model** | `ServicesCTA` | Título "How we operate". 3 cards de servicios con enlace a sus páginas: **The Ad Factory**, **The Glitch**, **The Hook Hunter**. Debajo: **Our creator network** — "More than 2,000 creators ready to record" — 6 perfiles de creadores (Maya, Victoria, Jezael, Luis & Julia, Matt, Derek) con slogan, nicho, rating (MUI), marcas, stats (ads, videos, engagement, likes, followers, CTR) e iconos de redes. |
| 5 | **Partnerships & Alliances** | `PartnershipsAlliances` | Aliados estratégicos (META, Pinterest, Air Media Tech, Tubi, Gyre). Dashboard de burbujas con métricas. Modales con detalle de cada partnership. |
| 6 | **Let's Work Together** | `LetsWorkTogetherSection` (variant: global) | CTA con tono global. Copy: "Whether you need UGC ads, AI-powered content, high-performing hooks, or a full creative pipeline…" Formulario de contacto en modal. Imagen lets_talk.png. Fondo claro para continuidad visual. |
| 7 | **Footer** | `Footer` | Logo, dirección (174 Nassau Street, Princeton), teléfono. Links: Company, Services, Legal. Iconos de redes sociales. |

---

## Página: The Ad Factory

**Ruta:** `/the-ad-factory`  
**Archivo:** `src/pages/TheAdFactoryPage.tsx`  
**Estilo:** `LiquidGlassBackground` (paleta base), `FloatingCard` (tarjetas claras)

| # | Sección | ID | Componente | Descripción |
|---|---------|-----|------------|-------------|
| 1 | **Service Presentation** | `#service-presentation` | `ServicePresentationSection` (theAdFactory) | Presentación del servicio The Ad Factory: creatividad distintiva, obsesión por el detalle, awareness de tendencias. Carousel de ejemplos (Nyx, AMD, Pinterest) con métricas (popularity, impressions, trend). Video ad_cafe.mp4, phone mockup. |
| 2 | **Problems vs Solutions** | `#problems-vs-solutions` | `ProblemsVsSolutionsSection` | "Eliminate Friction, Amplify Production". 6 filas problema/solución: sin anuncios → producimos; tiempo → lo hacemos rápido; sin creadores → red 2,000+; sin equipo → adaptamos; variedad → creamos variedad; atención → diseñamos para atención. Iconos por fila. |
| 3 | **Let's Work Together** | `#lets-work-together` | `LetsWorkTogetherSection` (variant: adFactory) | CTA específico de The Ad Factory. Copy centrado en ads, creatividad, pipeline brief-to-feed. Modal de contacto. |

**Navegación:** Header muestra Home + Service, Problems & Solutions, Let's Work Together.

---

## Página: The Glitch

**Ruta:** `/the-glitch`  
**Archivo:** `src/pages/TheGlitchPage.tsx`  
**Estilo:** `LiquidGlassBackground` (variant: glitch — cyan/blue/pink)

| # | Sección | ID | Componente | Descripción |
|---|---------|-----|------------|-------------|
| 1 | **Service Presentation** | `#service-presentation` | `ServicePresentationSection` (theGlitch) | Presentación de The Glitch: influencers generados por IA. Tagline "AI-generated influencers that speak your brand." |
| 2 | **Product Value** | `#product-value` | `ProductValueSection` (theGlitch) | Beneficios del producto AI. |
| 3 | **AI Agent Videos** | `#ai-agent-videos` | `AIAgentVideosSection` | Videos/cards del agente AI. IA_Agent.mp4, unboxing, the_glitch.mp4. |
| 4 | **Pack Includes** | `#pack-includes` | `PackIncludesSection` (theGlitch) | Contenido del pack: 1 AI Avatar, 24 assets, 21 días, 3 formatos. |
| 5 | **Roadmap** | `#roadmap` | `RoadmapSection` (theGlitch) | Roadmap de 21 días, 8 pasos. Stepper MUI. Fases: Discovery, Create, Deliver. Steps: Kickoff, Brief, Admin, Talent Selection, Scripts, Review, Production, Delivery. Cards con media (imagen/video), outcome, deliverables. Auto-avance. |
| 6 | **Let's Work Together** | `#lets-work-together` | `LetsWorkTogetherSection` (variant: glitch) | CTA de The Glitch. Copy centrado en AI avatars, 24-asset pack, 21-day roadmap. Modal de contacto. |

**Navegación:** Header muestra Home + Service, Product Value, AI Agent, Pack Includes, Roadmap, Let's Work Together.

---

## Página: The Hook Hunter

**Ruta:** `/the-hook-hunter`  
**Archivo:** `src/pages/TheHookHunterPage.tsx`  
**Estilo:** `LiquidGlassBackground` (variant: hookHunter — amber, emerald, orange). Tema oscuro en secciones.

| # | Sección | ID | Componente | Descripción |
|---|---------|-----|------------|-------------|
| 1 | **Service Presentation** | `#service-presentation` | `ServicePresentationSection` (theHookHunter, variant 1–4) | Presentación de The Hook Hunter: "Hooks that stop the scroll." UGC creators y contenido por nicho. Imágenes rotativas (option_1–4.jpg). Variantes: The Amplifier, Empire Mode. Frase: "People buy from other people. 45% more immediate trust." |
| 2 | **Product Value** | `#product-value` | `ProductValueSection` (theHookHunter) | Beneficios: posicionamiento digital, tendencias, globalización. Iconos Map Pin, TrendingUp, World. |
| 3 | **UGC Talents** | `#ugc-talents` | `UGCTalentsSection` | 4 talentos UGC: Maya (Fashion), Victoria (Food), Jezael (Tech/Gaming), Andrew (Lifestyle & Design). Cada uno: imagen, unique, impact, differentiator, metrics (+CTR, saves, brand lift). Cierre: "Your brand deserves to grow. Our talents are ready to take it there." |
| 4 | **Pack Includes** | `#pack-includes` | `PackIncludesSection` | 3 packs: **The Hook Hunter** (1 talent, 24 assets), **The Amplifier** (3 talents, 66 assets, badge "Most chosen"), **Empire Mode** (5 talents, 120 assets). Cada pack: outcome, scale level, métrica hero, features agrupadas (Production, Delivery, Rights). Altura progresiva. Comparación implícita al final. |
| 5 | **Roadmap** | `#roadmap` | `RoadmapSection` (theHookHunter) | Roadmap 21 días, 8 pasos. Referencias a Hunter, Amplifier, Empire Mode. Copy adaptado a UGC. Video influencer_food.mp4 en delivery. |
| 6 | **Let's Work Together** | `#lets-work-together` | `LetsWorkTogetherSection` (variant: hookHunter) | CTA en tema oscuro. Copy centrado en Hunter, Amplifier, Empire Mode. Modal de contacto. |

**Navegación:** Header muestra Home + Service, Product Value, UGC Talents, Packs, Roadmap, Let's Work Together.

---

## Componentes compartidos

| Componente | Uso |
|------------|-----|
| `Header` | Navegación fija. Logo → Home o #hero. Links según ruta. Dropdown "Services" en home. Secciones específicas por página. |
| `Footer` | Dirección, teléfono, Company, Services, Legal, redes. |
| `LiquidGlassBackground` | Fondo animado. Variantes: default, glitch, hookHunter. |
| `FloatingCard` | Tarjetas flotantes (The Ad Factory). |
| `LetsWorkTogetherSection` | Variantes: `global`, `adFactory`, `glitch`, `hookHunter`. |

---

## Assets principales

- **Imágenes:** `publichttps://la-neta-videos-ubicacion.s3.us-east-1.amazonaws.com/` — logo, opciones de presentación, creadores, marcas, lets_talk.png.
- **Videos:** `public/assets/videos/` — ad_cafe, IA_Agent, influencer_food, CasaPinterest, etc.
- **Icono:** `public/images/laneta.ico` (favicon).

---

## Créditos de imágenes — Unsplash

Parte de las imágenes empleadas en este portal provienen de **[Unsplash](https://unsplash.com)**. Son fotografías y obras publicadas en dicha plataforma por sus usuarios, que comparten su contenido bajo licencias que permiten su uso.  
Desde aquí queremos **agradecer a todos los autores y a la comunidad de Unsplash** por su trabajo y por el apoyo que la propia plataforma recomienda dar a los creadores. Si deseas conocer o apoyar a quienes hayan contribuido con sus imágenes, puedes buscarlos en [unsplash.com](https://unsplash.com).

---

## SEO

- Meta description, Open Graph y Twitter Card configurados en `index.html`.
- Imagen de previsualización: `lets_talk.png`.
- Título: "La Neta — Leaders of the digital ecosystem".
