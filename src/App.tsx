import { useEffect, useState } from 'react';
import { interval } from 'rxjs';
import './App.css';
import { Counter } from './components/Counter';

function App() {

  // const [count, setCount] = useState(77);

  // useEffect(() => {

  //   const i = setInterval(() => {
  //     setCount(prevCount => prevCount + 1);
  //   }, 1000)
    
  //   return () => {
  //     clearInterval(i);
  //   }

  // }, []);

  return (
    <div className="App">
      <Counter initialValue={30} />
      {/* <span>App says, the count is {count}</span> */}
    </div>
  );
}

export default App;
