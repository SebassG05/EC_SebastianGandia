// Esperar a que se cargue el contenido del documento
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const resultsDiv = document.getElementById("results");
    const chartDiv = document.getElementById("chart");
    
    // Contador de votos
    const votes = {
        rojo: 0,
        verde: 0,
        negro: 0
    };

    document.getElementById("enviar").addEventListener("click", function () {
        // Obtener el valor seleccionado
        const selectedColor = form.color.value;

        // Aumentar el contador de votos
        if (selectedColor) {
            votes[selectedColor]++;

            // Mostrar el resultado
            resultsDiv.innerHTML = `Has seleccionado: <strong>${selectedColor}</strong>`;
            
            // Actualizar el gráfico
            updateChart();
        } else {
            resultsDiv.innerHTML = `Por favor, selecciona un color.`;
        }
    });

    function updateChart() {
        // Limpiar el gráfico anterior
        chartDiv.innerHTML = "";

        // Calcular el total de votos
        const totalVotes = votes.rojo + votes.verde + votes.negro;

        // Crear barras para cada color
        for (const color in votes) {
            const voteCount = votes[color];
            const bar = document.createElement("div");

            // Calcular el ancho de la barra en función de los votos
            const barWidth = totalVotes ? (voteCount / totalVotes) * 100 : 0; 
            bar.style.width = barWidth + "%";
            bar.style.height = "20px"; // Altura de la barra
            bar.style.backgroundColor = color === "rojo" ? "red" : color === "verde" ? "green" : "black";
            bar.style.marginBottom = "5px"; // Espaciado entre barras
            bar.style.transition = "width 0.5s"; // Animación al cambiar el ancho

            // Añadir la barra al gráfico
            chartDiv.appendChild(bar);
        }
    }
});
