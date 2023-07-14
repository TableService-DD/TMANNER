import React, { useEffect } from 'react';
import styled from 'styled-components';
import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri';
import { useState } from 'react';

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


//원산지
  
const OriginBox = styled.div`
  display: flex;
  width: 302px;
  padding-left: 33px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
`

const OriginTitle = styled.span`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

const OriginList = styled.ul`
  color: #000;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  align-self: stretch;
`

const OriginItem = styled.li`
  display: flex;
  width: 100%;
`


function MenuDescription({intro, price, name, origin}) {

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

        <OriginBox>
          <OriginTitle>원산지</OriginTitle>
          <OriginList>
            {origin.map((originCountry, index) => (
              <OriginItem key={index}>
                {originCountry.name} - {originCountry.country}
              </OriginItem>
            ))} 
          </OriginList>

        </OriginBox>

      </>
    );
  }
    
export default MenuDescription;