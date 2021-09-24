import React, { useState, useRef, FormEvent } from 'react';
import './SimpleForm.css';

export interface SimpleFormProps {
  onSubmit: (email: string) => void;
}

export const SimpleForm: React.FC<SimpleFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const submitButtonRef = useRef<HTMLButtonElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  function handleChange({
    target: {
      classList,
      value,
      validity: { valid, typeMismatch, valueMissing },
    },
  }: React.ChangeEvent<HTMLInputElement>) {
    setEmail(value);

    if (valid) {
      classList.add('valid');
      classList.remove('invalid');
      setEmailError('');

      submitButtonRef.current!.disabled = !formRef.current!.reportValidity();
    } else {
      classList.add('invalid');
      classList.remove('valid');

      if (typeMismatch) {
        setEmailError('This is not a valid email');
      } else if (valueMissing) {
        setEmailError('No email given');
      }
      submitButtonRef.current!.disabled = true;
    }
  }

  function handleSubmit(event: FormEvent): void {
    event.preventDefault();
    onSubmit(email);
    setEmail('');
    setEmailError('');
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate>
      {emailError && <p className="errorMessage">{emailError}</p>}
      {!emailError && email && <p className="successMessage">Thank you for your email.</p>}
      {!emailError && !email && <p className="hintMessage">Please input an email.</p>}
      <label htmlFor="userEmail">Email: </label>
      <input
        id="userEmail"
        name="userEmail"
        type="email"
        required
        value={email}
        onChange={(e) => handleChange(e)}
      />
      <button ref={submitButtonRef} disabled={true}>
        Send
      </button>
    </form>
  );
};
