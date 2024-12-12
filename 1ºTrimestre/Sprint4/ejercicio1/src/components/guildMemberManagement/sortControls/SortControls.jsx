import React from "react";
import './sortControls.css';

const SortControls = ({ sortConfig, setSortConfig }) => {
  const handleSortChange = (key) => {
    if (sortConfig.key === key) {
      if (sortConfig.direction === 'ascending') {
        setSortConfig({ key, direction: 'descending' });
      } else if (sortConfig.direction === 'descending') {
        setSortConfig({ key: '', direction: '' }); // Clear sort
      }
    } else {
      setSortConfig({ key, direction: 'ascending' });
    }
  };

  return (
    <>
      <th className={sortConfig.key === 'user_id' ? `sorted-${sortConfig.direction}` : ''} onClick={() => handleSortChange('user_id')}>User ID</th>
      <th className={sortConfig.key === 'username' ? `sorted-${sortConfig.direction}` : ''} onClick={() => handleSortChange('username')}>Username</th>
      <th className={sortConfig.key === 'level' ? `sorted-${sortConfig.direction}` : ''} onClick={() => handleSortChange('level')}>Level</th>
      <th className={sortConfig.key === 'ilvl' ? `sorted-${sortConfig.direction}` : ''} onClick={() => handleSortChange('ilvl')}>ILVL</th>
      <th className={sortConfig.key === 'character_role' ? `sorted-${sortConfig.direction}` : ''} onClick={() => handleSortChange('character_role')}>Character Role</th>
      <th className={sortConfig.key === 'guild_role' ? `sorted-${sortConfig.direction}` : ''} onClick={() => handleSortChange('guild_role')}>Guild Role</th>
      <th className={sortConfig.key === 'main_archetype' ? `sorted-${sortConfig.direction}` : ''} onClick={() => handleSortChange('main_archetype')}>Main Archetype</th>
      <th className={sortConfig.key === 'secondary_archetype' ? `sorted-${sortConfig.direction}` : ''} onClick={() => handleSortChange('secondary_archetype')}>Secondary Archetype</th>
      <th className={sortConfig.key === 'grandmaster_profession_one' ? `sorted-${sortConfig.direction}` : ''} onClick={() => handleSortChange('grandmaster_profession_one')}>Grandmaster Profession One</th>
      <th className={sortConfig.key === 'grandmaster_profession_two' ? `sorted-${sortConfig.direction}` : ''} onClick={() => handleSortChange('grandmaster_profession_two')}>Grandmaster Profession Two</th>
      <th>Actions</th>
    </>
  );
};

export default SortControls;
