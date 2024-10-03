document.getElementById('btnLista').addEventListener('click', () => {

    let input = document.getElementById('infInput'); 
    let texto = input.value;

    if (texto) {
        let nuevoItem = document.createElement('li');
        nuevoItem.textContent = texto;

        let lista = document.getElementById('lista');
        lista.appendChild(nuevoItem);

        input.value = ''; 
    }
});

