import React from 'react';
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { BackButton, StyledHeader, Text } from '../styled-components/header';


function Header({ title, tableNumber }) {
  const navigate = useNavigate(); // Initialize useNavigate

  const goBack = () => {
    navigate(`/order/${tableNumber}`); // Navigate back to Order/:tableNumber
  };

  return (
    <StyledHeader>
      <BackButton onClick={goBack}>
        <MdArrowBackIosNew />
      </BackButton>
      <Text>{title}</Text>
      <div />
    </StyledHeader>
  );
}

export default Header;
