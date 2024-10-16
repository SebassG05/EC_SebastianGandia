let timer; // Variable para almacenar el temporizador
let seconds = 0; // Contador de segundos

// Referencias a los elementos del DOM
const display = document.getElementById('display');
const startButton = document.getElementById('iniciar');
const pauseButton = document.getElementById('pausar');
const resetButton = document.getElementById('reiniciar');

// Función para actualizar el tiempo en el display
function updateDisplay() {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    display.textContent = `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Función para iniciar el cronómetro
function startTimer() {
    if (!timer) { // Asegurarse de que no hay un temporizador en ejecución
        timer = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
    }
}

// Función para pausar el cronómetro
function pauseTimer() {
    clearInterval(timer); // Detener el temporizador
    timer = null; // Restablecer la variable del temporizador
}

// Función para reiniciar el cronómetro
function resetTimer() {
    pauseTimer(); // Pausar el temporizador
    seconds = 0; // Restablecer los segundos
    updateDisplay(); // Actualizar la visualización
}

// Agregar eventos de clic a los botones
startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
