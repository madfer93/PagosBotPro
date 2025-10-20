# 📋 README COMPLETO - PAGOSBOT PRO

---

## 🎯 VISIÓN GENERAL DEL PROYECTO

**PagosBot PRO** es un sistema de control y seguimiento de transferencias bancarias desarrollado por **Variedades JyM** en Villavicencio, Meta, Colombia.

### ¿Qué es realmente PagosBot PRO?

**NO es un simple chatbot de pagos.** Es un **sistema completo de rastreo de pagos** que se vende como producto digital B2B a otros negocios en Colombia.

El producto consiste en un **archivo/sistema (Google Sheets configurado)** que:
- Monitorea automáticamente las transferencias que reciben los clientes
- Captura datos desde múltiples fuentes (Wompi, Gmail, PSE, Nequi, Daviplata)
- Organiza todo en Google Sheets automáticamente por mes
- Permite al cliente ver el estado de sus últimas transferencias (Aprobado/Rechazado)
- Genera reportes y estadísticas en tiempo real

---

## 💼 MODELO DE NEGOCIO

### Clientes Objetivo (B2B)
Negocios/empresas en Colombia que:
- Reciben muchas transferencias bancarias diarias
- Necesitan rastrear si fueron aprobadas o rechazadas
- Usan múltiples plataformas de pago (Wompi, PSE, Nequi, Daviplata)
- Quieren automatizar el control de sus ingresos
- Buscan reducir tiempo en conciliación bancaria

### Lo que se vende
Un **archivo de Google Sheets configurado** con automatizaciones que:
1. Se conecta a las fuentes de pago del cliente
2. Captura transferencias en tiempo real
3. Las organiza automáticamente por mes
4. Muestra dashboard con estadísticas (aprobadas, rechazadas, montos)
5. (Planes Pro/Empresarial) Incluye configuraciones personalizadas

---

## 📦 PLANES Y PRECIOS

### 💼 Plan Básico - $100,000 COP (Pago único)

**Qué incluye:**
- ✅ Archivo de Google Sheets configurado (plantilla básica)
- ✅ Sistema de rastreo de pagos
- ✅ Organización automática por meses
- ✅ Dashboard básico con estadísticas
- ✅ Soporte por email

**Proceso de entrega:**
- Cliente compra → Pago en Wompi
- Make.com detecta la compra automáticamente
- **Envío AUTOMÁTICO del archivo por email**
- Cliente descarga y empieza a usar inmediatamente

**Target:** Pequeños negocios, emprendedores, freelancers

---

### 🚀 Plan Pro - $250,000 COP (Pago único)

**Qué incluye:**
- ✅ Todo lo del Plan Básico
- ✅ Archivo más avanzado con funciones premium
- ✅ Chatbot inteligente con IA de Gemini integrado
- ✅ Automatizaciones personalizadas con Make.com
- ✅ Recordatorios automáticos de pagos pendientes
- ✅ Soporte prioritario (respuesta en 24h)
- ✅ Configuración personalizada

**Proceso de entrega:**
- Cliente compra → Pago en Wompi
- Make.com notifica al administrador
- **Admin configura manualmente:**
  - Conexión con Gmail del cliente
  - Integración con Wompi del cliente
  - Make.com personalizado
  - Archivo avanzado configurado
- Se envía por email con video tutorial

**Target:** Negocios medianos con volumen significativo de pagos

---

### 🏢 Plan Empresarial - $500,000 COP (Pago único)

**Qué incluye:**
- ✅ Todo lo del Plan Pro
- ✅ Archivo empresarial (máximo nivel de configuración)
- ✅ Integraciones ilimitadas (múltiples bancos, PSE, etc.)
- ✅ Reportes avanzados y gráficos personalizados
- ✅ Webhook personalizado para su sistema
- ✅ Soporte 24/7 (WhatsApp directo)
- ✅ Consultoría personalizada (1 hora)
- ✅ Implementación completa y capacitación

**Proceso de entrega:**
- Cliente compra → Pago en Wompi
- Make.com notifica al administrador
- **Admin hace setup completo:**
  - Configuración total del sistema
  - Conexión con todas las cuentas del cliente
  - Personalización completa según necesidades
  - Capacitación en vivo (videollamada)
  - Seguimiento durante 30 días

**Target:** Empresas grandes, alto volumen de transacciones, múltiples usuarios

---

## 🛠️ STACK TECNOLÓGICO

### Frontend
├── HTML5, CSS3, JavaScript (Vanilla)
├── Sin frameworks pesados (optimización de carga)
├── Responsive Design (móvil + desktop)
└── Firebase SDK (autenticación y base de datos)
### Backend/Servicios
├── Firebase Authentication (gestión de usuarios)
├── Cloud Firestore (base de datos NoSQL)
├── Make.com (automatizaciones y workflows)
├── Google Sheets API (almacenamiento y reportes)
└── Wompi API (procesamiento de pagos)
### Hosting & Deploy
├── Netlify (hosting principal)
│   ├── Deploy automático desde GitHub
│   ├── SSL/HTTPS incluido
│   ├── CDN global
│   └── Variables de entorno seguras
└── Alternativas consideradas:
├── Vercel
├── GitHub Pages
└── Cloudflare Pages
### Pasarela de Pagos
Wompi (Colombia)
├── Tarjetas de crédito/débito
├── PSE (transferencia bancaria)
├── Nequi
├── Daviplata
└── Efecty (próximamente)
### Automatización
Make.com (anteriormente Integromat)
├── Escenario 1: Captura de webhooks de Wompi
├── Escenario 2: Envío de emails automatizados
├── Escenario 3: Registro en Google Sheets
├── Escenario 4: Notificaciones por Telegram
└── Escenario 5: Sincronización con Firestore
### Inteligencia Artificial
Google Gemini API
├── Chatbot inteligente en el sitio web
├── Respuestas contextuales sobre planes
├── Asistencia pre-venta automatizada
└── Integración opcional (configurable desde admin)
### Monetización Adicional
Google AdSense (CONSIDERADO PARA EL FUTURO)
└── Posible implementación en blog/contenido educativo
---

