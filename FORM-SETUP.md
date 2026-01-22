# 📧 Configuración del Formulario de Contacto

Esta guía te ayudará a conectar el formulario de contacto con un servicio real para recibir los mensajes de tus clientes.

## 🎯 Opción 1: EmailJS (Recomendado - Gratis)

EmailJS te permite enviar emails directamente desde JavaScript sin backend. **100% gratis hasta 200 emails/mes**.

### Paso 1: Crear Cuenta en EmailJS

1. Ve a [EmailJS](https://www.emailjs.com)
2. Haz clic en **"Sign Up Free"**
3. Completa el registro

### Paso 2: Conectar tu Email

1. En el dashboard, ve a **"Email Services"**
2. Haz clic en **"Add New Service"**
3. Selecciona tu proveedor (Gmail, Outlook, etc.)
4. Sigue las instrucciones para conectar tu cuenta
5. Copia tu **Service ID** (ejemplo: `service_abc123`)

### Paso 3: Crear Plantilla de Email

1. Ve a **"Email Templates"**
2. Haz clic en **"Create New Template"**
3. Usa esta plantilla:

```
Asunto: Nuevo contacto desde SmartProtect - {{company}}

De: {{name}}
Empresa: {{company}}
Email: {{email}}
Teléfono: {{phone}}

Mensaje:
{{message}}

---
Este mensaje fue enviado desde smartprotect-landing
```

4. Guarda y copia tu **Template ID** (ejemplo: `template_xyz789`)

### Paso 4: Obtener tu Public Key

1. Ve a **"Account"** > **"General"**
2. Copia tu **Public Key** (ejemplo: `user_AbC123XyZ`)

### Paso 5: Integrar en la Landing Page

Edita `index.html`, justo antes de `</body>` (línea ~685):

```html
<!-- EmailJS SDK -->
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script>
    // Inicializar EmailJS
    emailjs.init('TU_PUBLIC_KEY'); // Reemplaza con tu Public Key
</script>
```

Luego edita `assets/js/main.js`, reemplaza la función `simulateFormSubmission` (línea ~190):

```javascript
const simulateFormSubmission = async (data) => {
  try {
    // Configuración de EmailJS
    const serviceID = 'service_abc123';  // TU Service ID
    const templateID = 'template_xyz789'; // TU Template ID

    // Enviar email
    const response = await emailjs.send(serviceID, templateID, {
      name: data.name,
      company: data.company,
      email: data.email,
      phone: data.phone,
      message: data.message
    });

    console.log('Email enviado exitosamente!', response.status, response.text);
    return response;

  } catch (error) {
    console.error('Error al enviar email:', error);
    throw error;
  }
};
```

### ✅ ¡Listo! Prueba el Formulario

1. Abre tu landing page
2. Completa el formulario
3. Envía un mensaje de prueba
4. Deberías recibir el email en 1-2 minutos

---

## 🎯 Opción 2: Formspree (Muy Fácil)

Formspree es aún más simple pero tiene menos customización. **Gratis hasta 50 envíos/mes**.

### Paso 1: Crear Cuenta

1. Ve a [Formspree](https://formspree.io)
2. Regístrate gratis
3. Crea un nuevo formulario

### Paso 2: Obtener el Endpoint

Formspree te dará una URL como:
```
https://formspree.io/f/abc123xyz
```

### Paso 3: Actualizar el Formulario

Edita `index.html`, encuentra el formulario (línea ~580) y agrega el `action`:

```html
<form class="contact__form"
      id="contact-form"
      action="https://formspree.io/f/TU-FORM-ID"
      method="POST">
    <!-- El resto del formulario permanece igual -->
</form>
```

### Paso 4: JavaScript Opcional

Si quieres mantener el JavaScript para validación y notificaciones, actualiza `assets/js/main.js`:

```javascript
const simulateFormSubmission = async (data) => {
  const response = await fetch('https://formspree.io/f/TU-FORM-ID', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    throw new Error('Error al enviar formulario');
  }

  return await response.json();
};
```

---

## 🎯 Opción 3: Google Forms (100% Gratis)

### Paso 1: Crear el Formulario

1. Ve a [Google Forms](https://forms.google.com)
2. Crea un nuevo formulario
3. Agrega campos: Nombre, Empresa, Email, Teléfono, Mensaje
4. Haz clic en **"Enviar"**
5. Copia el enlace del formulario

### Paso 2: Integración Simple

Reemplaza el formulario actual con un iframe:

```html
<div class="contact__form-wrapper">
    <iframe
        src="TU-ENLACE-DE-GOOGLE-FORM"
        width="100%"
        height="800"
        frameborder="0"
        marginheight="0"
        marginwidth="0">
        Cargando…
    </iframe>
</div>
```

### Paso 3: Ver Respuestas

Las respuestas llegarán automáticamente a Google Sheets vinculado al formulario.

---

## 🎯 Opción 4: Integración con Gmail (Sin Servicios Externos)

### Usando Gmail con EmailJS

1. Activa "Acceso de aplicaciones menos seguras" en Gmail
2. O mejor aún, crea una **Contraseña de Aplicación**:
   - Ve a tu [Cuenta de Google](https://myaccount.google.com)
   - Seguridad > Verificación en 2 pasos
   - Contraseñas de aplicación
   - Selecciona "Correo" y "Otro"
   - Copia la contraseña generada

3. Usa esta contraseña en EmailJS al configurar Gmail

---

## 🎯 Opción 5: Backend Personalizado (Avanzado)

Si tienes conocimientos de programación backend:

### Node.js + Nodemailer

Crea un archivo `server.js`:

```javascript
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: 'smart.sun.protect@gmail.com',
    pass: 'tu-contraseña-de-aplicación'
  }
});

app.post('/api/contact', async (req, res) => {
  const { name, company, email, phone, message } = req.body;

  const mailOptions = {
    from: 'smart.sun.protect@gmail.com',
    to: 'smart.sun.protect@gmail.com',
    subject: `Nuevo contacto desde SmartProtect - ${company}`,
    html: `
      <h2>Nuevo Mensaje de Contacto</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Empresa:</strong> ${company}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Teléfono:</strong> ${phone}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${message}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});
```

---

## 📋 Comparación de Opciones

| Servicio | Precio | Facilidad | Límite | Recomendado Para |
|----------|--------|-----------|--------|------------------|
| **EmailJS** | Gratis (200/mes) | ⭐⭐⭐⭐ | 200 emails/mes | **Recomendado** - Pequeñas empresas |
| **Formspree** | Gratis (50/mes) | ⭐⭐⭐⭐⭐ | 50 emails/mes | Startups iniciales |
| **Google Forms** | Gratis ilimitado | ⭐⭐⭐⭐⭐ | Ilimitado | Muy básico |
| **Backend Propio** | Variable | ⭐⭐ | Ilimitado | Empresas con IT |

## ✅ Checklist de Configuración

- [ ] Servicio de email seleccionado
- [ ] Cuenta creada y configurada
- [ ] Código integrado en la landing page
- [ ] Formulario probado con mensaje de prueba
- [ ] Email de prueba recibido correctamente
- [ ] Notificaciones funcionando en el sitio
- [ ] Validación de campos funcionando

## 🔍 Solución de Problemas

### No recibo los emails

**EmailJS:**
- Verifica que copiaste correctamente los IDs
- Revisa la consola del navegador (F12) para errores
- Confirma que tu servicio de email esté activo
- Verifica la carpeta de spam

**Formspree:**
- Confirma tu email en Formspree
- Verifica que el Form ID sea correcto
- Revisa el límite mensual

### Errores en la consola

```javascript
// Error común: CORS
// Solución: Agrega tu dominio en la configuración del servicio

// Error común: Public Key inválido
// Solución: Verifica que copiaste la key correctamente
```

### El formulario se envía pero no hay feedback

Verifica que las funciones `showNotification` estén correctamente implementadas en `main.js`.

## 📞 Soporte

¿Problemas con la configuración?

- 📧 Email: smart.sun.protect@gmail.com
- 📚 [Documentación EmailJS](https://www.emailjs.com/docs/)
- 📚 [Documentación Formspree](https://help.formspree.io/)

---

## 🎉 Próximos Pasos

Una vez configurado el formulario:

1. ✅ Prueba enviando varios mensajes
2. ✅ Configura una respuesta automática (opcional)
3. ✅ Crea un template de respuesta para clientes
4. ✅ Configura notificaciones en tu móvil
5. ✅ Establece un SLA para responder (ej: 24 horas)

---

**¡Tu formulario está listo para recibir clientes!** 📬✨
