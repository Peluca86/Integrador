// Función para crear una tarjeta
function crearTarjeta(tarjeta) {
    let nuevaCard = document.createElement('div');
    nuevaCard.className = 'card';
    nuevaCard.innerHTML = `
        <span>
            <div style="display: inline-flex;width: 100%;">
                <i class="fa-solid fa-pen" onclick="EditTitle()" id="icon-edit"></i>
                <i class="fa-solid fa-floppy-disk" id="icon-save" style="display: none;"></i>
                <i class="fa-solid fa-xmark" style="margin-left: 94%;"></i>
            </div>
            <input class="title-readonly" type="text" id="title" readonly value="${tarjeta.titulo}">
            <div style="margin-left: 90%;">
                <i class="fa-solid fa-circle-chevron-left"></i>
                <i class="fa-solid fa-circle-chevron-right"></i>
            </div>
        </span>
    `;

    return nuevaCard;
}

// Función para cargar tarjetas desde el localStorage
function cargarTarjetas() {
    let contenedorTareasPorHacer = document.getElementById('tareasPorHacer');

    // Carga el contenido del archivo JSON
    fetch('cards.json')
        .then(response => response.json())
        .then(tarjetasGuardadas => {
            tarjetasGuardadas.forEach(function (tarjeta) {
                contenedorTareasPorHacer.appendChild(crearTarjeta(tarjeta));
            });
        })
        .catch(error => console.error('Error al cargar las tarjetas:', error));
}

document.addEventListener("DOMContentLoaded", function (event) {
    cargarTarjetas();
});

// Resto del código (guardarTodasLasTarjetasEnLocalStorage, agregarLista, moverTarjeta, etc.)
