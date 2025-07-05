import React from 'react';

const Counter = ({ value = 1, onIncrement, onDecrement, readOnly = false }) => {
  return (
    <div className="counter">
      <button
        className="counter-btn-minus"
        onClick={onDecrement}
        disabled={readOnly || value <= 1}
      >
        -
      </button>
      <span className="counter-value">{value}</span>
      <button
        className="counter-btn-plus"
        onClick={onIncrement}
        disabled={readOnly}
      >
        +
      </button>
    </div>
  );
};

export default Counter;