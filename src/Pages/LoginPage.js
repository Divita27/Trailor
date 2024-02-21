import React, { useState } from 'react';
import Logo from '../Components/Logo'
import SignInText from '../Components/SignInText'
import Button from '../Components/Button'
import ToggleButton from '../Components/ToggleButton';

import FacebookLogo from '../Components/Images/facebook-logo.png'; 
import GoogleLogo from '../Components/Images/google-logo.png'; 
import AppleLogo from '../Components/Images/apple-logo.png'; 

const LoginPage = () => {
  return (
    <div className="Method">
      <Logo />
      <SignInText text="Select method"/>
      <div className="toggle-button-container">
      <ToggleButton logo = {FacebookLogo} text="Facebook" />  
      <ToggleButton logo = {GoogleLogo} text="Google" />
      <ToggleButton logo = {AppleLogo} text="Apple" /> 
      </div>
      <Button text="Next" />
      <br></br>
      <br></br>
    </div>
  );
};

export default LoginPage;