import React from 'react';
import styled from 'styled-components';
import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri';
import { useState } from 'react';

function MenuDescription({intro, price, name, addOption}) {

    //MenuTitle
    const TitleBox = styled.div`
        display: flex;
        width: 368px;
        height: 72px;
        justify-content: space-between;
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
        text-align: right;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-right: 20px; 
    `

    //Menu 소개
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

    //옵션 추가
    const OptionBox = styled.div`
      display: inline-flex;
      padding : 10px;
      flex-direction: column;
      align-items: flex-start;
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


          <OptionBox>
            <OptionTitle>추가 옵션</OptionTitle>
            <OptionList>
            {addOption.map((option, index) => (
              <OptionItem key={index}>
                <OptionName>{option.name}</OptionName>
                <OptionPrice>{option.price}</OptionPrice>
              </OptionItem>
            ))}

            </OptionList>
          </OptionBox>
        </>
      );
    }
    
export default MenuDescription;