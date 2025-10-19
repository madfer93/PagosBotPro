// ===================================
// PANEL DE ADMINISTRACIÓN - CON SEGURIDAD
// ===================================

// Variables de control de sesión
let sessionCheckInterval;
let inactivityTimeout;
const INACTIVITY_TIME = 30 * 60 * 1000; // 30 minutos de inactividad

// VERIFICAR SESIÓN AL CARGAR LA PÁGINA
window.addEventListener('load', function() {
    checkAdminSession();
    loadConfig();
    startSessionMonitoring();
    resetInactivityTimer();
});

// Verificar si el admin está logueado
function checkAdminSession() {
    const isLoggedIn = sessionStorage.getItem('admin_logged_in');
    const currentToken = sessionStorage.getItem('session_token');
    const storedToken = localStorage.getItem('active_session_token');
    
    if (isLoggedIn !== 'true') {
        window.location.href = 'login.html';
        return;
    }
    
    // Verificar que el token de esta sesión sea el activo
    if (currentToken !== storedToken) {
        alert('⚠️ Tu sesión ha sido cerrada porque alguien más inició sesión como administrador.');
        logout();
        return;
    }
    
    // Verificar timeout de sesión (2 horas desde el login)
    const loginTime = sessionStorage.getItem('admin_login_time');
    if (loginTime) {
        const currentTime = new Date().getTime();
        const loginTimestamp = new Date(loginTime).getTime();
        const twoHours = 2 * 60 * 60 * 1000;
        
        if (currentTime - loginTimestamp > twoHours) {
            alert('⏰ Tu sesión ha expirado por seguridad (2 horas). Por favor inicia sesión nuevamente.');
            logout();
        }
    }
    
    // Actualizar última actividad
    localStorage.setItem('last_activity', Date.now().toString());
}

// Monitorear la sesión constantemente
function startSessionMonitoring() {
    // Verificar cada 5 segundos si sigue siendo la sesión activa
    sessionCheckInterval = setInterval(function() {
        const currentToken = sessionStorage.getItem('session_token');
        const storedToken = localStorage.getItem('active_session_token');
        
        if (currentToken !== storedToken) {
            clearInterval(sessionCheckInterval);
            alert('⚠️ Tu sesión ha sido cerrada porque alguien más inició sesión.');
            logout();
        }
    }, 5000); // Cada 5 segundos
}

// Detectar inactividad del usuario
function resetInactivityTimer() {
    // Limpiar timeout anterior
    clearTimeout(inactivityTimeout);
    
    // Actualizar última actividad
    localStorage.setItem('last_activity', Date.now().toString());
    
    // Configurar nuevo timeout
    inactivityTimeout = setTimeout(function() {
        alert('⏰ Sesión cerrada por inactividad (30 minutos sin uso).');
        logout();
    }, INACTIVITY_TIME);
}

// Detectar actividad del usuario (movimientos del mouse, clicks, teclas)
document.addEventListener('mousemove', resetInactivityTimer);
document.addEventListener('mousedown', resetInactivityTimer);
document.addEventListener('keypress', resetInactivityTimer);
document.addEventListener('scroll', resetInactivityTimer);
document.addEventListener('touchstart', resetInactivityTimer);

// Función para cerrar sesión
function logout() {
    // Limpiar intervalos
    if (sessionCheckInterval) {
        clearInterval(sessionCheckInterval);
    }
    if (inactivityTimeout) {
        clearTimeout(inactivityTimeout);
    }
    
    // Limpiar sessionStorage
    sessionStorage.removeItem('admin_logged_in');
    sessionStorage.removeItem('session_token');
    sessionStorage.removeItem('admin_login_time');
    
    // Limpiar token activo si es el mío
    const currentToken = sessionStorage.getItem('session_token');
    const storedToken = localStorage.getItem('active_session_token');
    
    if (currentToken === storedToken) {
        localStorage.removeItem('active_session_token');
        localStorage.removeItem('last_activity');
    }
    
    // Redirigir al login
    window.location.href = 'login.html';
}

// Cargar toda la configuración del localStorage
function loadConfig() {
    loadWebhookConfig();
    loadGeminiConfig();
}

