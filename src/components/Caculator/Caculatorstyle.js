import styled from 'styled-components';

export const DisplayWrapper = styled.div`
  background-color: #222;
  width: calc(100% - 130px);
  color: #fff;
  font-size: 1.6rem;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
  text-align: right;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;

export const InputText = styled.div`
  color: #ccc;
  font-size: 1.2rem;
  word-wrap: break-word;
`;

export const ResultText = styled.div`
  color: #00e676;
  font-size: 1.8rem;
  font-weight: bold;
  word-wrap: break-word;
`;