## 🔥 INTEGRACIÓN CON FIREBASE

### Configuración Actual

**Proyecto Firebase:** `pagosbotpro`

**Credenciales:** `[PV - Información privada]`

### Servicios Activos

#### 1. Firebase Authentication
**Estado:** ✅ Configurado pero NO implementado aún

**Uso planeado:**
- Login de administrador con email/contraseña
- Login de clientes (Fase 2)
- Gestión de sesiones seguras
- Recuperación de contraseña

**Implementación pendiente:**
FASE 1 (URGENTE):
Proteger panel de admin con Firebase Auth
Crear usuario admin inicial
Implementar flujo de login/logout
FASE 2 (FUTURO):
Sistema de registro de clientes
Email de verificación
Roles y permisos (admin vs cliente)
#### 2. Cloud Firestore
**Estado:** ⚠️ Base de datos NO creada aún

**Estructura planeada:**
pagosbotpro/
├── users/
│   ├── {userId}/
│   │   ├── email: string
│   │   ├── name: string
│   │   ├── role: "admin" | "cliente"
│   │   ├── plan: "basico" | "premium" | "empresarial"
│   │   ├── purchaseDate: timestamp
│   │   ├── active: boolean
│   │   └── lastLogin: timestamp
│
├── sales/
│   ├── {saleId}/
│   │   ├── transactionId: string
│   │   ├── customerEmail: string
│   │   ├── customerName: string
│   │   ├── plan: string
│   │   ├── amount: number
│   │   ├── currency: "COP"
│   │   ├── status: "approved" | "pending" | "rejected"
│   │   ├── paymentMethod: string
│   │   ├── date: timestamp
│   │   └── processed: boolean
│
└── config/
└── settings/
├── makeWebhookUrl: string [PV]
├── geminiApiKey: string [PV - encriptado]
├── telegramBotToken: string [PV]
└── maintenanceMode: boolean
**Ventajas de usar Firestore:**
- ✅ Datos en tiempo real
- ✅ No más localStorage (inseguro)
- ✅ Sincronización entre dispositivos
- ✅ Backup automático
- ✅ Consultas avanzadas
- ✅ Escalable a miles de usuarios

#### 3. Firebase Hosting (Considerado)
**Estado:** ❌ No usado (actualmente en Netlify)

**Razón:** Netlify tiene mejor integración con GitHub y deploy automático más simple.

---

## 📂 ESTRUCTURA DE ARCHIVOS ACTUAL
PagosBotPro/
│
├── 📄 index.html                    # Página principal (landing)
├── 📄 login.html                    # Login del administrador
├── 📄 admin.html                    # Panel de administración
├── 📄 confirmacion.html             # Página post-pago
├── 📄 terminos.html                 # Términos y condiciones
├── 📄 privacidad.html               # Política de privacidad
├── 📄 envio-manual-webhook.html     # ⚠️ BORRAR (no se usa)
├── 📄 usuario.html                  # ⚠️ BORRAR (es Fase 2)
├── 📄 README.md                     # Este archivo
│
├── 📁 css/
│   ├── styles.css                   # Estilos principales
│   └── admin.css                    # Estilos del panel admin
│
├── 📁 js/
│   ├── main.js                      # Lógica principal (botones, chatbot)
│   └── admin.js                     # Lógica del panel admin
│
└── 📁 .github/
└── (configuración de GitHub)
---

## ⚠️ ERRORES ACTUALES Y SOLUCIONES

### 🐛 Error #1: Botones "Comprar Ahora" no funcionan
**Síntoma:** Al hacer clic en los botones de planes, no abre Wompi

**Causa probable:**
- Función `buyPlan()` no está definida correctamente en `main.js`
- Los links de Wompi están mal configurados
- Error de JavaScript bloqueando la ejecución

