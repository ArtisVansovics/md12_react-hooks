import React, { useState } from 'react';
import './BoxGenerator.scss';
import Button from '../Button/Button';
import ColorBox from '../ColorBox/ColorBox';

const colorOptions = [
  {
    value: '#13805D',
    label: 'Green',
  },
  {
    value: '#80600D',
    label: 'Yellow',
  },
  {
    value: '#19687F',
    label: 'Blue',
  },
  {
    value: '#803926',
    label: 'Red',
  },
];

const BoxGenerator = () => {
  const [boxColorSelection, setBoxColorSelection] = useState('');
  const [boxColors, setBoxColors] = useState<string[]>([]);

  return (
    <div className="box-generator">
      <form
        className="box-generator__form"
        onSubmit={(e) => {
          e.preventDefault();
          setBoxColors([...boxColors, boxColorSelection]);
          setBoxColorSelection('');
        }}
      >
        <Button title="+" />
        <select
          className="box-generator__select"
          value={boxColorSelection}
          onChange={(e) => {
            setBoxColorSelection(e.target.value);
          }}
          required
        >
          {/* empty and disabled first selection, to make the 'required' attribute work */}
          <option
            disabled
            label="Select box color"
          />
          {colorOptions.map((colorOption) => (
            <option
              value={colorOption.value}
              key={colorOption.value}
            >
              {colorOption.label}
            </option>
          ))}
        </select>
      </form>
      <div className="box-generator__container">
        {boxColors.map((boxColor) => (
          <ColorBox boxColor={boxColor} key={Math.random()} />
        ))}
      </div>
    </div>
  );
};

export default BoxGenerator;
