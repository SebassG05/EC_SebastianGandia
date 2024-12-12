import React from 'react';
import './bulkActions.css';

const BulkActions = ({
  selectedMembers,
  handleBatchDelete,
  handleBatchChangeRole,
}) => {
  return (
    <div className="bulk-actions">
      <button onClick={handleBatchDelete} disabled={selectedMembers.length === 0}>
        Delete Selected Members
      </button>
      <select
        onChange={(e) => handleBatchChangeRole(e.target.value)}
        disabled={selectedMembers.length === 0}
      >
        <option value="">Change Guild Role</option>
        <option value="LIDER">LIDER</option>
        <option value="GERENTE SENIOR">GERENTE SENIOR</option>
        <option value="GERENTE">GERENTE</option>
        <option value="GERENTE A2">GERENTE A2</option>
        <option value="ALPHA 2">ALPHA 2</option>
        <option value="MEMBER">MEMBER</option>
      </select>
    </div>
  );
};

export default BulkActions;
