const estudiantes = [
    { nombre: "Juan", ciudad: "Madrid", beca: false, edad: 21, calificaciones: { matematicas: 5, fisica: 7, historia: 6 } },
    { nombre: "Ana", ciudad: "Barcelona", beca: true, edad: 20, calificaciones: { matematicas: 9, fisica: 6, historia: 8 } },
    { nombre: "Pedro", ciudad: "Madrid", beca: false, edad: 23, calificaciones: { matematicas: 4, fisica: 5, historia: 7 } },
    { nombre: "Maria", ciudad: "Sevilla", beca: true, edad: 19, calificaciones: { matematicas: 8, fisica: 7, historia: 9 } },
    { nombre: "Jose", ciudad: "Madrid", beca: false, edad: 22, calificaciones: { matematicas: 6, fisica: 7, historia: 5 } },
    { nombre: "Isabel", ciudad: "Valencia", beca: true, edad: 20, calificaciones: { matematicas: 5, fisica: 8, historia: 7 } },
    { nombre: "David", ciudad: "Bilbao", beca: false, edad: 24, calificaciones: { matematicas: 7, fisica: 6, historia: 8 } },
    { nombre: "Laura", ciudad: "Barcelona", beca: true, edad: 19, calificaciones: { matematicas: 6, fisica: 8, historia: 7 } },
    { nombre: "Miguel", ciudad: "Sevilla", beca: false, edad: 21, calificaciones: { matematicas: 7, fisica: 7, historia: 8 } },
    { nombre: "Sara", ciudad: "Madrid", beca: true, edad: 20, calificaciones: { matematicas: 6, fisica: 5, historia: 9 } },
    { nombre: "Daniela", ciudad: "Valencia", beca: false, edad: 22, calificaciones: { matematicas: 8, fisica: 9, historia: 6 } },
    { nombre: "Alberto", ciudad: "Bilbao", beca: true, edad: 23, calificaciones: { matematicas: 5, fisica: 8, historia: 6 } },
    { nombre: "Gabriel", ciudad: "Sevilla", beca: false, edad: 19, calificaciones: { matematicas: 8, fisica: 5, historia: 7 } },
    { nombre: "Carmen", ciudad: "Barcelona", beca: true, edad: 24, calificaciones: { matematicas: 9, fisica: 9, historia: 9 } },
    { nombre: "Roberto", ciudad: "Madrid", beca: false, edad: 20, calificaciones: { matematicas: 4, fisica: 5, historia: 5 } },
    { nombre: "Carolina", ciudad: "Valencia", beca: true, edad: 22, calificaciones: { matematicas: 5, fisica: 7, historia: 6 } },
    { nombre: "Alejandro", ciudad: "Bilbao", beca: false, edad: 23, calificaciones: { matematicas: 9, fisica: 8, historia: 8 } },
    { nombre: "Lucia", ciudad: "Barcelona", beca: true, edad: 21, calificaciones: { matematicas: 7, fisica: 7, historia: 7 } },
    { nombre: "Ricardo", ciudad: "Sevilla", beca: false, edad: 19, calificaciones: { matematicas: 6, fisica: 5, historia: 6 } },
    { nombre: "Marina", ciudad: "Madrid", beca: true, edad: 20, calificaciones: { matematicas: 5, fisica: 9, historia: 8 } }
];


function estudiantesDestacadosPorAsignatura(asignatura) {
    return estudiantes.map(estudiante => ({ nombre: estudiante.nombre, calificacion: estudiante.calificaciones[asignatura] }))
        .sort((a, b) => b.calificacion - a.calificacion).slice(0, 3);
}

function mostrarEstudiantesDestacados() {
    console.log("Estudiantes destacados en Matemáticas:", estudiantesDestacadosPorAsignatura("matematicas"));
}

function asignaturaMenorRendimiento() {
    const asignaturas = ["matematicas", "fisica", "historia"];
    const promedios = asignaturas.map(asignatura => {
        const total = estudiantes.reduce((sum, estudiante) => sum + estudiante.calificaciones[asignatura], 0);
        return { asignatura, promedio: total / estudiantes.length };
    });
    return promedios.reduce((min, asignatura) => asignatura.promedio < min.promedio ? asignatura : min);
}

function mostrarAsignaturaMenorRendimiento() {
    console.log("Asignatura de menor rendimiento:", asignaturaMenorRendimiento());
}

function mejoraNotasBeca() {
    estudiantes.forEach(estudiante => {
        if (estudiante.beca) {
            for (let asignatura in estudiante.calificaciones) {
                estudiante.calificaciones[asignatura] = Math.min(estudiante.calificaciones[asignatura] * 1.1, 10);
            }
        }
    });
    return estudiantes;
}

function aplicarMejoraNotasBeca() {
    console.log("Mejorar notas para estudiantes con beca:", mejoraNotasBeca());
}

function estudiantesPorCiudadYAsignatura(ciudad, asignatura) {
    return estudiantes
        .filter(estudiante => estudiante.ciudad === ciudad)  // Filtrar por ciudad
        .map(estudiante => ({ 
            nombre: estudiante.nombre, 
            calificacion: estudiante.calificaciones[asignatura] 
        }))  // Extraer solo el nombre y la calificación de la asignatura dada
        .sort((a, b) => b.calificacion - a.calificacion);  // Ordenar de mayor a menor
}

function mostrarEstudiantesPorCiudadYAsignatura() {
    const ciudad = "Madrid";  // Cambia esto a la ciudad que desees consultar
    const asignatura = "fisica";  // Cambia esto a la asignatura que desees consultar
    console.log(`Estudiantes de ${ciudad} en ${asignatura}:`, estudiantesPorCiudadYAsignatura(ciudad, asignatura));
}


function estudiantesSinBecaPorCiudad(ciudad) {
    return estudiantes.filter(estudiante => estudiante.ciudad === ciudad && !estudiante.beca).length;
}

function mostrarEstudiantesSinBecaPorCiudad() {
    console.log("Estudiantes sin beca en Madrid:", estudiantesSinBecaPorCiudad("Madrid"));
}

function promedioEdadEstudiantesConBeca() {
    const estudiantesConBeca = estudiantes.filter(estudiante => estudiante.beca);
    return estudiantesConBeca.reduce((sum, estudiante) => sum + estudiante.edad, 0) / estudiantesConBeca.length;
}

function mostrarPromedioEdadConBeca() {
    console.log("Promedio de edad de estudiantes con beca:", promedioEdadEstudiantesConBeca());
}

function mejoresEstudiantes() {
    return estudiantes.map(estudiante => {
        const promedio = (estudiante.calificaciones.matematicas + estudiante.calificaciones.fisica + estudiante.calificaciones.historia) / 3;
        return { nombre: estudiante.nombre, promedio };
    }).sort((a, b) => b.promedio - a.promedio).slice(0, 2);
}

function mostrarMejoresEstudiantes() {
    console.log("Los mejores estudiantes:", mejoresEstudiantes());
}

function estudiantesAprobados() {
    return estudiantes.filter(estudiante => {
        for (let asignatura in estudiante.calificaciones) {
            if (estudiante.calificaciones[asignatura] < 5) {
                return false;
            }
        }
        return true;
    }).map(estudiante => estudiante.nombre);
}

function mostrarEstudiantesAprobados() {
    console.log("Estudiantes aprobados:", estudiantesAprobados());
}
