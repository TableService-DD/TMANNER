import styled from 'styled-components';

export const OrderContainer = styled.div`
    display: flex;
    width: 390px;
    height: 170px;
    padding: 0px 10px;
    flex-direction: column;
    align-items: center;
    gap: 34px;
    flex-shrink: 0;
`

export const OrderTextBox = styled.div`
    display: flex;
    width: 387px;
    height: 41px;
    margin-top: 50px;
    justify-content: center;
    align-items: center;
    gap: 109px;
    flex-shrink: 0;
`

export const TotalText = styled.div`
    width: 146px;
    height: 25px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: #000;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.6px;
`

export const PriceText = styled.div`
    width: 77px;
    height: 23px;
    color: #000;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.54px;
`

export const PaymentBtn = styled.button`
    display: flex;
    width: 350px;
    height: 60px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 100px;
    background: #FF6A00;

    color: #FFF;
    text-align: center;
    font-family: 'SUIT';
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`

export const PageContainer = styled.div`
    display:flex;
    padding-bottom:50px;
`