# SmartProtect - Landing Page

![SmartProtect Logo](https://img.shields.io/badge/SmartProtect-Protección%20Solar%20Inteligente-ff6b35?style=for-the-badge)

Landing page profesional para **SmartProtect**, dispensadores inteligentes de bloqueador solar para empresas. Desarrollada con HTML5, CSS3 y JavaScript vanilla siguiendo las mejores prácticas de programación web.

## 🌟 Características

- ✨ **Diseño Moderno y Responsivo**: Adaptable a todos los dispositivos (móvil, tablet, desktop)
- 🎨 **Interfaz Atractiva**: Diseño profesional con gradientes y animaciones suaves
- 🚀 **Alto Rendimiento**: Optimizado para carga rápida y rendimiento
- ♿ **Accesibilidad**: Cumple con estándares WCAG
- 📱 **Mobile-First**: Diseñado primero para dispositivos móviles
- 🌙 **Dark Mode Support**: Soporte para modo oscuro automático
- 🎯 **SEO Optimizado**: Meta tags y estructura semántica
- 📊 **Formulario de Contacto**: Validación y feedback al usuario

## 📁 Estructura del Proyecto

```
smartprotect-landing/
│
├── index.html                 # Página principal
├── README.md                  # Documentación
│
├── assets/
│   ├── css/
│   │   ├── normalize.css      # Reset CSS
│   │   ├── styles.css         # Estilos principales
│   │   └── responsive.css     # Media queries
│   │
│   ├── js/
│   │   └── main.js           # JavaScript principal
│   │
│   └── images/               # Imágenes del proyecto
│       └── favicon.png
│
└── .gitignore                # Archivos ignorados por Git
```

## 🚀 Inicio Rápido

### Opción 1: Despliegue en GitHub Pages

1. **Fork o clona este repositorio**
   ```bash
   git clone https://github.com/tu-usuario/smartprotect-landing.git
   ```

2. **Navega al directorio**
   ```bash
   cd smartprotect-landing
   ```

3. **Sube a GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

4. **Activa GitHub Pages**
   - Ve a Settings > Pages
   - Selecciona la rama `main`
   - Guarda los cambios
   - Tu sitio estará disponible en: `https://tu-usuario.github.io/smartprotect-landing/`

### Opción 2: Servidor Local

Simplemente abre `index.html` en tu navegador favorito, o usa un servidor local:

```bash
# Con Python
python -m http.server 8000

# Con Node.js (npx)
npx serve

# Con PHP
php -S localhost:8000
```

Luego visita `http://localhost:8000` en tu navegador.

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con variables CSS, Flexbox y Grid
- **JavaScript ES6+**: Funcionalidad interactiva
- **Font Awesome 6**: Iconos vectoriales
- **Google Fonts**: Tipografía Inter

## 📋 Secciones de la Landing Page

1. **Header/Navegación**: Menú fijo con navegación suave
2. **Hero Section**: Presentación principal con CTA
3. **Beneficios**: 6 beneficios clave del producto
4. **Producto**: Características técnicas del dispensador
5. **Planes/Precios**: 3 planes de suscripción (Básico, Estándar, Premium)
6. **Contacto**: Formulario funcional con validación
7. **Footer**: Información de contacto y enlaces

## 🎨 Personalización

### Colores

Edita las variables CSS en `assets/css/styles.css`:

```css
:root {
  --primary-color: #ff6b35;      /* Color principal */
  --secondary-color: #004e89;    /* Color secundario */
  --accent-color: #ffc107;       /* Color de acento */
  /* ... más variables */
}
```

### Contenido

Edita directamente el contenido en `index.html`. Todas las secciones están claramente comentadas.

### Imágenes

Reemplaza los iconos placeholder con tus propias imágenes en `assets/images/`.

## 📱 Responsive Design

La landing page es completamente responsiva con breakpoints en:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accesibilidad

- Navegación por teclado completa
- Etiquetas ARIA apropiadas
- Contraste de colores WCAG AA
- Soporte para lectores de pantalla
- Preferencias de movimiento reducido

## 🔧 Funcionalidades JavaScript

- ✅ Menú móvil interactivo
- ✅ Navegación activa en scroll
- ✅ Scroll suave a secciones
- ✅ Botón "volver arriba"
- ✅ Validación de formulario
- ✅ Notificaciones al usuario
- ✅ Animaciones con Intersection Observer
- ✅ Debouncing para optimización

## 📧 Integración del Formulario de Contacto

El formulario actualmente simula el envío. Para integrarlo con un backend real, edita la función `simulateFormSubmission` en `assets/js/main.js`:

```javascript
const simulateFormSubmission = async (data) => {
  // Reemplaza con tu endpoint
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    throw new Error('Error al enviar formulario');
  }

  return await response.json();
};
```

### Opciones de integración:

1. **EmailJS**: Servicio gratuito para enviar emails
2. **Formspree**: Backend as a Service para formularios
3. **Google Forms**: Integración con Google Sheets
4. **Backend propio**: Node.js, PHP, Python, etc.

## 🌐 SEO

Meta tags incluidos:

- ✅ Description
- ✅ Keywords
- ✅ Open Graph (Facebook, LinkedIn)
- ✅ Canonical URL
- ✅ Viewport
- ✅ Charset UTF-8

## 🚀 Optimización de Rendimiento

- CSS minificado en producción (recomendado)
- JavaScript con debouncing
- Lazy loading para imágenes (implementar si necesario)
- Intersection Observer para animaciones eficientes
- Fuentes con `font-display: swap`

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la Licencia MIT.

## 👥 Autores

**SmartProtect Team**
- Brandon Oña
- Karina Arichavala

## 📞 Contacto

- **Email**: [smart.sun.protect@gmail.com](mailto:smart.sun.protect@gmail.com)
- **Ubicación**: Quito, Ecuador

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 🐛 Reporte de Bugs

Si encuentras algún bug, por favor abre un issue en GitHub con:

- Descripción del problema
- Pasos para reproducirlo
- Comportamiento esperado
- Screenshots (si aplica)
- Navegador y versión

## 📝 Changelog

### v1.0.0 (2025-01-22)
- ✨ Lanzamiento inicial
- 🎨 Diseño responsivo completo
- 📱 Menú móvil funcional
- 📧 Formulario de contacto con validación
- ♿ Mejoras de accesibilidad
- 🚀 Optimizaciones de rendimiento

---

**Desarrollado con ❤️ para SmartProtect** 🌞
