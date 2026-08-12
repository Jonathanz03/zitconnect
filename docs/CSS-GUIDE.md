# Guía CSS - ZIT Connect

## 📋 Índice de Archivos CSS

### 1. variables.css
Define todos los tokens de diseño centralizados.

**Contenido:**
- Paleta de colores (14 variables)
- Tipografía (3 familias)
- Espaciado (5 variables)
- Transiciones (2 variables)

**Uso:**
```css
/* En cualquier archivo CSS */
color: var(--head);
font-family: var(--display);
padding: var(--spacing-md);
```

### 2. base.css
Reset y estilos globales que aplican a todo el documento.

**Contenido:**
- Box model: `box-sizing: border-box`
- Scroll smooth
- Reset de body, a, button
- Selection color
- Focus visible (accesibilidad)

**Nota:** Muy minimalista, solo lo esencial.

### 3. layout.css
Estructura principal: navegación, hero, secciones, footer.

**Componentes:**
- `.wrap` - Contenedor max-width
- `section` - Secciones con padding
- `.eyebrow` - Label pequeño con línea
- Headings: `h2.title`
- Nav: `header.nav`, `.nav-inner`, `.nav-links`, `.nav-cta`
- Hero: `.hero`, `.hero h1`, `.hero .sub`
- Footer: `footer.site`, `.foot-inner`

**Ejemplo:**
```html
<header class="nav">
  <div class="nav-inner">
    <div class="brand">
      <img class="logo" src="..." />
    </div>
  </div>
</header>

<section>
  <div class="wrap">
    <h2 class="title">Título</h2>
  </div>
</section>
```

### 4. components.css
Componentes reutilizables: botones, tarjetas, grillas.

**Botones:**
```html
<button class="btn btn-primary">Primario</button>
<button class="btn btn-ghost">Ghost</button>
```

**Tarjetas de dolor:**
```html
<div class="pain">
  <div class="mk">🔴</div>
  <p>Descripción del problema</p>
</div>
```

**Grillas:**
- `.pain-grid` - 2 cols (responsive)
- `.offers-grid` - 2 cols con bordes
- `.steps` - 4 cols para procesos
- `.modes-grid` - 3 cols para modalidades
- `.res-grid` - 4 cols para resultados
- `.why-grid` - 3 cols para beneficios

**Ejemplo Completo:**
```html
<section id="prestations">
  <div class="wrap">
    <h2 class="title">Prestaciones</h2>
    <div class="offers-grid">
      <div class="offer">
        <div class="kick">Premium</div>
        <h3>Nombre servicio</h3>
        <ul>
          <li>Punto 1</li>
          <li>Punto 2</li>
        </ul>
      </div>
    </div>
  </div>
</section>
```

### 5. animations.css
Animaciones y efectos visuales.

**Keyframes:**
- `nodepulse` - Animación de red con ondas
- `scroll-reveal` - Aparición al scrollear

**Clases:**
- `node-anchor` - Contenedor para nodo animado
- `body.has-js section` - Animación de scroll

**Respeto a Preferencias:**
```css
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; }
}
```

### 6. responsive.css
Media queries para diferentes dispositivos.

**Breakpoints:**
- `@media (max-width: 900px)` - Tablet
- `@media (max-width: 480px)` - Mobile
- `@media (prefers-reduced-motion: reduce)` - Accesibilidad

**Cambios en Tablet (900px):**
- Secciones: 74px padding (vs 140px)
- `.nav-links`: ocultos
- Grillas: 1 col (vs 2-4)
- Steps: 2 cols

**Cambios en Mobile (480px):**
- Padding: 20px (vs 28px)
- Nav CTA: oculto
- Readout: 100% width

## 🎨 Convenciones de Nombres de Clases

Utilizamos una variante simplificada de **BEM** (Block Element Modifier):

### Bloques
```css
.section-name { }        /* Sección principal */
.card { }               /* Componente tarjeta */
.grid { }               /* Grilla contenedora */
```

### Elementos
```css
.card-title { }         /* Elemento dentro de .card */
.card-description { }   /* Elemento dentro de .card */
```