// Cargar configuración del webhook
function loadWebhookConfig() {
    const savedWebhook = localStorage.getItem('make_webhook_url');
    const webhookInput = document.getElementById('webhookUrl');
    const webhookStatus = document.getElementById('webhookStatus');
    
    if (savedWebhook && savedWebhook.includes('hook')) {
        webhookInput.value = savedWebhook;
        webhookStatus.className = 'status-badge status-configured';
        webhookStatus.textContent = '✅ Webhook configurado';
    }
}

// Cargar configuración de Gemini API
function loadGeminiConfig() {
    const savedGemini = localStorage.getItem('gemini_api_key');
    const geminiInput = document.getElementById('geminiApiKey');
    const geminiStatus = document.getElementById('geminiStatus');
    
    if (savedGemini && savedGemini.length > 10) {
        geminiInput.value = savedGemini;
        geminiStatus.className = 'status-badge status-configured';
        geminiStatus.textContent = '✅ API configurada';
    }
}

// Guardar webhook de Make.com
function saveWebhook() {
    const webhookInput = document.getElementById('webhookUrl');
    const webhookUrl = webhookInput.value.trim();
    
    if (!webhookUrl) {
        alert('⚠️ Por favor ingresa una URL de webhook');
        return;
    }
    
    if (!webhookUrl.includes('hook')) {
        alert('⚠️ La URL no parece ser un webhook válido de Make.com');
        return;
    }
    
    localStorage.setItem('make_webhook_url', webhookUrl);
    
    const webhookStatus = document.getElementById('webhookStatus');
    webhookStatus.className = 'status-badge status-configured';
    webhookStatus.textContent = '✅ Webhook configurado';
    
    alert('✅ Webhook guardado correctamente!\n\nAhora Make.com recibirá los datos de las compras.');
    
    // Actualizar actividad
    resetInactivityTimer();
}

// Guardar API Key de Gemini
function saveGeminiApi() {
    const geminiInput = document.getElementById('geminiApiKey');
    const apiKey = geminiInput.value.trim();
    
    if (!apiKey) {
        alert('⚠️ Por favor ingresa tu API Key de Gemini');
        return;
    }
    
    if (apiKey.length < 10) {
        alert('⚠️ La API Key parece incorrecta. Debe ser más larga.');
        return;
    }
    
    localStorage.setItem('gemini_api_key', apiKey);
    
    const geminiStatus = document.getElementById('geminiStatus');
    geminiStatus.className = 'status-badge status-configured';
    geminiStatus.textContent = '✅ API configurada';
    
    alert('✅ API Key guardada correctamente!\n\nEl chatbot ahora usará Gemini AI para responder preguntas.');
    
    // Actualizar actividad
    resetInactivityTimer();
}

// Abrir link de prueba de Wompi
function testWompiPayment() {
    const testLink = document.getElementById('wompiTestLink').value;
    
    if (confirm('🧪 ¿Abrir el link de prueba de Wompi?\n\nEsto te llevará al checkout de prueba donde podrás simular una compra y verificar que el webhook funciona correctamente.')) {
        window.open(testLink, '_blank');
        
        setTimeout(() => {
            alert('📝 Instrucciones de prueba:\n\n' +
                  '1. Usa una tarjeta de prueba de Wompi\n' +
                  '2. Completa la compra\n' +
                  '3. Verifica que Make.com reciba los datos\n' +
                  '4. Revisa tu email de prueba\n' +
                  '5. Comprueba Google Sheets\n\n' +
                  '✅ Si todo funciona, tu sistema está listo!');
        }, 1000);
    }
    
    // Actualizar actividad
    resetInactivityTimer();
}

// Copiar link de prueba al portapapeles
function copyTestLink() {
    const testLink = document.getElementById('wompiTestLink').value;
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(testLink)
            .then(() => {
                alert('✅ Link copiado al portapapeles!\n\nPuedes pegarlo donde lo necesites.');
            })
            .catch(() => {
                copyToClipboardFallback();
            });
    } else {
        copyToClipboardFallback();
    }
    
    // Actualizar actividad
    resetInactivityTimer();
}

// Método alternativo para copiar (navegadores antiguos)
function copyToClipboardFallback() {
    const input = document.getElementById('wompiTestLink');
    input.select();
    input.setSelectionRange(0, 99999);
    
    try {
        document.execCommand('copy');
        alert('✅ Link copiado!');
    } catch (err) {
        alert('⚠️ No se pudo copiar automáticamente. Por favor copia el link manualmente.');
    }
}