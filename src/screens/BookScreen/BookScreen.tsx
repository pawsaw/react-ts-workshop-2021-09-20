import React, { useState } from 'react';
import { Book, useBooks } from '../../domain/books';
import { noop } from '../../utils/noop';
import { BookList, OnBookSelected } from './BookList';

export interface BookScreenProps {
  onBookSelected?: OnBookSelected;
}

export const BookScreen: React.FC<BookScreenProps> = ({ onBookSelected = noop }) => {
  const books: Book[] | null = useBooks();
  return (
    <div>
      <h1>Books</h1>
      {books ? <BookList books={books} onBookSelected={onBookSelected} /> : <span>Loading...</span>}
    </div>
  );
};
