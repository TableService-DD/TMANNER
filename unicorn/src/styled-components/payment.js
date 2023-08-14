import styled from 'styled-components';

export const PageContainer = styled.div`
    height: 844px;
    overflow: hidden; 
    background-color: #EFEFEF;
`;

//PaySelect.jsx
export const SelectBox = styled.div`
    display: flex;
    margin-top: 166px;
    flex-direction: column; 
    align-items: center;
`

export const Text = styled.div`
    color: #000;
    text-align: center;
    font-family: 'SUIT';
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const SelectBtnBox = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px;
`

export const SelectBtn = styled.button`
    width: 130px;
    height: 140px;
    margin: 13px;
    border-radius: 10px;

    font-family: 'SUIT';
    color: #FFF;
    font-size: 16px;
    font-weight: 500;
    line-height: 134%;
    text-align: center;
    font-weight: 500;
    font-size: 16px;
    background: #FF6A00;
`

export const BoldText = styled.span`
    font-weight: 700;
`

//OrderDetails

export const DetailContainer = styled.div`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 154px;
`   

export const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 6px;
    justify-content: space-between;
    align-items: center;
    color: #000;
    font-family: 'SUIT';
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    background: #FFF;
    height: 57px;
`

export const FinalText = styled.div`
    font-size: 20px;
    padding-left: 25px;
`

export const PriceText = styled.div`
    font-size: 18px;
    padding-right: 25px;
`

export const DetailBox = styled.div`
    display:flex;
    flex-direction : column;
    margin-bottom: 22px;

    color: #2E2E2E;
    font-family: 'SUIT';
    font-style: normal;
    line-height: normal;
    background: #FFF;
    height:150px;
    overflow:auto;

`

export const SmallText = styled.div`
    font-weight: 700;
    font-size: 14px;
    padding-left: 25px;
    margin-bottom: 24px;
`

export const ReceiptContainer = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding-bottom: 26px;
    color: #757575;
    font-size: 16px;
`

export const ReceiptTitle = styled.ul`
    font-weight: 500;
    padding-left: 25px;
`
export const ReceiptPrice = styled.ul`
    font-weight: 700;
    padding-right: 25px;
`
