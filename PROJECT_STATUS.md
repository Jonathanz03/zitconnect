# Estado del proyecto — ZIT Connect

Actualizado: 21 de noviembre de 2026.

## Referencias

| Elemento | Referencia |
| --- | --- |
| Producción | https://www.zitconnect.fr/ |
| Dominio canónico | https://zitconnect.fr/ |
| GitHub | https://github.com/Jonathanz03/zitconnect |
| Rama de producción | `main` |
| Cloudflare Pages | `zitconnect` / https://zitconnect.pages.dev |
| Carpeta local | `C:\Users\Jonathan\Proyectos\zitconnect` |
| Proyecto de Codex | ZIT Connect — Sitio web |

## Estado funcional

- Sitio estático bilingüe francés/español, sin dependencias JavaScript ni build.
- FSPBX y 3CX se presentan como tecnologías independientes en la franja principal.
- La publicación se realiza por GitHub y la integración automática existente con Cloudflare Pages.
- El logo, la dirección de contacto y el endpoint Formspree proceden del proyecto original.
- La interfaz del formulario está verificada. La entrega real de correo requiere una prueba expresamente autorizada.
- El prototipo privado de Sites se conserva como referencia inicial; no es la fuente de la web pública.

## Continuidad

1. Abrir este proyecto y revisar `AGENTS.md`, este archivo, `CHANGELOG.md` y el estado de Git.
2. Identificar los archivos afectados y conservar los cambios locales ajenos a la tarea.
3. Implementar y validar el cambio solicitado.
4. Actualizar el historial y, cuando corresponda publicar, subir el commit y comprobar Cloudflare y el dominio.

La copia local contiene trabajo pendiente ajeno a la web pública. No publicar automáticamente `devis/`, `assets/fspbx-branding/` ni el estado histórico modificado por el usuario. Evitar `git add .` sin revisar el contenido.
