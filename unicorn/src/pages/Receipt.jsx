import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCartContext } from '../Context/context';

import Header from '../components/Header';
import BreakDown from '../components/BreakDown';
import CouponSection from '../components/CouponSection';
import styled from 'styled-components';

const TotalPriceContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 120px;
  margin-top: 60px;
`;

const TotalText = styled.span`
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 550;
  line-height: normal;
  letter-spacing: -0.6px;
  display: flex;
  width: 146px;
  height: 25px;
  flex-direction: column;
  justify-content: center;
`;

const TotalPriceText = styled.span`
  display: flex;
  width: 77px;
  height: 23px;
  flex-direction: column;
  justify-content: center;
  color: #000;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.54px;
`;

const CenteredButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const SubmitButton = styled.button`
  width: 335px;
  height: 47px;
  background-color: #f2994a;
  color: #000;
  font-family: Inter;
  font-size: 20px;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.48px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  outline: none;
`;

function Receipt() {
  const { tableNumber } = useParams();
  const { cart } = useCartContext();
  const [totalPrice, setTotalPrice] = useState(0);

  const calculatePrice = (item) => {
    let totalPrice = parseFloat(item.price);
    item.selectedOptions.forEach((option) => {
      totalPrice += parseFloat(option.price) * parseFloat(option.quantity);
    });
    totalPrice *= item.quantity;
    return totalPrice.toFixed(0);
  };

  const calculateTotalPrice = (cart) => {
    let totalPrice = 0;
    cart.forEach((item) => {
      totalPrice += parseFloat(calculatePrice(item));
    });
    return totalPrice.toFixed(0);
  };

  useEffect(() => {
    const updatedPrice = calculateTotalPrice(cart);
    setTotalPrice(updatedPrice);
  }, [cart]);

  const handleOrderSubmit = () => {
    // Add your logic for submitting the order here
  };

  return (
    <>
      <Header title="주문내역 확인" tableNumber={tableNumber} />
      <BreakDown tableNumber={tableNumber} />
      <CouponSection />
      <TotalPriceContainer>
        <TotalText>총 주문금액</TotalText>
        <TotalPriceText>{totalPrice}</TotalPriceText>
      </TotalPriceContainer>
      <CenteredButtonContainer>
        <SubmitButton onClick={handleOrderSubmit}>최종 주문 전송</SubmitButton>
      </CenteredButtonContainer>
    </>
  );
}

export default Receipt;
