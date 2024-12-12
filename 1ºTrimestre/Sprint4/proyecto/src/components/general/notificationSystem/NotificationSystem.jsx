import React from 'react';
import './notificationSystem.css';

const NotificationSystem = ({ message }) => {
  if (!message) return null;

  return (
    <div className="notification notification-style">
      {message}
    </div>
  );
};

export default NotificationSystem;
