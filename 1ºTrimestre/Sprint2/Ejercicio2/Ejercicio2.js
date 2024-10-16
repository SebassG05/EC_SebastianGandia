document.getElementById("Calcula").addEventListener("click", function() {
    // Obtener los valores de los campos de texto
    const num1 = parseFloat(document.querySelectorAll("input")[0].value);
    const num2 = parseFloat(document.querySelectorAll("input")[1].value);
    
    // Obtener la opción seleccionada del <select>
    const operacion = document.getElementById("opciones").value;
    
    // Validar que los campos no estén vacíos y que sean números
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor ingresa números válidos.");
        return;
    }

    let resultado;

    // Realizar la operación matemática seleccionada
    switch (operacion) {
        case "opc1": // Suma
            resultado = num1 + num2;
            break;
        case "opc2": // Resta
            resultado = num1 - num2;
            break;
        case "opc3": // Multiplicación
            resultado = num1 * num2;
            break;
        case "opc4": // División
            if (num2 === 0) {
                resultado = "INDEFINIDO";
            } else {
                resultado = num1 / num2;
            }
            break;
        default:
            alert("Selecciona una operación válida.");
            return;
    }

    // Mostrar el resultado en la página
    const resultadoDiv = document.getElementById("resultado");
    if (!resultadoDiv) {
        const nuevoDiv = document.createElement("div");
        nuevoDiv.id = "resultado";
        nuevoDiv.textContent = "Resultado: " + resultado;
        document.body.appendChild(nuevoDiv);
    } else {
        resultadoDiv.textContent = "Resultado: " + resultado;
    }
});
