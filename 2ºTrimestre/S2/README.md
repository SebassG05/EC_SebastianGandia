# EC

# Ejercicio 2:  Implementación de la Pantalla de Inicio (Home)

## Análisis del Problema
El objetivo de este ejercicio es que el alumnado desarrolle funcionalidades interactivas avanzadas basadas en su categoría de proyecto. Se espera que implementen componentes reutilizables que permitan mejorar la experiencia del usuario mediante dashboards, comparadores, rankings, planificadores o encuestas.

Cada categoría del proyecto incluye tres funcionalidades clave, que deben ser desarrolladas siguiendo las buenas prácticas de modularidad y reutilización de código.


Estos sin los elementos mínimos Independiente de la categoria

🔝 1. Comparador de Productos
🖼️ 2. Sistemas de Encuestas o Votaciones
📄 3.  Simuladores de Decisiones/configuraciones


## Elementos Específicos (Categoría de Ventas)

1️⃣ Comparador de Productos

Comparación de productos según precio, valoraciones y especificaciones técnicas.
Posibilidad de seleccionar múltiples productos y visualizar sus diferencias clave.

2️⃣ Sistemas de Encuestas o Votaciones

Encuestas de satisfacción post-compra o interacción de “me gusta”.
Votaciones para determinar los productos mejor valorados en distintas categorías o visualización de los productos con más “me gusta”.

3️⃣ Simuladores de Decisiones/configuraciones

Configuración personalizada de productos según necesidades del usuario. (colores, tuning, motor, etc..)
Recomendaciones de productos con base en preferencias seleccionadas.


## Diseño de la Propuesta de Solución
Para cumplir con los requerimientos, se implementó una estructura modular y un diseño responsivo. El proyecto utiliza datos mockeados en los archivos .ts dentro de la carpeta services para simular llamadas a una API.:

1. **Estructura del ejercicio**: Organización del código en componentes reutilizables.

- División en módulos para Navbar, Hero Section, Content List, Footer, y elementos específicos como filtros , tarjetas de productos, tambien he introducido varios componentes más como la de comparacion, el de votes , la encuesta de satisfacción.

###

2. **Archivos mock**: En los archivos lo que hice fue dividir el documento y ve las partes mas pequeñas para poder ir avanzando el ejercicio preguntandole a veces a copilot  hasta que me iba dando lo que necesitaba.

Como por ejemplo cuando estaba con el filtrado ponia las características pero me daba todas las zaatillas de la tienda asi que tuve que preguntarle porque no se ponia el filtrado que le habia puesto
###

### Diagrama de Flujo
A continuación, se muestra un diagrama de flujo simple que explica el proceso del evento:

```plaintext
+---------------------------------+
| Inicio: Cargar Pantalla         |
+---------------------------------+
              |
              v
+---------------------------------+
| Renderizar Navbar               |
+---------------------------------+
              |
              v
+---------------------------------+
| Renderizar Hero Section         |
+---------------------------------+
              |
              v
+---------------------------------+
| Obtener datos mockeados         |
| y renderizar Content List       |
+---------------------------------+
              |
              v
+---------------------------------+
| Comparador de Productos         |
| • Seleccionar al menos 2 items  |
| • Mostrar diferencias clave     |
+---------------------------------+
              |
              v
+---------------------------------+
| Encuestas y Votaciones          |
| • Completar encuesta post-compra|
| • Registrar votos en productos  |
+---------------------------------+
              |
              v
+---------------------------------+
| Simulador de Configuración      |
| • Personalizar producto         |
| • Generar recomendaciones       |
+---------------------------------+
              |
              v
+---------------------------------+
| Aplicar filtros dinámicos       |
| y actualizar vista              |
+---------------------------------+
              |
              v
+---------------------------------+
| Interacción con elementos:      |
| • Añadir al carrito             |
| • Abrir chat/configurador       |
+---------------------------------+
              |
              v
+---------------------------------+
| Mostrar Resumen de Carrito      |
+---------------------------------+
              |
              v
+---------------------------------+
| Renderizar Footer               |
+---------------------------------+

```

### Pruebas Funcionales independientemente de la categoría

**Prueba 1:**  Comparación de productos
###
- Seleccionar al menos dos productos para comparar.
- Verificar que las diferencias clave se resaltan correctamente.

![Descripción del GIF](./recursos/gifEjc1.gif)

**Prueba 2:**  Encuestas y votaciones
###
- Completar una encuesta de satisfacción.
- Validar que los votos se registran correctamente y afectan la clasificación.

![Descripción del GIF](./recursos/gifEjc2.gif)

**Prueba 3:**  Simulación de decisión de compra
###
- Configurar un producto utilizando distintos parámetros.
- Verificar que las recomendaciones son coherentes con la configuración elegida.

![Descripción del GIF](./recursos/gifEjc3.gif)
