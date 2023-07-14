import React, { useState } from 'react';
import styled from 'styled-components';

const CouponBoxContainer = styled.div`
  display: flex;
  margin-top: 60px;
  flex-direction: column;
  align-items: center;
  gap: 17px;
`;

const CouponBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
`;

const CouponTitle = styled.span`
  color: #000;
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.51px;
`;

const CouponAmount = styled.span`
  color: #000;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.45px;
`;

const CouponDisplay = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const CouponDot = styled.div`
  width: 51px;
  height: 51px;
  border-radius: 50%;
  background-color: ${({ isActive }) => (isActive ? '#FF0000' : '#000')};
`;

function CouponSection() {
  const [coupon, setCoupon] = useState(4);

  return (
    <CouponBoxContainer>
      <CouponBox>
        <CouponTitle>내 쿠폰함</CouponTitle>
        <CouponAmount>{coupon}/5</CouponAmount>
      </CouponBox>
      <CouponDisplay>
        {[...Array(5)].map((_, index) => (
          <CouponDot key={index} isActive={index < coupon} />
        ))}
      </CouponDisplay>
    </CouponBoxContainer>
  );
}

export default CouponSection;
