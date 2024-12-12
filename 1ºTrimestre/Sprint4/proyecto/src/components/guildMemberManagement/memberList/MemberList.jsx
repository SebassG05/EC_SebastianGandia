import React from 'react';
import SortControls from '../sortControls/SortControls';
import Pagination from './pagination/Pagination';
import MemberItem from './memberItem/MemberItem'; // Import MemberItem
import './memberList.css';

const MemberList = ({
  members,
  selectedMembers,
  handleSelectMember,
  handleViewMemberDetails,
  handleEditMember,
  handleDeleteMember,
  handleSelectAll,
  filteredMembers,
  sortConfig,
  setSortConfig,
  currentPage,
  itemsPerPage,
  handlePageChange,
}) => {
  const allSelected = selectedMembers.length === members.length && members.length > 0;

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={allSelected}
                onChange={handleSelectAll}
              />
            </th>
            <SortControls sortConfig={sortConfig} setSortConfig={setSortConfig} />
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <MemberItem
              key={member.user_id}
              member={member}
              selectedMembers={selectedMembers}
              handleSelectMember={handleSelectMember}
              handleViewMemberDetails={handleViewMemberDetails}
              handleEditMember={handleEditMember}
              handleDeleteMember={handleDeleteMember}
            />
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredMembers.length / itemsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default MemberList;
