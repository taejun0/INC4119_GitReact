import React from 'react';
import { ButtonRow, Button } from './Buttonstyle';

const Buttons = ({ onButtonClick }) => {
  const buttons = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['0', '.', '=', '+'],
    ['AC', 'x!', 'x²', '√x'],
  ];

  return (
    <div>
      {buttons.map((row, rowIndex) => (
        <ButtonRow key={rowIndex}>
          {row.map((btn) => (
            <Button
              key={btn}
              onClick={() => onButtonClick(btn)}
              type={
                ['+', '-', '*', '/', '='].includes(btn)
                  ? 'operator'
                  : ['x!', 'x²', '√x'].includes(btn)
                  ? 'advanced'
                  : ''
              }
            >
              {btn}
            </Button>
          ))}
        </ButtonRow>
      ))}
    </div>
  );
};

export default Buttons;
