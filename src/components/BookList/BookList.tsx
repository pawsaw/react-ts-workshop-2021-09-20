import React from 'react';
import { Book } from '../../domain/books';
import { noop } from '../../utils/noop';
import { BookListItem, OnBookSelected } from './BookListItem/BookListItem';


export interface BookListProps {
  books: Book[];
  onBookSelected?: OnBookSelected;
}

export const BookList: React.FC<BookListProps> = ({ books, onBookSelected = noop }) => {

  return <div>
    {
      books.map(book => <BookListItem key={book.title} book={book} onBookSelected={onBookSelected} />)
    }
  </div>
}

