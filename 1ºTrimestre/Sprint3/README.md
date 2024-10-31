# EC

# Ejercicio 3: Implementación de CRUD con Modal para "Add New Member" en una Guild

## Análisis del Problema
El objetivo del ejercicio implementar una funcionalidad CRUD (Create, Read, Update, Delete) para gestionar miembros de una guild en un sistema de administración. Debes crear una interfaz que permita visualizar los miembros actuales en una tabla, añadir nuevos miembros mediante un modal y editar o eliminar miembros existentes:

- **ejercicio1.html**: Estructura de la página web.
- **ejercicio1.js**: Funcionalidad de la página.

## Diseño de la Propuesta de Solución
Para resolver el problema del primer ejercicio he tenido que hacer estos pasos:

1. **HTML (ejercicio3.html)**: En el html tuve que crear los diferentes apartados y los modales, tambien añadí un css para que estuviera mejor hecho visualmente y conectarlo al .js`.

###

2. **JavaScript (ejercicio3.js)**: En este archivo .js tuve que hacer las funciones solicitadas en el ejercicio, en este tuve que preguntarle a chat gpt:

###

- **Pregunta 1:**. tengo este html 
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Guild Member Management</title>
    <link rel="stylesheet" href="ejercicio3.css">
</head>
<body>
    <div class="container">
        <h1>Guild Member Management</h1>
        <button id="addMemberBtn">Add New Member</button>
        <table id="membersTable">
            <thead>
                <tr>
                    <th>User ID</th>
                    <th>Username</th>
                    <th>Level</th>
                    <th>Item Level</th>
                    <th>Character Role</th>
                    <th>Guild Role</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <!-- Members will be dynamically added here -->
            </tbody>
        </table>
    </div>

    <!-- Modal -->
    <div id="memberModal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <form id="memberForm">
                <label for="user_id">User ID:</label>
                <input type="text" id="user_id" name="user_id" required>
                
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required>
                
                <label for="level">Level:</label>
                <input type="number" id="level" name="level" required>
                
                <label for="ilvl">Item Level:</label>
                <input type="number" id="ilvl" name="ilvl" required>
                
                <label for="character_role">Character Role:</label>
                <select id="character_role" name="character_role" required>
                    <option value="TANK">TANK</option>
                    <option value="HEALER">HEALER</option>
                    <option value="DAMAGE">DAMAGE</option>
                    <option value="SUPPORT">SUPPORT</option>
                </select>
                
                <label for="guild_role">Guild Role:</label>
                <select id="guild_role" name="guild_role" required>
                    <option value="LIDER">LIDER</option>
                    <option value="GERENTE SENIOR">GERENTE SENIOR</option>
                    <option value="GERENTE">GERENTE</option>
                    <option value="GERENTE A2">GERENTE A2</option>
                    <option value="ALPHA 2">ALPHA 2</option>
                    <option value="MEMBER">MEMBER</option>
                </select>
                
                <label for="main_archetype">Main Archetype:</label>
                <select id="main_archetype" name="main_archetype" required>
                    <option value="BARD">BARD</option>
                    <option value="CLERIC">CLERIC</option>
                    <option value="FIGHTER">FIGHTER</option>
                    <option value="MAGE">MAGE</option>
                    <option value="RANGER">RANGER</option>
                    <option value="ROGUE">ROGUE</option>
                    <option value="SUMMONER">SUMMONER</option>
                    <option value="TANK">TANK</option>
                </select>
                
                <label for="secondary_archetype">Secondary Archetype:</label>
                <select id="secondary_archetype" name="secondary_archetype" required>
                    <option value="BARD">BARD</option>
                    <option value="CLERIC">CLERIC</option>
                    <option value="FIGHTER">FIGHTER</option>
                    <option value="MAGE">MAGE</option>
                    <option value="RANGER">RANGER</option>
                    <option value="ROGUE">ROGUE</option>
                    <option value="SUMMONER">SUMMONER</option>
                    <option value="TANK">TANK</option>
                </select>
                
                <label for="grandmaster_profession_one">Grandmaster Profession One:</label>
                <select id="grandmaster_profession_one" name="grandmaster_profession_one" required>
                    <option value="FISHING">FISHING</option>
                    <option value="HERBALISM">HERBALISM</option>
                    <option value="HUNTING">HUNTING</option>
                    <option value="LUMBERJACKING">LUMBERJACKING</option>
                    <option value="MINING">MINING</option>
                    <option value="ALCHEMY">ALCHEMY</option>
                    <option value="ANIMALHUSBANDRY">ANIMALHUSBANDRY</option>
                    <option value="COOKING">COOKING</option>
                    <option value="FARMING">FARMING</option>
                    <option value="LUMBERMILLING">LUMBERMILLING</option>
                    <option value="METALWORKING">METALWORKING</option>
                    <option value="STONECUTTING">STONECUTTING</option>
                    <option value="TANNING">TANNING</option>
                    <option value="WEAVING">WEAVING</option>
                    <option value="ARCANEENGINEERING">ARCANEENGINEERING</option>
                    <option value="ARMORSMITHING">ARMORSMITHING</option>
                    <option value="CARPENTRY">CARPENTRY</option>
                    <option value="JEWELCUTTING">JEWELCUTTING</option>
                    <option value="LEATHERWORKING">LEATHERWORKING</option>
                    <option value="SCRIBE">SCRIBE</option>
                    <option value="TAILORING">TAILORING</option>
                    <option value="WEAPONSMITHING">WEAPONSMITHING</option>
                </select>
                
                <label for="grandmaster_profession_two">Grandmaster Profession Two:</label>
                <select id="grandmaster_profession_two" name="grandmaster_profession_two" required>
                    <option value="FISHING">FISHING</option>
                    <option value="HERBALISM">HERBALISM</option>
                    <option value="HUNTING">HUNTING</option>
                    <option value="LUMBERJACKING">LUMBERJACKING</option>
                    <option value="MINING">MINING</option>
                    <option value="ALCHEMY">ALCHEMY</option>
                    <option value="ANIMALHUSBANDRY">ANIMALHUSBANDRY</option>
                    <option value="COOKING">COOKING</option>
                    <option value="FARMING">FARMING</option>
                    <option value="LUMBERMILLING">LUMBERMILLING</option>
                    <option value="METALWORKING">METALWORKING</option>
                    <option value="STONECUTTING">STONECUTTING</option>
                    <option value="TANNING">TANNING</option>
                    <option value="WEAVING">WEAVING</option>
                    <option value="ARCANEENGINEERING">ARCANEENGINEERING</option>
                    <option value="ARMORSMITHING">ARMORSMITHING</option>
                    <option value="CARPENTRY">CARPENTRY</option>
                    <option value="JEWELCUTTING">JEWELCUTTING</option>
                    <option value="LEATHERWORKING">LEATHERWORKING</option>
                    <option value="SCRIBE">SCRIBE</option>
                    <option value="TAILORING">TAILORING</option>
                    <option value="WEAPONSMITHING">WEAPONSMITHING</option>
                </select>
                
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
                
                <label for="notify_email">Notify Email:</label>
                <input type="checkbox" id="notify_email" name="notify_email">
                
                <button type="submit" id="saveMemberBtn">Save</button>
            </form>
        </div>
    </div>

    <script src="ejercicio3.js"></script>
</body>
</html>

hazme  

Visualización de Miembros:
Crea una tabla que muestre todos los miembros de la guild.
La tabla debe incluir las siguientes columnas:
User ID
Username
Level
Item Level
Character Role (enum: TANK, HEALER, DAMAGE, SUPPORT)
Guild Role (enum: LIDER, GERENTE SENIOR, GERENTE, GERENTE A2, ALPHA 2, MEMBER)
Cada fila debe tener botones de Editar y Eliminar.
Añadir Miembro (Create):
Implementa un botón "Add New Member" que abra un modal.
El modal debe contener un formulario con los siguientes campos obligatorios:
user_id (string)
username (string)
level (integer)
ilvl (integer)
character_role (enum: TANK, HEALER, DAMAGE, SUPPORT)
guild_role (enum: LIDER, GERENTE SENIOR, GERENTE, GERENTE A2, ALPHA 2, MEMBER)
main_archetype (enum: BARD, CLERIC, FIGHTER, MAGE, RANGER, ROGUE, SUMMONER, TANK)
secondary_archetype (enum: BARD, CLERIC, FIGHTER, MAGE, RANGER, ROGUE, SUMMONER, TANK)
grandmaster_profession_one (enum: FISHING, HERBALISM, HUNTING, LUMBERJACKING, MINING, ALCHEMY, ANIMALHUSBANDRY, COOKING, FARMING, LUMBERMILLING, METALWORKING, STONECUTTING, TANNING, WEAVING, ARCANEENGINEERING, ARMORSMITHING, CARPENTRY, JEWELCUTTING, LEATHERWORKING, SCRIBE, TAILORING, WEAPONSMITHING)
grandmaster_profession_two (enum: FISHING, HERBALISM, HUNTING, LUMBERJACKING, MINING, ALCHEMY, ANIMALHUSBANDRY, COOKING, FARMING, LUMBERMILLING, METALWORKING, STONECUTTING, TANNING, WEAVING, ARCANEENGINEERING, ARMORSMITHING, CARPENTRY, JEWELCUTTING, LEATHERWORKING, SCRIBE, TAILORING, WEAPONSMITHING)
email (string)
notify_email (boolean)
Los datos ingresados deben ser enviados a la API para añadir el nuevo miembro utilizando el endpoint  indicado en el YML.
Editar Miembro (Update):
Implementa la funcionalidad de editar un miembro utilizando el botón "Edit" en cada fila de la tabla.
Al hacer click en Editar, se debe abrir el mismo modal que para añadir un nuevo miembro, pero precargando los datos del miembro seleccionado.
Envía los cambios utilizando el endpoint indicado en el YML para actualizar la información.
Eliminar Miembro (Delete):
Implementa la funcionalidad de eliminar un miembro utilizando el botón "Delete" en cada fila de la tabla.
Al hacer click en Eliminar, debe realizarse una confirmación.
Envía la solicitud al endpoint indicado en el YML
Validaciones:
Todos los campos en el modal deben ser obligatorios.
El campo email debe ser validado con un formato de correo electrónico.
user_id debe ser único. Si el user_id ya existe en la guild, no se debe permitir su duplicación.

```

