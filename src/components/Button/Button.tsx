import React, { FC } from 'react';
import './Button.scss';

type ButtonProps = {
  title: string
  onClick?: () => void
  btnRef?: React.MutableRefObject<HTMLButtonElement | null>
}

const Button:FC<ButtonProps> = ({
  title, onClick, btnRef,
}) => (
  <button className="button" onClick={onClick} ref={btnRef}>
    {title}
  </button>
);

export default Button;
