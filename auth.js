import firebase from 'firebase/app';
import 'firebase/auth';

// Registro de usuario
function registrarUsuario() {
    var email = document.getElementById('registro-email').value;
    var password = document.getElementById('registro-password').value;

    try {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function(userCredential) {
                var user = userCredential.user;
                alert('Registro exitoso');
                redirigirAPaginaPrincipal(user); // Redirige al usuario a la página principal
            })
            .catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert('Error al registrar: ' + errorMessage);
            });
    } catch (error) {
        alert('Error inesperado al registrar: ' + error.message);
    }
}

// Inicio de sesión de usuario
function iniciarSesion() {
    var email = document.getElementById('inicio-sesion-email').value;
    var password = document.getElementById('inicio-sesion-password').value;

    try {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(function(userCredential) {
                var user = userCredential.user;
                alert('Inicio de sesión exitoso');
                redirigirAPaginaPrincipal(user); // Redirige al usuario a la página principal
            })
            .catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert('Error al iniciar sesión: ' + errorMessage);
            });
    } catch (error) {
        alert('Error inesperado al iniciar sesión: ' + error.message);
    }
}


// Redirige al usuario a la página principal
function redirigirAPaginaPrincipal(user) {
    window.location.href = 'index2.html';
}

function mostrarRegistro() {
    var registroForm = document.getElementById('registro-form');
    var inicioSesionForm = document.getElementById('inicio-sesion-form');

    registroForm.classList.add('slide-in');
    inicioSesionForm.classList.remove('slide-in');
    
    setTimeout(function() {
        registroForm.style.display = 'block';
        inicioSesionForm.style.display = 'none';
    }, 300); // Ajusta la duración de la animación según tus preferencias
}

function mostrarInicioSesion() {
    var registroForm = document.getElementById('registro-form');
    var inicioSesionForm = document.getElementById('inicio-sesion-form');

    registroForm.classList.remove('slide-in');
    inicioSesionForm.classList.add('slide-in');

    setTimeout(function() {
        registroForm.style.display = 'none';
        inicioSesionForm.style.display = 'block';
    }, 300); // Ajusta la duración de la animación según tus preferencias
}

mostrarRegistro();