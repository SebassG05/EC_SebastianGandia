async function obtenerInfoBasicaPokemon() {
    const nombrePokemon = document.getElementById("nombrePokemon").value.toLowerCase();
    const resultadoDiv = document.getElementById("resultadoPokemon");
    resultadoDiv.innerHTML = '';

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`);
        if (!response.ok) throw new Error("Pokémon no encontrado");

        const data = await response.json();
        const info = {
            nombre: data.name.charAt(0).toUpperCase() + data.name.slice(1),
            id: data.id,
            tipos: data.types.map(typeInfo => typeInfo.type.name.charAt(0).toUpperCase() + typeInfo.type.name.slice(1)),
            imagen: data.sprites.front_default
        };

        resultadoDiv.innerHTML = `
            <h3>${info.nombre} (ID: ${info.id})</h3>
            <p>Tipos: ${info.tipos.join(", ")}</p>
            <img src="${info.imagen}" alt="${info.nombre}">
        `;
    } catch (error) {
        resultadoDiv.innerHTML = `<p>${error.message}</p>`;
    }
}

async function compararPokemon() {
    const pokemon1 = document.getElementById("pokemon1").value.toLowerCase();
    const pokemon2 = document.getElementById("pokemon2").value.toLowerCase();
    const resultadoDiv = document.getElementById("resultadoComparativa");
    resultadoDiv.innerHTML = '';

    try {
        const [data1, data2] = await Promise.all([
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon1}`),
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon2}`)
        ]);

        if (!data1.ok || !data2.ok) throw new Error("Uno o ambos Pokémon no encontrados");

        const [pokemonData1, pokemonData2] = await Promise.all([data1.json(), data2.json()]);

        const stats1 = pokemonData1.stats.reduce((acc, stat) => acc + stat.base_stat, 0);
        const stats2 = pokemonData2.stats.reduce((acc, stat) => acc + stat.base_stat, 0);

        resultadoDiv.innerHTML = `
            <h3>Comparativa entre ${pokemon1.charAt(0).toUpperCase() + pokemon1.slice(1)} y ${pokemon2.charAt(0).toUpperCase() + pokemon2.slice(1)}</h3>
            <table>
                <tr>
                    <th>Estadística</th>
                    <th>${pokemon1.charAt(0).toUpperCase() + pokemon1.slice(1)} (ID: ${pokemonData1.id})</th>
                    <th>${pokemon2.charAt(0).toUpperCase() + pokemon2.slice(1)} (ID: ${pokemonData2.id})</th>
                </tr>
                <tr>
                    <td>Tipos</td>
                    <td>${pokemonData1.types.map(typeInfo => typeInfo.type.name.charAt(0).toUpperCase() + typeInfo.type.name.slice(1)).join(", ")}</td>
                    <td>${pokemonData2.types.map(typeInfo => typeInfo.type.name.charAt(0).toUpperCase() + typeInfo.type.name.slice(1)).join(", ")}</td>
                </tr>
                <tr>
                    <td>Estadísticas Base</td>
                    <td>${stats1}</td>
                    <td>${stats2}</td>
                </tr>
            </table>
            <p>${pokemon1.charAt(0).toUpperCase() + pokemon1.slice(1)} tiene ${stats1 > stats2 ? 'mejores' : 'peores'} estadísticas generales.</p>
        `;
    } catch (error) {
        resultadoDiv.innerHTML = `<p>${error.message}</p>`;
    }
}

async function obtenerHabilidades(pokemonUrl) {
    const response = await fetch(pokemonUrl);
    const data = await response.json();
    
    // Verifica si 'abilities' existe y es un array
    if (data.abilities && Array.isArray(data.abilities)) {
        return data.abilities.map(abilityInfo => abilityInfo.ability.name.charAt(0).toUpperCase() + abilityInfo.ability.name.slice(1));
    } else {
        return []; // Devuelve un array vacío si no hay habilidades
    }
}

async function obtenerCadenaEvolutiva() {
    const pokemon = document.getElementById("pokemonEvolutivo").value.toLowerCase();
    const resultadoDiv = document.getElementById("resultadoEvolutivo");
    resultadoDiv.innerHTML = '';

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        if (!response.ok) throw new Error("Pokémon no encontrado");

        const data = await response.json();
        const speciesResponse = await fetch(data.species.url);
        const speciesData = await speciesResponse.json();
        const evolutionResponse = await fetch(speciesData.evolution_chain.url);
        const evolutionData = await evolutionResponse.json();

        const evoluciones = [];
        let current = evolutionData.chain;

        do {
            // Obtén las habilidades desde la URL del Pokémon
            const habilidades = await obtenerHabilidades(`https://pokeapi.co/api/v2/pokemon/${current.species.name}`);
            evoluciones.push({
                name: current.species.name.charAt(0).toUpperCase() + current.species.name.slice(1),
                abilities: habilidades.length > 0 ? habilidades : ["Sin habilidades"]
            });
            current = current.evolves_to[0];
        } while (current);

        if (evoluciones.length === 1) {
            resultadoDiv.innerHTML = `<p>${pokemon.charAt(0).toUpperCase() + pokemon.slice(1)} no tiene cadena evolutiva.</p>`;
        } else {
            resultadoDiv.innerHTML = `<h3>Cadena Evolutiva de ${pokemon.charAt(0).toUpperCase() + pokemon.slice(1)}</h3>`;
            evoluciones.forEach(evo => {
                resultadoDiv.innerHTML += `
                    <p>
                        ${evo.name}: Habilidades - 
                        ${evo.abilities.map(ability => `<button onclick="mostrarDetalleHabilidad('${ability}')">${ability}</button>`).join(", ")}
                    </p>
                `;
            });
        }

    } catch (error) {
        resultadoDiv.innerHTML = `<p>${error.message}</p>`;
    }
}