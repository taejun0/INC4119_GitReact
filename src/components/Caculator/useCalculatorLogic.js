import { useState } from 'react';

const useCalculatorLogic = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => setInput((prev) => prev + value);

  const calculateResult = () => {
    try {
      setResult(eval(input).toString());
    } catch {
      setResult('Error');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const handleFactorial = () => {
    try {
      const num = parseInt(input);
      if (isNaN(num) || num < 0) return setResult('Error');
      const factorial = (n) => (n === 0 ? 1 : n * factorial(n - 1));
      setResult(factorial(num).toString());
    } catch {
      setResult('Error');
    }
  };

  const handleSquare = () => {
    try {
      const num = parseFloat(input);
      setResult((num ** 2).toString());
    } catch {
      setResult('Error');
    }
  };

  const handleSqrt = () => {
    try {
      const num = parseFloat(input);
      if (num < 0) return setResult('Error');
      setResult(Math.sqrt(num).toString());
    } catch {
      setResult('Error');
    }
  };

  return {
    input,
    result,
    handleClick,
    calculateResult,
    clearInput,
    handleFactorial,
    handleSquare,
    handleSqrt,
  };
};

export default useCalculatorLogic;
