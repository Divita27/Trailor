import React from 'react';
import './Styles/SignUpButton.css'; 

const SignUpButton = ({ text }) => {
  return (
    <button className="signup-button">{text}</button>
  );
};

export default SignUpButton;