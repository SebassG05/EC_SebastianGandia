document.addEventListener('DOMContentLoaded', function () {
    const createPartyButton = document.getElementById('createPartyButton');
    const showPartiesButton = document.getElementById('showPartiesButton');
    const createPartyForm = document.getElementById('createPartyForm');
    const partiesList = document.getElementById('partiesList');
    const partyForm = document.getElementById('partyForm');
    const addMemberModal = document.getElementById('addMemberModal');
    const addMemberForm = document.getElementById('addMemberForm');
    const closeModal = document.querySelector('.close');

    // Toggle visibility of create party form and parties list
    createPartyButton.addEventListener('click', function () {
        createPartyForm.classList.toggle('hidden');
        partiesList.classList.add('hidden');
    });

    showPartiesButton.addEventListener('click', function () {
        partiesList.classList.toggle('hidden');
        createPartyForm.classList.add('hidden');
        fetchParties();
    });

    // Fetch and display parties
    async function fetchParties() {
        const partySizes = [3, 5, 8];
        const parties = [];

        for (const size of partySizes) {
            for (let id = 0; id < 150; id++) {
                const response = await fetch(`http://localhost:3000/partyfinder/${size}/${id}`);
                if (response.ok) {
                    const sizeParties = await response.json();
                    parties.push(sizeParties);
                }
            }
        }

        displayParties(parties);
    }

    function displayParties(parties) {
        const partiesOf3 = document.getElementById('partiesOf3');
        const partiesOf5 = document.getElementById('partiesOf5');
        const partiesOf8 = document.getElementById('partiesOf8');

        partiesOf3.innerHTML = '<h3>Parties of 3 Members</h3>';
        partiesOf5.innerHTML = '<h3>Parties of 5 Members</h3>';
        partiesOf8.innerHTML = '<h3>Parties of 8 Members</h3>';

        parties.forEach(party => {
            const partyDiv = document.createElement('div');
            partyDiv.classList.add('party');
            partyDiv.innerHTML = `
                <p>Party ID: ${party.party_id}</p>
                <p>Creator ID: ${party.creator_id}</p>
                <p>Planned Start: ${party.planned_start}</p>
                <p>Level Cap: ${party.level_cap}</p>
                <p>Item Level Cap: ${party.ilvl_cap}</p>
                <p>Number of Members: ${party.party_members.length}</p>
                <button onclick="openAddMemberModal(${party.party_id})">Add Member</button>
                <div class="members">
                    ${party.party_members.map(member => `
                        <p>${member.user_id} (${member.role}) <button onclick="removeMember(${party.party_id}, '${member.user_id}')">Remove Member</button></p>
                    `).join('')}
                </div>
            `;

            if (party.party_members.length === 3) {
                partiesOf3.appendChild(partyDiv);
            } else if (party.party_members.length === 5) {
                partiesOf5.appendChild(partyDiv);
            } else if (party.party_members.length === 8) {
                partiesOf8.appendChild(partyDiv);
            }
        });
    }

    // Handle party creation
    document.getElementById('partyForm').addEventListener('submit', async function (event) {
        event.preventDefault();

        const partySize = document.getElementById('partySize').value;
        const creatorId = document.getElementById('creatorId').value;
        const levelCap = parseInt(document.getElementById('levelCap').value);
        const ilvlCap = parseInt(document.getElementById('ilvlCap').value);
        const partyRole = document.getElementById('partyRole').value;
        const plannedStart = document.getElementById('plannedStart').value;

        // Validación del formato de la fecha/hora
        const dateTimeRegex = /^\d{2}\/\d{2}\/\d{4}_\d{2}:\d{2}$/;
        if (!dateTimeRegex.test(plannedStart)) {
            document.getElementById('message').innerText = 'El formato de la fecha/hora debe ser DD/MM/AAAA_HH:MM.';
            return;
        }

        // Convertir la fecha/hora a un objeto Date
        const [datePart, timePart] = plannedStart.split('_');
        const [day, month, year] = datePart.split('/').map(Number);
        const [hours, minutes] = timePart.split(':').map(Number);
        const plannedStartDate = new Date(year, month - 1, day, hours, minutes);
        const currentDate = new Date();

        // Comprobaciones de validación
        if (!partySize || !creatorId || !partyRole || isNaN(levelCap) || isNaN(ilvlCap) || !plannedStart) {
            document.getElementById('message').innerText = 'Todos los campos obligatorios deben ser completados.';
            return;
        }

        if (plannedStartDate <= currentDate) {
            document.getElementById('message').innerText = 'La fecha/hora debe ser futura.';
            return;
        }

        if (levelCap <= 0 || ilvlCap <= 0) {
            document.getElementById('message').innerText = 'Los valores deben ser positivos.';
            return;
        }

        // Crear el objeto de datos
        const partyData = {
            creator_id: creatorId,
            level_cap: levelCap,
            ilvl_cap: ilvlCap,
            party_role_creator: partyRole,
            planned_start: plannedStart,
            forum_thread_id: null // o el valor correspondiente si existe
        };

        // Enviar solicitud a la API
        try {
            const response = await fetch(`http://localhost:3000/partyfinder/${partySize}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(partyData),
            });

            if (response.ok) {
                const result = await response.json();
                document.getElementById('message').innerText = result.message;
                // Reiniciar el formulario después de crear la party
                document.getElementById('partyForm').reset();
                fetchParties();
            } else {
                const error = await response.json();
                document.getElementById('message').innerText = error.message;
            }
        } catch (error) {
            document.getElementById('message').innerText = 'Error interno del servidor.';
        }
    });

    // Open add member modal
    window.openAddMemberModal = function (partyId) {
        document.getElementById('partyId').value = partyId;
        addMemberModal.style.display = 'block';
    };

    // Close modal
    closeModal.addEventListener('click', function () {
        addMemberModal.style.display = 'none';
    });

    // Handle add member
    addMemberForm.addEventListener('submit', async function (event) {
    event.preventDefault();

    // Obtener partyId desde el campo oculto en el modal
    const partyId = document.getElementById('partyId').value;
    const userId = document.getElementById('userId').value; // Suponiendo que tienes un campo para el ID de usuario
    const role = document.getElementById('role').value; // Suponiendo que tienes un campo para el rol

    const memberData = {
        user_id: userId,
        role: role,
        partyId: partyId
    };

    // Asegúrate de que partyId no sea undefined
    if (!partyId) {
        alert('Party ID no definido.');
        return;
    }

    const response = await fetch(`http://localhost:3000/partyfinder/${partyId}/addMember`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(memberData),
    });

    if (response.ok) {
        fetchParties();
        addMemberModal.style.display = 'none';
        addMemberForm.reset();
    } else {
        const error = await response.json();
        alert(`Error: ${error.message}`);
    }
});

    // Handle remove member
    window.removeMember = async function (partyId, userId) {
        const response = await fetch(`http://localhost:3000/partyfinder/${partyId}/removeMember`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_id: userId }),
        });

        if (response.ok) {
            fetchParties();
        } else {
            const error = await response.json();
            alert(`Error: ${error.message}`);
        }
    };

    // Validate date format
    function isValidDateFormat(dateString) {
        const regex = /^\d{2}\/\d{2}\/\d{4}_\d{2}:\d{2}$/;
        return regex.test(dateString);
    }

    // Initial fetch
    fetchParties();
});