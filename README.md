# Harkai landing

Landing pública independiente del panel y de los clientes autenticados. Branding existente de Harkai, página continua sin sidebar, dos entradas guiadas al panel, componentes React reutilizables y sin Firebase, pagos, formularios de captación ni rastreadores.

- Landing: `https://harkai.lat`
- Panel: `https://panel.harkai.lat`
- Copia local: `/home/lucast/Documents/code/harkai/harkai-landing`
- `npm ci`, `npm run dev`, `npm run build`.
- Docker sirve archivos estáticos como usuario sin privilegios en 8080, con `/health` y CSP.
- `VITE_PANEL_READY=false` mantiene un aviso real de desarrollo al pulsar acceso al panel. Activar únicamente después de desplegar y probar el panel renovado; la URL de destino está fijada a `panel.harkai.lat`.
- Las imágenes del mapa son una ilustración etiquetada, no datos reales. El contenido identifica funcionalidades en desarrollo y no publica un APK antiguo.
- La aplicación `harkai-landing` es un servicio dentro del proyecto Dokploy `harkai`, entorno `production`, junto al backend. El repositorio continúa independiente.

Páginas públicas estáticas: /privacidad/, /terminos/, /aviso-legal/, /eliminar-cuenta/ y /normas-comunidad/. El generador scripts/legal-pages.mjs es la fuente del texto y se ejecuta al compilar. La solicitud de eliminación usa el contacto público aprobado; su atención es manual. No sustituye completar Seguridad de los datos en Play Console, revisar la identidad legal del operador ni comprobar el proceso real de eliminación antes de publicar la app.

## Identidad y descubrimiento

`brand/DESIGN.md` y `brand/VOICE.md` describen la identidad existente. El rediseño
usa `src/editorial.css`, mantiene el mapa como ilustración y conserva el control
`VITE_PANEL_READY` sin habilitar accesos en desarrollo.

El build prerenderiza React en `dist/index.html` mediante `scripts/prerender.mjs`.
El cliente hidrata ese mismo contenido: buscadores y lectores sin JavaScript
reciben los textos, encabezados, FAQ y enlaces. La landing tiene canonical,
WebSite/WebPage en JSON-LD y tarjetas sociales con PNG 1200×630 y SVG editable.
Robots y sitemap conservan las páginas legales existentes.
