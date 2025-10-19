// ===================================
// PAGOSBOT PRO - JAVASCRIPT PRINCIPAL
// ===================================

// FUNCIÓN DE COMPRA - CON TUS LINKS REALES DE WOMPI
function buyPlan(plan) {
    const wompiLinks = {
        basico: 'https://checkout.wompi.co/l/L0SRG6',
        premium: 'https://checkout.wompi.co/l/MwpYpp',
        empresarial: 'https://checkout.wompi.co/l/atLqX7'
    };
    
    // Abrir Wompi en nueva pestaña
    if (wompiLinks[plan]) {
        window.open(wompiLinks[plan], '_blank');
    } else {
        alert('Plan no disponible');
    }
}

// ===================================
// CHATBOT - RESPUESTAS BÁSICAS
// ===================================

const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendButton = document.getElementById('sendMessage');

// Respuestas predefinidas del chatbot
const botResponses = {
    'hola': '¡Hola! 👋 Bienvenido a PagosBot PRO. ¿En qué puedo ayudarte hoy?',
    
    'planes': 'Tenemos 3 planes disponibles:\n\n💼 Plan Básico ($29.900 COP)\n🚀 Plan Pro ($49.900 COP)\n🏢 Plan Empresarial ($99.900 COP)\n\n¿Sobre cuál quieres saber más?',
    
    'plan': 'Tenemos 3 planes disponibles:\n\n💼 Plan Básico ($29.900 COP)\n🚀 Plan Pro ($49.900 COP)\n🏢 Plan Empresarial ($99.900 COP)\n\n¿Sobre cuál quieres saber más?',
    
    'precio': 'Nuestros precios son:\n\n💼 Básico: $29.900 COP\n🚀 Pro: $49.900 COP\n🏢 Empresarial: $99.900 COP\n\n¡Todos son pagos únicos, sin mensualidades!',
    
    'basico': 'El Plan Básico ($29.900 COP) incluye:\n\n✅ Gestión de pagos con Wompi\n✅ Links de pago personalizados\n✅ Panel de control básico\n✅ Soporte por email\n✅ Archivo digital incluido\n\nPerfecto para comenzar. ¿Te gustaría comprarlo?',
    
    'básico': 'El Plan Básico ($29.900 COP) incluye:\n\n✅ Gestión de pagos con Wompi\n✅ Links de pago personalizados\n✅ Panel de control básico\n✅ Soporte por email\n✅ Archivo digital incluido\n\nPerfecto para comenzar. ¿Te gustaría comprarlo?',
    
    'pro': 'El Plan Pro ($49.900 COP) incluye:\n\n✅ Todo lo del Plan Básico\n✅ Chatbot inteligente con IA\n✅ Automatizaciones con Make.com\n✅ Recordatorios automáticos\n✅ Soporte prioritario\n✅ Configuración personalizada\n\n¡El más popular! ¿Te interesa?',
    
    'premium': 'El Plan Pro ($49.900 COP) incluye:\n\n✅ Todo lo del Plan Básico\n✅ Chatbot inteligente con IA\n✅ Automatizaciones con Make.com\n✅ Recordatorios automáticos\n✅ Soporte prioritario\n✅ Configuración personalizada\n\n¡El más popular! ¿Te interesa?',
    
    'empresarial': 'El Plan Empresarial ($99.900 COP) incluye:\n\n✅ Todo lo del Plan Pro\n✅ Integraciones ilimitadas\n✅ Reportes avanzados\n✅ Webhook personalizado\n✅ Soporte 24/7\n✅ Consultoría personalizada\n✅ Implementación completa\n\nPara negocios que necesitan lo máximo. ¿Quieres más detalles?',
    
    'diferencia': 'Principales diferencias:\n\n💼 Básico: Solo gestión de pagos\n🚀 Pro: + Chatbot + Automatizaciones\n🏢 Empresarial: + Todo ilimitado + Soporte 24/7\n\n¿Cuál se ajusta mejor a tu negocio?',
    
    'diferencias': 'Principales diferencias:\n\n💼 Básico: Solo gestión de pagos\n🚀 Pro: + Chatbot + Automatizaciones\n🏢 Empresarial: + Todo ilimitado + Soporte 24/7\n\n¿Cuál se ajusta mejor a tu negocio?',
    
    'comprar': '¡Excelente! Para comprar:\n\n1️⃣ Elige tu plan arriba\n2️⃣ Haz clic en "Comprar Ahora"\n3️⃣ Completa el pago en Wompi\n4️⃣ Recibe tu acceso por email\n\n¿Listo para comenzar?',
    
    'pago': 'Aceptamos estos métodos de pago:\n\n💳 Tarjetas de crédito\n💳 Tarjetas débito\n🏦 PSE (transferencia bancaria)\n💰 Nequi\n💰 Daviplata\n\nTodos procesados de forma segura con Wompi 🔒',
    
    'seguro': '¡Totalmente seguro! 🔒\n\nUsamos Wompi, la plataforma de pagos más confiable de Colombia. Tus datos están encriptados y protegidos.\n\n¿Alguna otra duda?',
    
    'contacto': 'Puedes contactarnos por:\n\n📧 Email: variedadesjym@gmail.com\n🌐 Web: www.pagosbot.com\n\n¿En qué más puedo ayudarte?',
    
    'ayuda': 'Puedo ayudarte con:\n\n📦 Información sobre planes\n💰 Precios y características\n🤔 Comparación entre planes\n✅ Proceso de compra\n📧 Contacto y soporte\n\n¿Qué necesitas saber?',
    
    'gracias': '¡De nada! 😊 Estoy aquí para ayudarte. Si tienes más preguntas, no dudes en escribir.',
    
    'adios': '¡Hasta pronto! 👋 Que tengas un excelente día. Estamos aquí cuando nos necesites.',
    
    'default': '🤔 Interesante pregunta. Puedo ayudarte con:\n\n• Información sobre planes\n• Precios y características\n• Proceso de compra\n• Métodos de pago\n\n¿Qué te gustaría saber?'
};

// Función para enviar mensaje
function sendMessage() {
    const message = chatInput.value.trim();
    
    if (message === '') return;
    
    // Mostrar mensaje del usuario
    addMessage(message, 'user');
    chatInput.value = '';
    
    // Simular "escribiendo..." por 1 segundo
    setTimeout(() => {
        const response = getResponse(message);
        addMessage(response, 'bot');
    }, 1000);
}

// Función para obtener respuesta
function getResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    // Buscar coincidencias en las respuestas
    for (let keyword in botResponses) {
        if (lowerMessage.includes(keyword)) {
            return botResponses[keyword];
        }
    }
    
    return botResponses.default;
}

// Función para agregar mensaje al chat
function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    messageDiv.textContent = text;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Event listeners
if (sendButton) {
    sendButton.addEventListener('click', sendMessage);
}

if (chatInput) {
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}

// Mensaje de bienvenida
window.addEventListener('load', () => {
    if (chatMessages) {
        setTimeout(() => {
            addMessage('¡Hola! 👋 Soy el asistente de PagosBot PRO. ¿En qué puedo ayudarte hoy?', 'bot');
        }, 500);
    }
});

// Smooth scroll para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});