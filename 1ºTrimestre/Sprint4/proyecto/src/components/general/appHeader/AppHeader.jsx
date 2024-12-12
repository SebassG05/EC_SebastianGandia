import React from 'react';
import { Link } from 'react-router-dom';
import './appHeader.css';

const AppHeader = () => {
  return (
    <header className="app-header">
      <nav>
        <ul>
          <li><Link to="/guild-member-management">Guild Member Management</Link></li>
          <li><Link to="/party-finder">Party Finder</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
