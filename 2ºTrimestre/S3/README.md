# README - Personalización Completa del Balón

## Historia de Usuario: Personalización Completa del Balón (Color y Pegatina)

### ✏️ Título: Personalización del Balón (Color y Pegatina)  
### 📝 Descripción:  
"Como usuario, quiero poder personalizar mi balón de baloncesto eligiendo un color y una pegatina para que el balón tenga un diseño único y personal."

### 🔸 Criterios de Aceptación  
Dado que el usuario accede a la pantalla de personalización del balón, la funcionalidad deberá permitirle:

- Seleccionar un color para la pelota mediante un selector de color.
- Elegir una pegatina de una lista de opciones disponibles.
- Añadir la pegatina seleccionada sobre la pelota en una ubicación predeterminada.

Cuando el usuario seleccione el color y la pegatina y haga clic en el botón "Continuar", el sistema deberá mostrar el balón personalizado con el color y la pegatina seleccionados en el lienzo 3D.

Entonces, el balón debería reflejar los cambios de color y mostrar la pegatina correctamente, permitiendo al usuario visualizar el diseño final antes de proceder con la compra. Además, al hacer clic en "Añadir al Carrito", el sistema debería confirmar la acción y permitir continuar con la compra.

### 🔸 Diseño  
🎨 **Interfaz de Usuario**  
- Se añadirá un selector de color para permitir que el usuario seleccione un color para el balón.  
- El balón 3D se actualizará con el color seleccionado en tiempo real.  
- Se añadirá un dropdown para seleccionar una pegatina entre varias opciones disponibles.  
- El botón "Añadir al Carrito" estará disponible después de la personalización.

⚙️ **Actualización en el modelo 3D**  
- El modelo 3D del balón se actualizará dinámicamente con los cambios de color y pegatina.  
- Se asegurará que la pegatina se ubique correctamente en la pelota, y que las opciones seleccionadas se reflejen en el modelo visualizado.

### 🔸 Implementación  
📌 **Modificaciones en Código**  
- Se integrarán las funcionalidades de cambio de color y adición de pegatinas en el archivo `custom-shoe-configurator.component.ts`.  
- Utilización de Three.js para cargar y manipular el modelo 3D del balón.  
- Implementación de un selector de color HTML y un dropdown para seleccionar las pegatinas.  
- El componente gestionará el proceso de personalización, actualizando el modelo 3D del balón y permitiendo agregarlo al carrito.

🗂️ **Estructura de Archivos**  
- El archivo `custom-shoe-configurator.component.ts` manejará la lógica de personalización del balón, incluyendo el cambio de color y la adición de pegatinas.  
- Los archivos de texturas de las pegatinas y el modelo 3D del balón deben ser ubicados en la carpeta `assets/stickers/` y `assets/models/`, respectivamente.

### 🔸 Pruebas  
🔍 **Caso de prueba 1**:  
- Hacer clic en el selector de color, seleccionar un color y verificar que el balón en el lienzo 3D cambia al color seleccionado.  

![Descripción del GIF](./recursos/gifEjc2.gif)

🔍 **Caso de prueba 2**:  
- Seleccionar una pegatina del dropdown y verificar que se añade al balón en la ubicación predeterminada.  
![Descripción del GIF](./recursos/gifEjc2.1.gif)

🔍 **Caso de prueba 3**:  
- Hacer clic en "Añadir al Carrito" y verificar que el balón personalizado se agrega al carrito correctamente.
![Descripción del GIF](./recursos/gifEjc2.3.gif)
# README - Funcionalidad de Torneos

## Historia de Usuario: Gestión de Inscripciones en Torneos

### ✏️ Título: Visualización de Torneos Activos, Inscripción y Restricciones de Torneos Desactivados  
### 📝 Descripción:  
"Como usuario, quiero poder visualizar los torneos activos, inscribirme en ellos, y saber si un torneo está desactivado para evitar intentar inscribirme en torneos que no están disponibles."

### 🔸 Criterios de Aceptación  
Dado que el usuario está en la página de torneos, la funcionalidad deberá permitirle:

1. Ver todos los torneos disponibles, mostrando solo los torneos activos.
2. Mostrar los torneos desactivados con un icono de "prohibido" al pasar el mouse por encima, impidiendo que el usuario intente inscribirse en ellos.
3. Inscribirse a un torneo activo mediante un botón "Inscribirse", que cambia a "Ya Inscrito" tras la inscripción. El sistema debe mostrar una alerta de confirmación y el botón debe actualizarse dinámicamente.

Cuando el usuario acceda a la página de torneos, el sistema deberá cargar y mostrar los torneos activos y desactivados.

Entonces, los torneos activos deberán ser visibles, y los desactivados deberán estar claramente identificados con un icono de "prohibido" y no permitir la inscripción. Los torneos activos deberán permitir la inscripción y actualizar el estado del botón a "Ya Inscrito" tras la inscripción.

### 🔸 Diseño  
🎨 **Interfaz de Usuario**  
- Se mostrará una lista de torneos con un estado visual para cada uno (activo o desactivado).  
- Los torneos desactivados estarán inactivos y no permitirán la inscripción.  
- Los torneos activos permitirán la inscripción y cambiarán el botón a "Ya Inscrito" tras la acción.  
- Al pasar el mouse por encima de los torneos desactivados, se mostrará un icono de "prohibido".

