import React, { useRef, useEffect, useState } from 'react';
import './BtnContainer.scss';
import Button from '../Button/Button';

const BtnContainer = () => {
  const [count, setCount] = useState(0);
  const tempDisabledBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (tempDisabledBtnRef.current) {
      tempDisabledBtnRef.current.disabled = true;
    }
    setTimeout(() => {
      if (tempDisabledBtnRef.current) {
        tempDisabledBtnRef.current.disabled = false;
      }
    }, 5000);
  });
  const plusOne = () => {
    setCount(count + 1);
  };

  return (
    <div className="btn-container">
      <Button
        title="Button"
        btnRef={tempDisabledBtnRef}
      />
      <Button
        title={`COUNT: ${count}`}
        onClick={plusOne}
      />
      <div className="btn-container__count-box">
        {count * 2}
      </div>
    </div>
  );
};

export default BtnContainer;
