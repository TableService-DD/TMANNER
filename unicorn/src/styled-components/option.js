import styled from 'styled-components';



//추가 옵션
export const OptionBox = styled.div`
  height: 140px;
  display: inline-flex;
  padding : 10px;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
  gap: 5px;
`

export const OptionTitle = styled.p`
  color: #000;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export const OptionList = styled.ul`
  display: flex;
  width: 330px;
  height: auto; // 높이를 auto로 변경
  flex-direction: column; // 세로 방향으로 배열
  align-items: flex-start; // 아이템을 왼쪽으로 정렬
  flex-shrink: 0;
`;

export const OptionItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;


export const OptionName = styled.span`
  display: flex;
  width: 150px;
  justify-content: flex-start; // Add this line
  flex-shrink: 0;
  align-self: stretch;
  color: #000;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export const OptionPrice = styled.span`
  display: flex;
  width: 82px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  align-self: stretch;

  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

//옵션 수량
export const OptionQuantityBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80px;
  align-items: center;
`;

export const OptionQuantityBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const OptionQuantity = styled.span`
  color: #000;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;


//해당 상품 수량
export const QuantityBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 220px;
  padding-left: 17px;
  margin-top: 25px;
`

export const QuantityTitle = styled.span`
  display: flex;
  width: 60px;
  flex-direction: column;
  justify-content: flex-start;
  align-self: stretch;

  color: #000;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export const QuantityDisplayBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 9px;
`;

export const QuantityBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const Quantity = styled.span`
  color: #000;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const AddToCartButton = styled.button`
  background-color: #000;
  color: #fff;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 20px;
`;