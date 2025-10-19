// ===================================
// PAGOSBOT PRO - MAIN JAVASCRIPT
// ===================================

// Configuración Global
const CONFIG = {
    WOMPI_LINKS: {
        BASICO: 'https://checkout.wompi.co/l/L0SRG6',
        PRO: 'https://checkout.wompi.co/l/MwpYpp',
        EMPRESARIAL: 'https://checkout.wompi.co/l/atLqX7'
    },
    PRECIOS: {
        BASICO: 100000,
        PRO: 250000,
        EMPRESARIAL: 500000
    }
};

// Funciones de Compra
function buyPlan(plan) {
    if (CONFIG.WOMPI_LINKS[plan]) {
        window.open(CONFIG.WOMPI_LINKS[plan], '_blank');
    } else {
        console.error('Plan no válido:', plan);
    }
}

// Funciones del Modal
function openTermsModal(plan) {
    const modal = document.getElementById('termsModal');
    const checkbox = document.getElementById('termsCheckbox');
    const acceptBtn = document.getElementById('acceptBtn');
    
    modal.style.display = 'block';
    checkbox.checked = false;
    acceptBtn.disabled = true;
    acceptBtn.dataset.plan = plan;
}

function closeModal() {
    document.getElementById('termsModal').style.display = 'none';
}

function toggleAcceptButton() {
    const checkbox = document.getElementById('termsCheckbox');
    const acceptBtn = document.getElementById('acceptBtn');
    acceptBtn.disabled = !checkbox.checked;
    acceptBtn.textContent = checkbox.checked ? '✅ Continuar con la compra' : '🔒 Debes aceptar para continuar';
}

function acceptTerms() {
    const acceptBtn = document.getElementById('acceptBtn');
    const plan = acceptBtn.dataset.plan;
    buyPlan(plan);
    closeModal();
}

// ===================================
// CHATBOT
// ===================================

// Funciones del Chat
function toggleChat() {
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.style.display = chatWindow.style.display === 'none' ? 'block' : 'none';
    if (chatWindow.style.display === 'block' && chatMessages.children.length === 0) {
        addMessage('¡Hola! 👋 Soy el asistente de PagosBot PRO. ¿En qué puedo ayudarte?', 'bot');
    }
}

function addMessage(text, sender, isTyping = false) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    if (isTyping) {
        messageDiv.classList.add('typing');
        messageDiv.textContent = 'Escribiendo...';
    } else {
        messageDiv.textContent = text;
    }
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    return messageDiv;
}

async function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const message = chatInput.value.trim();
    
    if (message === '') return;
    
    // Agregar mensaje del usuario
    addMessage(message, 'user');
    chatInput.value = '';
    
    // Mostrar indicador de escritura
    const typingIndicator = addMessage('', 'bot', true);
    
    // Simular delay de respuesta
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Obtener y mostrar respuesta
    const response = getChatbotResponse(message);
    typingIndicator.remove();
    addMessage(response, 'bot');
}

// Respuestas del chatbot
function getChatbotResponse(message) {
    const lowerMessage = message.toLowerCase();
    const responses = {
        'hola': '¡Hola! 👋 ¿En qué puedo ayudarte hoy?',
        'planes': 'Tenemos 3 planes:\n💼 Básico ($100.000)\n🚀 Pro ($250.000)\n🏢 Empresarial ($500.000)',
        'precio': 'Los precios son:\n💼 Básico: $100.000\n🚀 Pro: $250.000\n🏢 Empresarial: $500.000',
        'pago': 'Aceptamos:\n💳 Tarjetas\n🏦 PSE\n💰 Nequi\n💰 Daviplata',
        'ayuda': '¿En qué puedo ayudarte?\n📦 Información de planes\n💰 Precios\n✅ Proceso de compra',
        'contacto': '📱 WhatsApp: +57 304 578 8873\n✉️ Email: madfer1993@gmail.com'
    };
    
    for (let key in responses) {
        if (lowerMessage.includes(key)) {
            return responses[key];
        }
    }
    
    return '🤔 ¿Cómo puedo ayudarte? Pregúntame sobre nuestros planes o precios.';
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Eventos para el chat
    const chatInput = document.getElementById('chatInput');
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
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
    
    // Inicializar chat cerrado
    const chatWindow = document.getElementById('chatWindow');
    if (chatWindow) {
        chatWindow.style.display = 'none';
    }
});

// Cerrar chat al hacer clic fuera
document.addEventListener('click', (e) => {
    const chatWindow = document.getElementById('chatWindow');
    if (chatWindow && !chatWindow.contains(e.target) && !e.target.matches('.chat-button')) {
        chatWindow.style.display = 'none';
    }
});