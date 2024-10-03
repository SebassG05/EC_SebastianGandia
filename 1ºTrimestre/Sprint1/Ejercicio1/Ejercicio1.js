// Esta es la constante de random realizado con un arrow una forma mas eficiente  moderna
const generarAleatorio = () => {
    // Genera valores aleatorios entre 0 y 255 para los colores RGB
    const r = Math.floor(Math.random() * 256); // Rojo
    const g = Math.floor(Math.random() * 256); // Verde
    const b = Math.floor(Math.random() * 256); // Azul

    // Devuelve el color en formato RGB
    return `rgb(${r}, ${g}, ${b})`;
}

// Esto selecciona el DOM por el id, el addEventListener es para el evento de click
document.getElementById('btnColor').addEventListener('click', () => {
    // Esto significa que del documento el body tenga un estilo de fondo random usando RGB
    document.body.style.backgroundColor = generarAleatorio();
});



