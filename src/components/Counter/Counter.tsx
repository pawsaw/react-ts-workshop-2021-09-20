import React, { useState } from 'react';

export const noop = () => {};

export interface OnCounterValueChanged {
  (currentValue: number): void;
}

export interface CounterProps {
  value?: number;
  onCounterValueChanged?: OnCounterValueChanged;
}

export const Counter: React.FC<CounterProps> = ({ value = 100, onCounterValueChanged = noop }) => {


  const increment = () => {
    const currentValue = value + 1;
    onCounterValueChanged(currentValue);
  };

  const decrement = () => {
    const currentValue = value - 1;
    onCounterValueChanged(currentValue);
  };

  return (
    <>
      <button onClick={decrement}>
        -
      </button>
      <span>{value}</span>
      <button onClick={increment}>
        +
      </button>
    </>
  );
};