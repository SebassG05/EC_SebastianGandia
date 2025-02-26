# README - Personalización Completa del Balón

## Historia de Usuario: Personalización Completa del Balón (Color y Pegatina)

### ✏️ Título: Personalización del Balón (Color y Pegatina)  
### 📝 Descripción:  
"Como usuario, quiero poder personalizar mi balón de baloncesto eligiendo un color y una pegatina para que el balón tenga un diseño único y personal."

### 🔸 Criterios de Aceptación  
Caso de prueba 1:
Dado que el usuario está en la página de personalización del balón,
Cuando selecciona un color en el selector de color,
Entonces el balón en el lienzo 3D debe cambiar al color seleccionado en tiempo real.

Caso de prueba 2:
Dado que el usuario ha seleccionado una pegatina de la lista,
Cuando hace clic en la pegatina,
Entonces la pegatina se debe añadir correctamente al balón en la ubicación predeterminada sobre el modelo 3D del balón.

Caso de prueba 3:
Dado que el usuario ha personalizado su balón con un color y una pegatina,
Cuando hace clic en "Añadir al Carrito",
Entonces el balón se añade al carrito y se muestra en la cesta.

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
Caso de prueba 1:
Dado que el usuario está en la página de torneos,
Cuando el usuario ve los torneos activos,
Entonces los torneos activos deben mostrarse correctamente en la lista, permitiendo al usuario inscribirse en ellos.

Caso de prueba 2:
Dado que el usuario ve torneos desactivados,
Cuando el usuario pasa el mouse por encima de un torneo desactivado,
Entonces el torneo desactivado debe estar identificado con un icono de "prohibido" y no permitir la inscripción.

Caso de prueba 3:
Dado que el usuario está inscrito en un torneo activo,
Cuando hace clic en "Inscribirse" nuevamente,
Entonces el sistema debe mostrar una notificación indicando que el usuario ya está inscrito en el torneo.

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
Caso de prueba 1:
Dado que el usuario está en la página de subir videos,
Cuando selecciona un archivo de video desde su dispositivo,
Entonces el sistema debe mostrar una vista previa del video seleccionado.

Caso de prueba 2:
Dado que el usuario ha subido un video,
Cuando el usuario accede a la lista de videos subidos,
Entonces el sistema debe mostrar correctamente la lista de videos subidos y permitir la reproducción de los mismos.

Caso de prueba 3:
Dado que el usuario ha votado por un video,
Cuando el usuario realiza la votación,
Entonces el sistema debe redirigir al usuario a la página principal y mostrar una notificación de éxito.

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