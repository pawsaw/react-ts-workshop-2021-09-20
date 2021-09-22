import { useEffect, useState } from 'react';
import { interval } from 'rxjs';
import './App.css';
import { Counter, OnCounterValueChanged } from './components/Counter';

function App() {

  const [count, setCount] = useState(30);

  // useEffect(() => {

  //   const i = setInterval(() => {
  //     setCount(prevCount => prevCount + 1);
  //   }, 1000)
    
  //   return () => {
  //     clearInterval(i);
  //   }

  // }, []);

  const onCounterValueChanged: OnCounterValueChanged = (currentValue: number) => {
    setCount(currentValue);
  }

  return (
    <div className="App">
      <Counter value={count} onCounterValueChanged={onCounterValueChanged} />
      <span>App says, the count is {count}</span>
    </div>
  );
}

export default App;
