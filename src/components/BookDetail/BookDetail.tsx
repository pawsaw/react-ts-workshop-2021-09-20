import React, {  } from 'react';
import { Book, useBook } from '../../domain/books';

export interface BookDetailProps {
  book: Book;
}

export const BookDetail: React.FC<BookDetailProps> = ({
  book
}) => {
  
  return <div>

    {
      book ? (
        <div>
          {book.title} - {book.subtitle}
        </div>
      ) : <div>
        Loading...
      </div>
    }

  </div>
}