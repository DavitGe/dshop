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
  margin-top: 64px;
  margin-bottom: 32px;
  gap: 32px;
`;

const DeliveryContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  width: 578px;
  border-radius: 8px;
  padding: 12px;
  column-gap: 32px;
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
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 8px;
  padding: 12px;
  column-gap: 32px;
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
        <CartContainer>
          {cartData.map((el, index) => (
            <CartProduct {...el} key={index} />
          ))}
        </CartContainer>
      </OrderContainer>
    </StyledWrapper>
  );
};

export default Cart;
