import React, { useState } from 'react';
import './Styles/CollapsibleCard.css'; 

const CollapsibleCard = ({ dayNumber, imagePath, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`card ${isOpen ? 'open' : ''}`}>
      <div className="card-header" onClick={() => setIsOpen(!isOpen)}>
        <span className="day-number">Day {dayNumber}</span>
        <span className="toggle-icon">{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && (
        <div className="card-body">
          {imagePath && (
            <img src={imagePath} alt={`Day ${dayNumber}`} className="card-image" />
          )}
          <p className="card-text">{text}</p>
          <div className="card-actions">
            <button className="action-btn">Save</button>
            <button className="action-btn">Comment</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CollapsibleCard;
