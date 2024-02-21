import React from 'react';

const SignInText = ({text}) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', color: 'aliceblue' }}>
      <h2>Welcome!</h2>
      <h1>Sign in</h1>
      <p style={{ color: 'grey' }}>{text}</p>
    </div>
  );
}

export default SignInText;