###

### Diagrama de Flujo
A continuación, se muestra un diagrama de flujo simple que explica el proceso del evento:
Parte 1: Información Básica del Pokémon
```plaintext
   +--------------------------------------+
   | Cargar Página y Obtener Lista de     |
   | Miembros de la API                   |
   +--------------------------------------+
               |
               v
   +--------------------------------------+
   | Mostrar tabla con columnas:          |
   | User ID, Username, Level, Item Level,|
   | Character Role, Guild Role           |
   +--------------------------------------+
               |
               v
   +--------------------------------------+
   | ¿Usuario presiona botón en tabla?    |
   +--------------------------------------+
            /           |            \
           /            |             \
       Editar        Eliminar     Añadir Nuevo
      (siguiente)   (siguiente)    Miembro (a continuación)
         v             v                v
         
   +--------------------------------------+  
   |  EDITAR MIEMBRO                      |
   | Abrir modal y cargar datos del       |
   | miembro seleccionado                 |
   +--------------------------------------+
               |
               v
   +--------------------------------------+
   | Usuario modifica campos en el modal  |
   | y confirma edición                   |
   +--------------------------------------+
               |
               v
   +--------------------------------------+
   | Validar campos (user_id único, email |
   | formato correcto, campos no vacíos)  |
   +--------------------------------------+
               |
               v
   +--------------------------------------+
   | ¿Validación exitosa?                 |
   +--------------------------------------+
            /       \
           /         \
       Sí /           \ No
         v             v
   +--------------------------------------+       +--------------------------------------+
   | Enviar datos editados a la API para  |       | Mostrar mensaje de error indicando  |
   | actualizar miembro                   |       | campos inválidos o user_id duplicado|
   +--------------------------------------+       +--------------------------------------+
               |
               v
   +--------------------------------------+
   | Actualizar tabla con los cambios     |
   +--------------------------------------+
               |
               v
   +--------------------------------------+
   | Fin de la edición                    |
   +--------------------------------------+
          
   +--------------------------------------+
   | ELIMINAR MIEMBRO                     |
   | Al hacer click en "Delete", mostrar  |
   | mensaje de confirmación              |
   +--------------------------------------+
               |
               v
   +--------------------------------------+
   | ¿Confirmación de usuario para        |
   | eliminar?                            |
   +--------------------------------------+
            /       \
           /         \
       Sí /           \ No
         v             v
   +--------------------------------------+       +--------------------------------------+
   | Enviar solicitud de eliminación a la |       | Cancelar acción y cerrar modal      |
   | API para borrar miembro              |       +--------------------------------------+
   +--------------------------------------+
               |
               v
   +--------------------------------------+
   | Actualizar tabla eliminando miembro  |
   +--------------------------------------+
               |
               v
   +--------------------------------------+
   | Fin de la eliminación                |
   +--------------------------------------+
          
   +--------------------------------------+
   | AÑADIR NUEVO MIEMBRO                 |
   | Abrir modal de formulario para       |
   | ingresar datos de nuevo miembro      |
   +--------------------------------------+
               |
               v
   +--------------------------------------+
   | Usuario rellena formulario con campos|
   | obligatorios                         |
   +--------------------------------------+
               |
               v
   +--------------------------------------+
   | Validar campos (user_id único, email |
   | formato correcto, campos no vacíos)  |
   +--------------------------------------+
               |
               v
   +--------------------------------------+
   | ¿Validación exitosa?                 |
   +--------------------------------------+
            /       \
           /         \
       Sí /           \ No
         v             v
   +--------------------------------------+       +--------------------------------------+
   | Enviar datos del nuevo miembro a la  |       | Mostrar mensaje de error indicando  |
   | API para añadirlo                    |       | campos inválidos o user_id duplicado|
   +--------------------------------------+       +--------------------------------------+
               |
               v
   +--------------------------------------+
   | Actualizar tabla con nuevo miembro   |
   +--------------------------------------+
               |
               v
   +--------------------------------------+
   | Fin de la adición                    |
   +--------------------------------------+


```
Visualización de Miembros
![Descripción del GIF](recursos/gif3.1.gif)
Añadir Nuevo Miembro
![Descripción del GIF](recursos/gif3.2.gif)
Valoraciones erróneas de Añadir Miembro
![Descripción del GIF](recursos/gif3.3.gif)
Editar Miembro
![Descripción del GIF](recursos/gif3.4.gif)
Eliminar Miembro
![Descripción del GIF](recursos/gif3.5.gif)
Comportamiento del Modal
![Descripción del GIF](recursos/gif3.6.gif)

