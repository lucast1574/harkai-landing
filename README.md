# Harkai landing

Landing pública independiente del panel y de los clientes autenticados. Branding existente de Harkai, navegación lateral en escritorio y menú lateral con diálogo nativo en móvil, componentes React reutilizables y sin Firebase, pagos, formularios de captación ni rastreadores.

- Landing: `https://harkai.lat`
- Panel futuro: `https://panel.harkai.lat`
- Copia local: `/home/lucast/Documents/code/harkai/harkai-landing`
- `npm ci`, `npm run dev`, `npm run build`.
- Docker sirve archivos estáticos como usuario sin privilegios en 8080, con `/health` y CSP.
- `VITE_PANEL_READY=false` mantiene un aviso real de desarrollo al pulsar acceso al panel. Activar únicamente después de desplegar y probar el panel renovado; la URL de destino está fijada a `panel.harkai.lat`.
- Las imágenes del mapa son una ilustración etiquetada, no datos reales. El contenido identifica funcionalidades en desarrollo y no publica un APK antiguo.
- Dominio y aplicación se gestionan en un proyecto Dokploy separado: Harkai Landing.
