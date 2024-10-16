// Esperamos a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const botonInicio = document.getElementById('Inicio');
    const inputTiempo = document.querySelector('input');
    let intervalo;  // Variable para guardar el intervalo

    botonInicio.addEventListener('click', () => {
        // Obtenemos el valor del input (segundos)
        let tiempoRestante = parseInt(inputTiempo.value);

        // Verificamos si el valor es un número válido
        if (isNaN(tiempoRestante) || tiempoRestante <= 0) {
            alert("Por favor, introduce un número válido de segundos.");
            return; // Detenemos la ejecución si el valor es inválido
        }

        // Mostramos el tiempo restante en la página
        mostrarTiempo(tiempoRestante);

        // Detenemos cualquier intervalo anterior
        clearInterval(intervalo);

        // Iniciamos la cuenta regresiva con setInterval
        intervalo = setInterval(() => {
            tiempoRestante--;  // Restamos un segundo
            mostrarTiempo(tiempoRestante);

            if (tiempoRestante <= 0) {
                clearInterval(intervalo);  // Detenemos el intervalo cuando llega a cero
                alert("¡Tiempo finalizado!");  // Mostramos el mensaje final
            }
        }, 1000);  // Ejecutamos cada 1000 milisegundos (1 segundo)
    });

    // Función para mostrar el tiempo restante en la página
    function mostrarTiempo(segundos) {
        // Si no existe el elemento para mostrar el tiempo, lo creamos
        let displayTiempo = document.getElementById('displayTiempo');
        if (!displayTiempo) {
            displayTiempo = document.createElement('p');
            displayTiempo.id = 'displayTiempo';
            document.body.appendChild(displayTiempo);
        }
        displayTiempo.textContent = `Tiempo restante: ${segundos} segundos`;
    }
});