**Solución:**
```javascript
// En js/main.js debe estar esto:
function buyPlan(plan) {
    const wompiLinks = {
        basico: '[PV - Link privado]',
        premium: '[PV - Link privado]',
        empresarial: '[PV - Link privado]'
    };
    
    if (wompiLinks[plan]) {
        window.open(wompiLinks[plan], '_blank');
    }
}
Verificar: Abrir consola del navegador (F12) y ver si hay errores.
🐛 Error #2: Chatbot no responde
Síntoma: Al escribir en el chatbot y hacer clic en "Enviar", no pasa nada
Causa probable:
Event listeners no están conectados
IDs de elementos HTML no coinciden con JavaScript
Función sendMessage() no definida
Solución:
// Verificar que estos IDs existan en index.html:
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendButton = document.getElementById('sendMessage');

// Y que los event listeners estén configurados:
sendButton.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});
🐛 Error #3: Login no protege el admin
Síntoma: Se puede acceder a admin.html directamente sin hacer login
Causa: Sistema de autenticación con sessionStorage es inseguro y fácil de bypasear
Solución TEMPORAL:
// En admin.html o admin.js:
window.addEventListener('load', function() {
    const isLoggedIn = sessionStorage.getItem('admin_logged_in');
    if (isLoggedIn !== 'true') {
        window.location.href = 'login.html';
    }
});
Solución DEFINITIVA (pendiente):
Implementar Firebase Authentication
Crear usuario admin en Firebase Console
Proteger rutas con tokens reales
🐛 Error #4: Página de confirmación no envía datos
Síntoma: Después del pago, la página carga pero Make.com no recibe datos
Causa probable:
Webhook no configurado en localStorage
Wompi no está enviando parámetros en la URL de redirección
Fetch al webhook está fallando (CORS, URL incorrecta)
Solución:
// 1. Verificar que Wompi esté configurado para redirigir:
// https://tudominio.com/confirmacion.html?plan=basico&id=WOMPI-123

// 2. En confirmacion.html, verificar:
const webhookUrl = localStorage.getItem('make_webhook_url');
if (!webhookUrl) {
    console.error('No hay webhook configurado');
}

// 3. Configurar webhook desde admin.html primero
🐛 Error #5: Archivos CSS/JS no cargan (404)
Síntoma: Página se ve sin estilos o JavaScript no funciona
Causa: Rutas relativas incorrectas
Solución:
<!-- Verificar que las rutas sean correctas: -->
<link rel="stylesheet" href="css/styles.css">  <!-- ✅ Correcto -->
<link rel="stylesheet" href="/css/styles.css"> <!-- ❌ Incorrecto en Netlify -->

<script src="js/main.js"></script>  <!-- ✅ Correcto -->
<script src="/js/main.js"></script> <!-- ❌ Incorrecto en Netlify -->
🐛 Error #6: Firebase no funciona
Síntoma: Errores de Firebase en la consola
Causa: Firebase está configurado pero no implementado correctamente
Solución:
OPCIÓN A: Ignorar Firebase por ahora (usar sessionStorage)
OPCIÓN B: Implementar Firebase correctamente (requiere tiempo)
Recomendación actual: Opción A hasta tener lo básico funcionando
🗂️ ESTRUCTURA DE DATOS (GOOGLE SHEETS)
Sheet del Cliente (El producto que se vende)
Pestaña: DASHBOARD
┌─────────────────────────────────────────────┐
│  📊 DASHBOARD DE PAGOS                      │
├─────────────────────────────────────────────┤
│  ✅ PAGOS APROBADOS                         │
│  Cantidad: 12                               │
│  Monto Total: $5,016,000,100 COP            │
├─────────────────────────────────────────────┤
│  ❌ PAGOS RECHAZADOS                        │
│  Cantidad: 11                               │
│  Monto Total: $700,000 COP                  │
├─────────────────────────────────────────────┤
│  📈 TOTALES GENERALES                       │
│  Total Movimientos: 23                      │
│  % Aprobación: 52%                          │
│  Monto Total Procesado: $5,016,700,100 COP  │
├─────────────────────────────────────────────┤
│  🕐 ÚLTIMA ACTUALIZACIÓN                    │
│  Fecha y Hora: 17/10/2025 16:41:33        │
└─────────────────────────────────────────────┘
Pestaña: ENTRADA (Temporal)
| FECHA      | REFERENCIA         | MEDIO_PAGO | MONTO    | ESTADO    | NOMBRE      | EMAIL            |
|------------|-------------------|------------|----------|-----------|-------------|------------------|
| 17/10/2025 | test_VPOS_12345   | NEQUI      | $100,000 | APPROVED  | Juan Pérez  | juan@ejemplo.com |
Función:
Aquí llegan TODOS los datos de Make.com
Script de Google Apps Script lee esta pestaña
Detecta el mes de la fecha
Si no existe pestaña del mes → La crea
Mueve los datos a la pestaña correspondiente
Limpia ENTRADA
Pestañas mensuales: OCTUBRE, NOVIEMBRE, etc.
| FECHA      | REFERENCIA         | MEDIO_PAGO | MONTO    | ESTADO   |
|------------|-------------------|------------|----------|----------|
| 01/10/2025 | WOMPI-001         | PSE        | $150,000 | APPROVED |
| 05/10/2025 | WOMPI-002         | NEQUI      | $200,000 | APPROVED |
| 10/10/2025 | WOMPI-003         | CARD       | $75,000  | DECLINED |
Se crean automáticamente cuando llega el primer pago del mes.
Sheet de Control Interno
Pestaña: CLIENTES
| FECHA_REGISTRO | NOMBRE      | EMAIL            | PLAN         | MONTO_PAGADO | ESTADO | CONTRASEÑA [PV] | ÚLTIMO_ACCESO | REFERENCIA_WOMPI |
|----------------|-------------|------------------|--------------|--------------|--------|-----------------|---------------|------------------|
| 15/01/2025     | Juan Pérez  | juan@ejemplo.com | Plan Básico  | $29,900      | Activo | [PV]           | 17/01/25 14:30| WOMPI-12345      |
Pestaña: OCTUBRE (ventas del mes)
| FECHA      | REFERENCIA     | MEDIO_PAGO | MONTO   | ESTADO   | PLAN_VENDIDO | EMAIL_CLIENTE    |
|------------|---------------|------------|---------|----------|--------------|------------------|
| 05/10/2025 | WOMPI-SALE-01 | NEQUI      | $29,900 | APPROVED | Plan Básico  | cliente@mail.com |
🔄 FLUJO COMPLETO DEL SISTEMA
FLUJO ACTUAL (LO QUE TENEMOS)
1. Cliente visita el sitio web
   └─> Ve los 3 planes explicados
   └─> Interactúa con el chatbot (si funciona)

2. Cliente hace clic en "Comprar Ahora"
   └─> ⚠️ PROBLEMA: No abre Wompi (hay que arreglar)

3. [DEBE SUCEDER] Cliente llega a Wompi
   └─> Completa formulario (nombre, email, método de pago)
   └─> Ingresa datos de tarjeta/PSE/Nequi

4. [DEBE SUCEDER] Wompi procesa el pago
   └─> Si aprobado → Redirige a confirmacion.html
   └─> Si rechazado → Muestra error

5. [DEBE SUCEDER] confirmacion.html
   └─> Captura parámetros de la URL
   └─> Muestra resumen de la compra
   └─> ⚠️ PROBLEMA: No envía datos a Make.com

6. [DEBE SUCEDER] Make.com recibe datos
   └─> Guarda en Google Sheets
   └─> Envía email al cliente
   └─> Notifica al admin por Telegram
FLUJO IDEAL (LO QUE QUEREMOS)
┌─────────────────────────────────────────────┐
│  1. CLIENTE EN EL SITIO WEB                 │
└──────────────┬──────────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────────┐
│  2. INTERACCIÓN PRE-VENTA                   │
│  - Chatbot responde dudas                   │
│  - Compara planes                           │
│  - Lee términos y privacidad                │
└──────────────┬──────────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────────┐
│  3. CLIC EN "COMPRAR AHORA"                 │
│  ✅ Abre Wompi en nueva pestaña            │
└──────────────┬──────────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────────┐
│  4. CHECKOUT EN WOMPI                       │
│  - Cliente ingresa datos                    │
│  - Selecciona método de pago                │
│  - Completa transacción                     │
└──────────────┬──────────────────────────────┘
               │
         ┌─────┴─────┐
         │           │
    APROBADO    RECHAZADO
         │           │
         ▼           ▼
   confirmacion.html  error.html
         │
         ▼
┌─────────────────────────────────────────────┐
│  5. PÁGINA DE CONFIRMACIÓN                  │
│  - Muestra resumen de compra                │
│  - Captura datos del URL                    │
│  - Envía automáticamente a Make.com         │
└──────────────┬──────────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────────┐
│  6. MAKE.COM PROCESA                        │
│  ├─> Guarda en Google Sheets                │
│  ├─> Envía email con archivo                │
│  ├─> Notifica admin por Telegram            │
│  └─> [Futuro] Crea usuario en Firebase      │
└─────────────────────────────────────────────┘
🚀 ROADMAP DEL PROYECTO
✅ FASE 0 - PREPARACIÓN (COMPLETADA)
[x] Crear proyecto en GitHub
[x] Configurar hosting en Netlify
[x] Obtener dominio/URL
[x] Crear proyecto en Firebase
[x] Configurar cuenta de Wompi
[x] Crear cuenta en Make.com
[x] Diseñar estructura de Google Sheets
🔥 FASE 1 - MVP FUNCIONAL (EN PROGRESO)
Objetivo: Sistema básico que permita vender
Tareas críticas:
[ ] ARREGLAR: Botones de compra que abran Wompi
[ ] ARREGLAR: Chatbot que responda
[ ] ARREGLAR: Página de confirmación que envíe datos
[ ] IMPLEMENTAR: Login básico para admin (con sessionStorage)
[ ] CONFIGURAR: Webhook en Make.com funcionando
[ ] PROBAR: Flujo completo de compra (con link de prueba)
Archivos a actualizar:
├── js/main.js        (botones + chatbot)
├── confirmacion.html (captura y envío de datos)
├── login.html        (login simple)
└── admin.js          (verificación de sesión)
Tiempo estimado: 1-2 días
Resultado: Ya se puede vender el Plan Básico
🔐 FASE 2 - SEGURIDAD Y ADMIN (PRÓXIMA)
Objetivo: Panel de admin protegido correctamente
Tareas:
[ ] Implementar Firebase Authentication para admin
[ ] Crear usuario admin en Firebase Console
[ ] Migrar configuraciones de localStorage a Firestore
[ ] Sistema de logout funcional
[ ] Protección real de rutas
Archivos nuevos/modificados:
├── js/firebase-config.js (NUEVO)
├── login.html            (con Firebase Auth)
├── admin.js              (con Firebase Auth)
└── admin.html            (script type="module")
Tiempo estimado: 2-3 días
Resultado: Admin 100% seguro
👥 FASE 3 - PANEL DE CLIENTES (FUTURO)
Objetivo: Clientes pueden hacer login y ver sus datos
Tareas:
[ ] Crear Firestore collections (users, sales)
[ ] Página de login para clientes
[ ] Panel de cliente (dashboard personal)
[ ] Sistema de registro automático al comprar
[ ] Envío de credenciales por email
[ ] Recuperación de contraseña
Archivos nuevos:
├── cliente-login.html
├── cliente-panel.html
├── js/cliente.js
└── css/cliente.css
Tiempo estimado: 1 semana
Resultado: Sistema completo de usuarios
📈 FASE 4 - ESCALAMIENTO (LARGO PLAZO)
Objetivo: Crecer el negocio y optimizar
Tareas:
[ ] Blog con artículos SEO
[ ] Considerar implementar Google AdSense
[ ] Sistema de referidos/afiliados
[ ] Integraciones con más bancos
[ ] App móvil (opcional)
[ ] Sistema de suscripción mensual (opcional)
[ ] Dashboard avanzado con gráficos
[ ] Exportación de reportes en PDF/Excel
[ ] Notificaciones push
[ ] Chat de soporte en vivo
Tiempo estimado: 3-6 meses
Resultado: Producto escalable y rentable
🎯 PRIORIDADES INMEDIATAS
🔴 URGENTE (Hacer HOY)
Arreglar botones de "Comprar Ahora"
Arreglar chatbot
Borrar archivos innecesarios (envio-manual-webhook.html, usuario.html)
🟡 IMPORTANTE (Esta semana)
Configurar webhook en Make.com
Probar flujo completo con link de prueba
Implementar login básico del admin
🟢 MEJORAS (Próxima semana)
Migrar a Firebase Authentication
Crear Firestore database
Dashboard del admin con estadísticas
📞 CONTACTO Y SOPORTE
Información del Proyecto
Nombre:     PagosBot PRO
Propietario: Variedades JyM
Ubicación:   Villavicencio, Meta, Colombia
Email:       [PV - Información privada]
Enlaces Importantes
Sitio Web:   [PV - URL privada]
GitHub:      https://github.com/madfer93/PagosBotPro
Firebase:    [PV - Consola privada]
Wompi:       [PV - Dashboard privado]
Make.com:    [PV - Dashboard privado]
🔧 CONFIGURACIÓN TÉCNICA DETALLADA
Wompi - Links de Pago Configurados
// Links de producción (REALES) - [PV]
const wompiLinks = {
    basico: '[PV - Link privado]',
    premium: '[PV - Link privado]',
    empresarial: '[PV - Link privado]'
};

// Link de pruebas (solo para admin) - [PV]
const testLink = '[PV - Link privado]';
Configuración de redirección en Wompi:
URL de redirección exitosa: [PV - URL privada]

Parámetros que Wompi debe enviar:
?id={transaction_id}&status={status}&reference={reference}&plan={plan_type}
Tarjetas de prueba de Wompi:
Visa (Aprobada):
Número: 4242 4242 4242 4242
CVV: 123
Fecha: Cualquier fecha futura

Mastercard (Aprobada):
Número: 5555 5555 5555 4444
CVV: 123
Fecha: Cualquier fecha futura

Visa (Rechazada):
Número: 4000 0000 0000 0002
CVV: 123
Fecha: Cualquier fecha futura
Make.com - Escenarios de Automatización
Escenario 1: Captura de Pago y Procesamiento
Webhook (Trigger)
  └─> Recibe datos de confirmacion.html
  
Router
  ├─> Si plan = "basico"
  │     └─> Gmail: Enviar email con archivo adjunto
  │     └─> Sheets: Registrar venta en pestaña CLIENTES
  │     └─> Sheets: Agregar a pestaña OCTUBRE (o mes actual)
  │     └─> Telegram: Notificar admin
  │
  ├─> Si plan = "premium"
  │     └─> Gmail: Enviar email "En proceso"
  │     └─> Sheets: Registrar venta
  │     └─> Telegram: Notificar admin con prioridad ALTA
  │     └─> Crear tarea en Trello/Notion (opcional)
  │
  └─> Si plan = "empresarial"
        └─> Gmail: Enviar email "En proceso"
        └─> Sheets: Registrar venta
        └─> Telegram: Notificar admin con prioridad CRÍTICA
        └─> Crear tarea en Trello/Notion (opcional)
        └─> Agendar reunión en Google Calendar (opcional)
Estructura del webhook esperada:
{
  "event": "payment_success",
  "transaction": {
    "id": "WOMPI-12345",
    "status": "APPROVED",
    "reference": "REF-ABC123",
    "date": "2025-01-17T21:41:25.029Z"
  },
  "customer": {
    "name": "Juan Pérez",```markdown
    "email": "juan@ejemplo.com"
  },
  "plan": {
    "type": "basico",
    "name": "Plan Básico",
    "price": 29900,
    "currency": "COP",
    "file_to_send": "PagosBot_Basico.xlsx"
  },
  "metadata": {
    "source": "confirmacion_page",
    "timestamp": "2025-01-17T21:41:25.029Z",
    "url": "[PV - URL privada]"
  }
}
```

**URL del Webhook de Make.com:**
```
[PV - Webhook URL privada]
```
⚠️ Esta URL debe configurarse desde el panel de admin

---

#### Escenario 2: Notificación por Telegram
```
Formato del mensaje:
🎉 NUEVA VENTA - PLAN [TIPO]

