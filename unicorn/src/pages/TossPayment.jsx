import { useEffect, useRef, useState } from "react";
import {PaymentWidgetInstance,loadPaymentWidget,ANONYMOUS,
  } from "@tosspayments/payment-widget-sdk";
import { nanoid } from "nanoid";
import Header from '../components/Header';
import PaySelect from '../components/PaySelect';
import OrderDetails from '../components/OrderDetails';
import { OrderContainer, OrderTextBox, TotalText, PriceText, PaymentBtn } from "../styled-components/tosspayment";
import { PageContainer } from "../styled-components/payment";


const selector = "#payment-widget";
const clientKey = "test_ck_OAQ92ymxN34KowmK2Xg8ajRKXvdk";
const customerKey = "test_sk_GKNbdOvk5rk7Eg1Jeeqrn07xlzmj";


export function TossPayment() {
  const paymentWidgetRef = useRef(null);
  const paymentMethodsWidgetRef = useRef(null);
  //제품 가격 -> API 받아오기
  const [price, setPrice] = useState(45_000);

  useEffect(() => {
    (async () => {
      // ------ 결제위젯 초기화 ------
      const paymentWidget = await loadPaymentWidget( clientKey, customerKey); // 회원 결제

      // ------ 결제위젯 렌더링 ------
      const paymentMethodsWidget = paymentWidget.renderPaymentMethods(selector, { value: price });

      // ------ 이용약관 렌더링 ------
      paymentWidget.renderAgreement("#agreement");

      paymentWidgetRef.current = paymentWidget;
      paymentMethodsWidgetRef.current = paymentMethodsWidget;
    })();
  }, []);

  useEffect(() => {
    const paymentMethodsWidget = paymentMethodsWidgetRef.current;

    if (paymentMethodsWidget == null) {
      return;
    }

    // ------ 금액 업데이트 ------
    paymentMethodsWidget.updateAmount(price, paymentMethodsWidget.UPDATE_REASON.COUPON);
  }, [price]);

  return (
    <PageContainer>
      <Header title="온라인 결제"/>
      
      <div id="payment-widget" />
      <div id="agreement" />

      <OrderContainer>
        <OrderTextBox>
          <TotalText>총 주문금액</TotalText>
          <PriceText>{`${price.toLocaleString()}원`}</PriceText>
        </OrderTextBox>
        <PaymentBtn 
          onClick={async () => {
            const paymentWidget = paymentWidgetRef.current;
  
            try {
              await paymentWidget?.requestPayment({
                orderId: nanoid(),
                orderName: "토스 티셔츠 외 2건",
                customerName: "김토스",
                customerEmail: "customer123@gmail.com",
                successUrl: `${window.location.origin}/success`,
                failUrl: `${window.location.origin}/fail`,
              });
            } catch (error) {
              console.error(error);
            }
          }}
        >
          결제하기</PaymentBtn>
      </OrderContainer>
      
    </PageContainer>
  );
}
