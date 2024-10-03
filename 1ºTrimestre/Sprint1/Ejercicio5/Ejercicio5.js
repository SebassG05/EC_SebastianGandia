// Función para obtener el XPath de un elemento
function getXPath(element) {
    let xpath = '';
    for (; element && element.nodeType === Node.ELEMENT_NODE; element = element.parentNode) {
        let id = element.id;
        let tagName = element.tagName.toLowerCase();
        if (id) {
            xpath = `/${tagName}[@id='${id}']` + xpath;
            break; // Salimos si encontramos un ID
        } else {
            let siblings = Array.from(element.parentNode.childNodes).filter((sibling) => sibling.nodeType === Node.ELEMENT_NODE);
            let index = siblings.indexOf(element) + 1; // +1 para indexar desde 1
            xpath = `/${tagName}[${index}]` + xpath;
        }
    }
    return xpath;
}

// Función para mostrar el XPath del botón en el iframe
function showXPath() {
    // Obtener el iframe
    const iframe = document.getElementById('myIframe');
    let iframeDoc;

    // Asegurarse de que el iframe se cargó correctamente
    try {
        iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    } catch (error) {
        console.error("Error accediendo al contenido del iframe:", error);
        alert("No se pudo acceder al iframe debido a restricciones del navegador.");
        return;
    }

    // Verificar si podemos acceder al contenido del iframe
    if (iframeDoc) {
        // Acceder al botón dentro del iframe
        const iframeButton = iframeDoc.getElementById('iframeButton');
        if (iframeButton) {
            // Obtener el XPath del botón
            const xpathValue = getXPath(iframeButton);

            // Mostrar el XPath en el div del HTML principal
            document.getElementById('xpathValue').innerText = xpathValue;

            // Alerta para indicar que se está volviendo al HTML principal
            alert("XPath del botón dentro del iframe: " + xpathValue);
        } else {
            console.error("El botón dentro del iframe no se encontró.");
            alert("El botón dentro del iframe no se encontró.");
        }
    } else {
        console.error("No se pudo acceder al documento del iframe.");
        alert("No se pudo acceder al documento del iframe.");
    }
}

// Agregar evento al botón principal
document.getElementById('mainButton').addEventListener('click', function() {
    // Llamar a la función que obtiene el XPath cuando se hace clic en el botón principal
    showXPath();
});
