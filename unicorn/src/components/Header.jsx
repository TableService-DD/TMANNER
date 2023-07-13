import React from 'react';
import styled from 'styled-components';
import { MdArrowBackIosNew } from "react-icons/md";


const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 85px;
  background-color: white;
  color: black;
  padding: 0 30px;
`;


const BackButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 24px;
  padding: 0;
`;

const Text = styled.h1`
  font-size: 20px;
  margin: 0;
`;

function Header({ title }) {
  return (
    <StyledHeader>
      <BackButton>
        <MdArrowBackIosNew />
      </BackButton>
      <Text>{title}</Text>
      <div />
    </StyledHeader>
  );
}

export default Header;
