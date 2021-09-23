import { useState, useEffect } from 'react';
import { Book } from '..'

export const useBooks = (): Book[] | null => {
  const [books, setBooks] = useState<Book[] | null>(null);
  useEffect(() => {
    (async () => {
      const response = await fetch(`http://localhost:4730/books`);
      const _books = await response.json();
      setBooks(_books);
    })();
  }, []);

  return books;
}