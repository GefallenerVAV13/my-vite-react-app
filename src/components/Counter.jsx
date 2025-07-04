import React, { useState } from 'react';

const Counter = ({ count = 1, readOnly = false }) => {
  const [quantity, setQuantity] = useState(count);

  const handleIncrement = () => {
    if (!readOnly) setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    if (!readOnly && quantity > 1) setQuantity(prev => prev - 1);
  };

  return (
    <div className="counter">
      <button className="counter-btn-" onClick={handleDecrement}>-</button>
      <span className="counter-value">{quantity}</span>
      <button className="counter-btn-plus" onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Counter;