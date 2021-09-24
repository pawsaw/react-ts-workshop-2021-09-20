import React, { useState } from 'react';
import { Book, useBooks } from '../../domain/books';
import { BookList } from './BookList';

export interface BookScreenProps {}

export const BookScreen: React.FC<BookScreenProps> = () => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const books: Book[] | null = useBooks();
  return (
    <div>
      <h1>Books</h1>
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
    </div>
  );
};
