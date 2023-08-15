import React from 'react';
import { useNavigate } from 'react-router-dom';  // useNavigate 훅 임포트
import { SelectBox, Text, SelectBtnBox, SelectBtn, BoldText } from '../styled-components/payment';

function PaySelect(props) {
    const navigate = useNavigate();  // useNavigate 훅 사용

    const handleDirectPayment = () => {
        navigate("/success");  // /complete URL로 이동
    }

    const handleOnlinePayment = () => {
        navigate("/tosspayment");  // /tosspayment URL로 이동
    }

    return (
        <SelectBox>
            <Text>결제방식을 선택해주세요.</Text>
            <SelectBtnBox>
                <SelectBtn onClick={handleDirectPayment}>
                    매장에서<br/><BoldText>직접 결제</BoldText>
                </SelectBtn>
                <SelectBtn onClick={handleOnlinePayment}>
                    온라인에서<br/><BoldText>미리 결제</BoldText>
                </SelectBtn>
            </SelectBtnBox>
        </SelectBox>
    );
}

export default PaySelect;