👤 Cliente: [Nombre]
📧 Email: [Email]
💰 Monto: $[Precio] COP
💳 Método: [Método de pago]
📅 Fecha: [Fecha y hora]

✅ Estado: APROBADO
📎 Archivo: [Estado de envío]

🔗 Referencia: [ID de transacción]

[Si es Plan Pro/Empresarial]
⚠️ ACCIÓN REQUERIDA: Configurar manualmente
```

**Configuración de Telegram Bot:**
```
1. Crear bot con @BotFather en Telegram
2. Obtener token del bot - [PV]
3. Obtener tu Chat ID - [PV]
4. Configurar en Make.com
```

---

### Firebase - Configuración Detallada

#### Reglas de Seguridad de Firestore (Cuando se implemente)
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Usuarios - Solo pueden leer sus propios datos
    match /users/{userId} {
      allow read: if request.auth != null && request.auth.uid == userId;
      allow write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Ventas - Solo admin puede leer/escribir
    match /sales/{saleId} {
      allow read, write: if request.auth != null && 
                           get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
    
    // Configuración - Solo admin
    match /config/{document=**} {
      allow read, write: if request.auth != null && 
                           get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
  }
}
```

#### Reglas de Storage (Para archivos - futuro)
```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    
    // Archivos de clientes
    match /client-files/{userId}/{fileName} {
      allow read: if request.auth != null && request.auth.uid == userId;
      allow write: if false; // Solo el backend puede escribir
    }
    
    // Archivos públicos
    match /public/{fileName} {
      allow read: if true;
      allow write: if false;
    }
  }
}
```

