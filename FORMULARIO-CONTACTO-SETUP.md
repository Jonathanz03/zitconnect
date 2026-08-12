# 📋 Formulario de Contacto - Setup Completo

Tu formulario de contacto está listo y configurado. Solo necesitas conectarlo con Formspree para recibir emails.

---

## ✅ Lo Que Hemos Hecho:

1. ✅ Creado formulario HTML profesional y bilingüe
2. ✅ Agregado estilos CSS responsivos
3. ✅ Creado JavaScript para validación y envío
4. ✅ Campos: Nombre, Email, Empresa (opcional), Mensaje

---

## 🚀 Setup de Formspree (5 minutos)

### PASO 1: Crear Cuenta Formspree

1. Ve a: https://formspree.io/
2. Haz clic en **"Sign Up"** (arriba derecha)
3. Crea cuenta con tu email (jonathan.zambrano@zitconnect.fr)
4. Verifica email en tu bandeja de entrada

### PASO 2: Crear Formulario en Formspree

1. Inicia sesión en Formspree
2. Click en **"Create New Form"** o **"+ New"**
3. Ingresa nombre: `ZIT Connect Contact`
4. **Email to receive submissions:** jonathan.zambrano@zitconnect.fr
5. Selecciona plan: **Free** (es suficiente)
6. Click **"Create Form"**

### PASO 3: Obtener Form ID

1. Después de crear, verás una pantalla con tu **Form ID**
2. Se verá así: `f/abcde12345` o similar
3. **Copia el código después de `/f/`** (ej: `abcde12345`)

### PASO 4: Actualizar el Código

En tu proyecto, abre:
```
C:\Users\Jonathan\Documents\zitconnect\js\form.js
```

Encuentra esta línea (línea 32):
```javascript
fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

Reemplaza `YOUR_FORM_ID` con tu Form ID. Por ejemplo:
```javascript
fetch('https://formspree.io/f/abcde12345', {
```

**Guarda el archivo.**

---

## ✅ Verificar Que Funciona

### En Desarrollo (Local):

1. Abre **Live Server** en VS Code (recomendado)
2. O ejecuta: `python -m http.server 8000`
3. Abre: http://localhost:8000
4. Completa el formulario
5. Haz clic en **"Envoyer ma demande"** (FR) o **"Enviar solicitud"** (ES)
6. ¡Deberías ver un mensaje de éxito! ✓

### En Producción (Cloudflare):

1. Sube tu sitio a Cloudflare (ver DEPLOY.md)
2. Visita tu sitio: https://zitconnect.fr
3. Completa el formulario
4. Verifica que recibes el email en: jonathan.zambrano@zitconnect.fr

---

## 📧 Qué Recibirás en Tu Email

Cuando alguien envíe el formulario, recibirás un email como este:

```
From: noreply@formspree.io
To: jonathan.zambrano@zitconnect.fr

Name: Juan García
Email: juan@empresa.com
Company: Tech Solutions
Message: 
Hola, me gustaría saber más sobre vuestros servicios de VoIP...
```

Desde el email, podrás responder directamente al cliente.

---

## 🎯 Campos del Formulario

| Campo | Requerido | Tipo | Descripción |
|-------|-----------|------|-------------|
| **Nombre** | ✅ Sí | Texto | Nombre completo del contacto |
| **Email** | ✅ Sí | Email | Email para responder |
| **Empresa** | ❌ No | Texto | Nombre de la empresa (opcional) |
| **Mensaje** | ✅ Sí | Textarea | Detalles de la solicitud |

---

## 🌐 Soporte Bilingüe

El formulario cambia idioma automáticamente:

**En Francés:**
- "Votre nom" (Su nombre)
- "Votre email" (Su email)
- "Votre message" (Su mensaje)
- "Envoyer ma demande" (Enviar solicitud)

**En Español:**
- "Su nombre"
- "Su correo"
- "Su mensaje"
- "Enviar solicitud"

Los clientes verán según su idioma seleccionado.

---

## ✨ Validación y Feedback

El formulario incluye:

✅ **Validación HTML5:**
- Email debe ser válido
- Nombre y mensaje son requeridos

✅ **Validación JavaScript:**
- Verifica que los campos obligatorios estén completos
- Muestra errores claros

✅ **Feedback Visual:**
- **Enviando...** Mientras se procesa
- ✓ **Éxito** Cuando se envía correctamente
- ✗ **Error** Si hay problema de conexión

---

## 💾 Datos Almacenados en Formspree

Formspree guarda:
- ✓ Todas las respuestas en tu panel
- ✓ Puedes descargarlo como CSV
- ✓ Acceso durante 50 días (plan gratuito)

**Plan Free:** 50 respuestas/mes (es suficiente para empezar)
**Plan Pro:** Respuestas ilimitadas

---

## 🔒 Seguridad

- ✅ HTTPS seguro en Cloudflare
- ✅ Formspree protege contra spam
- ✅ ReCAPTCHA disponible (opcional en Formspree)
- ✅ Tus datos no se venden

---

## 🛠️ Si Algo No Funciona

### El formulario se ve pero no envía:

1. **Verificar Form ID:**
   - Abre js/form.js
   - Busca `YOUR_FORM_ID`
   - ¿Está reemplazado con tu Form ID real?

2. **Verificar Conexión:**
   - Prueba en navegador privado
   - Abre DevTools (F12) → Console
   - ¿Hay errores rojos?

3. **Verificar Email:**
   - ¿Está verificado en Formspree?
   - Revisa bandeja de SPAM en Formspree

### El formulario no aparece:

1. Verifica que `js/form.js` está en la carpeta `js/`
2. Recarga la página (Ctrl+R)
3. Abre DevTools → Console y busca errores

### No recibes emails:

1. Verifica Form ID en Formspree
2. Asegúrate que el email esté verificado
3. Revisa SPAM en tu correo
4. Intenta enviar un email de prueba desde Formspree

---

## 📞 Planes Formspree

| Plan | Precio | Respuestas/mes | Características |
|------|--------|----------------|-----------------|
| **Free** | $0 | 50 | Básico, perfecto para empezar |
| **Pro** | $25 | Ilimitadas | Más funciones, prioridad |
| **Business** | Custom | Custom | Empresa, soporte 24/7 |

Para empezar, el plan **Free** es perfecto.

---

## 🎯 Resumen de Setup

1. ✅ Crear cuenta en formspree.io
2. ✅ Crear formulario en Formspree
3. ✅ Copiar Form ID
4. ✅ Actualizar js/form.js con Form ID
5. ✅ Guardar cambios
6. ✅ Probar en localhost
7. ✅ Subir a Cloudflare
8. ✅ ¡Recibir emails de clientes!

---

## 🚀 Siguiente Paso:

1. Ve a https://formspree.io/
2. Sigue los PASOS 1-4 arriba
3. Actualiza tu js/form.js con el Form ID
4. Avísame cuando esté listo
5. ¡Testeamos juntos!

---

**Versión:** 2.0  
**Fecha:** Agosto 2026  
**Estado:** Listo para setup

¿Preguntas? Lee esta guía o avísame cualquier duda. 👍
