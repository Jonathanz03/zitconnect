# Quick Start - ZIT Connect

¡Bienvenido! Tu proyecto ha sido completamente refactorizado. Aquí te mostramos cómo empezar.

## 🚀 Inicio Rápido (5 minutos)

### 1. Abrir el Proyecto
```bash
# Navegar a la carpeta
cd "/c/Users/Jonathan/Documents/zitconnect"

# Abrir index.html en navegador (Windows)
start index.html

# O usar Live Server en VS Code (recomendado)
# 1. Instalar extensión "Live Server"
# 2. Click derecho en index.html → "Open with Live Server"
```

### 2. Verificar que Funciona
- [ ] La página se carga correctamente
- [ ] Los estilos se aplican (página con colores azules)
- [ ] Cambiar idioma (botones FR/ES en navegación)
- [ ] Scroll → secciones aparecen con animación
- [ ] Responsive → Abrir DevTools (F12) → mobile

### 3. Editar Contenido
```bash
# Editar el HTML
index.html                # Contenido de la página

# Editar estilos
css/variables.css         # Colores, tipografía, espaciado
css/base.css             # Reset global
css/layout.css           # Navegación, secciones
css/components.css       # Botones, tarjetas, grillas

# Editar comportamiento
js/main.js              # Lenguaje, scroll-reveal
```

### 4. Desplegar a Internet (Opcional)
Ver **DEPLOY.md** para opciones gratuitas (Netlify, Vercel, GitHub Pages).

---

## 📁 Estructura de Carpetas Explicada

```
zitconnect/
├── index.html          → Tu página principal
├── README.md           → Descripción del proyecto
├── QUICKSTART.md       → Este archivo
├── DEPLOY.md           → Cómo desplegar online
├── REFACTORING-SUMMARY.md → Cambios realizados
│
├── css/                → Estilos CSS organizados
│   ├── variables.css   → Colores, fuentes, espaciado
│   ├── base.css       → Estilos globales
│   ├── layout.css     → Estructura principal
│   ├── components.css → Botones, tarjetas, etc.
│   ├── animations.css → Animaciones
│   └── responsive.css → Para móvil/tablet
│
├── js/                 → Scripts JavaScript
│   └── main.js        → Lógica principal
│
├── assets/            → Archivos estáticos
│   ├── favicon.svg    → Logo pequeño (en navegador)
│   ├── images/        → Tus imágenes aquí
│   └── icons/         → Iconos SVG aquí
│
└── docs/              → Documentación técnica
    ├── ARCHITECTURE.md → Cómo está hecho
    └── CSS-GUIDE.md   → Cómo editar CSS
```

---

## ✏️ Tareas Comunes

### Cambiar Colores
```css
/* En: css/variables.css */
:root {
  --head: #143A63;        /* Headings (títulos) */
  --signal: #0F8DA6;      /* Botones, links */
  --text: #33485B;        /* Texto principal */
  --muted: #6C7F8E;       /* Texto secundario */
  --ink: #EEF3F7;         /* Fondo claro */
  --panel: #FFFFFF;       /* Paneles/tarjetas */
}
```

### Cambiar Tipografía
```css
/* En: css/variables.css */
--display: 'Space Grotesk', system-ui, sans-serif;  /* Títulos */
--body: 'Inter', system-ui, sans-serif;             /* Body */
--mono: 'IBM Plex Mono', ui-monospace, monospace;  /* Código */
```

### Cambiar Espaciado
```css
/* En: css/variables.css */
--spacing-md: 28px;    /* Espaciado defecto */
--spacing-lg: 56px;    /* Espaciado grande */
--spacing-xl: 140px;   /* Padding de secciones */
```

### Agregar Nueva Sección
```html
<!-- En: index.html -->
<section>
  <div class="wrap">
    <h2 class="title">Mi Nueva Sección</h2>
    <p class="lead">Descripción breve</p>
    <!-- Contenido aquí -->
  </div>
</section>
```

### Ocultar Contenido por Idioma
```html
<!-- Visible solo en francés -->
<p class="lang-fr">Bonjour!</p>

<!-- Visible solo en español -->
<p class="lang-es">¡Hola!</p>
```

---

## 🎯 Cambios Después del Refactoring

### ✅ Lo que Mejoró
- ✅ Archivos separados (HTML, CSS, JS)
- ✅ CSS modularizado (6 archivos en lugar de 1)
- ✅ Fácil de mantener y escalar
- ✅ Documentación completa
- ✅ Favicon profesional
- ✅ Responsive mejorado
- ✅ Accesibilidad (focus visible, etc.)

### ⚠️ Lo que NO cambió
- El sitio se ve y funciona exactamente igual
- Mismo contenido, mismas funciones
- Compatible con todos los navegadores
- Sin dependencias externas

---

## 🐛 Troubleshooting

### "Los estilos no se cargan"
```
❌ Problema: Los archivos CSS no se encuentran
✅ Solución: 
- Verificar que estés en la carpeta correcta
- Los paths en index.html deben ser relativos
- Probear con Live Server (no abrir archivo local)
```

### "No puedo cambiar de idioma"
```
❌ Problema: Los botones de idioma no funcionan
✅ Solución:
- Abrir consola (F12 → Console)
- Revisar si hay errores
- Verificar que js/main.js se carga
```

### "Las animaciones son lentaś"
```
❌ Problema: El scroll-reveal se ve lento
✅ Solución:
- Normal en computadoras lentas
- Probar en otra máquina o navegador
- Revisar en DevTools → Performance
```

---

## 📚 Documentos Importantes

| Documento | Para Qué |
|-----------|----------|
| **README.md** | Descripción general del proyecto |
| **QUICKSTART.md** | Este archivo - Inicio rápido |
| **DEPLOY.md** | Cómo publicar online |
| **docs/ARCHITECTURE.md** | Cómo está estructurado el código |
| **docs/CSS-GUIDE.md** | Guía completa de CSS |
| **REFACTORING-SUMMARY.md** | Cambios realizados |

---

## 🔗 Enlaces Útiles

- [VS Code](https://code.visualstudio.com/) - Editor recomendado
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) - Extensión para probar localmente
- [Netlify](https://netlify.com) - Deploy gratis
- [Google Fonts](https://fonts.google.com) - Cambiar fuentes
- [Color Picker](https://www.google.com/search?q=color+picker) - Elegir colores

---

## 💡 Consejos

1. **Usa Live Server** - Mucho más cómodo que recargar manual
2. **Edita CSS primero** - Es lo más visible
3. **Aprende de variables.css** - Todo pasa por allí
4. **Revisa DEPLOY.md** cuando estés listo - Es muy fácil publicar
5. **Haz Git commits** - Guarda tus cambios en versiones

---

## ✨ Próximos Pasos

1. **Hoy**: Abre el proyecto y verifica que funciona
2. **Mañana**: Personaliza colores y contenido
3. **Próxima semana**: Agrega contenido adicional
4. **Próximo mes**: Publica online (¡es gratis!)

---

**¿Preguntas?** Revisa **ARCHITECTURE.md** o **CSS-GUIDE.md** para detalles técnicos.

Happy coding! 🚀
