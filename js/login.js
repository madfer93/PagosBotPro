// ===================================
// LOGIN ADMIN - LÓGICA CON SEGURIDAD
// ===================================

// Credenciales del admin (CAMBIA ESTA CONTRASEÑA)
const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'Madfer1993.Mad' // ⚠️ CAMBIA ESTA CONTRASEÑA
};

// Generar token único para la sesión
function generateSessionToken() {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

// Verificar si ya hay sesión activa al cargar
window.addEventListener('load', function() {
    const isLoggedIn = sessionStorage.getItem('admin_logged_in');
    const currentToken = sessionStorage.getItem('session_token');
    const storedToken = localStorage.getItem('active_session_token');
    
    // Si ya está logueado Y el token coincide, ir al admin
    if (isLoggedIn === 'true' && currentToken === storedToken) {
        window.location.href = 'admin.html';
    }
});

// Función para manejar el login
function handleLogin() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    // Limpiar mensaje de error previo
    errorMessage.classList.remove('show');
    
    // Validar campos vacíos
    if (!username || !password) {
        showError('Por favor completa todos los campos');
        return false;
    }
    
    // Verificar credenciales
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
        
        // Verificar si hay otra sesión activa
        const existingSession = localStorage.getItem('active_session_token');
        const lastActivity = localStorage.getItem('last_activity');
        
        if (existingSession && lastActivity) {
            const timeDiff = Date.now() - parseInt(lastActivity);
            const fifteenMinutes = 15 * 60 * 1000; // 15 minutos
            
            // Si hay sesión activa reciente (menos de 15 min)
            if (timeDiff < fifteenMinutes) {
                const confirmLogin = confirm(
                    '⚠️ ADVERTENCIA DE SEGURIDAD\n\n' +
                    'Ya hay una sesión de admin activa.\n\n' +
                    'Si continúas, la otra sesión se cerrará automáticamente.\n\n' +
                    '¿Deseas continuar?'
                );
                
                if (!confirmLogin) {
                    return false;
                }
            }
        }
        
        // Generar nuevo token de sesión
        const newToken = generateSessionToken();
        
        // Guardar en sessionStorage (específico de esta pestaña)
        sessionStorage.setItem('admin_logged_in', 'true');
        sessionStorage.setItem('session_token', newToken);
        sessionStorage.setItem('admin_login_time', new Date().toISOString());
        
        // Guardar token activo en localStorage (compartido entre pestañas)
        localStorage.setItem('active_session_token', newToken);
        localStorage.setItem('last_activity', Date.now().toString());
        
        // Redirigir al panel de admin
        window.location.href = 'admin.html';
        
    } else {
        // Credenciales incorrectas
        showError('❌ Usuario o contraseña incorrectos');
        
        // Limpiar campos
        document.getElementById('password').value = '';
        document.getElementById('password').focus();
    }
    
    return false;
}

// Función para mostrar mensaje de error
function showError(message) {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = message;
    errorMessage.classList.add('show');
}

// Permitir login con Enter
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('password').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleLogin();
        }
    });
    
    document.getElementById('username').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            document.getElementById('password').focus();
        }
    });
});