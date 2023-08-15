import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  width: 390px;
  height: 76px;
  padding: 0px 29px;
  justify-content: center;
  align-items: center;
  gap: 61px;
  flex-shrink: 0;
  background: #FFF; 
`;

export const Space = styled.div`
  display: flex;
  width: 17px;
  height: 28px;
  align-items: center;
  gap: 10px;
`
export const BackButton = styled.button`
  width: 17px;
  height: 28px;
  stroke: #000;
  cursor: pointer;
  padding: 0;
`;

export const Text = styled.h1`
  display: flex;
  width: 187px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  align-self: stretch;
  color: #000;
  text-align: center;
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;