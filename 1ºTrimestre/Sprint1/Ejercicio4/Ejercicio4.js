
const divs = document.querySelectorAll('div');

function cambiarEstiloAlPasar(div) {
    div.style.backgroundColor = 'blue'; // Cambia el color de fondo a azul
    div.style.color = 'white'; // Cambia el color del texto a blanco
}


function restaurarEstilo(div) {
    div.style.backgroundColor = ''; 
    div.style.color = ''; 
}


divs.forEach(div => {
    div.addEventListener('mouseover', () => cambiarEstiloAlPasar(div));
    div.addEventListener('mouseout', () => restaurarEstilo(div));
});