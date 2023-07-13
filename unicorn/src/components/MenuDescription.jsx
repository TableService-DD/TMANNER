import React from 'react';
import styled from 'styled-components';


function MenuDescription({intro, price, name}) {

    const TitleBox = styled.div`
        display: flex;
        width: 368px;
        height: 72px;
        justify-content: space-between; // 좌우로 분산 배치
        align-items: center;
        flex-shrink: 0;
    `

    const Title = styled.span`
        color: #000;
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-left: 30px; 
    `

    const Price = styled.span`
        color: #000;
        text-align: right; // 오른쪽 정렬
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-right: 20px; 
    `

    const MenuIntroBox = styled.div`
        width: 344px;
        height: 84px;
        display: inline-flex;
        padding: 17px 28px;
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;
        border-radius: 20px;
        background: #ECECEC;
    `

    const IntroTitle = styled.div`
        color: #000;
        text-align: center;
        font-family: Inter;
        font-size: 15px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    `

    const IntroContent = styled.div`
        color: #000;
        font-family: Inter;
        font-size: 15px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    `

    const AddOptionTitle = styled.div`
        width: 390px;
        margin-top:23px;
        margin-left: 20px;
        color: #000;
        font-family: Inter;
        font-size: 15px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-align: left;
    `
    const AddOptionBox = styled.div` 
        display: flex;
        width: 390px;
        padding-left: 30px;
        padding-top: 10px;
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;
    `

    const OptionInfo = styled.div`
        display: flex;
        align-items: flex-end;
        gap: 20px;

    `

    const OptionTextBox = styled.span`
        display: flex;
        height: 26px;
        align-items: center;
        gap: 81px;
    `

    const OptionName = styled.span`
        color: #000;
        text-align: center;
        font-family: Inter;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    `

    const OptionPrice = styled.span`
        color: #000;
        text-align: center;
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    `

    return (
        <>
            <TitleBox>
                <Title>{name}</Title>
                <Price>{price}원</Price>
            </TitleBox>

            <MenuIntroBox>
                <IntroTitle>Menu Intro</IntroTitle>
                <IntroContent>{intro}</IntroContent>
            </MenuIntroBox>

            <AddOptionTitle>추가 옵션</AddOptionTitle>
            <AddOptionBox>

                <OptionInfo>
                    <OptionTextBox><OptionName>새우 추가</OptionName><OptionPrice>2,000원</OptionPrice>
                    </OptionTextBox>
                </OptionInfo>

                <OptionInfo>
                    <OptionTextBox><OptionName>새우 추가</OptionName><OptionPrice>2,000원</OptionPrice>
                    </OptionTextBox>
                </OptionInfo>

                <OptionInfo>
                    <OptionTextBox><OptionName>새우 추가</OptionName><OptionPrice>2,000원</OptionPrice>
                    </OptionTextBox>
                </OptionInfo>         
                
            </AddOptionBox>
        </>
    );
}

export default MenuDescription;
