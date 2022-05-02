import React, { useRef, useEffect, useState } from 'react';
import './Card.scss';
import Button from '../Button/Button';

const Card = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const countTextRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    console.log('First Render');

    setCount(100);
  }, []);
  useEffect(() => {
    console.log('Render');
  });
  useEffect(() => {
    console.log('Changing count');

    // increase 'count:' font size by one everytime count increases
    if (countTextRef.current) {
      const countText = countTextRef.current;
      const textFontSize = window.getComputedStyle(countText, null).getPropertyValue('font-size');
      const currentFontSize = parseFloat(textFontSize);

      countText.style.fontSize = `${currentFontSize + 1}px`;
    }
  }, [count]);
  useEffect(() => {
    console.log('Input Change');

    // change page title to input value, when it updates
    document.title = inputValue;
  }, [inputValue]);

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
      <p
        ref={countTextRef}
        className="card__text"
      >
        {`Count: ${count}`}
      </p>
      <input
        className="input"
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
