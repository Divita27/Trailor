import React, { useState } from 'react';
import './Styles/ExpandableCard.css'; 

const ExpandableCard = ({ header, imageSrc, text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`card ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <div className="card-header">
        <img className="profile-pic" src={header.profilePic} alt="profile" />
        <div className="post-info">
          <span>Post in</span>
          <span className="community-name">{header.community}</span>
        </div>
        <button className="expand-button" onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? '⬇️' : '➡️'}
        </button>
      </div>
      {isExpanded && (
        <div className="card-content">
          <img className="card-image" src={imageSrc} alt="Post" />
          <p className="card-text">{text}</p>
          <div className="card-actions">
            <button className="save-button">Save</button>
            <button className="comment-button">Comment</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpandableCard;
