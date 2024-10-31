document.addEventListener('DOMContentLoaded', () => {
    const createPartyForm = document.getElementById('createPartyForm');
    const errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';
    createPartyForm.appendChild(errorMessage);

    const apiBaseUrl = 'http://localhost:3000'; 

    // Validar formato de fecha
    function isValidDateFormat(dateString) {
        const datePattern = /^\d{2}\/\d{2}\/\d{4}_\d{2}:\d{2}$/;
        return datePattern.test(dateString);
    }

    // Validar que la fecha sea futura
    function isFutureDate(dateString) {
        const [date, time] = dateString.split('_');
        const [day, month, year] = date.split('/');
        const [hours, minutes] = time.split(':');
        const plannedDate = new Date(year, month - 1, day, hours, minutes);
        return plannedDate > new Date();
    }

    // Guardar party
    createPartyForm.onsubmit = async (e) => {
        e.preventDefault();

        // Obtener valores correctamente
        const levelCapValue = parseInt(createPartyForm.querySelector('#levelCap').value, 10);
        const ilvlCapValue = parseInt(createPartyForm.querySelector('#ilvlCap').value, 10);
        
        // Validación de Level Cap y Item Level Cap
        if (isNaN(levelCapValue) || levelCapValue < 0) {
            errorMessage.innerText = 'Level Cap must be a valid positive number';
            return;
        }

        if (isNaN(ilvlCapValue) || ilvlCapValue < 0) {
            errorMessage.innerText = 'Item Level Cap must be a valid positive number';
            return;
        }

        const partyData = {
            partySize: createPartyForm.querySelector('#partySize').value,
            creator_id: createPartyForm.querySelector('#creatorId').value,
            level_cap: levelCapValue,
            ilvl_cap: ilvlCapValue,
            party_role_creator: createPartyForm.querySelector('#partyRole').value,
            planned_start: createPartyForm.querySelector('#plannedStart').value
        };

        // Validación de formato de fecha
        if (!isValidDateFormat(partyData.planned_start)) {
            errorMessage.innerText = 'Invalid date format. Please use DD/MM/YYYY_HH:mm';
            return;
        }

        // Validación de fecha futura
        if (!isFutureDate(partyData.planned_start)) {
            errorMessage.innerText = 'Planned start date must be in the future.';
            return;
        }

        try {
            // Construcción de URL con el tamaño de la party
            const url = `${apiBaseUrl}/partyfinder/${partyData.partySize}`;

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(partyData),
            });

            const responseText = await response.text();

            try {
                const responseData = JSON.parse(responseText);

                if (!response.ok) {
                    throw new Error(responseData.message || 'Error creating party');
                }

                alert('Party created successfully!');
                createPartyForm.reset();
            } catch (jsonError) {
                throw new Error(`Unexpected response format: ${responseText}`);
            }
        } catch (error) {
            console.error('Error saving party:', error);
            errorMessage.innerText = `An error occurred while creating the party: ${error.message}`;
        }
    };
});
