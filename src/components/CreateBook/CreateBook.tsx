import React, { useState } from 'react';
import './CreateBook.css';

export interface CreateBookFormInput {
  title: string;
  isbn: string;
}

export interface CreateBookProps {
  onSubmit: (data: CreateBookFormInput) => void;
}

export const CreateBook: React.FC<CreateBookProps> = ({ onSubmit }) => {
  const [formInput, setFormInput] = useState<CreateBookFormInput>({
    title: '',
    isbn: '',
  });

  const onInputChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(formInput);
        setFormInput({
          title: '',
          isbn: '',
        });
      }}
    >
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formInput.title}
        onChange={onInputChanged}
      />
      <input
        type="text"
        name="isbn"
        placeholder="ISBN"
        value={formInput.isbn}
        onChange={onInputChanged}
      />
      <button>Submit</button>
    </form>
  );
};
