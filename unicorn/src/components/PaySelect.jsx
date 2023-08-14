import React from 'react';
import { SelectBox, Text, SelectBtnBox, SelectBtn, BoldText } from '../styled-components/payment';

function PaySelect(props) {
    return (
        <SelectBox>
            <Text>결제방식을 선택해주세요.</Text>
            <SelectBtnBox>
                <SelectBtn>매장에서<br/><BoldText>직접 결제</BoldText></SelectBtn>
                <SelectBtn>온라인에서<br/><BoldText>미리 결제</BoldText></SelectBtn>
            </SelectBtnBox>
        </SelectBox>
    );
}

export default PaySelect;