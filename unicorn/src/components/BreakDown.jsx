import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../Context/context';
import { RiCloseLine } from 'react-icons/ri';
import { AmountBox, AmountBtn, AmountDisplay, BreakDownBox, BreakDownList, BreakDownTitle, BreakItem, ItemName, ItemOptionlist, ItemPrice, ItemText, PriceAmountBox, RemoveButton, TextBox, TextRemoveBox } from '../styled-components/breakdown';

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
