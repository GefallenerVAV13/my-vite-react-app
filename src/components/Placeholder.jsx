import React, { useState } from 'react';

export const Placeholder = ({title, type}) => {

    const [value, setValue] = useState('');
    const [isValid, setIsValid] = useState(true);

    const validateInput = (val) => {
    if (!val.trim()) {
      return false;
    }

    if (type === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(val);
    }

    return true;
    };

    const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    setIsValid(validateInput(newValue));
  };

    return (
        <input
        placeholder={title}
        type={type}
        value={value}
        onChange={handleChange}
        className={`custom-input ${!isValid ? 'invalid': isValid && value ? 'success' : ''}`}
    />
    );
};