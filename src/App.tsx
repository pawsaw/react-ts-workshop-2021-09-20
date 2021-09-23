import { useState } from 'react';
import { BookDetail } from './components/BookDetail';
import { BookList } from './components/BookList';
import { Book, useBooks } from './domain/books';


function App() {


  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const books: Book[] | null = useBooks();


  return (
    <div className="App">
      {
        books ? (
        <BookList books={books} onBookSelected={(_book) => {
                setSelectedBook(_book);
          }} />
        ) : (
          <span>Loading...</span>
        )
      }
      
      {
        selectedBook ? (
          <BookDetail book={selectedBook} />
        ) : (
          <span>No book selected.</span>
        )
      }
      
    </div>
  );
}

export default App;
