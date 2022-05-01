import React, { useState } from 'react';
import './Card.scss';
import Button from '../Button/Button';

const Card = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const plusOne = () => {
    setCount(count + 1);
  };
  const inputUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="card">
      <Button
        title="+"
        onClick={plusOne}
      />
      <p className="card__text">
        {`Count: ${count}`}
      </p>
      <input
        className="card__input"
        type="text"
        placeholder="Write something here"
        value={inputValue}
        onChange={inputUpdate}
      />
      <p className="card__text">
        {inputValue}
      </p>
    </div>
  );
};

export default Card;
