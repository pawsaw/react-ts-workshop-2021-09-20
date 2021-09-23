import { useState, useEffect } from 'react';
import { Book, ISBN } from '..';

export const useBook = (isbn: ISBN): Book | null => {
  const [book, setBook] = useState<Book | null>(null);
  useEffect(() => {
    (async () => {
      const response = await fetch(`http://localhost:4730/books/${isbn}`);
      const _book = await response.json();
      setBook(_book);
    })();
  }, [isbn]);

  return book;
};
