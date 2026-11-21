# ZIT Connect — instrucciones del proyecto web

## Alcance y referencias

- Sitio profesional de Jonathan Zambrano, ingeniero de sistemas y especialista VoIP en Toulouse.
- Producción: https://www.zitconnect.fr/ y https://zitconnect.fr/.
- Repositorio: https://github.com/Jonathanz03/zitconnect, rama `main`.
- Cloudflare Pages: proyecto `zitconnect`; los commits de `main` despliegan automáticamente.
- Canonical: https://zitconnect.fr/.
- El prototipo privado de Sites fue el punto de partida del rediseño. La versión pública se mantiene en este repositorio.

## Contenido e identidad

- Francés por defecto y español completo. Las traducciones de contenido se mantienen en los atributos `data-es`; metadatos y estados dinámicos, en `main.js`.
- Mantener FSPBX y 3CX con visibilidad equivalente en la presentación de tecnologías VoIP. Jonathan señaló expresamente que FSPBX no debe quedar oculto dentro de FusionPBX.
- Conservar el logo y la identidad azul marino/turquesa. No inventar clientes, certificaciones, métricas ni garantías de continuidad.
- Mantener los servicios de telefonía, infraestructura/redes, supervisión y automatización.

## Código y publicación

- HTML, CSS y JavaScript estáticos, sin framework ni build obligatorio.
- Los archivos activos son `index.html`, `styles.css`, `main.js`, el logo y favicon de `assets/`, `robots.txt`, `sitemap.xml` y `_headers`.
- Revisar `git status` antes de modificar. Conservar los cambios del usuario y publicar únicamente los archivos del cambio solicitado.
- La copia local puede contener `devis/`, `assets/fspbx-branding/` y modificaciones privadas de `STATUS-20260813.md`. No incluirlos automáticamente en commits o despliegues.
- No escribir credenciales, tokens ni datos privados en archivos versionados, instrucciones o salidas.
- Usar la conexión GitHub disponible para publicar. No sustituir un método de autenticación existente sin necesidad.
- Actualizar `CHANGELOG.md` y `PROJECT_STATUS.md` con los cambios y validaciones relevantes. El hash actual se obtiene de Git, evitando escribir el hash de un commit dentro de ese mismo commit.
- Respetar las solicitudes de trabajo local, revisión o guardado sin publicación. Cuando se publique, seguir el despliegue de Cloudflare hasta conocer el resultado.

## Validación

- `node --check main.js` para cambios de JavaScript.
- Verificar recursos locales, enlaces internos, traducciones y metadatos afectados.
- Ante cambios de diseño, revisar escritorio y móvil, legibilidad, foco y ausencia de desbordamiento horizontal.
- Comprobar el dominio público y los recursos modificados después del despliegue. Mantener la indexación habilitada en producción.
- El formulario conserva el endpoint Formspree existente. No enviar solicitudes reales de prueba sin autorización específica del usuario; distinguir la validación de interfaz de la entrega real de correo.
