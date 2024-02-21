import React, { useState } from 'react';
import './Styles/ToggleButton.css'; 

function ToggleButton({ logo, text }) {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveState = () => {
    setIsActive(!isActive);
  };

  const activeClass = isActive ? 'toggle-button-circle-active' : '';

  return (
    <div className="toggle-button">
      <div className="toggle-button-logo">
        {typeof logo === 'string' ? <img src={logo} alt="Logo" style={{ width: '24px', height: '24px' }} /> : logo}
      </div>
      <div className="toggle-button-text">{text}</div>
      <div
        className={`toggle-button-circle ${activeClass}`}
        onClick={toggleActiveState}
      ></div>
    </div>
  );
}

export default ToggleButton;
