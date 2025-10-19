// ===================================
// PAGOSBOT PRO - MAIN JAVASCRIPT
// ===================================

// Botones de compra de planes
function buyPlan(plan) {
    // Links reales de Wompi configurados
    const wompiLinks = {
        basico: 'https://checkout.wompi.co/l/L0SRG6',
        premium: 'https://checkout.wompi.co/l/MwpYpp',
        empresarial: 'https://checkout.wompi.co/l/atLqX7'
    };
    
    // Abrir Wompi en nueva pestaña
    window.open(wompiLinks[plan], '_blank');
}

// ===================================
// CHATBOT CON GEMINI AI
// ===================================

const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendButton = document.getElementById('sendMessage');

// Respuestas de respaldo (si Gemini no está configurado)
const fallbackResponses = {
    'hola': '¡Hola! 👋 Bienvenido a PagosBot PRO. ¿En qué puedo ayudarte hoy?',
    'planes': 'Tenemos 3 planes:\n\n💼 Plan Básico ($29.900): Gestión básica de pagos\n🚀 Plan Pro ($49.900): Incluye chatbot + automatizaciones\n🏢 Plan Empresarial ($99.900): Todo incluido + soporte prioritario',
    'precio': 'Nuestros precios son:\n\n💼 Básico: $29.900 COP\n🚀 Pro: $49.900 COP\n🏢 Empresarial: $99.900 COP\n\n¡Todos son pagos únicos!',
    'basico': 'El Plan Básico ($29.900) incluye:\n\n✅ Gestión de pagos con Wompi\n✅ Links de pago personalizados\n✅ Panel de control básico\n✅ Soporte por email',
    'premium': 'El Plan Pro ($49.900) incluye:\n\n✅ Todo lo del Plan Básico\n✅ Chatbot inteligente con IA\n✅ Automatizaciones con Make.com\n✅ Recordatorios automáticos\n✅ Soporte prioritario',
    'pro': 'El Plan Pro ($49.900) incluye:\n\n✅ Todo lo del Plan Básico\n✅ Chatbot inteligente con IA\n✅ Automatizaciones con Make.com\n✅ Recordatorios automáticos\n✅ Soporte prioritario',
    'empresarial': 'El Plan Empresarial ($99.900) incluye:\n\n✅ Todo lo del Plan Pro\n✅ Integraciones ilimitadas\n✅ Reportes avanzados\n✅ Webhook personalizado\n✅ Soporte 24/7\n✅ Consultoría personalizada',
    'ayuda': 'Puedo ayudarte con:\n\n📦 Información sobre planes\n💰 Precios y características\n🤔 Comparación entre planes\n✅ Proceso de compra',
    'contacto': 'Puedes contactarnos:\n\n📧 Email: variedadesjym@gmail.com\n\n¿En qué más puedo ayudarte?',
    'comprar': '¡Perfecto! Para comprar:\n\n1️⃣ Elige tu plan arriba\n2️⃣ Haz clic en "Comprar ahora"\n3️⃣ Completa el pago en Wompi\n4️⃣ Recibe tu acceso por email',
    'pago': 'Aceptamos pagos con:\n\n💳 Tarjetas de crédito\n💳 Tarjetas débito\n🏦 PSE\n💰 Nequi, Daviplata\n\nTodos procesados de forma segura con Wompi.',
    'default': '🤔 Puedo ayudarte con información sobre nuestros planes y precios. ¿Qué te gustaría saber?'
};

// Contexto del negocio para Gemini
const businessContext = `
Eres un asistente virtual de PagosBot PRO, una plataforma de automatización de pagos en Colombia.

PLANES DISPONIBLES:
1. Plan Básico ($29,900 COP):
   - Gestión de pagos con Wompi
   - Links de pago personalizados
   - Panel de control básico
   - Soporte por email

2. Plan Pro ($49,900 COP):
   - Todo lo del Plan Básico
   - Chatbot inteligente con IA
   - Automatizaciones con Make.com
   - Recordatorios automáticos
   - Soporte prioritario

3. Plan Empresarial ($99,900 COP):
   - Todo lo del Plan Pro
   - Integraciones ilimitadas
   - Reportes avanzados
   - Webhook personalizado
   - Soporte 24/7
   - Consultoría personalizada

MÉTODOS DE PAGO: Tarjetas de crédito/débito, PSE, Nequi, Daviplata (todos por Wompi)

CONTACTO: variedadesjym@gmail.com

Responde de manera amigable, profesional y en español. Sé breve pero informativo.
`;

// Función para llamar a Gemini AI
async function callGeminiAI(userMessage) {
    const apiKey = localStorage.getItem('gemini_api_key');
    
    if (!apiKey) {
        return getFallbackResponse(userMessage);
    }
    
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `${businessContext}\n\nUsuario: ${userMessage}\n\nAsistente:`
                    }]
                }],
                generationConfig: {
                    temperature: 0.7,
                    maxOutputTokens: 500,
                    topP: 0.8,
                    topK: 40
                }
            })
        });
        
        if (!response.ok) {
            throw new Error('Error en la API de Gemini');
        }
        
        const data = await response.json();
        
        if (data.candidates && data.candidates[0] && data.candidates[0].content) {
            return data.candidates[0].content.parts[0].text;
        } else {
            throw new Error('Respuesta inválida de Gemini');
        }
        
    } catch (error) {
        console.error('Error al llamar a Gemini:', error);
        return getFallbackResponse(userMessage);
    }
}

// Función para obtener respuesta de respaldo
function getFallbackResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    for (let keyword in fallbackResponses) {
        if (lowerMessage.includes(keyword)) {
            return fallbackResponses[keyword];
        }
    }
    
    return fallbackResponses.default;
}

// Función para enviar mensaje
async function sendMessage() {
    const message = chatInput.value.trim();
    
    if (message === '') return;
    
    addMessage(message, 'user');
    chatInput.value = '';
    
    sendButton.disabled = true;
    sendButton.textContent = '...';
    
    const typingIndicator = addMessage('Escribiendo...', 'bot', true);
    
    try {
        const response = await callGeminiAI(message);
        typingIndicator.remove();
        addMessage(response, 'bot');
    } catch (error) {
        typingIndicator.remove();
        addMessage('Lo siento, hubo un error. Por favor intenta de nuevo.', 'bot');
    } finally {
        sendButton.disabled = false;
        sendButton.textContent = 'Enviar';
    }
}

// Función para agregar mensaje al chat
function addMessage(text, sender, isTyping = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    if (isTyping) {
        messageDiv.classList.add('typing-indicator');
    }
    
    messageDiv.textContent = text;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    return messageDiv;
}

// Event listeners
sendButton.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Mensaje de bienvenida
window.addEventListener('load', () => {
    setTimeout(() => {
        const apiKey = localStorage.getItem('gemini_api_key');
        const welcomeMessage = apiKey 
            ? '¡Hola! 👋 Soy el asistente inteligente de PagosBot PRO con IA. ¿En qué puedo ayudarte hoy?'
            : '¡Hola! 👋 Soy el asistente de PagosBot PRO. ¿En qué puedo ayudarte hoy?';
        
        addMessage(welcomeMessage, 'bot');
    }, 500);
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