---

## 🧪 TESTING Y CALIDAD

### Tests Manuales a Realizar

#### Test 1: Flujo de Compra Básico
```
✓ Paso 1: Abrir index.html
✓ Paso 2: Hacer clic en "Comprar Plan Básico"
✓ Paso 3: Verificar que abre Wompi en nueva pestaña
✓ Paso 4: Usar tarjeta de prueba (4242 4242 4242 4242)
✓ Paso 5: Completar formulario
✓ Paso 6: Confirmar pago
✓ Paso 7: Verificar redirección a confirmacion.html
✓ Paso 8: Verificar que se muestran datos correctos
✓ Paso 9: Abrir Make.com y verificar que llegaron datos
✓ Paso 10: Verificar email recibido
✓ Paso 11: Verificar notificación en Telegram
✓ Paso 12: Verificar registro en Google Sheets
```

#### Test 2: Chatbot
```
✓ Escribir "hola" → Debe responder bienvenida
✓ Escribir "planes" → Debe listar los 3 planes
✓ Escribir "precio" → Debe mostrar precios
✓ Escribir "básico" → Debe dar info del plan básico
✓ Escribir "comprar" → Debe dar instrucciones
✓ Presionar Enter → Debe enviar mensaje
✓ Scroll automático → Debe bajar al último mensaje
```

