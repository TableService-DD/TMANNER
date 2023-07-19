import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../Context/context';
import { RiCloseLine } from 'react-icons/ri';

const BreakDownTitle = styled.div`
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

const BreakDownBox = styled.div`
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

const BreakDownList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
`;

const BreakItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

const TextRemoveBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const ItemName = styled.div`
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

const RemoveButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-size: 20px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ItemOptionlist = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1px;
`;

const ItemText = styled.span`
  color: #676767;
  font-family: Inter;
  font-size: 9px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.27px;
`;

const PriceAmountBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 150px;
`;

const ItemPrice = styled.span`
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

const AmountBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 9px;
`;

const AmountDisplay = styled.span`
  color: #000;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const AmountBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

function BreakDownItem({ item, handleRemoveItem, handleDecreaseQuantity, handleIncreaseQuantity }) {
  return (
    <BreakItem>
      <TextRemoveBox>
        <TextBox>
          <ItemName>{item.name}</ItemName>
          <ItemOptionlist>
            {item.selectedOptions.filter(option => option.quantity > 0).map((optionGroup, optionIndex) => (
              <ItemText key={optionIndex}>{optionGroup.name}</ItemText>
            ))}
          </ItemOptionlist>
        </TextBox>
        <RemoveButton onClick={handleRemoveItem}>
          <RiCloseLine />
        </RemoveButton>
      </TextRemoveBox>
      <PriceAmountBox>
        <ItemPrice>{item.price}원</ItemPrice>
        <AmountBox>
          <AmountBtn onClick={handleDecreaseQuantity}>-</AmountBtn>
          <AmountDisplay>{item.quantity}</AmountDisplay>
          <AmountBtn onClick={handleIncreaseQuantity}>+</AmountBtn>
        </AmountBox>
      </PriceAmountBox>
    </BreakItem>
  );
}


function BreakDown({ tableNumber }) {
  const { cart, setCart } = useCartContext();

  const handleRemoveItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  const handleDecreaseQuantity = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCart(updatedCart);
    }
  };

  const handleIncreaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    setCart(updatedCart);
  };

  return (
    <>
      <BreakDownTitle>{tableNumber}번 테이블 주문내역</BreakDownTitle>
      <BreakDownBox>
        <BreakDownList>
          {cart.map((item, index) => (
            <BreakDownItem
              key={index}
              item={item}
              handleRemoveItem={() => handleRemoveItem(index)}
              handleDecreaseQuantity={() => handleDecreaseQuantity(index)}
              handleIncreaseQuantity={() => handleIncreaseQuantity(index)}
            />
          ))}
        </BreakDownList>
      </BreakDownBox>
    </>
  );
}

export default BreakDown;
