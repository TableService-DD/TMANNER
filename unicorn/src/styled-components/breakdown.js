import styled from "styled-components";

export const BreakDownTitle = styled.div`
  display: flex;
  width: 100%;
  height: 42px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 30px;
  color: #000;
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.51px;
`;

export const BreakDownBox = styled.div`
  display: flex;
  width: 390px;
  padding: 26px 27px;
  flex-direction: column;
  align-items: flex-start;
  gap: 23px;
  overflow-y: auto;
  max-height: 500px;
  overflow-x: hidden;
`;

export const BreakDownList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
`;

export const BreakItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

export const TextRemoveBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ItemName = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.51px;
  flex-grow: 1;
  text-align: left;
`;

export const RemoveButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-size: 20px;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ItemOptionlist = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1px;
`;

export const ItemText = styled.span`
  color: #676767;
  font-family: Inter;
  font-size: 9px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.27px;
`;

export const PriceAmountBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 150px;
`;

export const ItemPrice = styled.span`
  display: flex;
  width: 146px;
  height: 25px;
  flex-direction: column;
  justify-content: flex-start;
  color: #000;
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.51px;
  text-align: left;
`;

export const AmountBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 9px;
`;

export const AmountDisplay = styled.span`
  color: #000;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const AmountBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
