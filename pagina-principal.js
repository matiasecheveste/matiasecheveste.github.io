import firebase from 'firebase/app';
import 'firebase/auth';

// Referencia al panel de creación de causas de donación
const panelCausaDonacion = document.getElementById('causas-donacion-panel');

// Botón para abrir y cerrar el panel de creación de causas de donación
const crearDonacionBtn = document.getElementById('crearDonacionBtn');

const cerrarSesionBtn = document.getElementById('cerrarSesionBtn');

// Manejar clic en el botón para abrir/cerrar el panel
crearDonacionBtn.addEventListener('click', function () {
    // Si el panel está abierto, cámbiale el texto a "Crear Donación" y luego ciérralo
    if (panelCausaDonacion.style.display === 'block') {
        crearDonacionBtn.textContent = 'Crear Donación';
        panelCausaDonacion.style.display = 'none';
    } else {
        // Si el panel está cerrado, cámbiale el texto a "Cerrar Panel" y luego ábrelo
        crearDonacionBtn.textContent = 'Cerrar Panel';
        panelCausaDonacion.style.display = 'block';
    }
});

// Agrega un evento de clic al botón para cerrar sesión
cerrarSesionBtn.addEventListener('click', function () {
    // Cierra la sesión del usuario
    firebase.auth().signOut().then(function () {
        // Redirige al usuario a index.html
        window.location.href = 'index.html';
    }).catch(function (error) {
        // Maneja cualquier error que ocurra al cerrar la sesión
        console.error('Error al cerrar la sesión: ' + error);
    });
});

// Función para cargar las metas de donaciones desde Firebase Firestore
function cargarCausasDonacion() {
    // Obtener una referencia a la colección 'causasDonacion' en Firestore
    const causasDonacionRef = db.collection('causasDonacion');

    // Limpiar el contenedor de metas de donaciones
    const causasDonacionContainer = document.getElementById('causas-donacion-container');
    causasDonacionContainer.innerHTML = '';

    // Obtener y mostrar las metas de donaciones
    causasDonacionRef.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const causa = doc.data();

            // Crear un elemento para mostrar la causa de donación
            const causaElement = document.createElement('div');
            causaElement.classList.add('causa-donacion');
            causaElement.innerHTML = `
                <h3>${causa.nombre}</h3>
                <p>${causa.detalles}</p>
                <p>Cantidad Objetivo: $${causa.cantidadObjetivo}</p>
            `;

            // Crear un elemento para mostrar la imagen de la causa de donación
            const imagenElement = document.createElement('img');
            imagenElement.src = causa.imagenURL; // Asignar la URL de la imagen
            imagenElement.alt = 'Imagen de la Causa'; // Texto alternativo de la imagen

            // Agregar la imagen al elemento de la causa de donación
            causaElement.appendChild(imagenElement);

            // Agregar el elemento al contenedor
            causasDonacionContainer.appendChild(causaElement);
        });
    }).catch((error) => {
        console.error('Error al cargar las causas de donación: ', error);
    });
}

// ...

// Escuchar eventos cuando se carga la página
document.addEventListener('DOMContentLoaded', function () {
    // Cargar las metas de donaciones al cargar la página
    cargarCausasDonacion();

    // Mostrar el contenido principal
    const mainContent = document.querySelector('.main-content');
    mainContent.style.display = 'block';
    
    // Ocultar el panel de creación de causas de donación al cargar la página
    panelCausaDonacion.style.display = 'none';
});