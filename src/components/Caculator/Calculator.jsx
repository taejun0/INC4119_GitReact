import React from 'react';
import useCalculatorLogic from './useCalculatorLogic';
import Display from './Display';
import Buttons from './Buttons';

const Calculator = () => {
  const {
    input,
    result,
    handleClick,
    calculateResult,
    clearInput,
    handleFactorial,
    handleSquare,
    handleSqrt,
  } = useCalculatorLogic();

  return (
    <div className="calculator">
      <Display input={input} result={result} />
      <Buttons
        onButtonClick={(value) => {
          if (value === '=') return calculateResult();
          if (value === 'AC') return clearInput();
          if (value === 'x!') return handleFactorial();
          if (value === 'x²') return handleSquare();
          if (value === '√x') return handleSqrt();
          return handleClick(value);
        }}
      />
    </div>
  );
};

export default Calculator;