# Ejercicio 4: Implementación de un Formulario de Creación de Party en "Party Finder"

## Análisis del Problema
El objetivo del ejercicio es que en este ejercicio, vas a implementar un formulario que permita la creación de una Party en el sistema "Party Finder". El formulario debe permitir ingresar los detalles de la party y crearla utilizando la API correspondiente.

- **ejercicio4.html**: Estructura de la página web.
- **ejercicio4.js**: Funcionalidad de la página.

## Diseño de la Propuesta de Solución
Para resolver el problema del cuarto ejercicio he tenido que hacer estos pasos:

1. **HTML (ejercicio4.html)**: En el html tuve que crear los diferentes apartados y los modales, tambien añadí un css para que estuviera mejor hecho visualmente y conectarlo al .js`.

###

2. **JavaScript (ejercicio4.js)**: En este archivo .js tuve que hacer las funciones solicitadas en el ejercicio, en este tuve que preguntarle a chat gpt:

###

- **Pregunta 1:**. tengo este html 
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Party Finder - Create Party</title>
    <link rel="stylesheet" href="ejercicio4.css">
</head>
<body>
    <h1>Create a Party</h1>

    <button id="showPartiesButton">Show Parties</button>

    <form id="createPartyForm">
        <label for="partySize">Party Size:</label>
        <select id="partySize" name="partySize" required>
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="8">8</option>
        </select>

        <label for="creatorId">Creator ID:</label>
        <input type="text" id="creatorId" name="creatorId" required>

        <label for="levelCap">Level Cap:</label>
        <input type="number" id="levelCap" name="levelCap" required>

        <label for="ilvlCap">Item Level Cap:</label>
        <input type="number" id="ilvlCap" name="ilvlCap" required>

        <label for="partyRole">Party Role:</label>
        <select id="partyRole" name="partyRole" required>
            <option value="TANK">TANK</option>
            <option value="HEALER">HEALER</option>
            <option value="DAMAGE">DAMAGE</option>
            <option value="SUPPORT">SUPPORT</option>
        </select>

        <label for="plannedStart">Planned Start:</label>
        <input type="text" id="plannedStart" name="plannedStart" placeholder="DD/MM/YYYY_HH:mm" required>

        <button type="submit">Create Party</button>
    </form>

    <div id="partyList" class="hidden">
    <h2>Created Parties</h2>
    <div class="party-container">
        <div id="partiesOf3" class="party-group">
            <h3>Parties of 3 Members</h3>
        </div>
        <div id="partiesOf5" class="party-group">
            <h3>Parties of 5 Members</h3>
        </div>
        <div id="partiesOf8" class="party-group">
            <h3>Parties of 8 Members</h3>
        </div>
    </div>
    </div>

    <script src="ejercicio4.js"></script>
</body>
</html>

Ejercicio 4: Implementación de un Formulario de Creación de Party en "Party Finder"
Contexto:
En este ejercicio, vas a implementar un formulario que permita la creación de una Party en el sistema "Party Finder". El formulario debe permitir ingresar los detalles de la party y crearla utilizando la API correspondiente.
Requerimientos Funcionales:
Formulario de Creación de Party:
Debe tener los siguientes campos:
Party Size (enum): Tamaño de la party (3, 5, 8).
Creator ID (string): ID del miembro creador de la party que debe existir en la tabla guildmembers.
Level Cap (integer): Nivel mínimo permitido en la party.
ILevel Cap (ilvl_cap) (integer): Nivel de ítem mínimo permitido en la party.
Party Role (enum): Rol del creador en la party (TANK, HEALER, DAMAGE, SUPPORT).
Planned Start (string): Fecha y hora planeadas para el inicio de la party en formato DD/MM/YYYY_HH:mm.
El formulario debe validar que:
Todos los campos obligatorios están completos.
El formato de la fecha/hora sea correcto (DD/MM/YYYY_HH:mm).
Interacciones con la API:
Al enviar el formulario, se debe realizar una solicitud  indicado en el YML para crear la party.
Si la solicitud es exitosa, la party debe aparecer listada en la interfaz de usuario.
Validaciones:
El campo Planned Start debe ser una fecha y hora futura.
Los campos Level Cap y Item Level Cap deben ser números enteros positivos.
El Creator ID debe ser un identificador válido.

```

