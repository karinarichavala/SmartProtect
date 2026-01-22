# 🎨 Guía de Personalización - SmartProtect

Esta guía te ayudará a personalizar la landing page para que se ajuste perfectamente a tu marca.

## 🎯 Personalizaciones Esenciales

### 1. 📧 Información de Contacto

**Archivo**: `index.html`

#### Email (Ya configurado ✅)
```html
Línea ~605: smart.sun.protect@gmail.com
Línea ~655: smart.sun.protect@gmail.com
```

#### Teléfono (Agregar)
```html
<!-- Busca la línea ~610 y agrega: -->
<div class="contact__detail">
    <i class="fas fa-phone contact__detail-icon"></i>
    <div>
        <h4 class="contact__detail-title">Teléfono</h4>
        <p class="contact__detail-text">+593 XX XXX XXXX</p>
    </div>
</div>
```

#### Ubicación (Actualizar)
```html
<!-- Línea ~618, personaliza según tu ciudad -->
<p class="contact__detail-text">Tu Ciudad, Ecuador</p>
```

### 2. 🎨 Colores de Marca

**Archivo**: `assets/css/styles.css` (líneas 8-25)

```css
:root {
  /* COLORES PRINCIPALES - Personaliza aquí */
  --primary-color: #ff6b35;      /* Color principal (naranja) */
  --primary-light: #ff8c5f;      /* Variante clara */
  --primary-dark: #e54d1d;       /* Variante oscura */
  --secondary-color: #004e89;    /* Color secundario (azul) */
  --accent-color: #ffc107;       /* Color de acento (amarillo) */

  /* COLORES DE TEXTO */
  --text-color: #2d3748;         /* Texto principal */
  --text-light: #718096;         /* Texto secundario */
  --text-white: #ffffff;         /* Texto blanco */

  /* FONDOS */
  --bg-color: #ffffff;           /* Fondo principal */
  --bg-light: #f7fafc;          /* Fondo claro */
  --bg-gray: #edf2f7;           /* Fondo gris */
}
```

#### Paletas de Colores Sugeridas

**Profesional Azul:**
```css
--primary-color: #2563eb;
--primary-light: #3b82f6;
--primary-dark: #1d4ed8;
--secondary-color: #0891b2;
--accent-color: #10b981;
```

**Energético Verde:**
```css
--primary-color: #10b981;
--primary-light: #34d399;
--primary-dark: #059669;
--secondary-color: #0891b2;
--accent-color: #f59e0b;
```

**Moderno Púrpura:**
```css
--primary-color: #8b5cf6;
--primary-light: #a78bfa;
--primary-dark: #7c3aed;
--secondary-color: #ec4899;
--accent-color: #f59e0b;
```

### 3. 📝 Textos y Contenido

#### Hero Section (Portada)
**Archivo**: `index.html` (líneas ~85-110)

```html
<h1 class="hero__title">
    Tu Título Principal <span class="highlight">Aquí</span>
</h1>
<p class="hero__description">
    Tu descripción personalizada del servicio...
</p>
```

#### Estadísticas
```html
<!-- Línea ~120, actualiza según tus métricas -->
<div class="stat">
    <span class="stat__number">100+</span>
    <span class="stat__label">Tu Métrica</span>
</div>
```

#### Planes y Precios
**Archivo**: `index.html` (líneas ~415-515)

```html
<div class="pricing-card__price">
    <span class="pricing-card__currency">$</span>
    <span class="pricing-card__amount">18</span>  <!-- Cambia el precio -->
    <span class="pricing-card__period">/mes</span>
</div>
```

### 4. 🖼️ Imágenes y Logo

#### Favicon
1. Crea tu logo en formato PNG (32x32 o 64x64 píxeles)
2. Guárdalo como `assets/images/favicon.png`
3. Actualiza en `index.html` (línea ~18):

```html
<link rel="icon" type="image/png" href="assets/images/favicon.png">
```

#### Logo en Navegación
Reemplaza el icono Font Awesome con tu logo:

```html
<!-- Antes (línea ~52) -->
<i class="fas fa-sun nav__icon"></i>

<!-- Después -->
<img src="assets/images/logo.png" alt="SmartProtect" class="nav__logo-img">
```

Agrega este CSS en `assets/css/styles.css`:

```css
.nav__logo-img {
  height: 40px;
  width: auto;
}
```

#### Imágenes del Producto
1. Agrega fotos del dispensador en `assets/images/`
2. Reemplaza los iconos placeholder:

```html
<!-- Línea ~155, reemplaza el icono con tu imagen -->
<div class="hero__image-wrapper">
    <img src="assets/images/dispensador-hero.jpg" alt="Dispensador SmartProtect">
</div>
```

### 5. 🌐 Redes Sociales

**Archivo**: `index.html` (líneas ~650-665)

```html
<div class="footer__social">
    <a href="https://linkedin.com/company/tu-empresa" class="footer__social-link">
        <i class="fab fa-linkedin"></i>
    </a>
    <a href="https://facebook.com/tu-pagina" class="footer__social-link">
        <i class="fab fa-facebook"></i>
    </a>
    <a href="https://twitter.com/tu-cuenta" class="footer__social-link">
        <i class="fab fa-twitter"></i>
    </a>
    <a href="https://instagram.com/tu-cuenta" class="footer__social-link">
        <i class="fab fa-instagram"></i>
    </a>
</div>
```