⚙️ **Interacción con los Torneos**  
- Los usuarios podrán inscribirse solo en torneos activos.
- El sistema bloqueará la interacción con los torneos desactivados.

### 🔸 Implementación  
📌 **Modificaciones en Código**  
- Se implementará la funcionalidad de visualización de torneos activos y desactivados en el archivo `tournament-card.component.ts`.  
- La inscripción se gestionará en el componente `tournaments.component.ts`, actualizando el estado del botón a "Ya Inscrito" tras la acción.  
- Se usará una lógica de control de estados para determinar si un torneo está activo o desactivado, mostrando el icono de "prohibido" en los torneos desactivados.  
- El componente `tournament-card.component.ts` manejará el estado de inscripción y el cambio de texto en el botón.

🗂️ **Estructura de Archivos**  
- `tournaments.component.ts` y `tournament-card.component.ts` manejarán las interacciones con los torneos, incluyendo su visualización y el proceso de inscripción.  
- Los iconos de "prohibido" estarán almacenados en `assets/icons/` para su fácil acceso.

### 🔸 Pruebas  
🔍 **Caso de prueba 1**:  
- Verificar que los torneos activos se muestran correctamente en la lista y permiten la inscripción.
![Descripción del GIF](./recursos/gifEjc2.4.gif)  

🔍 **Caso de prueba 2**:  
- Comprobar que los torneos desactivados están identificados con el icono de "prohibido" y no permiten la inscripción.  
![Descripción del GIF](./recursos/gifEjc2.5.gif)

🔍 **Caso de prueba 3**:  
- Hacer clic en "Inscribirse" en un torneo activo , hacer click otra vez y que te notifique que ya estas
![Descripción del GIF](./recursos/gifEjc2.6.gif)
# README - Funcionalidad de "Sube tus Videos"

## Historia de Usuario: Gestión de Videos (Subir, Ver y Votar)

### ✏️ Título: Subida, Visualización y Votación de Videos  
### 📝 Descripción:  
"Como usuario, quiero poder subir mis videos, ver los que ya he subido, y votar por los videos subidos por otros usuarios para compartir mis opiniones."

### 🔸 Criterios de Aceptación  
Dado que el usuario está en la página de gestión de videos, la funcionalidad deberá permitirle:

1. **Subir videos**  
   - Seleccionar un video desde su dispositivo.
   - Ver una vista previa del video seleccionado.
   - Subir el video al sistema con una confirmación visual.

2. **Ver videos subidos**  
   - Ver una lista de los videos que ha subido.
   - Reproducir los videos subidos desde la lista.

3. **Votar por videos**  
   - Ver los videos subidos por otros usuarios.
   - Votar por cada video con un sistema de estrellas.
   - Ver el promedio de votos de cada video.
   - Al votar, redirigir al usuario al home page con una notificación de éxito.

Cuando el usuario suba un video, lo vea en la lista de videos o vote por otro video, el sistema deberá permitir la visualización y la interacción de manera fluida y dinámica.

Entonces, el sistema debe permitir la selección, visualización, reproducción y votación de videos de forma eficiente, asegurando que las interacciones se actualicen correctamente en tiempo real.

### 🔸 Diseño  
🎨 **Interfaz de Usuario**  
- Se añadirá un botón para seleccionar y subir videos, y una vista previa del video antes de la subida.  
- Los videos subidos se mostrarán en una lista con la opción de reproducirlos.  
- Los videos subidos por otros usuarios tendrán un sistema de votación con estrellas, y se mostrará el promedio de votos de cada video.

⚙️ **Integración de Funcionalidades**  
- La funcionalidad de subir videos será independiente, pero se integrará con la vista de videos subidos para poder visualizar y votar por ellos.  
- El sistema de votación será dinámico, permitiendo a los usuarios votar y ver el promedio actualizado de votos.

### 🔸 Implementación  
📌 **Modificaciones en Código**  
- Se implementarán los métodos de subida, visualización y votación de videos en el componente `videos.component.ts`.  
- El sistema de vista previa se gestionará mediante un componente reactivo que actualiza la interfaz cuando el usuario selecciona un video.  
- Se integrará un sistema de votación en el componente `vote-videos.component.ts` para permitir la interacción con las estrellas.  
- La funcionalidad de redirigir al usuario a la página principal y mostrar una notificación se implementará tras realizar la votación.

🗂️ **Estructura de Archivos**  
- `videos.component.ts` manejará la subida y visualización de videos.  
- `vote-videos.component.ts` gestionará la votación y el promedio de votos.  
- Los archivos de video estarán ubicados en `assets/videos/`, y los archivos de vista previa se cargarán dinámicamente.

### 🔸 Pruebas  
🔍 **Caso de prueba 1**:  
- Verificar que el botón de selección de video permite elegir un archivo desde el dispositivo y que la vista previa se actualiza al seleccionar un video y que cuando le das a eliminar video se elimine correctamente.
![Descripción del GIF](./recursos/gifEjc2.7.gif)

🔍 **Caso de prueba 2**:  
- Verificar que la lista de videos subidos se muestra correctamente y que cada video se puede reproducir desde la interfaz.
![Descripción del GIF](./recursos/gifEjc2.8.gif)

🔍 **Caso de prueba 3**:  
-  Verificar que cuando votas te redirija al home page con una notificación de exito.
![Descrººipción del GIF](./recursos/gifEjc2.9.gif)