###

### Diagrama de Flujo
A continuación, se muestra un diagrama de flujo simple que explica el proceso del evento:
Parte 1: Información Básica del Pokémon
```plaintext
   +---------------------------------------+
   | Cargar Página y Mostrar Formulario    |
   | de Creación de Party                  |
   +---------------------------------------+
                |
                v
   +---------------------------------------+
   | Rellenar campos del formulario:       |
   | Party Size, Creator ID, Level Cap,    |
   | ILevel Cap, Party Role, Planned Start |
   +---------------------------------------+
                |
                v
   +---------------------------------------+
   | Usuario envía formulario              |
   +---------------------------------------+
                |
                v
   +---------------------------------------+
   | Validar campos del formulario          |
   +---------------------------------------+
                |
                v
   +---------------------------------------+
   | ¿Todos los campos obligatorios        |
   | están completos?                      |
   +---------------------------------------+
                |
            /---|---\
           /    Sí    \   No
          /            \
         v              v
   +---------------------------------------+    +---------------------------------------+
   | ¿Formato de Planned Start correcto?  |    | Mostrar mensaje de error indicando     |
   +---------------------------------------+    | que los campos son obligatorios        |
                |                                   +---------------------------------------+
            /---|---\
           /    Sí    \   No
          /            \
         v              v
   +---------------------------------------+    +---------------------------------------+
   | ¿Planned Start es futura?            |    | Mostrar mensaje de error indicando     |
   +---------------------------------------+    | que el formato de fecha/hora es       |
                |                                   | incorrecto                             |
            /---|---\
           /    Sí    \   No
          /            \
         v              v
   +---------------------------------------+    +---------------------------------------+
   | ¿Level Cap y ILevel Cap son números   |    | Mostrar mensaje de error indicando     |
   | enteros positivos?                    |    | que Planned Start no es una fecha     |
   +---------------------------------------+    | y hora futura                          |
                |                                   +---------------------------------------+
            /---|---\
           /    Sí    \   No
          /            \
         v              v
   +---------------------------------------+    +---------------------------------------+
   | ¿Creator ID es válido?               |    | Mostrar mensaje de error indicando     |
   +---------------------------------------+    | que Level Cap o ILevel Cap son        |
                |                                   | inválidos                             |
            /---|---\
           /    Sí    \   No
          /            \
         v              v
   +---------------------------------------+    +---------------------------------------+
   | Realizar solicitud a la API para     |    | Mostrar mensaje de error indicando     |
   | crear la Party                       |    | que el Creator ID no es válido       |
   +---------------------------------------+    +---------------------------------------+
                |
                v
   +---------------------------------------+
   | ¿Solicitud exitosa?                  |
   +---------------------------------------+
            /       \
           /         \
       Sí /           \ No
         v             v
   +---------------------------------------+    +---------------------------------------+
   | Mostrar la Party en la interfaz de    |    | Mostrar mensaje de error indicando     |
   | usuario y limpiar formulario           |    | que hubo un problema al crear la      |
   +---------------------------------------+    | Party                                  |
                |
                v
   +---------------------------------------+
   | Fin de la creación de Party           |
   +---------------------------------------+



```
Crear una party correctamente 
![Descripción del GIF](recursos/gif4.1.gif)
Validación de Campos vacios
![Descripción del GIF](recursos/gif4.2.gif)
Validaciones de fecha invalida 
![Descripción del GIF](recursos/gif4.3.gif)
Validación de números negativos en Caps 
![Descripción del GIF](recursos/gif4.4.gif)
Comportamiento del formulario 
![Descripción del GIF](recursos/gif4.5.gif)


