import React, { useState } from 'react';
import { CouponBoxContainer, CouponBox, CouponTitle, CouponAmount, CouponDisplay, CouponDot } from '../styled-components/coupon';

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
          <CouponDot key={index} isactive={index < coupon} />
        ))}
      </CouponDisplay>
    </CouponBoxContainer>
  );
}

export default CouponSection;
