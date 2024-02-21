import React, { useState } from 'react';
import './Styles/InputField.css';

// changing here /////////////////////////////////////////////
// adding 2 props: value, onChange

const InputField = ({ label, type, placeholder, icon, topRadius, bottomRadius, value, onChange }) => {
  // const [value, setValue] = useState('');

  const borderRadiusStyle = {
    borderTopLeftRadius: topRadius,
    borderTopRightRadius: topRadius,
    borderBottomLeftRadius: bottomRadius,
    borderBottomRightRadius: bottomRadius,
  };

  return (
    <div className="input-field" style={borderRadiusStyle}>
      <label htmlFor={type}>{label}</label>
      <div className="input-wrapper">
        <input
          id={type}
          type={type}
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
        />
        <img src={icon} alt={label} className="icon" />
      </div>
    </div>
  );
};

export default InputField;
