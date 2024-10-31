document.addEventListener('DOMContentLoaded', () => {
    const membersTable = document.getElementById('membersTable').getElementsByTagName('tbody')[0];
    const memberModal = document.getElementById('memberModal');
    const memberForm = document.getElementById('memberForm');
    const addMemberBtn = document.getElementById('addMemberBtn');
    const closeModalBtn = document.getElementsByClassName('close')[0];
    const errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';
    memberModal.appendChild(errorMessage);
    let editMode = false;
    let editMemberId = null;

    const apiBaseUrl = 'http://localhost:3000';

    // Fetch and display members
    async function fetchMembers() {
        try {
            const response = await fetch(`${apiBaseUrl}/guildmembers`);
            const members = await response.json();

            membersTable.innerHTML = '';
            members.forEach(member => {
                const row = membersTable.insertRow();
                row.insertCell(0).innerText = member.user_id;
                row.insertCell(1).innerText = member.username;
                row.insertCell(2).innerText = member.level;
                row.insertCell(3).innerText = member.ilvl;
                row.insertCell(4).innerText = member.character_role;
                row.insertCell(5).innerText = member.guild_role;
                const actionsCell = row.insertCell(6);
                const editBtn = document.createElement('button');
                editBtn.innerText = 'Edit';
                editBtn.onclick = () => openModal(member);
                actionsCell.appendChild(editBtn);
                const deleteBtn = document.createElement('button');
                deleteBtn.innerText = 'Delete';
                deleteBtn.onclick = () => deleteMember(member.user_id);
                actionsCell.appendChild(deleteBtn);
            });
        } catch (error) {
            console.error('Error fetching members:', error);
        }
    }

    // Open modal
    function openModal(member = null) {
        errorMessage.innerText = ''; // Clear any previous error messages
        if (member) {
            editMode = true;
            editMemberId = member.user_id;
            memberForm.user_id.value = member.user_id;
            memberForm.username.value = member.username;
            memberForm.level.value = member.level;
            memberForm.ilvl.value = member.ilvl;
            memberForm.character_role.value = member.character_role;
            memberForm.guild_role.value = member.guild_role;
            memberForm.main_archetype.value = member.main_archetype;
            memberForm.secondary_archetype.value = member.secondary_archetype;
            memberForm.grandmaster_profession_one.value = member.grandmaster_profession_one;
            memberForm.grandmaster_profession_two.value = member.grandmaster_profession_two;
            memberForm.email.value = member.email;
            memberForm.notify_email.checked = member.notify_email;
        } else {
            editMode = false;
            editMemberId = null;
            memberForm.reset();
        }
        memberModal.style.display = 'block';
    }

    // Close modal
    function closeModal() {
        memberModal.style.display = 'none';
    }

    // Save member
    memberForm.onsubmit = async (e) => {
        e.preventDefault();
        const memberData = {
            user_id: memberForm.user_id.value,
            username: memberForm.username.value,
            level: memberForm.level.value,
            ilvl: memberForm.ilvl.value,
            character_role: memberForm.character_role.value,
            guild_role: memberForm.guild_role.value,
            main_archetype: memberForm.main_archetype.value,
            secondary_archetype: memberForm.secondary_archetype.value,
            grandmaster_profession_one: memberForm.grandmaster_profession_one.value,
            grandmaster_profession_two: memberForm.grandmaster_profession_two.value,
            email: memberForm.email.value,
            notify_email: memberForm.notify_email.checked,
        };

        try {
            if (editMode) {
                // Update member
                const response = await fetch(`${apiBaseUrl}/guildmembers/${editMemberId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(memberData),
                });
                if (!response.ok) throw new Error('Error updating member');
            } else {
                // Create member
                const response = await fetch(`${apiBaseUrl}/guildmembers`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(memberData),
                });
                if (response.status === 409) {
                    const errorData = await response.json();
                    if (errorData.message.includes('El miembro ya existe en la base de datos.')) {
                        errorMessage.innerText = 'Error: User ID already exists. Must be unique';
                        return;
                    }
                }
                if (!response.ok) throw new Error('Error creating member');
            }
            closeModal();
            fetchMembers();
        } catch (error) {
            console.error('Error saving member:', error);
        }
    };

    // Delete member
    async function deleteMember(userId) {
        if (confirm('Are you sure you want to delete this member?')) {
            try {
                const response = await fetch(`${apiBaseUrl}/guildmembers/${userId}`, {
                    method: 'DELETE',
                });
                if (!response.ok) throw new Error('Error deleting member');
                fetchMembers();
            } catch (error) {
                console.error('Error deleting member:', error);
            }
        }
    }

    // Event listeners
    addMemberBtn.onclick = () => openModal();
    closeModalBtn.onclick = closeModal;
    window.onclick = (event) => {
        if (event.target == memberModal) {
            closeModal();
        }
    };

    // Initial fetch
    fetchMembers();
});