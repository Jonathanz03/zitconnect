# 📊 ZIT Connect - Panel de Devis & Facturas

Sistema protegido por contraseña para gestionar presupuestos (devis) y facturas.

## 🎯 Características

✅ **Autenticación** - Acceso protegido solo para ti  
✅ **Crear Devis** - Formulario completo con múltiples líneas de servicios  
✅ **Generar PDF** - Descarga automática en formato profesional  
✅ **Historial** - Guarda todos tus devis en localStorage  
✅ **Editar** - Modifica devis existentes  
✅ **Eliminar** - Elimina devis que ya no necesites  

## 🔐 Acceso

- **URL:** `https://zitconnect.fr/devis/` (una vez desplegado)
- **Contraseña:** `zitconnect2026` (puedes cambiarla en `js/devis.js`)

## 📝 Cómo Usar

### 1. Crear un Nuevo Devis

1. Inicia sesión con la contraseña
2. Completa los datos del cliente
3. Describe el objeto/servicio
4. Agrega líneas de prestación:
   - Descripción
   - Cantidad (horas)
   - Precio unitario
5. El total se calcula automáticamente
6. Haz clic en **"Guardar Devis"** para almacenar
7. Haz clic en **"Generar PDF"** para descargar

### 2. Ver Historial

- Haz clic en la pestaña **"Historial"**
- Verás todos tus devis guardados
- Puedes descargar, editar o eliminar cada uno

### 3. Descargar PDF

- Desde el formulario: **"Generar PDF"** (datos actuales)
- Desde el historial: **"PDF"** (datos guardados)

El PDF se descargará automáticamente en tu carpeta de descargas con el nombre:
`DEVIS20260801_ClienteName.pdf`

## 🔧 Configuración

### Cambiar Contraseña

Edita `js/devis.js` línea 8:

```javascript
const CONFIG = {
  password: 'TU_NUEVA_CONTRASEÑA', // Cambiar aquí
```

### Cambiar Datos de la Empresa

También en `js/devis.js`, actualiza `companyData`:

```javascript
companyData: {
  name: 'ZIT Connect',
  ownerName: 'Jonathan ZAMBRANO',
  // ... etc
}
```

## 💾 Almacenamiento

- Los devis se guardan en **localStorage** del navegador
- **No se pierden** si cierras el navegador
- Si limpias el caché del navegador, se perderán los datos
- **Recomendación:** Descarga PDFs regularmente como respaldo

## 📱 Compatibilidad

- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Navegadores móviles

## ⚙️ Próximas Mejoras

- [ ] Backend con Cloudflare Workers
- [ ] Base de datos en Cloudflare KV
- [ ] Sincronización en la nube
- [ ] Múltiples usuarios
- [ ] Exportar a Excel/CSV
- [ ] Envío automático por email

## 🚀 Despliegue

1. Sube la carpeta `devis/` a tu repositorio Git
2. Cloudflare Pages automáticamente incluirá los archivos
3. Accede a: `https://zitconnect.fr/devis/`

---

**Versión:** 1.0  
**Fecha:** Agosto 2026  
**Estado:** Funcional ✅
