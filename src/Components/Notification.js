// Notification.js
import React from 'react';
import './Styles/Notification.css'; 

const Notification = ({ message, type }) => {
  if (!message) return null;

  return (
    <div className={`notification ${type}`}>
      {message}
    </div>
  );
};

export default Notification;
