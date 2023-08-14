import styled from 'styled-components';

export const StyledHeader = styled.header`
  font-family: 'SUIT';
  display: flex;
  font-weight: 500;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 85px;
  background-color: white;
  color: black;
  padding: 0 30px;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 24px;
  padding: 0;
`;

export const Text = styled.h1`
  font-size: 20px;
  margin: 0;
`;