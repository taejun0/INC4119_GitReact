import styled from 'styled-components';

export const CalculatorWrapper = styled.div`
  max-width: 300px;
  margin: 50px auto;
  padding: 24px;
  border-radius: 16px;
  background-color: #f9f9f9;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
`;

export const DisplayWrapper = styled.div`
  background-color: #222;
  color: #fff;
  font-size: 2rem;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
  text-align: right;
  min-height: 60px;
`;

export const ButtonRow = styled.div`
  display: flex;
  width: calc(100% - 100px);
  gap: 8px;
  margin-bottom: 8px;
`;

export const Button = styled.button`
  flex: 1;
  padding: 16px 0;
  font-size: 1.2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${({ type }) =>
    type === 'operator'
      ? '#ff6b6b'
      : type === 'advanced'
      ? '#6b8eff'
      : '#e0e0e0'};

  color: ${({ type }) =>
    type === 'operator' || type === 'advanced' ? '#fff' : '#000'};

  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ type }) =>
      type === 'operator'
        ? '#ff4d4d'
        : type === 'advanced'
        ? '#4f6edb'
        : '#d5d5d5'};
  }
`;
