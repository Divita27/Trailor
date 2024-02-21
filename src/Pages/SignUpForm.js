import Logo from '../Components/Logo'
import SignInText from '../Components/SignInText'
import InputField from '../Components/InputField'
import Button from '../Components/Button'
import MailImage from '../Components/Images/envelope.png'; 
import LockImage from '../Components/Images/lock.png'; 
import ProfileImage from '../Components/Images/profile.png'; 
import Notification from '../Components/Notification';  //added thisssss

// Changing here ///////////////////////////////////////////////////////////
import React, { useState } from 'react';
import {auth,db} from '../firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { getDatabase, ref, set } from "firebase/database";

// till here ///////////////////////////////////////////////////////////
function SignUpForm() {
  // Changing here ///////////////////////////////////////////////////////////
  const [notification, setNotification] = useState({message: '', type: ''});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setNotification({message: 'You have been successfully signed up!', type: 'success'});
      setTimeout(() => setNotification({message: '', type: ''}), 5000);
      const user = userCredential.user;

      // Realtime Database write
      const database = getDatabase();
      set(ref(database, 'users/' + user.uid), {
        firstName: firstName,
        lastName: lastName,
        email: email, 
      });


    } catch (error) {
      console.error(error);
      setNotification({message: 'Failed to sign up: ' + error.message, type: 'error'});
      setTimeout(() => setNotification({message: '', type: ''}), 5000);
    }
  };
  // till here ///////////////////////////////////////////////////////////
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
        value={email} // Pass the email state
        onChange={setEmail} ////////////////////
      />

      <InputField
        label="Password"
        type="password"
        placeholder="••••••••"
        icon={LockImage}
        topRadius="10px"
        bottomRadius="10px"
        value={password} // Pass the email state
        onChange={setPassword} ////////////////////
      />

    <InputField
        label="First Name"
        type="text"
        placeholder="First Name"
        icon={ProfileImage}
        topRadius="10px"
        bottomRadius="10px"
        value={firstName} // Pass the email state
        onChange={(value) => setFirstName(value)} ////////////////////
      />

    <InputField
        label="Last Name"
        type="text"
        placeholder="Last Name"
        icon={ProfileImage}
        topRadius="10px"
        bottomRadius="30px"
        value={lastName} // Pass the email state
        onChange={(value) => setLastName(value)} ////////////////////
      />

    </div>
      <br></br>
      <br></br>
      {/* changing here */}
      <Button text="Done" onClick={handleSignUp} />
      <Notification message={notification.message} type={notification.type} />  
      <br></br>
      <br></br>
    </div>
  );
};

export default SignUpForm;