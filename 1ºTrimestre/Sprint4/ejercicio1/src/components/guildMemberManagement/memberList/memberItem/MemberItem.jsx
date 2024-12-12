import React, { useState } from 'react';
import MemberDetailsModal from './memberDetailsModal/MemberDetailsModal';
import './memberItem.css';

const MemberItem = ({
  member,
  selectedMembers,
  handleSelectMember,
  handleViewMemberDetails,
  handleEditMember,
  handleDeleteMember,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUsernameClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <tr>
        <td>
          <input
            type="checkbox"
            checked={selectedMembers.includes(member.user_id)}
            onChange={() => handleSelectMember(member.user_id)}
          />
        </td>
        <td>{member.user_id}</td>
        <td onClick={handleUsernameClick}>{member.username}</td>
        <td>{member.level}</td>
        <td>{member.ilvl}</td>
        <td>{member.character_role}</td>
        <td>{member.guild_role}</td>
        <td>{member.main_archetype}</td>
        <td>{member.secondary_archetype}</td>
        <td>{member.grandmaster_profession_one}</td>
        <td>{member.grandmaster_profession_two}</td>
        <td>
          <button onClick={() => handleEditMember(member)}>Edit</button>
          <button onClick={() => handleDeleteMember(member.user_id)}>Delete</button>
        </td>
      </tr>
      {isModalOpen && (
        <MemberDetailsModal member={member} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default MemberItem;
