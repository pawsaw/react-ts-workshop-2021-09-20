import React from 'react';
import { Book } from '../../../../domain/books';

export interface OnBookSelected {
  (book: Book): void;
}

export interface BookListItemProps {
  book: Book;
  onBookSelected: OnBookSelected;
}

export const BookListItem: React.FC<BookListItemProps> = ({ book, onBookSelected }) => {
  return <div onClick={() => onBookSelected(book)}>{book.title}</div>;
};
