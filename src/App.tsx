import { useEffect, useState } from 'react';
import { BookList } from './components/BookList';
import { Counter, OnCounterValueChanged } from './components/Counter';
import { books } from './data/books';

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
      <BookList books={books} onBookSelected={(book) => {
        alert(`Book selected: ${book.title}`);
      }} />
    </div>
  );
}

export default App;
