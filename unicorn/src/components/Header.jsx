import React from 'react';
import styled from 'styled-components';
import { MdArrowBackIosNew } from "react-icons/md";

//헤더 공간 
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 85px;
  background-color: white;
  color: black;
  padding: 0 30px; // Padding here for inner spacing
`;

// Back button styled to appear as a button
const BackButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 24px; // Icon size
  padding: 0;
`;

// Text styled to appear at the center
const Text = styled.h1`
  font-size: 20px;
  margin: 0; // Removing default margins
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
