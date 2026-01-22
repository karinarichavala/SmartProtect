# 🚀 Guía de Despliegue en GitHub Pages

Esta guía te ayudará a desplegar la landing page de SmartProtect en GitHub Pages de forma rápida y sencilla.

## 📋 Requisitos Previos

- Cuenta de GitHub
- Git instalado en tu computadora
- Navegador web

## 🔧 Paso 1: Preparar el Repositorio

### 1.1 Crear un nuevo repositorio en GitHub

1. Inicia sesión en [GitHub](https://github.com)
2. Haz clic en el botón **"New"** (esquina superior derecha)
3. Configura tu repositorio:
   - **Repository name**: `smartprotect-landing` (o el nombre que prefieras)
   - **Description**: "Landing page para SmartProtect - Dispensador de Bloqueador Solar Inteligente"
   - **Public** o **Private** (GitHub Pages funciona con ambos)
   - ❌ NO marques "Add a README file" (ya tenemos uno)
   - ❌ NO agregues .gitignore ni licencia (ya están incluidos)
4. Haz clic en **"Create repository"**

### 1.2 Subir el código al repositorio

Abre la terminal/consola en la carpeta del proyecto y ejecuta:

```bash
# Inicializar Git (si no lo has hecho)
git init

# Agregar todos los archivos
git add .

# Hacer el primer commit
git commit -m "Initial commit: SmartProtect Landing Page"

# Conectar con el repositorio remoto (reemplaza TU-USUARIO con tu usuario de GitHub)
git remote add origin https://github.com/TU-USUARIO/smartprotect-landing.git

# Cambiar a la rama main (si es necesario)
git branch -M main

# Subir el código
git push -u origin main
```

## 🌐 Paso 2: Activar GitHub Pages

### Opción A: Desde el sitio web de GitHub

1. Ve a tu repositorio en GitHub
2. Haz clic en **"Settings"** (Configuración)
3. En el menú lateral izquierdo, busca y haz clic en **"Pages"**
4. En la sección **"Source"**:
   - **Branch**: Selecciona `main`
   - **Folder**: Deja `/ (root)`
5. Haz clic en **"Save"**
6. ¡Listo! Espera 1-2 minutos y tu sitio estará disponible en:
   ```
   https://TU-USUARIO.github.io/smartprotect-landing/
   ```

### Opción B: Usando un dominio personalizado (Opcional)

Si tienes un dominio propio:

1. En la misma página de GitHub Pages
2. En **"Custom domain"** ingresa tu dominio: `www.smartprotect.com`
3. Marca la opción **"Enforce HTTPS"**
4. En tu proveedor de dominio, configura los registros DNS:
   - Tipo: `CNAME`
   - Host: `www`
   - Valor: `TU-USUARIO.github.io`

## ✅ Paso 3: Verificar el Despliegue

1. Espera 1-2 minutos después de activar GitHub Pages
2. Visita tu URL: `https://TU-USUARIO.github.io/smartprotect-landing/`
3. Si ves la página, ¡felicidades! 🎉

### Si no funciona:

- Verifica que el repositorio sea público o tengas GitHub Pro
- Asegúrate de haber seleccionado la rama correcta
- Revisa que el archivo `index.html` esté en la raíz del proyecto
- Espera unos minutos más y recarga la página

## 🔄 Paso 4: Actualizar la Página (Cambios Futuros)

Cada vez que hagas cambios al código:

```bash
# Ver los cambios
git status

# Agregar los archivos modificados
git add .

# Hacer commit con un mensaje descriptivo
git commit -m "Descripción de los cambios"

# Subir los cambios
git push origin main
```

Los cambios se reflejarán automáticamente en 1-2 minutos.

## 🎨 Personalizaciones Recomendadas

Antes de desplegar, considera personalizar:

### 1. Información de Contacto
- ✅ Email ya está configurado: `smart.sun.protect@gmail.com`
- Agrega número de teléfono en `index.html` (línea ~605)
- Actualiza la ubicación si es necesaria

### 2. Redes Sociales
Actualiza los enlaces en el footer (`index.html` línea ~650):
```html
<a href="https://linkedin.com/company/smartprotect" ...>
<a href="https://facebook.com/smartprotect" ...>
<a href="https://twitter.com/smartprotect" ...>
```

### 3. Imágenes
- Reemplaza `assets/images/favicon.svg` con tu logo real
- Agrega imágenes del producto en `assets/images/`
- Actualiza las referencias en el HTML

### 4. Colores de Marca
Si quieres cambiar los colores, edita `assets/css/styles.css`:
```css
:root {
  --primary-color: #ff6b35;  /* Tu color principal */
  --secondary-color: #004e89; /* Tu color secundario */
}
```

## 📊 Paso 5: Configurar Google Analytics (Opcional)

Para rastrear visitantes:

1. Crea una cuenta en [Google Analytics](https://analytics.google.com)
2. Obtén tu código de seguimiento (G-XXXXXXXXXX)
3. Agrega antes de `</head>` en `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🔍 Paso 6: SEO y Optimización

### Actualizar Meta Tags

Edita en `index.html` (líneas 5-10):

```html
<meta name="description" content="Tu descripción personalizada aquí">
<meta name="keywords" content="tus, palabras, clave, aquí">
<meta property="og:image" content="URL de tu imagen de preview">
```

### Agregar Google Search Console

1. Ve a [Google Search Console](https://search.google.com/search-console)
2. Agrega tu sitio
3. Verifica la propiedad siguiendo las instrucciones
4. Envía tu sitemap (si tienes uno)

## 🛠️ Solución de Problemas Comunes

### Error 404
- Verifica que `index.html` esté en la raíz del repositorio
- Confirma que GitHub Pages esté activado
- Espera 5-10 minutos y limpia el caché del navegador

### Los CSS no cargan
- Verifica las rutas en `index.html`
- Deben ser relativas: `assets/css/styles.css`
- NO uses rutas absolutas como `/assets/css/styles.css`

### El favicon no aparece
- Convierte el SVG a PNG de 32x32 usando [convertio.co](https://convertio.co/es/svg-png/)
- Guárdalo como `favicon.png` en `assets/images/`
- Actualiza la ruta en `index.html`

### Imágenes rotas
- Verifica que las rutas sean relativas
- Usa: `assets/images/nombre.png`
- NO uses: `/assets/images/nombre.png`

## 📱 Probar en Diferentes Dispositivos

Prueba tu landing page en:
- 📱 Móvil (iOS y Android)
- 💻 Desktop (Chrome, Firefox, Safari)
- 🖥️ Tablet (iPad, Android tablet)

Usa las DevTools del navegador (F12) para probar diferentes tamaños de pantalla.

## 🎯 Checklist Final

Antes de compartir tu landing page:

- [ ] Todos los enlaces funcionan correctamente
- [ ] El formulario de contacto está probado
- [ ] Las imágenes cargan correctamente
- [ ] El sitio es responsivo en móvil y desktop
- [ ] Los meta tags están personalizados
- [ ] El favicon aparece correctamente
- [ ] No hay errores en la consola del navegador (F12)
- [ ] El sitio carga rápidamente (< 3 segundos)

## 🚀 Siguiente Nivel

### Conectar Formulario de Contacto

Integra el formulario con alguno de estos servicios:

1. **EmailJS** (Gratis)
   - https://www.emailjs.com
   - Sin backend necesario

2. **Formspree** (Gratis hasta 50/mes)
   - https://formspree.io
   - Simplemente actualiza la action del form

3. **Google Forms**
   - Integra con Google Sheets
   - Gratis e ilimitado

### Añadir Certificado SSL

GitHub Pages ya incluye HTTPS automático, pero verifica:
- ✅ Tu sitio debe usar `https://` no `http://`
- ✅ Marca "Enforce HTTPS" en configuración

## 📞 ¿Necesitas Ayuda?

- 📧 Email: smart.sun.protect@gmail.com
- 💬 Abre un Issue en GitHub
- 📖 Lee el README.md para más información

---

**¡Feliz despliegue!** 🎉

*Desarrollado con ❤️ para SmartProtect* 🌞