#### Test 3: Panel de Admin
```
✓ Ir a /admin.html sin login → Debe redirigir a login
✓ Login con credenciales incorrectas → Debe mostrar error
✓ Login con credenciales correctas → Debe entrar al admin
✓ Guardar webhook → Debe guardar y mostrar confirmación
✓ Guardar API Gemini → Debe guardar y mostrar confirmación
✓ Cerrar sesión → Debe limpiar sesión y volver a login
✓ Intentar volver a admin → Debe pedir login nuevamente
```

#### Test 4: Responsive
```
✓ Desktop (1920x1080) → Todo se ve bien
✓ Laptop (1366x768) → Todo se ve bien
✓ Tablet (768x1024) → Todo se ve bien
✓ Mobile (375x667) → Todo se ve bien
✓ Menu en mobile → Hamburger menu funciona (si aplica)
```

---

### Checklist de Deploy a Producción

```
Pre-Deploy:
□ Todos los links de Wompi son de producción (NO test)
□ Firebase está en modo producción (NO modo prueba)
□ Variables de entorno configuradas en Netlify
□ Términos y condiciones actualizados
□ Política de privacidad actualizada
□ Email de contacto correcto
□ Links de redes sociales (si aplica)

Testing:
□ Flujo completo de compra probado
□ Todos los botones funcionan
□ Chatbot responde correctamente
□ Panel de admin protegido
□ Página de confirmación envía datos
□ Make.com recibe y procesa datos
□ Emails se envían correctamente
□ Telegram notifica correctamente

Post-Deploy:
□ Verificar sitio en producción
□ Hacer compra de prueba real ($1000 COP)
□ Verificar analytics (si está configurado)
□ Documentar cualquier error
□ Monitorear primeras 24 horas
```

---

## 🛡️ SEGURIDAD Y PRIVACIDAD

### Datos Sensibles
```
⚠️ NUNCA exponer en el código cliente:
- API Keys de servicios - [PV]
- Tokens de acceso - [PV]
- Credenciales de bases de datos - [PV]
- Webhooks privados - [PV]

✅ Usar variables de entorno en Netlify para:
- Firebase API Key (público, pero limitar por dominio)
- Gemini API Key - [PV]
- Otros servicios futuros
```

### GDPR y Protección de Datos
```
Datos recopilados:
- Nombre del cliente
- Email del cliente
- Plan comprado
- Monto pagado
- Método de pago (tipo, NO datos de tarjeta)
- Fecha de compra
- IP (solo para fraud prevention en Wompi)

Uso de los datos:
- Procesar la venta
- Enviar el producto digital
- Soporte al cliente
- Estadísticas internas (anonimizadas)

Retención:
- Datos de clientes activos: Indefinido
- Datos de clientes inactivos: 2 años
- Logs de transacciones: 5 años (obligación legal)

Derechos del usuario:
- Acceso a sus datos
- Rectificación de datos
- Eliminación de datos
- Portabilidad de datos
- Oposición al procesamiento
```

---

## 🐛 DEBUGGING Y TROUBLESHOOTING

### Problemas Comunes y Soluciones

#### "Los botones no hacen nada"
```
Diagnóstico:
1. Abrir consola del navegador (F12)
2. Buscar errores en rojo
3. Verificar si main.js se cargó

Soluciones:
- Verificar ruta de main.js en index.html
- Verificar que función buyPlan() esté definida
- Verificar sintaxis de JavaScript (comas, llaves)
- Limpiar caché del navegador (Ctrl+Shift+R)
```

