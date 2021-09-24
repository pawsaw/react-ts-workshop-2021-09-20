import { useState } from 'react';
import { BookDetail } from './components/BookDetail';
import { BookList } from './components/BookList';
import { CreateBook } from './components/CreateBook';
import { SimpleForm } from './components/SimpleForm';
import { Book, useBooks } from './domain/books';

function App() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const books: Book[] | null = useBooks();

  return (
    <div className="App">
      {books ? (
        <BookList
          books={books}
          onBookSelected={(_book) => {
            setSelectedBook(_book);
          }}
        />
      ) : (
        <span>Loading...</span>
      )}

      {selectedBook ? <BookDetail book={selectedBook} /> : <span>No book selected.</span>}
      <div>
        <h2>Create Book</h2>
        <CreateBook onSubmit={(data) => console.log(data)} />
      </div>
      <div>
        <h2>Simple Form</h2>
        <SimpleForm onSubmit={(data) => console.log(data)} />
      </div>
    </div>
  );
}

export default App;
