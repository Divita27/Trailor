import React from 'react';
import './Styles/Logo.css';
import logoImage from './Images/logo_new.png'; 

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={logoImage} alt="Logo" className="logo-image"/>
      <span className="logo-text">trailor</span>
    </div>
  );
}

export default Logo;
