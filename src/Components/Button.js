import React from 'react';
import './Styles/Button.css'; 

// Changing here: adding onClick prop //////////////////////
const Button = ({ text, onClick }) => {
  return (
    <div className="button-container">
    <button className="signin-button" onClick={onClick}>{text}</button>
    </div>
  );
};

export default Button;
