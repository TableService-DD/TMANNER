import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useCartContext } from '../Context/context';
import { useParams, useNavigate } from 'react-router-dom';


//추가 옵션
const OptionBox = styled.div`
  height: 140px;
  display: inline-flex;
  padding : 10px;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
  gap: 5px;
`

const OptionTitle = styled.p`
  color: #000;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

const OptionList = styled.ul`
  display: flex;
  width: 330px;
  height: auto; // 높이를 auto로 변경
  flex-direction: column; // 세로 방향으로 배열
  align-items: flex-start; // 아이템을 왼쪽으로 정렬
  flex-shrink: 0;
`;

const OptionItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;


const OptionName = styled.span`
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

const OptionPrice = styled.span`
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
const OptionQuantityBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80px;
  align-items: center;
`;

const OptionQuantityBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const OptionQuantity = styled.span`
  color: #000;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;


//해당 상품 수량
const QuantityBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 220px;
  padding-left: 17px;
  margin-top: 25px;
`

const QuantityTitle = styled.span`
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

const QuantityDisplayBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 9px;
`;

const QuantityBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Quantity = styled.span`
  color: #000;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const AddToCartButton = styled.button`
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

function AddOption({addOption, name, price, image}) {
    const navigate = useNavigate();
//옵션 수량 저장
    const [productQuantity, setProductQuantity] = useState(1);
    const [oquantities, setOQuantities] = useState(addOption.map (() => 0));
    const {cart, setCart} = useCartContext();
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