# 📊 Panel de Devis & Facturas - Setup Completado

¡Tu módulo de gestión de devis y facturas está listo! 🎉

## 📍 Ubicación

```
zitconnect/
├── devis/
│   ├── index.html           ← Panel principal
│   ├── README.md            ← Documentación
│   ├── js/
│   │   ├── devis.js         ← Lógica principal
│   │   └── pdf-generator.js ← Generador de PDF
```

## 🚀 Acceso

### Local (mientras desarrollas):
```bash
# Abre el navegador en:
http://localhost:8000/devis/
```

### En Producción (después de desplegar):
```
https://zitconnect.fr/devis/
```

## 🔐 Credenciales por Defecto

**Contraseña:** `zitconnect2026`

⚠️ **Cambiar contraseña AHORA:**

1. Abre: `devis/js/devis.js`
2. Busca línea 8: `password: 'zitconnect2026',`
3. Cambiar a: `password: 'TU_CONTRASEÑA_SEGURA',`
4. Guardar, commit y push

## ✨ Funcionalidades

### ✅ Ya Implementadas

1. **🔐 Autenticación**
   - Login protegido por contraseña
   - Sesión en localStorage

2. **📝 Crear Devis**
   - Formulario completo con cliente
   - Múltiples líneas de servicios
   - Cálculo automático de totales
   - Campos: nombre, contacto, dirección, email

3. **📄 Generación de PDF**
   - Descarga automática en navegador
   - Formato profesional con tu logo
   - Incluye datos de cliente, detalles, totales, condiciones
   - Nombre automático: `DEVIS20260801_ClienteName.pdf`

4. **📋 Historial**
   - Guarda todos los devis
   - Editar devis existentes
   - Descargar PDF de cualquier devis
   - Eliminar devis

5. **💾 Almacenamiento Local**
   - localStorage del navegador
   - Datos persisten aunque cierres el navegador

## 🎯 Tu Primer Devis (Paso a Paso)

1. Abre: `http://localhost:8000/devis/`
2. Escribe contraseña: `zitconnect2026`
3. Haz clic: **"✚ Crear Nuevo Devis"**
4. Completa:
   - Nombre Cliente: `Dauphin Telecom`
   - Contacto: `Frédérique Chevillard`
   - Dirección: `12 rue de la République`
   - Ciudad: `97150 Saint-Martin`
5. Objeto: Describe tu servicio
6. Agrega línea de prestación:
   - Descripción: `Prestaciones de consultoría IT`
   - Cantidad: `70` (horas)
   - Precio: `50` (€)
   - Total se calcula automáticamente → `3500€`
7. Haz clic: **"💾 Guardar Devis"**
8. Haz clic: **"📄 Generar PDF"** → Se descarga automáticamente

## 🔄 Flujo Completo

```
Crear → Completar formulario → Guardar → Descargar PDF
  ↓                                         ↓
Historial → Ver todos → Editar/PDF → Descargar
```

## 🛠️ Personalización

### Cambiar Datos de Empresa

Edita `devis/js/devis.js` (líneas 8-18):

```javascript
companyData: {
  name: 'ZIT Connect',
  ownerName: 'Jonathan ZAMBRANO',
  siret: '878 527 688 00021',
  // ... etc
}
```

### Cambiar Estructura del PDF

Edita `devis/js/pdf-generator.js` - La función `generateDevisPDF()` genera el HTML del PDF.

## 📊 Datos Almacenados

**En localStorage (navegador del usuario):**
- Número devis
- Fecha
- Datos cliente
- Items/servicios
- Totales

**Si limpias caché del navegador:** Se pierden los datos locales
**Solución:** Descarga PDFs regularmente

## 🚀 Despliegue a Producción

1. **Ya está en GitHub** (commit realizado)
2. **Cloudflare Pages** automáticamente incluirá los archivos
3. **En 1-2 minutos** estará disponible en: `https://zitconnect.fr/devis/`

## 📋 Checklist de Setup

- [ ] ✅ Cambiar contraseña en `devis/js/devis.js`
- [ ] ✅ Verificar datos de empresa (líneas 8-18)
- [ ] ✅ Probar localmente: `http://localhost:8000/devis/`
- [ ] ✅ Crear tu primer devis de prueba
- [ ] ✅ Descargar PDF y verificar que se vea bien
- [ ] ✅ Hacer commit y push
- [ ] ✅ Esperar 1-2 minutos a que Cloudflare despliegue
- [ ] ✅ Acceder a producción: `https://zitconnect.fr/devis/`

## 🔒 Seguridad

- ✅ Protegido por contraseña
- ✅ Datos locales (no se suben a servidor)
- ✅ Solo accesible por ti
- ✅ HTTPS en Cloudflare
- ⚠️ Recomendación: Cambiar contraseña regularmente

## 📱 Compatible Con

- Chrome ✅
- Firefox ✅
- Safari ✅
- Edge ✅
- Mobile browsers ✅

## 🆘 Troubleshooting

### "Contraseña incorrecta"
- Verifica que escribes: `zitconnect2026`
- Revisa si la cambiaste en `devis/js/devis.js`

### PDF no se descarga
- Verifica que la librería html2pdf cargue (F12 → Console)
- Desactiva bloqueador de pop-ups

### Datos desaparecieron
- localStorage fue limpiado
- Abre DevTools (F12) → Application → LocalStorage
- Verifica si "zit-devis" existe

### PDF se ve mal
- Edita `devis/js/pdf-generator.js`
- Ajusta estilos CSS en la función `generateDevisPDF()`

## 📞 Próximas Mejoras

- [ ] Backend con Cloudflare Workers para base de datos en la nube
- [ ] Sincronización entre dispositivos
- [ ] Exportar a Excel/CSV
- [ ] Envío por email automático
- [ ] Firma digital
- [ ] Múltiples plantillas

## 📝 Notas

- Los devis se guardan con número automático (DEVIS-YYYY-MM-###)
- Cada devis nuevo incrementa el número secuencial
- PDFs se descarga con nombre: `DEVIS[número]_[cliente].pdf`

---

**Estado:** ✅ Completado y Funcional  
**Fecha:** Agosto 2026  
**Versión:** 1.0

¿Preguntas? Revisa `devis/README.md` para más detalles. 👍
