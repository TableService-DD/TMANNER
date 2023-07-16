import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useCartContext } from '../Context/context';
import { useParams, useNavigate } from 'react-router-dom';
import { AddToCartButton, OptionBox, OptionItem, OptionList, OptionName, OptionPrice, OptionQuantity, OptionQuantityBox, OptionQuantityBtn, OptionTitle, Quantity, QuantityBox, QuantityBtn, QuantityDisplayBox, QuantityTitle } from '../styled-components/option';

function AddOption({ addOption, name, price, image }) {
  const navigate = useNavigate();
  //옵션 수량 저장
  const [productQuantity, setProductQuantity] = useState(1);
  const [oquantities, setOQuantities] = useState(addOption.map(() => 0));
  const { cart, setCart } = useCartContext();
  const { tableNumber } = useParams();

  const addToCart = () => {
    const existingProduct = cart.find((product) => {
      if (product.name !== name) return false;
      for (let i = 0; i < addOption.length; i++) {
        if (product.selectedOptions[i].quantity !== oquantities[i]) {
          return false;
        }
      }
      return true;
    });

    if (existingProduct) {
      // 이미 카트에 있는 상품인 경우, 기존 배열에 수량 증가
      const updatedCart = cart.map((product) => {
        if (product.name === name) {
          const updatedOptions = product.selectedOptions.map((option, i) => ({
            ...option,
            quantity: option.quantity + oquantities[i]
          }));
          return {
            ...product,
            quantity: product.quantity + productQuantity,
            selectedOptions: updatedOptions
          };
        }
        return product;
      });
      setCart(updatedCart);
    } else {
      // 새로운 상품인 경우, 새로운 배열에 추가
      const newItem = {
        name: name,
        price: price,
        image: image,
        quantity: productQuantity,
        selectedOptions: addOption.map((option, i) => ({
          ...option,
          quantity: oquantities[i]
        }))
      };
      setCart([...cart, newItem]);
    }

    navigate(`/order/${tableNumber}`);
  };


  useEffect(() => {
    console.log(cart);
  }, [cart]);


  //옵션 수량 증가
  const increaseOQuantity = (index) => {
    const newOQuantities = [...oquantities];
    newOQuantities[index]++;
    setOQuantities(newOQuantities);
  };

  //옵션 수량 감소
  const decreaseOQuantity = (index) => {
    if (oquantities[index] === 0) return;

    const newOQuantities = [...oquantities];
    newOQuantities[index]--;
    setOQuantities(newOQuantities);
  };


  const increaseQuantity = () => {
    setProductQuantity(productQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (productQuantity === 0) return;
    setProductQuantity(productQuantity - 1);
  };

  return (
    <>
      <OptionBox>
        <OptionTitle>추가 옵션</OptionTitle>
        <OptionList>
          {addOption.map((option, index) => (
            <OptionItem key={index}>
              <OptionName>{option.name}</OptionName>
              <OptionPrice>{option.price}원</OptionPrice>
              <OptionQuantityBox>
                <OptionQuantityBtn onClick={() => decreaseOQuantity(index)}>-</OptionQuantityBtn>
                <OptionQuantity>{oquantities[index]}</OptionQuantity>
                <OptionQuantityBtn onClick={() => increaseOQuantity(index)}>+</OptionQuantityBtn>
              </OptionQuantityBox>
            </OptionItem>
          ))}
        </OptionList>
      </OptionBox>

      <QuantityBox>
        <QuantityTitle>수량</QuantityTitle>
        <QuantityDisplayBox>
          <QuantityBtn onClick={() => decreaseQuantity()}>-</QuantityBtn>
          <Quantity>{productQuantity}</Quantity>
          <QuantityBtn onClick={() => increaseQuantity()}>+</QuantityBtn>
        </QuantityDisplayBox>
      </QuantityBox>

      <AddToCartButton onClick={addToCart}>담기</AddToCartButton>
    </>
  );
}

export default AddOption;