### 6. 📊 Meta Tags SEO

**Archivo**: `index.html` (líneas 5-12)

```html
<meta name="description" content="Tu descripción personalizada (max 160 caracteres)">
<meta name="keywords" content="palabra1, palabra2, palabra3">
<meta name="author" content="Tu Nombre o Empresa">

<!-- Open Graph para redes sociales -->
<meta property="og:title" content="Tu Título">
<meta property="og:description" content="Tu descripción">
<meta property="og:image" content="https://tu-sitio.com/imagen-preview.jpg">
<meta property="og:url" content="https://tu-sitio.com">
```

### 7. 🔤 Tipografía

Para cambiar la fuente, edita en `index.html` (línea ~20):

```html
<!-- Fuente actual: Inter -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap">

<!-- Opciones alternativas: -->

<!-- Roboto (popular, legible) -->
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap">

<!-- Poppins (moderna, amigable) -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap">

<!-- Montserrat (profesional) -->
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap">
```

Luego actualiza en `assets/css/styles.css`:

```css
:root {
  --font-family: 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;
  /* O la fuente que elegiste */
}
```

## 🎨 Personalizaciones Avanzadas

### Cambiar el Gradiente del Hero

**Archivo**: `assets/css/styles.css` (línea ~230)

```css
.hero {
  /* Gradiente actual: Púrpura */
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

  /* Opciones alternativas: */

  /* Azul a Verde */
  background: linear-gradient(135deg, #667eea 0%, #10b981 100%);

  /* Naranja a Rojo */
  background: linear-gradient(135deg, #ff6b35 0%, #dc2626 100%);

  /* Usa tu color principal */
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
}
```

### Personalizar Animaciones

**Archivo**: `assets/css/styles.css`

Velocidad de transiciones (línea ~48):
```css
:root {
  --transition-fast: 150ms ease-in-out;   /* Rápido */
  --transition-base: 300ms ease-in-out;   /* Normal */
  --transition-slow: 500ms ease-in-out;   /* Lento */
}
```

### Ajustar Espaciado

**Archivo**: `assets/css/styles.css` (línea ~42)

```css
:root {
  --spacing-xs: 0.5rem;   /* 8px - Muy pequeño */
  --spacing-sm: 1rem;     /* 16px - Pequeño */
  --spacing-md: 1.5rem;   /* 24px - Medio */
  --spacing-lg: 2rem;     /* 32px - Grande */
  --spacing-xl: 3rem;     /* 48px - Muy grande */
  --spacing-2xl: 4rem;    /* 64px - Extra grande */
}
```

### Modificar Border Radius

```css
:root {
  --radius-sm: 0.25rem;   /* Esquinas sutiles */
  --radius-md: 0.5rem;    /* Normal */
  --radius-lg: 1rem;      /* Redondeado */
  --radius-full: 9999px;  /* Circular */
}
```

## 📋 Checklist de Personalización

Antes de desplegar, verifica que hayas personalizado:

- [ ] ✉️ Email de contacto
- [ ] 📱 Teléfono (si aplica)
- [ ] 📍 Ubicación/ciudad
- [ ] 🎨 Colores de marca
- [ ] 🖼️ Logo/Favicon
- [ ] 📝 Textos de secciones principales
- [ ] 💰 Precios de planes
- [ ] 🌐 Links de redes sociales
- [ ] 📊 Meta tags SEO
- [ ] 🖼️ Imágenes del producto (si tienes)
- [ ] ✏️ Nombre de la empresa en footer

## 🔧 Herramientas Útiles

### Generadores de Paletas de Colores
- [Coolors.co](https://coolors.co) - Generador de paletas
- [Adobe Color](https://color.adobe.com) - Explorador de color
- [ColorHunt](https://colorhunt.co) - Paletas prediseñadas

### Optimizadores de Imágenes
- [TinyPNG](https://tinypng.com) - Comprimir PNG/JPG
- [Squoosh](https://squoosh.app) - Optimizador de Google
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - Optimizar SVG

### Generadores de Favicon
- [RealFaviconGenerator](https://realfavicongenerator.net)
- [Favicon.io](https://favicon.io)

### Verificadores
- [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [PageSpeed Insights](https://pagespeed.web.dev)
- [Meta Tags Checker](https://metatags.io)

## 💡 Consejos Profesionales

1. **Mantén la Consistencia**: Usa los mismos colores, fuentes y espaciados en toda la página

2. **Menos es Más**: No sobrecargues con muchos colores o tipografías diferentes

3. **Contraste**: Asegúrate de que el texto sea legible sobre los fondos

4. **Prueba en Móvil**: El 70% de tus visitantes usarán móvil

5. **Velocidad**: Optimiza las imágenes antes de subirlas (< 200KB cada una)

6. **Backup**: Guarda una copia antes de hacer cambios grandes

## 🆘 ¿Problemas?

Si rompes algo por error:

1. **Git reset**: Vuelve al último commit funcionando
   ```bash
   git reset --hard HEAD
   ```

2. **Descarga el original**: Puedes volver a clonar el repositorio original

3. **Usa DevTools**: F12 en el navegador para ver errores

## 📞 Soporte

¿Necesitas ayuda personalizada?
- 📧 Email: smart.sun.protect@gmail.com
- 💬 Abre un Issue en GitHub

---

**¡Haz que SmartProtect refleje tu marca!** 🎨✨
