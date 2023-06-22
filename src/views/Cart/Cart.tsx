import React from "react";
import styled from "styled-components";
import Wrapper from "../../components/Wrapper";
import Input from "../../components/inputs/Input";
import { Radio } from "antd";
import DeliveryInfo from "./DeliveryInfo";
import { useQuery } from "@apollo/client";
import { cart } from "../../utils/GlobalStorage";
import CartProduct from "./CartProduct";

const StyledWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: row;
  margin-top: 24px;
  margin-bottom: 48px;
  gap: 32px;
`;

const Title = styled.h4`
  font-size: ${(props) => props.theme.fontmd};
  font-weight: 600;
  color: ${(props) => props.theme.text};
`;

const OrderContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 12px;
`;

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 12px;
  column-gap: 32px;
  height: 100%;
`;

const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const ConfirmInfo = styled.div`
  margin: 12px;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  h4 {
    font-size: ${(props) => props.theme.fontsm};
    font-weight: 400;
    color: #a3a7ac;
  }
  s span {
    font-size: ${(props) => props.theme.fontsm};
    font-weight: 500;
    color: ${(props) => props.theme.secondary};
  }
  button {
    height: 40px;
    width: 100%;
    margin-top: 12px;
    background-color: ${(props) => props.theme.secondary};
  }
`;

const Cart = () => {
  const cartData: { id: String; count: number }[] = cart(
    (state: any) => state.data
  );

  return (
    <StyledWrapper>
      <DeliveryInfo />
      <OrderContainer>
        <Title>Order Summary</Title>
        <SummaryContainer>
          <CartContainer>
            {cartData.map((el, index) => (
              <CartProduct {...el} key={index} />
            ))}
          </CartContainer>
          <ConfirmInfo>
            <div>
              <h4>Subtotal</h4>
              <span>$1250.32</span>
            </div>
            <div
              style={{
                paddingBottom: 12,
                borderBottom: "1px solid rgba(217, 217, 217, 0.4)",
              }}
            >
              <h4>Shipping</h4>
              <span>--</span>
            </div>
            <div style={{ paddingTop: 12 }}>
              <h4>Total (USD)</h4>
              <span>$7259.32</span>
            </div>
            <div>
              <button>Confirm Order</button>
            </div>
          </ConfirmInfo>
        </SummaryContainer>
      </OrderContainer>
    </StyledWrapper>
  );
};

export default Cart;