#### "El webhook no recibe datos"
```
Diagnóstico:
1. Verificar que localStorage tenga 'make_webhook_url'
2. Abrir Network tab en DevTools
3. Buscar request a Make.com
4. Ver si hay error CORS o 404

Soluciones:
- Configurar webhook desde admin.html primero
- Verificar URL del webhook (debe incluir https://)
- Verificar que Make.com scenario esté ACTIVO
- Probar con Postman/Insomnia primero
```

#### "Firebase da error"
```
Diagnóstico:
1. Verificar en consola qué error específico
2. auth/invalid-email
3. auth/user-not-found
4. auth/wrong-password

Soluciones:
- Verificar que Firebase esté inicializado
- Verificar que el usuario exista en Firebase Console
- Verificar credenciales
- Verificar que Authentication esté habilitado
```

#### "Página se ve sin estilos"
```
Diagnóstico:
1. F12 → Network tab
2. Buscar styles.css
3. Ver si es 404 o 200

Soluciones:
- Verificar ruta: href="css/styles.css" (sin / al inicio)
- Verificar que el archivo exista en GitHub
- Limpiar caché (Ctrl+F5)
- Verificar en Netlify que los archivos se subieron
```

---

## 🔮 FUTURAS INTEGRACIONES

### Integraciones Planeadas

#### Google Analytics 4
```
Objetivo: Entender comportamiento de usuarios

Eventos a trackear:
- page_view (automático)
- plan_view (usuario ve un plan específico)
- button_click (clic en "Comprar Ahora")
- chat_message (usuario usa el chatbot)
- purchase (compra exitosa)
- form_start (empieza login/registro)
- form_submit (completa login/registro)
```

#### Hotjar o Microsoft Clarity
```
Objetivo: Ver mapas de calor y grabaciones de sesiones

Beneficios:
- Ver dónde hacen clic los usuarios
- Detectar puntos de fricción
- Optimizar UX basado en datos reales
- Ver qué secciones se ignoran
```

#### WhatsApp Business API
```
Objetivo: Soporte directo por WhatsApp

Funcionalidades:
- Botón "Contactar por WhatsApp" en el sitio
- Mensajes automatizados
- Confirmación de compra por WhatsApp
- Soporte en tiempo real
```

#### Stripe (Alternativa a Wompi)
```
Objetivo: Aceptar pagos internacionales

Ventajas:
- Acepta clientes fuera de Colombia
- Más métodos de pago
- Mejor documentación
- Webhooks más robustos

Consideraciones:
- Comisiones más altas que Wompi
- Requiere USD (conversión de COP)
- Implementación más compleja
```

#### Google AdSense (Considerado)
```
Objetivo: Generar ingresos pasivos adicionales

Estrategia:
- Crear blog con contenido educativo
- Artículos sobre gestión de pagos
- Tutoriales de automatización
- Casos de éxito

Consideraciones:
- Requiere contenido de calidad (20-30 artículos)
- Tráfico mínimo: 1000 visitas/mes
- No colocar anuncios en páginas críticas (checkout, login)
- Evaluar si aporta o distrae de la conversión principal
```

---

## 📚 RECURSOS Y DOCUMENTACIÓN

### Documentación Externa

#### Wompi
```
Docs oficiales: https://docs.wompi.co/
API Reference: https://docs.wompi.co/reference/
Sandbox: https://sandbox.wompi.co/
Dashboard: [PV - Dashboard privado]
Soporte: soporte@wompi.co
```

#### Firebase
```
Docs: https://firebase.google.com/docs
Authentication: https://firebase.google.com/docs/auth
Firestore: https://firebase.google.com/docs/firestore
Console: [PV - Consola privada]
Pricing: https://firebase.google.com/pricing (Gratuito hasta cierto límite)
```

#### Make.com
```
Docs: https://www.make.com/en/help
Templates: https://www.make.com/en/templates
Academy: https://www.make.com/en/academy
Community: https://community.make.com/
Pricing: Gratis hasta 1,000 operaciones/mes
```

#### Google Sheets API
```
Docs: https://developers.google.com/sheets/api
Quickstart: https://developers.google.com/sheets/api/quickstart/js
Apps Script: https://developers.google.com/apps-script
```

#### Netlify
```
Docs: https://docs.netlify.com/
Deploy: https://docs.netlify.com/site-deploys/create-deploys/
Env Variables: https://docs.netlify.com/environment-variables/overview/
Forms: https://docs.netlify.com/forms/setup/
```

---

## 🎓 GLOSARIO DE TÉRMINOS

```
Webhook: URL que recibe datos automáticamente cuando ocurre un evento
API: Interfaz que permite que dos aplicaciones se comuniquen
Token: Código único para autenticar solicitudes a un servicio
CORS: Política de seguridad del navegador para peticiones entre dominios
Session: Periodo de tiempo en que un usuario está logueado
localStorage: Almacenamiento en el navegador (persiste al cerrar)
sessionStorage: Almacenamiento en el navegador (se borra al cerrar)
CDN: Red de servidores para entregar contenido rápidamente
SSL/HTTPS: Protocolo seguro de transferencia de datos (candado en navegador)
Deploy: Subir código a producción (publicar el sitio)
Firestore: Base de datos NoSQL de Firebase
NoSQL: Base de datos sin estructura rígida de tablas
B2B: Business to Business (vender a otras empresas)
COP: Peso colombiano
PSE: Pagos Seguros en Línea (sistema bancario colombiano)
NPS: Net Promoter Score (métrica de satisfacción)
KPI: Key Performance Indicator (indicador clave de rendimiento)
```

