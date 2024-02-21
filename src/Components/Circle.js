import React from 'react';

const Circle = ({ onClick, label }) => {
  return (
    <button onClick={onClick} style={{
      backgroundColor: 'rgb(255, 76, 0)', 
      border: 'none', 
      borderRadius: '50%',
      color: 'white', 
      padding: '10px', 
      textAlign: 'center', 
      textDecoration: 'none', 
      display: 'inline-block', 
      fontSize: '16px', 
      margin: '4px 2px', 
      cursor: 'pointer', 
      width: '80px', 
      height: '80px', 
    }}>
      {label}
    </button>
  );
};

export default Circle;
