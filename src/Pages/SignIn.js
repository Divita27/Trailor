import Logo from '../Components/Logo'
import SignInText from '../Components/SignInText'
import InputField from '../Components/InputField'
import Button from '../Components/Button'
import SignUpButton from '../Components/SignUpButton'

import MailImage from '../Components/Images/envelope.png'; 
import LockImage from '../Components/Images/lock.png'; 
// Changing here /////////////////////////////////////////////////
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config'; 
import Notification from '../Components/Notification';
// till here /////////////////////////////////////////////////

function SignInPage() {
  // Changing here /////////////////////////////////////////////////
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notification, setNotification] = useState({ message: '', type: '' });

  const handleSignIn = async () => {
    try {
      // Sign in the user
      await signInWithEmailAndPassword(auth, email, password);
      // Sign-in successful.
      setNotification({ message: 'You are now logged in!', type: 'success' });
      setTimeout(() => setNotification({message: '', type: ''}), 5000);
    } catch (error) {
      // Handle Errors here.
      console.error(error);
      setNotification({ message: error.message, type: 'error' });
    }
  };
  // till here /////////////////////////////////////////////////
  return (
    <div className="App">
      <Logo />
      <SignInText text="Please fill in your information"/>
      <br></br>
      <br></br>
      <div className="input-fields-container">
      <InputField
        label="Email"
        type="email"
        placeholder="Account@gmail.com"
        icon={MailImage}
        topRadius="30px"
        bottomRadius="10px"
        value={email}
        onChange={setEmail}
      />

      <InputField
        label="Password"
        type="password"
        placeholder="••••••••"
        icon={LockImage}
        topRadius="10px"
        bottomRadius="30px"
        value={password}
        onChange={setPassword}
      />
    </div>
      <br></br>
      <br></br>
      <Button text="Sign in now" onClick={handleSignIn}/>
      <br></br>
      <br></br>
      <SignUpButton text="Sign up" />
      <Notification message={notification.message} type={notification.type} />  
    </div>
  );
};

export default SignInPage;