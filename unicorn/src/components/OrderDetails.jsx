import React, {useState, useEffect} from 'react';
import { PriceText, DetailContainer, MainContainer, DetailBox, FinalText, SmallText, ReceiptContainer, ReceiptTitle, ReceiptPrice } from '../styled-components/payment';

function OrderDetails(props) {
    const [menu, setMenu] = useState(3)

    const receiptArray = Array.from({length: menu});
    return (
        <DetailContainer>
            <MainContainer>
                <FinalText>총 주문금액</FinalText>
                <PriceText>30,000원</PriceText>
            </MainContainer>

            <DetailBox>
                <SmallText>주문내역</SmallText>
                
                {receiptArray.map((_, index) => (
                    <ReceiptContainer>
                    <ReceiptTitle>THE DALAS</ReceiptTitle>
                    <ReceiptPrice>15,000원</ReceiptPrice>
                </ReceiptContainer>
                ))}

            </DetailBox>
        </DetailContainer>
    );
}

export default OrderDetails;