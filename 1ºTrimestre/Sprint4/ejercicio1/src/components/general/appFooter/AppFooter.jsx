import React from 'react';
import './appFooter.css';

const AppFooter = () => {
  return (
    <footer className="app-footer">
      <p>&copy; {new Date().getFullYear()} Proyecto REACT realizado por Sebastián Gandía Gutierrez</p>
    </footer>
  );
};

export default AppFooter;
