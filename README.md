# Ángeles de Esperanza, A.C. — Web & App Android (PWA)

Aplicación web institucional y **Progressive Web App (PWA)** instalable en **Android** para el **Centro de Rehabilitación en Adicciones Ángeles de Esperanza, A.C.** en Irapuato, Guanajuato, México.

## Características principales

- **App Instalable en Android (PWA)**: Web App Manifest (`standalone`), íconos adaptativos (`any` y `maskable`), accesos directos (*shortcuts*) y Service Worker con soporte sin conexión vía `vite-plugin-pwa` y Workbox.
- **Interfaz Móvil Optimizada**: Barra de navegación inferior fija en dispositivos móviles, barra superior adaptable con navegación de retorno, menú deslizable (*Bottom Sheet*) con accesos directos a WhatsApp, llamada telefónica y Google Maps, e indicador de estado sin conexión.
- **Programa Clínico-Terapéutico de 6 Meses**: Explorador interactivo de las 5 Etapas de Cambio de Prochaska y DiClemente, los 7 pilares de rehabilitación y la rutina operativa semanal y dominical.
- **Transparencia y Cuerpo Clínico**: Matriz filtrable de registros oficiales (SAT, CLUNI, COFEPRIS, Secretaría de Salud, Protección Civil), perfiles del equipo multidisciplinario y guías prácticas para familias.
- **Archivo Audiovisual Unificado**: Reproductor continuo de testimonios y vida comunitaria optimizado para carga rápida en web y móvil.

## Tecnologías

- **React 19** + **TypeScript**
- **Vite 8** + **vite-plugin-pwa**
- **Tailwind CSS v4**
- **Lucide React**

## Requisitos previos

- **Node.js** `>= 20.0.0`
- **npm** `>= 10.0.0`

## Instalación y desarrollo local

```bash
# 1. Clonar el repositorio
git clone https://github.com/TU_USUARIO/TU_REPOSITORIO.git
cd TU_REPOSITORIO

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo (puerto 3000)
npm run dev
```

## Scripts disponibles

| Comando | Descripción |
| :--- | :--- |
| `npm run dev` | Inicia el servidor de desarrollo Vite en `http://localhost:3000` con Service Worker habilitado. |
| `npm run lint` | Ejecuta verificación de tipos con TypeScript (`tsc --noEmit`). |
| `npm run build` | Genera el bundle de producción y los archivos PWA en `dist/`. |
| `npm run preview` | Previsualiza localmente el build de producción generado en `dist/`. |
| `npm run clean` | Elimina los artefactos compilados (`dist/`). |

## Despliegue

El proyecto genera una aplicación estática en `dist/` compatible con cualquier proveedor moderno:

- **GitHub Pages**: Incluye flujo en `.github/workflows/pages.yml` (activar *Settings → Pages → Source: GitHub Actions*). Nota: si publicas bajo un subdirectorio `https://usuario.github.io/repositorio/` en lugar de un dominio propio (`angelesdeesperanzaac.org`), configura un dominio personalizado o ajusta las rutas raíz en `public/` si es necesario.
- **Vercel / Netlify / Cloudflare Pages**:
  - Build command: `npm run build`
  - Output directory: `dist`

> **Nota sobre PWA en Android**: La instalación nativa como app en Android requiere servir la aplicación mediante **HTTPS** (automático en GitHub Pages, Vercel, Netlify y Cloud Run).

## Estructura del proyecto

```text
├── .github/workflows/   # CI (typecheck + build) y despliegue a GitHub Pages
├── docs/                # Documentación institucional de referencia
├── public/              # Íconos PWA y recursos multimedia optimizados
├── src/
│   ├── components/      # Vistas, reproductor de video y shell móvil Android
│   ├── data/            # Datos institucionales, programa clínico y registros
│   ├── hooks/           # Hooks para instalación PWA y conectividad offline
│   ├── App.tsx          # Enrutamiento de vistas y metadatos SEO dinámicos
│   ├── index.css        # Estilos globales Tailwind v4 y ergonomía táctil
│   └── main.tsx         # Punto de entrada y registro del Service Worker
├── index.html           # Metadatos OpenGraph, Twitter Card, Schema.org y PWA
├── package.json
└── vite.config.ts       # Configuración Vite + VitePWA
```

## Licencia

Distribuido bajo la licencia [Apache-2.0](./LICENSE).