# Ejercicio 5:  Gestión Avanzada de Parties con Añadir/Remover Miembros

## Análisis del Problema
El objetivo del ejercicio es que en este ejercicio extiende la funcionalidad del sistema "Party Finder" para permitir la gestión avanzada de parties. Implementarás una pantalla que permita no solo crear una party, sino también visualizar los detalles de las parties creadas, añadir nuevos miembros, y remover miembros de las parties.


- **ejercicio4.html**: Estructura de la página web.
- **ejercicio4.js**: Funcionalidad de la página.

## Diseño de la Propuesta de Solución
Para resolver el problema del cuarto ejercicio he tenido que hacer estos pasos:

1. **HTML (ejercicio4.html)**: En el html tuve que crear los diferentes apartados y los modales, tambien añadí un css para que estuviera mejor hecho visualmente y conectarlo al .js`.

###

2. **JavaScript (ejercicio4.js)**: En este archivo .js tuve que hacer las funciones solicitadas en el ejercicio, en este tuve que preguntarle a chat gpt:

###

- **Pregunta 1:**. tengo este html 
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Party Finder</title>
    <link rel="stylesheet" href="ejercicio5.css">
</head>
<body>
    <h1>Party Finder</h1>
    
    <button id="createPartyButton">Create Party</button>
    <button id="showPartiesButton">Show Parties</button>
    
    <div id="createPartyForm" class="hidden">
        <h2>Create a New Party</h2>
        <form id="partyForm">
            <label for="partySize">Party Size:</label>
            <select id="partySize" name="partySize" required>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="8">8</option>
            </select>
            
            <label for="creatorId">Creator ID:</label>
            <input type="text" id="creatorId" name="creatorId" required>
            
            <label for="levelCap">Level Cap:</label>
            <input type="number" id="levelCap" name="levelCap" required>
            
            <label for="ilvlCap">Item Level Cap:</label>
            <input type="number" id="ilvlCap" name="ilvlCap" required>
            
            <label for="partyRole">Party Role:</label>
            <select id="partyRole" name="partyRole" required>
                <option value="TANK">TANK</option>
                <option value="HEALER">HEALER</option>
                <option value="DAMAGE">DAMAGE</option>
                <option value="SUPPORT">SUPPORT</option>
            </select>
            
            <label for="plannedStart">Planned Start (DD/MM/YYYY_HH:mm):</label>
            <input type="text" id="plannedStart" name="plannedStart" required>
            
            <button type="submit">Create Party</button>
        </form>
        <p id="message"></p>
    </div>
    
    <div id="partiesList" class="hidden">
        <h2>Created Parties</h2>
        <div id="partiesOf3">
            <h3>Parties of 3 Members</h3>
        </div>
        <div id="partiesOf5">
            <h3>Parties of 5 Members</h3>
        </div>
        <div id="partiesOf8">
            <h3>Parties of 8 Members</h3>
        </div>
    </div>
    
    <!-- Modal for adding members -->
    <div id="addMemberModal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Add Member</h2>
            <form id="addMemberForm">
                <input type="hidden" id="partyId" name="partyId">
                
                <label for="userId">User ID:</label>
                <input type="text" id="user_id" name="user_id" required>
                
                <label for="role">Party Role:</label>
                <select id="role" name="role" required>
                    <option value="TANK">TANK</option>
                    <option value="HEALER">HEALER</option>
                    <option value="DAMAGE">DAMAGE</option>
                    <option value="SUPPORT">SUPPORT</option>
                </select>
                
                <button type="submit">Add Member</button>
            </form>
        </div>
    </div>
    
    <script src="ejercicio5.js"></script>
</body>
</html>

Requerimientos Funcionales:
Visualización de Parties Creadas:
Se debe mostrar una lista de todas las parties creadas. La lista debe incluir los siguientes campos:
Party ID: Identificador único de la party.
Creator ID: ID del creador de la party que debe existir en la tabla guildmembers.
Planned Start: Fecha y hora planeada para el inicio de la party.
Level Cap: Nivel máximo permitido.
Item Level Cap: Nivel máximo de ítem permitido.
Número de miembros: Número actual de miembros en la party.
Añadir Miembros a una Party:
Cada party debe tener un botón "Add Member".
Al hacer clic en "Add Member", se debe abrir un modal que permita agregar un miembro a la party.
El modal debe contener los siguientes campos:
User ID: ID del usuario que se quiere añadir.
Party Role (enum: TANK, HEALER, DAMAGE, SUPPORT): Rol que se le asignará al miembro.
Debe validarse que:
El miembro no está ya en la party.
El rol que se le asigna esté disponible (según el tamaño de la party).
La funcionalidad debe interactuar con el endpoint  indicado en el YML para añadir el miembro.
Remover Miembros de una Party:
Cada party debe tener un botón "Remove Member" para cada miembro listado.
Al hacer clic en "Remove Member", se debe enviar una solicitud para remover al miembro de la party utilizando el endpoint  indicado en el YML.
El sistema debe verificar que el miembro existe en la party antes de removerlo.
Validaciones:
No se deben añadir más miembros de los permitidos por el Party Size.
Si un rol (TANK, HEALER, DAMAGE, SUPPORT) ya está cubierto, no se debe permitir añadir otro miembro con el mismo rol.
No se debe permitir remover al creador de la party.


```

