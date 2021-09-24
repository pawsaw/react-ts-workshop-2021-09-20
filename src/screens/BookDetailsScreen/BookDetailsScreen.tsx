import React from 'react';
import { useParams } from 'react-router';

import { ISBN, useBook } from '../../domain/books';
import { BookDetail } from './BookDetail';

export interface BookDetailScreenProps {}

export interface BookDetailScreenParams {
  isbn: ISBN;
}

export const BookDetailScreen: React.FC<BookDetailScreenProps> = () => {
  const { isbn } = useParams<BookDetailScreenParams>();
  const book = useBook(isbn);

  return <div>{book ? <BookDetail book={book} /> : <span>Loading a book...</span>}</div>;
};