### Modificadores
```css
.btn-primary { }        /* Variante primaria */
.btn-ghost { }          /* Variante ghost */
```

### Ejemplos en Proyecto
```css
.pain              /* Bloque: tarjeta de dolor */
.pain .mk          /* Elemento: marcador dentro de .pain */
.offers-grid       /* Bloque: grilla de ofertas */
.offer             /* Bloque: tarjeta individual */
.nav-links         /* Bloque: enlaces de navegación */
.nav-links a       /* Elemento: enlace individual */
```

## 🔌 Variables Reutilizables

### Colores
```css
var(--head)           /* #143A63 - Headings */
var(--signal)         /* #0F8DA6 - Acciones */
var(--text)           /* #33485B - Texto */
var(--muted)          /* #6C7F8E - Texto secundario */
var(--ink)            /* #EEF3F7 - Fondo claro */
var(--panel)          /* #FFFFFF - Panel blanco */
var(--line)           /* rgba(...) - Bordes */
```

### Tipografía
```css
var(--display)     /* Space Grotesk - Headings */
var(--body)        /* Inter - Body text */
var(--mono)        /* IBM Plex Mono - Code */
```

### Dimensiones
```css
var(--maxw)        /* 1120px - Max ancho contenedor */
var(--spacing-xs)  /* 8px - Pequeño */
var(--spacing-sm)  /* 14px - Medio pequeño */
var(--spacing-md)  /* 28px - Defecto */
var(--spacing-lg)  /* 56px - Grande */
var(--spacing-xl)  /* 140px - Extra grande */
```

### Transiciones
```css
var(--transition-fast)   /* 0.18s */
var(--transition-normal) /* 0.2s */
var(--transition-slow)   /* 0.7s */
var(--timing-ease-out)   /* ease-out */
```

## 🔄 Patrón de Cascada CSS

```
base.css (reset global)
  ↓
layout.css (estructura)
  ↓
components.css (componentes)
  ↓
animations.css (efectos)
  ↓
responsive.css (media queries)
```

Las media queries en `responsive.css` sobreescriben estilos anteriores.

## ✏️ Cómo Agregar un Nuevo Componente

### Paso 1: Definir clases en HTML
```html
<div class="my-component">
  <h3 class="my-component-title">Título</h3>
  <p class="my-component-description">Descripción</p>
</div>
```

### Paso 2: Agregar CSS en components.css
```css
.my-component {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: var(--spacing-md);
}

.my-component-title {
  font-family: var(--display);
  font-weight: 600;
  color: var(--head);
  margin: 0 0 var(--spacing-sm);
}

.my-component-description {
  margin: 0;
  color: var(--muted);
  font-size: 0.95rem;
}
```

### Paso 3: Agregar media queries en responsive.css
```css
@media (max-width: 900px) {
  .my-component {
    padding: var(--spacing-sm);
  }
}
```

## 🎯 Tips de Performance

1. **Usar variables CSS** en lugar de valores hardcodeados
2. **Evitar `!important`** - indica problema de especificidad
3. **No anidar selectores innecesariamente**
4. **Usar `:hover` en lugar de `@media` para interactividad**
5. **GPU-accelerate** con `transform` y `opacity` (no `top`, `left`)

```css
/* ✅ Bueno - GPU accelerated */
.element:hover {
  transform: translateY(-2px);
}

/* ❌ Evitar - CPU expensive */
.element:hover {
  top: -2px;
}
```

## 🧪 Testing CSS

### Herramientas Recomendadas
- **Lighthouse** - Auditoría general (Chrome DevTools)
- **WAVE** - Accesibilidad (Wave.webaim.org)
- **axe DevTools** - Accesibilidad avanzada
- **Color Contrast Analyzer** - Verificar ratios de contraste

### Checklist de Validación
- [ ] Especificidad baja (evitar `#id` y anidación)
- [ ] No hay CSS no utilizado (tree-shaking)
- [ ] Responsive probado en 480px, 900px, 1200px
- [ ] Animaciones respetan `prefers-reduced-motion`
- [ ] Focus visible en todos los elementos interactivos
- [ ] Contraste 4.5:1 para texto principal

---

**Versión**: 2.0  
**Última actualización**: Agosto 2026
