import styled from 'styled-components';


// COUPON
export const CouponBoxContainer = styled.div`
  display: flex;
  margin-top: 60px;
  flex-direction: column;
  align-items: center;
  gap: 17px;
`;

export const CouponBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
`;

export const CouponTitle = styled.span`
  color: #000;
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.51px;
`;

export const CouponAmount = styled.span`
  color: #000;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.45px;
`;

export const CouponDisplay = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const CouponDot = styled.div`
  width: 51px;
  height: 51px;
  border-radius: 50%;
  background-color: ${({ isactive }) => (isactive ? '#FF0000' : '#000')};
`;