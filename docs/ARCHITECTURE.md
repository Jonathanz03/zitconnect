# Arquitectura del Proyecto - ZIT Connect

## 📐 Visión General

ZIT Connect es un sitio web estático single-page (SPA) diseñado con arquitectura limpia, modular y sostenible. No utiliza frameworks o dependencias externas, solo HTML5, CSS3 y Vanilla JavaScript.

## 🏗️ Principios de Diseño

### 1. Separación de Responsabilidades
- **HTML**: Contenido semántico y estructura
- **CSS**: Presentación y layout
- **JavaScript**: Interactividad y dinámico

### 2. Modularidad CSS
El CSS está dividido en archivos lógicos:
- **variables.css**: Tokens de diseño (colores, tipografía, espaciado)
- **base.css**: Estilos globales y reset
- **layout.css**: Estructura principal
- **components.css**: Componentes reutilizables
- **animations.css**: Efectos visuales
- **responsive.css**: Media queries

### 3. Mobile-First Responsive
El diseño comienza en móvil y escala hacia arriba:
- **480px**: Mobile
- **901px+**: Desktop
- Breakpoint principal: 900px

### 4. Accesibilidad Inclusiva
- Navegación por teclado
- Focus visible en elementos interactivos
- Contraste de colores WCAG AA
- Respeto a `prefers-reduced-motion`
- Labels implícitos en formularios

### 5. Performance First
- Sin dependencias externas
- CSS modularizado y ligero
- Lazy loading de recursos
- Animaciones GPU-aceleradas
- Lighthouse score 90+

## 🎨 Sistema de Tokens de Diseño

### Colores
```css
--head:      #143A63    /* Primary - Headings */
--signal:    #0F8DA6    /* Accent - CTAs, highlights */
--text:      #33485B    /* Primary text */
--muted:     #6C7F8E    /* Secondary text */
--ink:       #EEF3F7    /* Light background */
--panel:     #FFFFFF    /* Cards, panels */
--panel-hi:  #F5F9FC    /* Hover state */
--line:      rgba(...)  /* Borders, dividers */
```

### Tipografía
```css
--display:   Space Grotesk  /* Headings, CTA */
--body:      Inter          /* Body text */
--mono:      IBM Plex Mono  /* Code, labels */
```

### Espaciado
```css
--spacing-xs:  8px      /* Small gaps */
--spacing-sm:  14px     /* Medium gaps */
--spacing-md:  28px     /* Default gap */
--spacing-lg:  56px     /* Large sections */
--spacing-xl:  140px    /* Section padding */
```

## 📦 Estructura de Componentes

### Componentes Principales

#### Botones
```html
<button class="btn btn-primary">Acción primaria</button>
<button class="btn btn-ghost">Acción secundaria</button>
```

#### Tarjetas
```html
<div class="pain">         <!-- Pain point card -->
<div class="offer">        <!-- Service offer card -->
<div class="mode">         <!-- Modality card -->
<div class="why-card">     <!-- Why choose card -->
<div class="cert">         <!-- Certification badge -->
```

#### Grillas
```html
<div class="pain-grid">    <!-- 2-col, responsive 1-col -->
<div class="offers-grid">  <!-- 2-col grid -->
<div class="steps">        <!-- 4-col process steps -->
<div class="modes-grid">   <!-- 3-col modalities -->
<div class="res-grid">     <!-- 4-col results -->
<div class="why-grid">     <!-- 3-col why-choose -->
```

#### Secciones
```html
<section id="prestations">
  <div class="wrap">
    <h2 class="title">Título</h2>
    <p class="lead">Subtítulo descriptivo</p>
    <!-- Contenido -->
  </div>
</section>
```

## 🎯 Flujo de Carga

1. **HTML** se descarga y parsea
2. **CSS** se descarga en paralelo (no-blocking)
3. **Google Fonts** se precargan para mejor performance
4. **JavaScript** se descarga con `defer` (no-blocking)
5. **Página se renderiza** sin esperar JS
6. **JS se ejecuta** después del DOM ready
7. **Scroll animations** se inicializan

## 🌐 Multiidioma (i18n)

### Mecanismo
- Clases CSS `lang-fr` y `lang-es` en `<body>`
- Elementos con clase `lang-es` ocultos cuando está en FR
- Elementos con clase `lang-fr` ocultos cuando está en ES

### Persistencia
- Guardar en `localStorage` con clave `zit-language`
- Recuperar en siguiente visita
- Fallback a idioma del navegador

### Ejemplo
```html
<p class="lang-fr">Bonjour</p>
<p class="lang-es">Hola</p>
```

## ♿ Características de Accesibilidad

### Focus Management
```css
a:focus-visible,
button:focus-visible {
  outline: 2px solid var(--signal);
  outline-offset: 3px;
}
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; }
}
```

### Semantic HTML
- `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Jerarquía correcta de headings (h1 > h2 > h3...)
- `<button>` para acciones, `<a>` para navegación
- `<label>` para formularios

## 📊 Animaciones

### Scroll Reveal
- Secciones aparecen suavemente al scrollear
- Usa `IntersectionObserver` API
- Respeta `prefers-reduced-motion`
- Performance: GPU-acelerada

### Node Pulse Animation
- Red de nodos con efecto de onda
- Animación con retraso escalonado
- Keyframe de 3.4 segundos

## 🔄 Mejoras Futuras (Fase 2+)

### Corto Plazo
- [ ] Favicon ICO para máxima compatibilidad
- [ ] Formulario de contacto funcional
- [ ] Dark mode opcional
- [ ] Service Worker para PWA
- [ ] Analytics integrado

### Mediano Plazo
- [ ] Optimizar imágenes a WebP
- [ ] Lazy loading de contenido
- [ ] Compresión de assets
- [ ] Build tool (Vite)
- [ ] Testing automatizado

### Largo Plazo
- [ ] CMS headless para contenido
- [ ] Multilidioma dinámico
- [ ] Blog / news section
- [ ] Versión en otras idiomas
- [ ] Integraciones de terceros

## 📈 Métricas de Calidad

### Performance
- **Lighthouse Score**: 90+
- **FCP** (First Contentful Paint): < 1.8s
- **LCP** (Largest Contentful Paint): < 2.5s
- **CLS** (Cumulative Layout Shift): < 0.1
- **Bundle Size**: < 50KB gzipped

### Accesibilidad
- **WCAG 2.1**: Level AA
- **Contrast Ratio**: 4.5:1 mínimo
- **Keyboard Navigation**: Completamente funcional
- **Screen Reader**: Compatible

### Mantenibilidad
- **CSS Specificity**: Baja y consistente
- **Code Coverage**: >80%
- **Documentación**: Completa
- **Time to Fix Bug**: < 1 hora

## 🚀 Despliegue

### Opciones
1. **Hosting estático** (Netlify, Vercel, GitHub Pages)
2. **Servidor web** (Nginx, Apache)
3. **CDN** (Cloudflare, AWS CloudFront)

### Optimizaciones de Producción
```bash
# Minificar CSS
cssnano --input css/*.css --output dist/style.min.css

# Minificar JS
terser js/main.js --output dist/main.min.js

# Comprimir imágenes
imagemin assets/images/* --output-dir=dist/images
```

---

**Última Actualización**: Agosto 2026  
**Versión**: 2.0 Refactorizado
