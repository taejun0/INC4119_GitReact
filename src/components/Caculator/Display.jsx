import React from 'react';
import { DisplayWrapper, InputText, ResultText } from './Caculatorstyle';

const Display = ({ input, result }) => {
  return (
    <DisplayWrapper>
      <InputText>{input || '0'}</InputText>
      <ResultText>{result}</ResultText>
    </DisplayWrapper>
  );
};

export default Display;