---

## ✅ CHECKLIST FINAL ANTES DE LANZAR

### Técnico
```
□ Todos los botones funcionan correctamente
□ Chatbot responde a preguntas comunes
□ Links de Wompi apuntan a producción (NO test)
□ Página de confirmación captura y envía datos
□ Webhook de Make.com recibe datos correctamente
□ Make.com envía emails automáticamente
□ Google Sheets registra ventas
□ Panel de admin está protegido
□ Términos y condiciones actualizados
□ Política de privacidad actualizada
□ Sitio es responsive (móvil + desktop)
□ Imágenes optimizadas (peso < 200KB cada una)
□ Meta tags para SEO configurados
□ Favicon agregado
□ SSL/HTTPS activo
```

### Negocio
```
□ Precios confirmados y correctos
□ Descripción de planes clara y precisa
□ Información de contacto correcta
□ Links de redes sociales actualizados
□ Email de soporte funcional
□ Método de pago de respaldo configurado
□ Plan de contingencia si Wompi falla
□ Proceso de devoluciones definido
□ Términos de garantía claros
```

### Legal
```
□ Términos y condiciones revisados
□ Política de privacidad cumple con ley de datos personales
□ Aviso de cookies (si aplica)
□ Registro de marca (opcional pero recomendado)
□ RUT y registro mercantil al día
□ Facturación electrónica configurada (si aplica en Colombia)
```

---

## 🎉 CONCLUSIÓN

PagosBot PRO es un proyecto con gran potencial en el mercado colombiano. La necesidad de control automatizado de pagos es real y creciente entre PYMEs.

### Fortalezas del Proyecto
✅ Problema real y validado  
✅ Solución simple y práctica  
✅ Modelo de negocio escalable  
✅ Stack tecnológico moderno y accesible  
✅ Bajo costo de operación inicial  

### Desafíos Actuales
⚠️ Bugs técnicos que resolver (botones, chatbot, webhook)  
⚠️ Falta implementar seguridad real (Firebase Auth)  
⚠️ Necesita pruebas exhaustivas antes de lanzar  
⚠️ Competencia con soluciones existentes (Siigo, Alegra, etc.)  

### Próximos Pasos Críticos
1. 🔥 **ARREGLAR bugs existentes** (1-2 días)
2. 🧪 **PROBAR flujo completo** con compra real pequeña
3. 🚀 **LANZAR MVP** con Plan Básico únicamente
4. 📣 **VALIDAR con primeros 5 clientes**
5. 📈 **ITERAR basado en feedback**
6. 🔐 **IMPLEMENTAR Firebase** para seguridad real
7. 👥 **AGREGAR panel de clientes**
8. 💰 **ESCALAR y optimizar**

### Visión a 6 Meses
- 50+ clientes activos
- Sistema 100% automatizado
- Panel de clientes funcionando
- Equipo de 2-3 personas
- Producto consolidado en el mercado

---

## 📝 CHANGELOG

### Versión 0.1.0 (Actual)
```
- Sitio web básico con 3 planes
- Chatbot con respuestas predefinidas
- Links de Wompi configurados
- Página de confirmación (con bugs)
- Panel de admin básico (sin protección real)
- Términos y condiciones
- Política de privacidad
```

### Versión 0.2.0 (Planeada - Esta semana)
```
- Botones de compra funcionando 100%
- Chatbot respondiendo correctamente
- Webhook enviando datos a Make.com
- Login de admin funcional
- Flujo completo de compra probado
```

### Versión 1.0.0 (Planeada - Próximo mes)
```
- Firebase Authentication implementado
- Firestore como base de datos
- Panel de admin protegido correctamente
- Sistema de notificaciones robusto
- Analytics implementado
- SEO optimizado
```

### Versión 2.0.0 (Planeada - 3 meses)
```
- Panel de clientes funcionando
- Sistema de usuarios completo
- Dashboard con estadísticas avanzadas
- Blog con contenido SEO
- Consideración de Google AdSense
- App móvil (evaluando viabilidad)
```

---

## 🙏 AGRADECIMIENTOS

A todos los que han contribuido directa o indirectamente a este proyecto:
- Equipo de Variedades JyM
- Comunidad de desarrolladores
- Usuarios beta testers
- Asesores de negocio

---

## 📜 LICENCIA

**Propietario:** Variedades JyM  
**Todos los derechos reservados © 2025**

Este proyecto es propiedad privada. No se permite la reproducción, distribución o uso comercial sin autorización expresa del propietario.

---

## 📌 NOTA SOBRE INFORMACIÓN PRIVADA

**[PV]** indica información privada que ha sido ocultada por razones de seguridad:
- Credenciales de acceso
- API Keys
- URLs de webhooks
- Tokens de autenticación
- Links específicos de pago
- Información de contacto sensible
- Configuraciones internas

Para acceder a esta información, contactar directamente con el equipo de desarrollo.

---

**Última actualización:** 20 de Octubre, 2025  
**Versión del README:** 1.0.0  
**Autor:** Equipo PagosBot PRO  

---

# 🚀 ¡VAMOS A HACER DE ESTO UN ÉXITO!
```

---

**Archivo listo para copiar y pegar como `README.md` en tu repositorio de GitHub.** 

Toda la información sensible está marcada como `[PV - Información privada]` y las métricas de AdSense se mencionan como una consideración futura sin entrar en detalles innecesarios. 📋✅