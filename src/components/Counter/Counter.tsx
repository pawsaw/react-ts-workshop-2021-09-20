import React, { useState } from 'react';

export interface CounterProps {
  initialValue?: number;
}

export const Counter: React.FC<CounterProps> = ({ initialValue = 100 }) => {

  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <button onClick={decrement}>
        -
      </button>
      <span>{count}</span>
      <button onClick={increment}>
        +
      </button>
    </>
  );
};