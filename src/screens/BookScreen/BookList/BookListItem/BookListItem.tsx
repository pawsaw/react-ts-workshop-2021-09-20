import React from 'react';
import { Link } from 'react-router-dom';
import { Book } from '../../../../domain/books';

export interface OnBookSelected {
  (book: Book): void;
}

export interface BookListItemProps {
  book: Book;
  onBookSelected: OnBookSelected;
}

export const BookListItem: React.FC<BookListItemProps> = ({ book, onBookSelected }) => {
  return (
    <div>
      {book.title} - <span onClick={() => onBookSelected(book)}>show</span>
    </div>
  );
};
