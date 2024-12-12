import React, { useState, useEffect, useMemo } from 'react';
import ConfirmationDialog from '../general/confirmationDialog/ConfirmationDialog'; // Import ConfirmationDialog
import FilterBar from './filterBar/FilterBar'; // Import FilterBar
import CreateMembers from './createMembers/CreateMembers'; // Import CreateMembers
import MemberList from './memberList/MemberList'; // Import MemberList
import BulkActions from './memberList/memberItem/bulkActions/BulkActions'; // Import BulkActions
import MemberEditModal from './memberList/memberItem/memberEditModal/MemberEditModal.jsx'; // Import MemberEditModal
import NotificationSystem from '../general/notificationSystem/NotificationSystem.jsx'; // Import NotificationSystem
import {
  fetchMembers,
  createMember,
  updateMember,
  updateMemberFail,
  deleteMember,
  batchDeleteMembers,
  batchChangeRole
} from '../../services/guildMembers_API';

const GuildMembersManagement = () => {
  const [members, setMembers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentMember, setCurrentMember] = useState(null);
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [filter, setFilter] = useState({
    character_role: '',
    guild_role: '',
    main_archetype: '',
    secondary_archetype: '',
    grandmaster_profession_one: '',
    grandmaster_profession_two: '',
    minlevel: '',
    maxlevel: '',
    minilvl: '',
    maxilvl: '',
  });
  const [sortConfig, setSortConfig] = useState({ key: 'user_id', direction: 'ascending' });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [notification, setNotification] = useState('');
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [confirmationAction, setConfirmationAction] = useState(null);

  useEffect(() => {
    if (notification) {
      const notificationElement = document.querySelector('.notification');
      if (notificationElement) {
        notificationElement.classList.add('notification-style');
      }
    }
  }, [notification]);

  useEffect(() => {
    fetchMembersData();
  }, []);

  const fetchMembersData = async () => {
    try {
      const membersData = await fetchMembers();
      setMembers(membersData);
    } catch (error) {
      console.error('Error fetching members:', error);
    }
  };

  const handleAddNewMember = () => {
    setCurrentMember(null);
    setIsModalOpen(true);
  };

  const handleEditMember = (member) => {
    setCurrentMember(member);
    setIsModalOpen(true);
  };

  const handleDeleteMember = (user_id) => {
    setConfirmationAction(() => async () => {
      try {
        await deleteMember(user_id);
        setMembers(members.filter(member => member.user_id !== user_id));
        setNotification('Se elimino correctamente');
      } catch (error) {
        setNotification('Error deleting member');
        setTimeout(() => setNotification(''), 5000);
        console.error('Error deleting member:', error);
      }
    });
    setIsConfirmationOpen(true);
  };

  const validatePositiveInteger = (value) => {
    const number = Number(value);
    return Number.isInteger(number) && number > 0;
  };

  const handleSaveMember = async (member) => {
    if (!validatePositiveInteger(member.user_id)) {
      setNotification('User ID must be a positive integer.');
      return;
    }

    if (!member.user_id) {
      setNotification('User ID is required.');
      return;
    }

    if (!validatePositiveInteger(member.level) || !validatePositiveInteger(member.ilvl)) {
      setNotification('Level and ILVL must be positive integers.');
      return;
    }

    try {
      if (currentMember) {
        await updateMember(member.user_id, member);
        setMembers(members.map(m => (m.user_id === member.user_id ? member : m)));
        setNotification('Member edited successfully');
        setTimeout(() => setNotification(''), 5000);
      } else {
        const newMember = await createMember(member);
        setMembers([...members, newMember]);
        setNotification('Member created successfully.');
        setTimeout(() => setNotification(''), 5000);
      }
      setIsModalOpen(false);
    } catch (error) {
      setNotification('Error saving member');
      setTimeout(() => setNotification(''), 5000);
      console.error('Error saving member:', error);
    }
    fetchMembersData();
  };

  const handleSelectMember = (user_id) => {
    setSelectedMembers(prevSelected =>
      prevSelected.includes(user_id)
        ? prevSelected.filter(id => id !== user_id)
        : [...prevSelected, user_id]
    );
  };

  const handleSelectAll = () => {
    const visibleMembers = paginatedMembers.map(member => member.user_id);
    if (selectedMembers.length === visibleMembers.length) {
      setSelectedMembers(selectedMembers.filter(id => !visibleMembers.includes(id)));
    } else {
      setSelectedMembers([...selectedMembers, ...visibleMembers.filter(id => !selectedMembers.includes(id))]);
    }
  };

  const handleBatchDelete = () => {
    setConfirmationAction(() => async () => {
      try {
        await batchDeleteMembers(selectedMembers);
        setMembers(members.filter(member => !selectedMembers.includes(member.user_id)));
        setSelectedMembers([]);
        setNotification('Batch delete successful');
        setTimeout(() => setNotification(''), 5000);
      } catch (error) {
        setNotification('Error deleting members');
        setTimeout(() => setNotification(''), 5000);
        console.error('Error deleting members:', error);
      }
    });
    setIsConfirmationOpen(true);
  };

  const handleBatchChangeRole = async (newRole) => {
    try {
      await batchChangeRole(selectedMembers, newRole);
      setMembers(members.map(member => selectedMembers.includes(member.user_id) ? { ...member, guild_role: newRole } : member));
      setSelectedMembers([]);
      setNotification('Batch role change successful');
      setTimeout(() => setNotification(''), 5000);
    } catch (error) {
      setNotification('Error changing roles');
      setTimeout(() => setNotification(''), 5000);
      console.error('Error changing roles:', error);
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({
      ...filter,
      [name]: value,
    });
    setCurrentPage(1); // Reset to first page on filter change
  };

  const sortedMembers = useMemo(() => {
    return [...members].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  }, [members, sortConfig]);

  const filteredMembers = useMemo(() => {
    return sortedMembers.filter(member => {
      const levelMatches =
        (filter.minlevel === '' || member.level >= Number(filter.minlevel)) &&
        (filter.maxlevel === '' || member.level <= Number(filter.maxlevel));
      const ilvlMatches =
        (filter.minilvl === '' || member.ilvl >= Number(filter.minilvl)) &&
        (filter.maxilvl === '' || member.ilvl <= Number(filter.maxilvl));
      return (
        (filter.character_role === '' || member.character_role === filter.character_role) &&
        (filter.guild_role === '' || member.guild_role === filter.guild_role) &&
        (filter.main_archetype === '' || member.main_archetype === filter.main_archetype) &&
        (filter.secondary_archetype === '' || member.secondary_archetype === filter.secondary_archetype) &&
        (filter.grandmaster_profession_one === '' || member.grandmaster_profession_one === filter.grandmaster_profession_one) &&
        (filter.grandmaster_profession_two === '' || member.grandmaster_profession_two === filter.grandmaster_profession_two) &&
        levelMatches &&
        ilvlMatches
      );
    });
  }, [sortedMembers, filter]);

  const paginatedMembers = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredMembers.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredMembers, currentPage, itemsPerPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const handleViewMemberDetails = (member) => {
    setCurrentMember(member);
    setIsModalOpen(true);
  };

  const handleConfirmAction = () => {
    if (confirmationAction) {
      confirmationAction();
    }
    setIsConfirmationOpen(false);
  };

  const handleCancelAction = () => {
    setIsConfirmationOpen(false);
  };

  return (
    <div>
      <NotificationSystem message={notification} /> {/* Use NotificationSystem */}
      <button onClick={handleAddNewMember}>Add New Member</button>
      <BulkActions
        selectedMembers={selectedMembers}
        handleBatchDelete={handleBatchDelete}
        handleBatchChangeRole={handleBatchChangeRole}
      />
      <FilterBar filter={filter} handleFilterChange={handleFilterChange} />
      <div>
        <label>
          Items per page:
          <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </label>
      </div>
      {filteredMembers.length === 0 ? (
        <p>No hay miembros para estos filtros</p>
      ) : (
        <MemberList
          members={paginatedMembers}
          selectedMembers={selectedMembers}
          handleSelectMember={handleSelectMember}
          handleViewMemberDetails={handleViewMemberDetails}
          handleEditMember={handleEditMember}
          handleDeleteMember={handleDeleteMember}
          handleSelectAll={handleSelectAll}
          filteredMembers={filteredMembers}
          sortConfig={sortConfig}
          setSortConfig={setSortConfig}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          handlePageChange={handlePageChange}
        />
      )}
      {isModalOpen && currentMember && (
        <MemberEditModal
          member={currentMember}
          onSave={handleSaveMember}
          onClose={() => setIsModalOpen(false)}
          members={members}
        />
      )}
      {isModalOpen && !currentMember && (
        <CreateMembers
          onSave={handleSaveMember}
          onClose={() => setIsModalOpen(false)}
          members={members}
        />
      )}
      <ConfirmationDialog
        isOpen={isConfirmationOpen}
        onConfirm={handleConfirmAction}
        onCancel={handleCancelAction}
      />
    </div>
  );
};

export default GuildMembersManagement;