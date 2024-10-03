const generarArea = () => {

    const ancho = document.getElementById('ancho').value;
    const alto = document.getElementById('alto').value;

    const area = ancho * alto;

    console.log(`El área es: ${area}`);

    return area;

}

document.getElementById('btnArea').addEventListener('click',  () => {

    const area = generarArea();
    document.getElementById('resultado').innerText = `El área es: ${area}`;

});