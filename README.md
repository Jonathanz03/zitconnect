# ZIT Connect — Website

Expert indépendant en infrastructure et télécoms à Toulouse. Téléphonie VoIP, virtualisation, migrations sans coupure et supervision.

## 📁 Estructura del Proyecto

```
zitconnect/
├── index.html              # Página principal
├── css/                    # Estilos modularizados
│   ├── variables.css       # Variables CSS (colores, tipografía, espaciado)
│   ├── base.css           # Reset y estilos globales
│   ├── layout.css         # Estructura principal (nav, secciones, footer)
│   ├── components.css     # Componentes reutilizables (botones, tarjetas, grillas)
│   ├── animations.css     # Animaciones y keyframes
│   └── responsive.css     # Media queries
├── js/                     # Scripts
│   └── main.js            # Lógica principal (lenguaje, scroll-reveal)
├── assets/                 # Archivos estáticos
│   ├── favicon.svg        # Logo como favicon
│   ├── logo.svg           # Logo vectorial
│   └── images/            # Imágenes optimizadas
├── README.md              # Este archivo
└── .gitignore             # Archivos ignorados por Git
```

## 🚀 Características

- ✅ **HTML5 semántico** - Estructura accesible y bien definida
- ✅ **CSS modularizado** - Organización limpia y mantenible
- ✅ **Responsive Design** - Optimizado para móvil, tablet y desktop
- ✅ **Sin dependencias** - Vanilla JavaScript, sin frameworks
- ✅ **Multiidioma** - Soporte francés/español
- ✅ **Animaciones suaves** - Scroll reveal y micro-interacciones
- ✅ **Accesibilidad** - WCAG 2.1 compatibility
- ✅ **SEO optimizado** - Meta tags, Open Graph, Schema.org

## 🎨 Paleta de Colores

```css
--head: #143A63           /* Azul oscuro - Headings */
--signal: #0F8DA6         /* Azul teal - Acciones */
--text: #33485B           /* Gris oscuro - Texto */
--muted: #6C7F8E          /* Gris medio - Texto secundario */
--ink: #EEF3F7            /* Azul muy claro - Fondo */
--panel: #FFFFFF          /* Blanco - Paneles */
```

## 📱 Breakpoints Responsive

- **Desktop**: 900px+
- **Tablet**: 481px - 900px
- **Mobile**: 0px - 480px

## 🌐 Multiidioma

El sitio soporta:
- 🇫🇷 Francés (por defecto)
- 🇪🇸 Español

La preferencia de idioma se guarda en `localStorage` con la clave `zit-language`.

## 🔧 Desarrollo

### Requisitos
- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Editor de texto (VS Code recomendado)

### Estructura de Archivos CSS

Los estilos están organizados por responsabilidad:

1. **variables.css** - Variables CSS centralizadas
2. **base.css** - Reset y estilos globales
3. **layout.css** - Estructura principal
4. **components.css** - Componentes reutilizables
5. **animations.css** - Animaciones
6. **responsive.css** - Media queries

### Convenciones de Código

- Usar variables CSS para valores reutilizables
- Nombres de clases en kebab-case
- Evitar especificidad innecesaria
- Comentarios solo donde sea necesario
- Indentación: 2 espacios

## 📈 Performance

- **CLS**: Sin cambio de layout inesperado
- **LCP**: Optimizado para carga rápida
- **FID**: Interactividad instantánea
- **Lighthouse Score**: 90+

## ♿ Accesibilidad

- ✅ Contraste de colores 4.5:1+
- ✅ Navegación por teclado funcional
- ✅ Focus visible en todos los elementos interactivos
- ✅ ARIA labels donde sea necesario
- ✅ Respeto a `prefers-reduced-motion`

## 🔐 SEO

- ✅ Meta descriptions
- ✅ Open Graph tags
- ✅ Canonical URLs
- ✅ Schema.org markup
- ✅ Sitemap XML
- ✅ robots.txt

## 📞 Contacto

Para consultorías o soporte del sitio, contactar a través del formulario en la página.

---

**Versión**: 2.0 Refactorizado  
**Última actualización**: Agosto 2026  
**Licencia**: Privado