###

### Diagrama de Flujo
A continuación, se muestra un diagrama de flujo simple que explica el proceso del evento:
Parte 1: Información Básica del Pokémon
```plaintext
   +------------------------------------------------+
   | Cargar Página y Mostrar Lista de Parties       |
   +------------------------------------------------+
                |
                v
   +------------------------------------------------+
   | Mostrar campos de cada Party:                  |
   | Party ID, Creator ID, Planned Start, Level Cap,|
   | Item Level Cap, Número de miembros              |
   +------------------------------------------------+
                |
                v
   +------------------------------------------------+
   | ¿Usuario hace clic en "Add Member"?            |
   +------------------------------------------------+
                |
            /---|---\
           /    Sí    \   No
          /            \
         v              v
   +------------------------------------------------+
   | Abrir modal "Add Member"                        |
   +------------------------------------------------+
                |
                v
   +------------------------------------------------+
   | Rellenar campos del modal:                      |
   | User ID, Party Role                             |
   +------------------------------------------------+
                |
                v
   +------------------------------------------------+
   | Usuario envía el formulario del modal           |
   +------------------------------------------------+
                |
                v
   +------------------------------------------------+
   | Validar campos del modal                        |
   +------------------------------------------------+
                |
                v
   +------------------------------------------------+
   | ¿User ID ya está en la Party?                  |
   +------------------------------------------------+
                |
            /---|---\
           /    Sí    \   No
          /            \
         v              v
   +------------------------------------------------+    +------------------------------------------------+
   | Mostrar mensaje de error: "Miembro ya está en  |    | ¿Rol asignado disponible en la Party?            |
   | la Party"                                       |    +------------------------------------------------+
   +------------------------------------------------+                |
                                                                       v
                                                               /---|---\
                                                              /    Sí    \   No
                                                             /            \
                                                            v              v
   +------------------------------------------------+    +------------------------------------------------+
   | Realizar solicitud a la API para añadir miembro |    | Mostrar mensaje de error: "Rol ya está cubierto" |
   +------------------------------------------------+    +------------------------------------------------+
                |
                v
   +------------------------------------------------+
   | ¿Solicitud exitosa?                            |
   +------------------------------------------------+
            /       \
           /         \
       Sí /           \ No
         v             v
   +------------------------------------------------+    +------------------------------------------------+
   | Actualizar lista de miembros en la Party       |    | Mostrar mensaje de error: "Error al añadir miembro" |
   +------------------------------------------------+    +------------------------------------------------+
                |
                v
   +------------------------------------------------+
   | ¿Usuario hace clic en "Remove Member" en un    |
   | miembro listado?                               |
   +------------------------------------------------+
                |
            /---|---\
           /    Sí    \   No
          /            \
         v              v
   +------------------------------------------------+
   | Realizar solicitud a la API para remover miembro|
   +------------------------------------------------+
                |
                v
   +------------------------------------------------+
   | ¿Miembro existe en la Party?                   |
   +------------------------------------------------+
                |
            /---|---\
           /    Sí    \   No
          /            \
         v              v
   +------------------------------------------------+    +------------------------------------------------+
   | ¿Es el creador de la party?                   |    | Mostrar mensaje de error: "Miembro no existe en  |
   +------------------------------------------------+    | la Party"                                       |
                |                                       +------------------------------------------------+
            /---|---\
           /    Sí    \   No
          /            \
         v              v
   +------------------------------------------------+    +------------------------------------------------+
   | Mostrar mensaje de error: "No se puede remover  |    | Remover miembro y actualizar lista de miembros   |
   | al creador de la party"                         |    +------------------------------------------------+
   +------------------------------------------------+
                |
                v
   +------------------------------------------------+
   | Enviar solicitud a la API para remover miembro  |
   +------------------------------------------------+
                |
                v
   +------------------------------------------------+
   | ¿Solicitud exitosa?                            |
   +------------------------------------------------+
            /       \
           /         \
       Sí /           \ No
         v             v
   +------------------------------------------------+    +------------------------------------------------+
   | Actualizar lista de miembros en la Party       |    | Mostrar mensaje de error: "Error al remover      |
   +------------------------------------------------+    | miembro"                                       |
   |                                                  |    +------------------------------------------------+
   +------------------------------------------------+
                |
                v
   +------------------------------------------------+
   | Fin del manejo de Parties y Miembros           |
   +------------------------------------------------+




```
Crear una party correctamente 
![Descripción del GIF](recursos/gif5.1.gif)
Validación de Campos vacios
![Descripción del GIF](recursos/gif5.2.gif)
Validaciones de fecha invalida 
![Descripción del GIF](recursos/gif5.3.gif)
Validación de números negativos en Caps 
![Descripción del GIF](recursos/gif5.4.gif)
Comportamiento del formulario 
![Descripción del GIF](recursos/gif5.5.gif)



