# Guía de Despliegue - ZIT Connect

## 🚀 Opciones de Despliegue

El sitio ZIT Connect es completamente estático (HTML + CSS + JS vanilla), por lo que se puede desplegar en casi cualquier plataforma de hosting.

## 1️⃣ Despliegue Rápido (Recomendado)

### Netlify
```bash
# 1. Crear cuenta en netlify.com
# 2. Conectar repositorio Git
# 3. Build command: (dejar vacío)
# 4. Publish directory: . (raíz del proyecto)
# 5. Deploy

# O usar Netlify CLI:
npm install -g netlify-cli
netlify deploy --prod --dir=.
```

### Vercel
```bash
# 1. Crear cuenta en vercel.com
# 2. Importar proyecto desde Git
# 3. No requiere configuración adicional
# 4. Despliegue automático en cada push a main
```

### GitHub Pages
```bash
# 1. Habilitar Pages en Settings > Pages
# 2. Seleccionar rama: main
# 3. Seleccionar carpeta: / (root)
# 4. GitHub Pages publica automáticamente
# URL: https://usuario.github.io/zitconnect
```

## 2️⃣ Despliegue Tradicional

### Servidor Nginx
```nginx
# /etc/nginx/sites-available/zitconnect

server {
    listen 80;
    server_name zitconnect.fr www.zitconnect.fr;
    
    root /var/www/zitconnect;
    index index.html;
    
    # Caché de assets estáticos
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
    
    # HTML siempre fresco
    location ~* \.html$ {
        expires 1h;
        add_header Cache-Control "public, max-age=3600";
    }
    
    # SPA fallback
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Seguridad
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
}
```

### Apache
```apache
# .htaccess
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    
    # Cache de assets
    <FilesMatch "\.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2)$">
        Header set Cache-Control "max-age=2592000, public"
    </FilesMatch>
    
    # HTML fresco
    <FilesMatch "\.html$">
        Header set Cache-Control "max-age=3600, public"
    </FilesMatch>
    
    # Redirigir requests a index.html
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule ^ index.html [QSA,L]
</IfModule>

# Seguridad
<IfModule mod_headers.c>
    Header always set X-Frame-Options "SAMEORIGIN"
    Header always set X-Content-Type-Options "nosniff"
    Header always set X-XSS-Protection "1; mode=block"
    Header always set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
```

## 3️⃣ SSL/HTTPS

### Let's Encrypt (Gratis)
```bash
# Instalar Certbot
sudo apt update
sudo apt install certbot python3-certbot-nginx

# Generar certificado
sudo certbot certonly --nginx -d zitconnect.fr -d www.zitconnect.fr

# Auto-renovación
sudo systemctl enable certbot.timer
sudo systemctl start certbot.timer
```

### Configurar Nginx con SSL
```nginx
server {
    listen 443 ssl http2;
    server_name zitconnect.fr www.zitconnect.fr;
    
    ssl_certificate /etc/letsencrypt/live/zitconnect.fr/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/zitconnect.fr/privkey.pem;
    
    # Redirigir HTTP a HTTPS
    server {
        listen 80;
        server_name zitconnect.fr www.zitconnect.fr;
        return 301 https://$server_name$request_uri;
    }
    
    # ... resto de configuración
}
```

## 4️⃣ CDN (Cloudflare)

```bash
# 1. Crear cuenta en cloudflare.com
# 2. Agregar dominio
# 3. Cambiar nameservers en registrador
# 4. Esperar propagación (15-48 horas)
# 5. Habilitar en Dashboard:
#    - Caching: Standard
#    - HTTPS: Full (Strict recomendado)
#    - Security: Medium (o High si lo requiere)
```

## 5️⃣ Optimizaciones de Producción

### Minificación
```bash
# Instalar herramientas
npm install -g cssnano terser

# Minificar CSS
cssnano css/variables.css css/base.css css/layout.css \
        css/components.css css/animations.css css/responsive.css \
        --output dist/styles.min.css

# Minificar JS
terser js/main.js --compress --mangle --output dist/main.min.js
```

### Compresión Gzip
```nginx
# En Nginx
gzip on;
gzip_types text/html text/plain text/css text/javascript 
           application/json application/javascript application/xml+rss 
           application/rss+xml application/atom+xml image/svg+xml 
           text/x-component text/x-cross-domain-policy;
gzip_min_length 1000;
gzip_disable "msie6";
```

### Headers de Seguridad
```
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Content-Security-Policy: default-src 'self'; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src fonts.gstatic.com; script-src 'self'
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: accelerometer=(), camera=(), microphone=(), geolocation=()
```

## 6️⃣ Checklist Pre-Despliegue

- [ ] Validar HTML (validator.w3.org)
- [ ] Validar CSS (jigsaw.w3.org/css-validator)
- [ ] Revisar links rotos (broken-link-checker)
- [ ] Lighthouse audit > 90
- [ ] Probar en navegadores: Chrome, Firefox, Safari, Edge
- [ ] Probar responsive en mobile
- [ ] Verificar meta tags
- [ ] Revisar robots.txt
- [ ] Revisar sitemap.xml
- [ ] HTTPS habilitado
- [ ] Cache headers configurados
- [ ] CDN activado (opcional)
- [ ] Monitoreo configurado

## 7️⃣ Monitoreo Post-Despliegue

### Google Analytics
```html
<!-- En index.html, antes de </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXX');
</script>
```

### Uptime Monitoring
- Usar: Pingdom, UptimeRobot, o StatusCake
- Configurar alertas por email
- Revisar diariamente

### Performance Monitoring
- Google Search Console
- Google PageSpeed Insights
- Ahrefs Site Audit

## 8️⃣ Actualización de Contenido

### Cambios Menores
```bash
# 1. Editar index.html directamente
# 2. Commit a GitHub
# 3. Git push (despliegue automático si está configurado)
```

### Agregar Nueva Sección
```bash
# 1. Editar index.html
# 2. Agregar CSS en components.css si es necesario
# 3. Revisar responsive
# 4. Validar HTML
# 5. Commit + push
```

### Cambiar Estilos
```bash
# 1. Editar archivo CSS específico
# 2. Verificar cambios en navegador (F5)
# 3. Probar en mobile
# 4. Commit + push
```

## 🆘 Troubleshooting

### "Página no se carga"
- Verificar que el servidor devuelve HTTP 200
- Revisar CORS headers si hay error en consola
- Verificar que los paths de assets son correctos

### "Estilos no se aplican"
- Limpiar caché del navegador (Ctrl+Shift+Del)
- Verificar que los links de CSS están en `<head>`
- Revisar orden de cascada CSS

### "JavaScript no funciona"
- Abrir consola (F12)
- Revisar errores en consola
- Verificar que js/main.js se carga
- Verificar que el script tiene `defer`

### "Animaciones lentas"
- Revisar en DevTools Performance tab
- Reducir cantidad de animaciones simultáneas
- Usar `transform` en lugar de `top`/`left`

## 📞 Soporte

Para problemas de despliegue o deployment:
- Contactar al proveedor de hosting
- Revisar logs del servidor
- Usar herramientas de debugging (curl, wget)

---

**Versión**: 2.0  
**Última actualización**: Agosto 2026
