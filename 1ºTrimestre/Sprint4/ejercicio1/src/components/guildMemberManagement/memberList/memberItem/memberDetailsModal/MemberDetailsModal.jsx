import React from 'react';
import './memberDetailsModal.css';

const MemberDetailsModal = ({ member, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Member Details</h2>
        <p><strong>User ID:</strong> {member.user_id}</p>
        <p><strong>Username:</strong> {member.username}</p>
        <p><strong>Level:</strong> {member.level}</p>
        <p><strong>ILVL:</strong> {member.ilvl}</p>
        <p><strong>Character Role:</strong> {member.character_role}</p>
        <p><strong>Guild Role:</strong> {member.guild_role}</p>
        <p><strong>Main Archetype:</strong> {member.main_archetype}</p>
        <p><strong>Secondary Archetype:</strong> {member.secondary_archetype}</p>
        <p><strong>Grandmaster Profession One:</strong> {member.grandmaster_profession_one}</p>
        <p><strong>Grandmaster Profession Two:</strong> {member.grandmaster_profession_two}</p>
      </div>
    </div>
  );
};

export default MemberDetailsModal;
