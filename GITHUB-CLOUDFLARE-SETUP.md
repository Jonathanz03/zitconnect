# 🚀 GitHub + Cloudflare Pages - Setup Automático

Tu repositorio Git está listo localmente. Ahora vamos a conectarlo a GitHub y Cloudflare para despliegue automático.

---

## ✅ Lo Que Ya Hemos Hecho:

- ✅ Inicializado Git localmente
- ✅ Creado primer commit con todo tu código
- ✅ Configurado usuario: **Jonathanz03**
- ✅ Email: **jonathan03.zambrano@gmail.com**

---

## 🎯 Próximos Pasos (15 minutos)

### PASO 1: Crear Repositorio en GitHub

1. Ve a: https://github.com/new
2. Inicia sesión con tu cuenta (Jonathanz03)
3. Completa el formulario:
   ```
   Repository name: zitconnect
   Description: ZIT Connect - Expert in infrastructure and telecom (FR/ES)
   Visibility: Public (recomendado para este proyecto)
   ```
4. **NO marques** "Initialize with README" (ya tenemos código)
5. Click **"Create repository"**

### PASO 2: Conectar Repositorio Local a GitHub

Abre **PowerShell** o **Git Bash** en tu PC:

```bash
# Navega a la carpeta
cd C:\Users\Jonathan\Documents\zitconnect

# Agregar repositorio remoto
git remote add origin https://github.com/Jonathanz03/zitconnect.git

# Cambiar rama a main (estándar actual)
git branch -M main

# Subir tu código a GitHub
git push -u origin main
```

**Esto te pedirá autenticación:**
- Si te pide usuario/contraseña, usa: **Jonathanz03** y tu contraseña de GitHub
- O usa Personal Access Token si tienes habilitado 2FA

**Si todo va bien verás:**
```
Enumerating objects: 31, done.
Counting objects: 100% (31/31), done.
...
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

### PASO 3: Verificar en GitHub

1. Ve a: https://github.com/Jonathanz03/zitconnect
2. ¡Deberías ver todos tus archivos en GitHub! ✓

---

## 🌐 PASO 4: Conectar Cloudflare Pages

### A) En Cloudflare Pages:

1. Ve a: https://pages.cloudflare.com
2. Inicia sesión con tu cuenta Cloudflare
3. Click **"Create a project"**
4. Click **"Connect to Git"**
5. Click **"GitHub"**
6. Autoriza Cloudflare a acceder a GitHub
7. Selecciona repositorio: **zitconnect**
8. Click **"Begin setup"**

### B) Configurar Deploy:

```
Production branch: main
Build command: (dejar VACÍO)
Build output directory: /
```

9. Click **"Save and Deploy"**
10. Espera 1-2 minutos
11. ¡Tu sitio está en vivo en Cloudflare! ✓

**Tu URL será algo como:** `zitconnect.pages.dev`

---

## ✨ PASO 5: Usar Dominio Personalizado (Opcional)

Si tienes dominio `zitconnect.fr`:

1. En Cloudflare Pages → Tu proyecto
2. Click **"Custom domains"**
3. Agrega: `zitconnect.fr`
4. Sigue instrucciones para configurar DNS
5. ¡Listo!

---

## 📝 De Aquí En Adelante - Workflow Automático

**Cada vez que hagas cambios:**

```bash
# 1. Edita archivos en VS Code

# 2. Abre PowerShell en la carpeta zitconnect
cd C:\Users\Jonathan\Documents\zitconnect

# 3. Ver cambios
git status

# 4. Agregar cambios
git add .

# 5. Commit (describe qué cambiaste)
git commit -m "Actualizar sección de servicios"

# 6. Subir a GitHub
git push

# ¡LISTO! En 30-60 segundos Cloudflare automáticamente deploya ✓
```

---

## 🎯 Ejemplo Real:

```
Cambias el email en index.html
    ↓
git add .
git commit -m "Cambiar email"
git push
    ↓
GitHub notifica a Cloudflare
    ↓
Cloudflare automáticamente deploya
    ↓
En 60 segundos tu sitio está actualizado ✓
```

---

## 💾 Comandos Git Útiles

| Comando | Qué Hace |
|---------|----------|
| `git status` | Ver cambios pendientes |
| `git add .` | Agregar todos los cambios |
| `git commit -m "mensaje"` | Crear checkpoint de cambios |
| `git push` | Subir a GitHub (dispara deploy) |
| `git log` | Ver historial de commits |
| `git diff` | Ver qué exactamente cambió |

---

## 🔄 Cambiar Código - Flujo Rápido

### Opción 1: Terminal (Recomendado)

```bash
# Editar archivo
code index.html

# Cuando acabes, en PowerShell:
git add .
git commit -m "Cambio realizado"
git push

# ¡Listo!
```

### Opción 2: VS Code GUI (Más Visual)

1. Abre VS Code
2. Desplázate a carpeta con cambios
3. Click en icono de **Source Control** (izquierda)
4. Click **"+"** para agregar cambios
5. Escribe mensaje de commit
6. Click **Commit**
7. Click **Sync Changes** (o **Push**)
8. ¡Listo!

---

## ✅ Verificación

Después de hacer push:

1. Ve a: https://github.com/Jonathanz03/zitconnect
2. Verifica que ves los cambios
3. Ve a Cloudflare Pages
4. Verifica que dice "Build successful"
5. Visita tu sitio: `zitconnect.pages.dev`
6. ¡Cambios en vivo! ✓

---

## 🆘 Errores Comunes

### Error: "fatal: could not read Username"

**Solución:** GitHub cambió autenticación. Usa Personal Access Token:

1. Ve a: https://github.com/settings/tokens
2. Genera nuevo token (repo access)
3. Copia el token
4. Cuando pida contraseña, pega el token

### Error: "Everything up-to-date"

Significa que no hay cambios nuevos. Es normal cuando ya hiciste push.

### Error: "Branch 'main' not found"

Ejecuta: `git branch -M main`

---

## 🎯 Resumen

| Paso | Acción | Resultado |
|------|--------|-----------|
| 1 | Crear repo en GitHub | Repositorio vacío en GitHub |
| 2 | `git push` | Código sube a GitHub |
| 3 | Conectar Cloudflare Pages | Deploy automático habilitado |
| 4 | Futuro: `git push` | Cloudflare automáticamente deploya |

---

## 🚀 ¡Listo!

A partir de ahora:

✅ Editas localmente  
✅ Haces `git push`  
✅ ¡Tu sitio se actualiza automáticamente!  
✅ Sin subir archivos manualmente  
✅ Sin tocar Cloudflare  

---

## 📞 Próximos Pasos

1. ✅ Ejecuta los comandos de PASO 1 y 2
2. ✅ Verifica que tu código está en GitHub
3. ✅ Conecta Cloudflare Pages
4. ✅ ¡Disfruta del deploy automático!

**¿Necesitas ayuda?** Avísame en cualquier paso. 👍

---

**Versión:** 2.0  
**Fecha:** Agosto 2026
