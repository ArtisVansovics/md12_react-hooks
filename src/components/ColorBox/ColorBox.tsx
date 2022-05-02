import React, { FC } from 'react';
import './ColorBox.scss';

type boxProps = {
  boxColor: string
}

const ColorBox:FC<boxProps> = ({ boxColor }) => (
  <div className="color-box" style={{ backgroundColor: boxColor }} />
);

export default ColorBox;
