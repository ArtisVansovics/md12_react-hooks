import React, { useRef, useEffect, useState } from 'react';
import './InputForm.scss';
import Button from '../Button/Button';

const InputForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [savedInput, setSavedInput] = useState(['']);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // focus on input field after page loads
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });
  const inputUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <form
      className="input-form"
      onSubmit={(e) => {
        e.preventDefault();
        setSavedInput([...savedInput, ' ', inputValue]);
        setInputValue('');
      }}
    >
      <div className="input-form__row">
        <input
          className="input"
          type="text"
          placeholder="Write something here"
          ref={inputRef}
          value={inputValue}
          onChange={inputUpdate}
          required
        />
        <Button
          title="Submit"
        />
      </div>
      <p className="input-form__text">
        {savedInput}
      </p>
    </form>
  );
};

export default InputForm;
