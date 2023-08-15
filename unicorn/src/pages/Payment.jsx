import React from 'react';
import Header from '../components/Header';
import PaySelect from '../components/PaySelect';
import OrderDetails from '../components/OrderDetails';
import { PageContainer } from '../styled-components/payment';


function Payment(props) {
    return (
        <PageContainer>
            <Header title="결제"/>
            <PaySelect/>
            <OrderDetails/>
        </PageContainer>
    );
}

export default Payment;