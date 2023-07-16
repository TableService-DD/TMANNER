import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCartContext } from '../Context/context';
import Header from '../components/Header';
import BreakDown from '../components/BreakDown';
import CouponSection from '../components/CouponSection';
import { CenteredButtonContainer, SubmitButton, TotalPriceContainer, TotalPriceText, TotalText } from '../styled-components/total';



function Receipt() {
  const { tableNumber } = useParams();
  const { cart } = useCartContext()
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
